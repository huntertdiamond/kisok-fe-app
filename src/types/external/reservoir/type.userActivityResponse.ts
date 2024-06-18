import { ChainIdOption } from "@/types/internal/chains";

type ReservoirUserActivityResponse = {
  activities: ReservoirActivity[];
  continuation: string;
};

type ReservoirActivity = {
  type: ReservoirActivityType;
  fromAddress: string;
  toAddress: `0x${string}` | null;
  price?: ReservoirTokenPrice;
  amount: number;
  timestamp: number;
  createdAt: Date;
  contract: string;
  token: ReservoirToken;
  collection: ReservoirActivityCollection;
  txHash: string;
  logIndex: number;
  batchIndex: number;
  comment?: null;
  fillSource?: ReservoirActivitySource;
  order?: ReservoirNftOrder;
  isAirdrop?: boolean;
};

type ReservoirActivityCollection = {
  collectionId: string;
  collectionName: string;
  collectionImage?: string;
  isSpam: boolean;
  isNsfw: boolean;
};

type ReservoirActivitySource = {
  domain: string;
  name: string;
  icon: string;
};

type ReservoirNftOrder = {
  id: string;
  side: string;
  source: ReservoirActivitySource;
  criteria: ReservoirActivityCriteria;
};

type ReservoirActivityCriteria = {
  kind: string;
  data: ReservoirActivityCriteriaData;
};

type ReservoirActivityCriteriaData = {
  collection: ReservoirTokenClass;
  token: ReservoirTokenClass;
};

type ReservoirTokenClass = {
  id?: string;
  name: null | string;
  image: null | string;
  isSpam: boolean;
  isNsfw: boolean;
  tokenId?: string;
};

type ReservoirTokenPrice = {
  currency: ReservoirCurrency;
  amount: ReservoirTokenAmount;
};

type ReservoirTokenAmount = {
  raw: string;
  decimal: number;
  usd: number;
  native: number;
};

type ReservoirCurrency = {
  contract: string;
  name: string;
  symbol: string;
  decimals: number;
};

type ReservoirToken = {
  tokenId: string;
  tokenName: null | string;
  tokenImage: null | string;
  tokenMedia: null;
  tokenRarityRank: number | null;
  tokenRarityScore: number | null;
  isSpam: boolean;
  isNsfw: boolean;
};

enum ReservoirActivityType {
  Mint = "mint",
  Sale = "sale",
  Transfer = "transfer",
  Ask = "ask",
}

type ReservoirActivityWithChain = ReservoirActivity & {
  chain: ChainIdOption;
};

export type {
  ReservoirUserActivityResponse,
  ReservoirActivity,
  ReservoirActivityWithChain,
  ReservoirCurrency,
};
