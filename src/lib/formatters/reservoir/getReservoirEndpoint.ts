import { ReservoirApiEndpoints } from "@/types/internal/props";

const getReservoirEndpointPath = (reqType: ReservoirApiEndpoints): string => {
  switch (reqType) {
    case "tokensFloor":
      return "/tokens/floor/v1";
    case "userActivity":
      return "/users/activity/v6";
    case "trendingMints":
      return "/trending-mints/v1";
    case "collections":
      return "/collections/v7";
    case "tokenFullMetadata":
      return "/tokens/v7";
    default:
      throw new Error(`Unsupported request type: ${reqType}`);
  }
};
export { getReservoirEndpointPath };
