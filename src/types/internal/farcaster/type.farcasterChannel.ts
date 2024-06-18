import { InternalColors } from "../ui";
// TO DO: HANDLE NEW DECENTRALIZED CHANNEL SPEC...

type FarcasterChannel = {
  channelId: string;
  channelName: string;
  channelDescription: string;
  chanelNorms: string;
  channelPfp: string;
  channelBanner: string;
  followerCount: number;
  hostFids: number[];
  ownerFid: number;
  createdAt: number;
  internalColor?: InternalColors;
  token?: ChannelTokenFromFarTerminal;
};
export interface ChannelTokenFromFarTerminal {
  _id: string;
  id: string;
  channel: ChannelFromFarTerminal;
  name: string;
  description: string;
  symbol: string;
  creator: CreatorOfChannelToken;
  deployment: {
    status: string;
  };
  status: string;
  stats: ChannelTokenStats;
  is_euro_2024?: boolean;
}

export interface ChannelFromFarTerminal {
  id: string;
  image_url: string;
  name: string;
  description: string;
  follower_count: number;
  lead_fid: number;
}

export interface CreatorOfChannelToken {
  fid: number;
  username: string;
  pfp: string;
  address: string;
  follower_count: number;
}

export interface ChannelTokenDeployment {
  id: string;
  status: string;
  tokenAddress: string;
  transactionHash: string;
  metalBuildUrl: string;
  uniswapUrl: string;
}

export interface ChannelTokenStats {
  base_token_price_usd: string;
  base_token_price_native_currency: string;
  quote_token_price_usd: string;
  quote_token_price_native_currency: string;
  base_token_price_quote_token: string;
  quote_token_price_base_token: string;
  address: string;
  name: string;
  pool_created_at: string;
  token_price_usd: string;
  fdv_usd: string;
  market_cap_usd: null;
  price_change_percentage: PriceChangePercentage;
  transactions: Transactions;
  volume_usd: string;
  reserve_in_usd: string;
  total_reserve_in_usd: string;
  holders_count: number;
}

export interface PriceChangePercentage {
  m5: string;
  h1: string;
  h6: string;
  h24: string;
}

export interface Transactions {
  m5: H1;
  m15: H1;
  m30: H1;
  h1: H1;
  h24: H1;
}

export interface H1 {
  buys: number;
  sells: number;
  buyers: number;
  sellers: number;
}

export type { FarcasterChannel };
