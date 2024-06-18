import {
  ReservoirNftCollectionsResponse,
  ReservoirNftFloorResponse,
  ReservoirNftFullMetadata,
  ReservoirTrendingMintsResponse,
  ReservoirUserActivityResponse,
} from "@/types/external/reservoir";

type ReservoirApiResponseMap = {
  tokensFloor: ReservoirNftFloorResponse;
  userActivity: ReservoirUserActivityResponse;
  trendingMints: ReservoirTrendingMintsResponse;
  collections: ReservoirNftCollectionsResponse;
  tokenFullMetadata: ReservoirNftFullMetadata;
};
export type { ReservoirApiResponseMap };
