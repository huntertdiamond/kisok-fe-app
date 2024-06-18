import { ZoraTokensQueryResponse } from "@/types/external/zora";
import { ExpandedFarcasterProfile, FarcasterChannel } from "../farcaster";
import { InternalFarcasterCast, QuoteCast } from "../feed";
import { MirrorContentFormatted } from "@/types/external/mirror";
import { DefaultToken } from "../tokens";
import { BaseNft, ExtendedNft } from "../nft";

type OurApiResponseTypes =
  | InternalFarcasterCast[]
  | InternalFarcasterCast
  | FarcasterChannel
  | QuoteCast
  | ZoraTokensQueryResponse
  | MirrorContentFormatted
  | ExpandedFarcasterProfile
  | ExtendedNft
  | DefaultToken[]
  | BaseNft[];

export type { OurApiResponseTypes };
