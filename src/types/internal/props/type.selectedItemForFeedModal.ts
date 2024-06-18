import { FarcasterChannel } from "../farcaster";
import { InternalFarcasterCast } from "../feed";
import { DefaultToken } from "../tokens";
import { BaseFarcasterUser } from "../user";

type SelectedItemForFeedModal =
  | DefaultToken
  | FarcasterChannel
  | BaseFarcasterUser
  | InternalFarcasterCast
  | null;

export type { SelectedItemForFeedModal };
