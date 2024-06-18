type CastCreationMentionOption<T> = {
  trigger: "@" | "$" | "/";
  data: T[];
};

export type { CastCreationMentionOption };
