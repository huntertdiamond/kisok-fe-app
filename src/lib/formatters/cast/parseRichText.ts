import {
  RichTextObjects,
  MentionedRichTextObject,
} from "@/types/internal/feed";

import {
  userMentionRegex,
  channelRegex,
  tokenRegex,
  urlRegex,
} from "@/lib/constants/richTextRegex";

function parseRichText(text: string): RichTextObjects {
  const links: MentionedRichTextObject[] = [];
  const mentionedChannels: MentionedRichTextObject[] = [];
  const mentionedUsers: MentionedRichTextObject[] = [];
  const mentionedTokens: MentionedRichTextObject[] = [];

  const processMatches = (
    regex: RegExp,
    type: "links" | "channels" | "mentionedUsers" | "mentionedTokens"
  ) => {
    let match;
    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      const value = match[0];
      switch (type) {
        case "links":
          links.push({ index, value });
          break;

        case "channels":
          mentionedChannels.push({ index, value });
          break;

        case "mentionedUsers":
          mentionedUsers.push({ index, value });
          break;

        case "mentionedTokens":
          mentionedTokens.push({ index, value });
          break;
      }
    }
  };

  processMatches(userMentionRegex, "mentionedUsers");
  processMatches(channelRegex, "channels");
  processMatches(tokenRegex, "mentionedTokens");
  processMatches(urlRegex, "links");

  let textWithoutLinks = text;
  links.forEach((link) => {
    textWithoutLinks = textWithoutLinks.replace(link.value, "");
  });

  return {
    text: textWithoutLinks.trim(),
    links,
    mentionedChannels,
    mentionedUsers,
    mentionedTokens,
  };
}

export { parseRichText };
