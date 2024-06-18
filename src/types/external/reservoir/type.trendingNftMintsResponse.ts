import { ReservoirCurrency } from "./type.userActivityResponse";

export interface ReservoirTrendingMintsResponse {
  mints: ReservoirTrendingMint[];
}

export interface ReservoirTrendingMint {
  id: string;
  image?: string;
  banner?: null | string;
  name: string;
  description?: null | string;
  isSpam: boolean;

  isMinting: boolean;
  onSaleCount: number;
  volumeChange: { [key: string]: number };
  collectionVolume: { [key: string]: number };
  tokenCount: number;
  ownerCount: number;
  sampleImages: Array<null | string>;
  mintType: MintType;
  mintPrice: null | string;
  maxSupply: number | null;
  mintStandard: MintStandard;
  createdAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  mintCount: number;
  sixHourCount: number;
  oneHourCount: number;
  mintVolume: number;
  openseaVerificationStatus: OpenseaVerificationStatus | null;
  magicedenVerificationStatus: null;
  mintStages: ReservoirMintStage[];
  floorAsk: FloorAsk;
}

export interface FloorAsk {
  id: null | string;
  sourceDomain?: ReservoirTrendingMintSourceDomains;
  price: ReservoirMintPrice | null;
}

export interface ReservoirMintPrice {
  currency: ReservoirCurrency;
  amount: ReservoirMintCurrencyAmount;
}

export interface ReservoirMintCurrencyAmount {
  raw: string;
  decimal: number;
  usd: number | null;
  native: number | null;
}

export enum ReservoirTrendingMintSourceDomains {
  ExplorerReservoirTools = "explorer.reservoir.tools",
  OpenseaIo = "opensea.io",
  ZoraCo = "zora.co",
}

export interface ReservoirMintStage {
  stage: Stage;
  kind: Kind;
  tokenId: null | string;
  price: ReservoirMintPrice | null;
  startTime: number | null;
  endTime: number | null;
  maxMintsPerWallet: number | null;
}

export enum Kind {
  Public = "public",
}

export enum Stage {
  Claim0 = "claim-0",
  PublicSale = "public-sale",
}

export enum MintStandard {
  Thirdweb = "thirdweb",
  Unknown = "unknown",
  Zora = "zora",
}

export enum MintType {
  Free = "free",
  Paid = "paid",
}

export enum OpenseaVerificationStatus {
  NotRequested = "not_requested",
}
