import { BaseFarcasterUser } from "../user";
import { DefaultToken } from "../tokens";
import { FarcasterChannel } from "../farcaster";

type ParsedCastText = {
  text: string;
  usersMentioned: BaseFarcasterUser[];
  tokensMentioned: DefaultToken[];
  channelsMentioned: FarcasterChannel[];
};

export type { ParsedCastText };
