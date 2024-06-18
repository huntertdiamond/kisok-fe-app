type CreateCastMentionedUser = {
  id: number;
  username: string;
  displayValue: string;
  image: string;
};

type CreateCastMentionedUserWithParentIndex = CreateCastMentionedUser & {
  parentIndex: number;
};

export type { CreateCastMentionedUser, CreateCastMentionedUserWithParentIndex };
