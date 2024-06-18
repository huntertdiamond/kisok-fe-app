import axios from "axios";
import { useCallback, useRef } from "react";

import { APP_URL } from "../constants/environment";

import { FarcasterProtocolMessage } from "@/types/external/protocol";
import {
  CreateCastMentionedChannel,
  CreateCastMentionedLink,
  CreateCastMentionedUser,
  CreateCastMentionedUserWithParentIndex,
} from "@/types/internal/mention";
import { NeynarUsernameQueryResponse } from "@/types/external/neynar";
import { fetchOurNextApi } from "../fetch/api";

function useCreateCast() {
  function debounce<T extends (...args: any[]) => Promise<any>>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timeout: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
      if (timeout) clearTimeout(timeout);
      return new Promise((resolve) => {
        timeout = setTimeout(async () => {
          timeout = null;
          const result = await func(...args);
          resolve(result);
        }, wait);
      });
    };
  }

  const getQueriedUser = async (
    query: string
  ): Promise<CreateCastMentionedUser[]> => {
    if (query.length < 2) return [];

    try {
      const fetchedUsers = await fetchOurNextApi("fname-match", {
        username: query,
        viewingFid: 3,
      });

      const newUsers = fetchedUsers.map((user) => {
        return {
          id: user.fid,
          username: user.username,
          displayValue: user.username,
          image: user.pfp_url,
        };
      });

      return newUsers;
    } catch (error) {
      return [];
    }
  };

  const debouncedGetMentionedUser = useRef(
    debounce(getQueriedUser, 500)
  ).current;

  const buildProtocolMessage = (
    textValue: string,
    mentionedUsers: CreateCastMentionedUserWithParentIndex[],
    links: CreateCastMentionedLink[],
    parentChannel: CreateCastMentionedChannel | null
  ): FarcasterProtocolMessage => {
    let mentions: number[] = [];
    let mentionPositions: number[] = [];
    let cleanedText = textValue;

    // Sort mentions by index to avoid interference with other mentions and links
    mentionedUsers.sort((a, b) => a.parentIndex - b.parentIndex);
    links.sort((a, b) => a.parentIndex - b.parentIndex);

    let adjustment = 0;

    // Process mentioned users and remove them from the text
    mentionedUsers.forEach((user) => {
      mentions.push(user.id);
      mentionPositions.push(user.parentIndex - adjustment);
      const mentionStart = user.parentIndex - adjustment;
      const mentionEnd = mentionStart + user.displayValue.length + 2; // +2 for "@ "

      cleanedText =
        cleanedText.slice(0, mentionStart) + cleanedText.slice(mentionEnd);

      adjustment += user.displayValue.length + 2;
    });

    // Insert the links into the text at their respective positions
    links.forEach((link) => {
      const linkStart = link.parentIndex - adjustment;
      cleanedText =
        cleanedText.slice(0, linkStart) +
        link.value +
        cleanedText.slice(linkStart);

      adjustment -= link.value.length;
    });

    // Replace all line breaks with \n
    cleanedText = cleanedText.replace(/(\r\n|\r|\n)/g, "\\n");
    cleanedText = cleanedText.replace(/(@|\/|\$) /g, "$1");
    let protocolMessage: FarcasterProtocolMessage;

    protocolMessage = {
      mentions,
      text: cleanedText,
      mentionPositions,
      embeds: [],
    };

    if (parentChannel) {
      protocolMessage.parentUrl = parentChannel.parent_url;
    }

    return protocolMessage;
  };

  const calculateTextLength = useCallback((text: string) => {
    if (!text) return 0;
    const nonBreakingSpace = String.fromCharCode(160);
    // Remove non-breaking spaces
    const strippedText = text.replace(new RegExp(nonBreakingSpace, "g"), "");

    // Calculate the length of the encoded text
    const totalLengthEncoded = new TextEncoder().encode(strippedText).length;
    return totalLengthEncoded;
  }, []);

  // TO DO: REWRITE THIS SO THAT WE DON"T REPEAT SEARCHES
  const handleTextChange = (
    queriedUsers: CreateCastMentionedUser[],
    text: string
  ) => {
    const nonBreakingSpace = String.fromCharCode(160);
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const mentionRegex = new RegExp(`@${nonBreakingSpace}([\\w.]+)`, "g");

    const newMentionedLinks: CreateCastMentionedLink[] = [];
    const newMentionedUsers: CreateCastMentionedUserWithParentIndex[] = [];

    let cleanedText = text;
    let match: RegExpExecArray | null;

    // Extract URLs and mentions in a single pass
    while ((match = urlRegex.exec(text)) !== null) {
      newMentionedLinks.push({ parentIndex: match.index, value: match[0] });
      cleanedText = cleanedText.replace(match[0], "");
    }

    while ((match = mentionRegex.exec(text)) !== null) {
      const strippedMatch = match[1];
      queriedUsers.forEach((option) => {
        if (
          option.displayValue.toLowerCase() === strippedMatch.toLowerCase() &&
          match &&
          match.index
        ) {
          newMentionedUsers.push({ ...option, parentIndex: match.index });
        }
      });
    }

    return {
      cleanedText: cleanedText,
      mentions: newMentionedUsers,
      links: newMentionedLinks,
    };
  };

  return {
    getQueriedUser: debouncedGetMentionedUser,
    calculateTextLength,
    buildProtocolMessage,
    handleTextChange,
  };
}

export { useCreateCast };
