type MentionedRichTextObject = {
  index: number;
  value: string;
};

type RichTextObjects = {
  text: string;
  links: MentionedRichTextObject[];
  mentionedChannels: MentionedRichTextObject[];
  mentionedUsers: MentionedRichTextObject[];
  mentionedTokens: MentionedRichTextObject[];
};

export type { RichTextObjects, MentionedRichTextObject };
