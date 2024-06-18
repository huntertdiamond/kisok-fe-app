import { NeynarUser } from "./type.defaultNeynarUser";

type NeynarUsernameQueryResponse = {
  result: Result;
};

type Result = {
  users: NeynarUser[];
  next: Next;
};

type Next = {
  cursor: string | null;
};

export type { NeynarUsernameQueryResponse };
