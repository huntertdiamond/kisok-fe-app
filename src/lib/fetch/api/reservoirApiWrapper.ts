"server only";
import axios from "axios";
import {
  ReservoirApiResponseMap,
  ReservoirEndpointParams,
} from "@/types/internal/props";
import { ReservoirApiEndpoints } from "@/types/internal/props";
import {
  chainIdToReservoirEndpoint,
  getReservoirEndpointPath,
} from "../../formatters/reservoir";
import { ChainIdOption } from "@/types/internal/chains";

async function queryReservoirAPI<T extends ReservoirApiEndpoints>(
  reqType: T,
  params: ReservoirEndpointParams[T],
  chain: ChainIdOption
): Promise<ReservoirApiResponseMap[T]> {
  const baseUrl = chainIdToReservoirEndpoint(chain);
  const endpointPath = getReservoirEndpointPath(reqType);

  const reservoirApiKey = process.env.RESERVOIR_API_KEY;

  if (!reservoirApiKey) {
    throw new Error("NO API KEY FOR RESERVOIR");
  }

  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();

  const fullUrl = `${baseUrl}${endpointPath}?${queryParams}`;

  const response = await axios.get<ReservoirApiResponseMap[T]>(fullUrl, {
    headers: {
      "x-api-key": reservoirApiKey,
    },
  });

  const data = response.data;
  return data as ReservoirApiResponseMap[T];
}

export { queryReservoirAPI };
