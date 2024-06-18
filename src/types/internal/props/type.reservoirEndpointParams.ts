interface ReservoirEndpointParams {
  tokensFloor?: {
    collection?: string;
    tokenName?: string;
    tokens?: string[];
    attributes?: string;
    source?: string;
    nativeSource?: string;
  };
  userActivity?: {
    users: string[];
    collection?: string[];
    excludeSpam?: boolean;
    excludeNsfw?: boolean;
    collectionsSetId?: string;
    contractsSetId?: string;
    community?: string;
  };
  trendingMints?: {
    period?: string;
    type?: string;
    limit?: number;
    normalizeRoyalties?: boolean;
    useNonFlaggedFloorAsk?: boolean;
  };
  collections?: {
    id?: string;
    slug?: string;
    collectionsSetId?: string;
    community?: string;
  };
  tokenFullMetadata?: {
    collection?: string;
    tokenName?: string;
    tokens?: string[];
    attributes?: string;
    source?: string;
    nativeSource?: string;
    sortBy: "floorAskPrice" | "tokenId" | "rarity" | "listedAt" | "updatedAt";
    sortDirection: "ASC" | "DESC";
  };
}
export type { ReservoirEndpointParams };
