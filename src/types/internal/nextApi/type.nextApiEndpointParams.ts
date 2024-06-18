import { ChainIdOption } from "../chains";

type NextApiEndpointParams = {
  "farcaster-channel": {
    channelId: string;
  };
  feed: {
    fid: string;
  };
  "fname-match": {
    username: string;
    viewingFid: number;
  };
  opengraph: {
    url: string;
  };
  "owned-nfts": {
    userAddress: string;
  };
  profile: {
    viewingFid: number;
    fidBeingViewed: number;
  };
  "single-cast": {
    hash: string;
  };
  "tokens-by-ticker": {
    tickers: string;
  };
  "mirror-content": {
    mirrorContentDigest: string;
  };
  "zora-data": {
    chainId: ChainIdOption;
    tokenId: string;
    tokenAddress: string;
  };
};

export type { NextApiEndpointParams };
