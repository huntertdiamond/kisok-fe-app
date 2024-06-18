interface ReservoirNftFullMetadata {
  tokens: ReservoirTokenElement[];
  continuation: string;
}

interface ReservoirTokenElement {
  token: ReservoirTokenWithMetadata;
  market: Market;
  updatedAt: Date;
}

interface Market {
  floorAsk: FloorAsk;
}

interface FloorAsk {
  id: string | null;
  price: Price | null;
  maker: string | null;
  validFrom: number | null;
  validUntil: number | null;
  source: Source | null;
}

interface Price {
  currency: Currency;
  amount: Amount;
}

interface Amount {
  raw: string;
  decimal: number;
  usd: number;
  native: number;
}

interface Currency {
  contract: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
}

interface Source {
  id: `0x${string}`;
  domain: string;
  name: string;
  icon: string;
  url: string;
}

interface ReservoirTokenWithMetadata {
  chainId: number;
  contract: `0x${string}`;
  tokenId: string;
  name: string;
  description: string;
  image: string;
  imageSmall: string;
  imageLarge: string;
  metadata: Metadata;
  media: null;
  kind: string;
  isFlagged: boolean;
  isSpam: boolean;
  isNsfw: boolean;
  metadataDisabled: boolean;
  lastFlagUpdate: Date;
  lastFlagChange: null;
  supply: string;
  remainingSupply: string;
  rarity: number;
  rarityRank: number;
  collection: Collection;
  owner: string;
  mintedAt: Date;
  createdAt: Date;
  decimals: null;
  mintStages: any[];
}

interface Collection {
  id: `0x${string}`;
  name: string;
  image: string;
  slug: string;
  symbol: string;
  creator: `0x${string}`;
  tokenCount: number;
  metadataDisabled: boolean;
  floorAskPrice: Price;
}

interface Metadata {
  imageOriginal: string;
  tokenURI: string;
}

export type {
  ReservoirNftFullMetadata,
  ReservoirTokenWithMetadata,
  ReservoirTokenElement,
};
