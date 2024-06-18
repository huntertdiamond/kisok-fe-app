import React from "react";

import { InlineChip } from "../elements/chips";
import { RichTextObjects } from "@/types/internal/feed";

function RichTextDisplay({
  text,
  richTextObject,
}: {
  text: string;
  richTextObject: RichTextObjects;
}) {
  // Helper function to get the inline elements for users, channels, and tokens
  const getInlineElements = (text: string, richTextObject: RichTextObjects) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    const allMatches = [
      ...richTextObject.mentionedUsers.map((user) => ({
        index: user.index,
        value: user.value,
        variant: "user",
      })),
      ...richTextObject.mentionedChannels.map((channel) => ({
        index: channel.index,
        value: channel.value,
        variant: "channel",
      })),
      ...richTextObject.mentionedTokens.map((token) => ({
        index: token.index,
        value: token.value,
        variant: "token",
      })),
    ];

    allMatches.sort((a, b) => a.index - b.index);

    allMatches.forEach((match) => {
      if (lastIndex < match.index) {
        parts.push(text.substring(lastIndex, match.index));
      }

      parts.push(
        // @ts-ignore
        <InlineChip variant={match.variant} textToDisplay={match.value} />
      );

      lastIndex = match.index + match.value.length;
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const formattedText = getInlineElements(text, richTextObject);

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
    <div className="text-[16px]">
      {renderFormattedText.map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}
    </div>
  );
}

export { RichTextDisplay };
