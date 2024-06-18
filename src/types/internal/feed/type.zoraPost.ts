import { PlatformOptions } from "./type.platformOptions";
import { ChainIdOption } from "../chains";
import { BaseFeedPost } from "./type.baseFeedPost";

type ZoraFeedPost = BaseFeedPost & {
  platform: PlatformOptions.Zora;
  postTitle: string;
  mintPriceUsd: number;
  mintCount: number;
  uniqueMintCount: number;
  enabledChains: ChainIdOption[];
  collectionName: string;
  postDescription: string;
  mediaType: "image" | "video" | "gif";
  media: string;
  tokenAddressForMint: `0x${string}`;
  tokenPriceForMint: number;
  tokenAddress: `0x${string}`;
  zoraUrl: string;
};

export type { ZoraFeedPost };
