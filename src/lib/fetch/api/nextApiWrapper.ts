import axios from "axios";
import {
  OurNextApiEndpoints,
  NextApiResponseMap,
  NextApiEndpointParams,
} from "@/types";
import { APP_URL } from "../../constants/environment";

async function fetchOurNextApi<T extends OurNextApiEndpoints>(
  reqType: T,
  params: NextApiEndpointParams[T]
): Promise<NextApiResponseMap[T]> {
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();

  const fullUrl = `${APP_URL}/api/${reqType}?${queryParams}`;

  try {
    const response = await axios.get<NextApiResponseMap[T]>(fullUrl);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching ${reqType}`);
  }
}

export { fetchOurNextApi };
