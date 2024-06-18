import { InternalFarcasterCast } from "./type.farcasterFeedPost";
import { MirrorFeedPost } from "./type.mirrorPost";
import { OnchainFeedPost } from "./type.onchainFeedPost";
import { ZoraFeedPost } from "./type.zoraPost";

type ParentPostObject =
  | ZoraFeedPost
  | MirrorFeedPost
  | InternalFarcasterCast
  | OnchainFeedPost;

export type { ParentPostObject };
