import React from "react";
import { InlineChip, LinkChip } from "@/components/elements/chips";
import { usePressInlineChip } from "@/lib/hooks";
import { InternalFarcasterCast } from "@/types/internal/feed";
import { SelectedItemForFeedModal } from "@/types/internal/props";
import { parseRichText } from "@/lib/formatters/cast";
import {
  isBaseTokenObject,
  isFarcasterChannel,
  isBaseFarcasterUser,
} from "@/lib/typeGuards";

import { cn } from "@/lib/tailwind";

/**
 * Renders the body text of a cast with special formatting for user mentions, channels, and tokens.
 *
 * @param  props.cast - The cast object.
 * @returns The formatted cast text.
 */
function CastBodyText({
  cast,
  smallVariant = false,
}: {
  cast: InternalFarcasterCast;
  smallVariant?: boolean;
}) {
  const { pressInlineChip } = usePressInlineChip();

  const parsedText = parseRichText(cast.text);

  const getMatchValue = (
    variant: "user" | "channel" | "token" | "link",
    selectedItem: SelectedItemForFeedModal
  ) => {
    if (variant === "user" && isBaseFarcasterUser(selectedItem)) {
      return selectedItem.username;
    }
    if (variant === "token" && isBaseTokenObject(selectedItem)) {
      return selectedItem.ticker;
    }
    if (variant === "channel" && isFarcasterChannel(selectedItem)) {
      return selectedItem.channelId;
    }
    if (variant === "link") {
      return selectedItem;
    }
  };

  const pushTextAndMatch = (
    match: { index: number; value: string },
    variant: "user" | "channel" | "token" | "link",
    selectedItem: SelectedItemForFeedModal,
    parts: (string | JSX.Element)[],
    lastIndex: number,
    text: string
  ) => {
    const matchValue = getMatchValue(variant, selectedItem);
    if (!matchValue) return lastIndex;

    if (lastIndex < match.index) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (variant === "link") {
      parts.push(
        <LinkChip
          key={match.index}
          size="small"
          linkType="external"
          link={match.value}
          className=""
          variant="ghost"
        >
          {match.value}
        </LinkChip>
      );
    } else {
      parts.push(
        <InlineChip
          key={match.index}
          variant={variant}
          textToDisplay={match.value}
          //  TODO: REWRITE THE PRESS INLINECHIP HOOK SO THAT WE ARE USING
          //  SELECTED ITEMS INSTEAD OF INLINECHIP
          //@ts-ignore
          onClick={() => pressInlineChip(variant, selectedItem)}
        />
      );
    }

    return match.index + match.value.length;
  };

  const formatText = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    const allMatches = [
      ...parsedText.mentionedUsers.map((user) => ({
        index: user.index,
        value: user.value,
        variant: "user",
        selectedItem: cast.mentionedUsers.find(
          (u) => `@${u.username}` === user.value
        ),
      })),
      ...parsedText.mentionedChannels.map((channel) => ({
        index: channel.index,
        value: channel.value,
        variant: "channel",
        selectedItem:
          Array.isArray(cast.mentionedChannels) &&
          cast.mentionedChannels.length > 0
            ? cast.mentionedChannels.find(
                (c) => `/${c.channelId}` === channel.value
              )
            : undefined,
      })),
      ...parsedText.mentionedTokens.map((token) => ({
        index: token.index,
        value: token.value,
        variant: "token",
        selectedItem:
          Array.isArray(cast.mentionedTokens) && cast.mentionedTokens.length > 0
            ? cast.mentionedTokens.find(
                (t) =>
                  `$${t.ticker.toLowerCase()}` === token.value.toLowerCase()
              )
            : undefined,
      })),
    ];

    allMatches.sort((a, b) => a.index - b.index);

    allMatches.forEach((match) => {
      if (match.selectedItem) {
        lastIndex = pushTextAndMatch(
          match,
          match.variant as "user" | "channel" | "token",
          match.selectedItem,
          parts,
          lastIndex,
          text
        );
      }
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const formattedText = formatText(cast.text);

  const renderFormattedText = formattedText.flatMap((part, index) => {
    if (typeof part === "string") {
      const lines = part.split("\n");
      return lines.flatMap((line, lineIndex) =>
        lineIndex < lines.length - 1
          ? [line, <br key={`${index}-${lineIndex}`} />]
          : [line]
      );
    }
    return [part];
  });

  return (
    <div
      className={cn(
        "text-[16px] w-full overflow-hidden",
        smallVariant && "line-clamp-2"
      )}
    >
      {renderFormattedText.map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}
    </div>
  );
}

export { CastBodyText };
