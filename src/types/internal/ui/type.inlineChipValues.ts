import { FarcasterChannel } from "../farcaster";

import { DefaultToken } from "../tokens";
import { BaseFarcasterUser } from "../user";

type InlineChipValues = {
  token: DefaultToken;
  channel: FarcasterChannel;
  user: BaseFarcasterUser;
};

export type { InlineChipValues };
