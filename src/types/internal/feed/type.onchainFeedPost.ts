import { DefaultToken } from "../tokens";
import { BaseFeedPost } from "./type.baseFeedPost";
import { PlatformOptions } from "./type.platformOptions";

type OnchainFeedPost = BaseFeedPost & {
  platform: PlatformOptions.Onchain;
  address: `0x${string}`;
  transactionHash: `0x${string}`;
  action: OnchainActions;
  transactionData: SwapPostData | MintPostData | PayPostData;
};

type SwapPostData = {
  usdValueIn: number;
  usdValueOut: number;
  tokenIn: DefaultToken;
  tokenOut: DefaultToken;
  tokenInAmt: number;
  tokenOutAmt: number;
};

type MintPostData = {
  nftName: string;
  nftDescription: string;
  mintPriceUsd: number;
  nftMedia: string;
  collectionName: string;
  creatorName: string;
  nftTraits: NftTraits[];
};

type NftTraits = {
  trait_type: string;
  value: string;
};
type PayPostData = {
  usdTransferred: number;
  transferredTo: `0x${string}`;
};
enum OnchainActions {
  Swap,
  Mint,
  Pay,
}

export { OnchainActions };
export type { OnchainFeedPost, SwapPostData, MintPostData, PayPostData };
