import {
  ReservoirActivityWithChain,
  NeynarUser,
  MirrorContentFormatted,
} from "@/types/external";
import { ExpandedFarcasterProfile, FarcasterChannel } from "../farcaster";
import { InternalFarcasterCast, ParentPostObject } from "../feed";
import { OpenGraphParent } from "../opengraph";
import { DefaultToken } from "../tokens";
import { BaseNft, ExtendedNft } from "../nft";

type NextApiResponseMap = {
  "farcaster-channel": FarcasterChannel;
  feed: ParentPostObject[];
  "fname-match": NeynarUser[];
  opengraph: OpenGraphParent;
  "owned-nfts": BaseNft[];
  profile: ExpandedFarcasterProfile;
  "single-cast": InternalFarcasterCast;
  "tokens-by-ticker": DefaultToken[];
  "mirror-content": MirrorContentFormatted;
  "zora-data": ExtendedNft;
};

export type { NextApiResponseMap };
