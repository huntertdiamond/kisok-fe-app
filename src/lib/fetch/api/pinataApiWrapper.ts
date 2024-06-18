"server only";
import { PinataParentResponse, PinataReqType } from "@/types";
import axios from "axios";
async function queryPinataAPI<T extends PinataParentResponse>(
  reqType: PinataReqType,
  param: number | string
): Promise<T> {
  let url: string;

  const PINATA_JWT_TOKEN = process.env.PINATA_JWT_TOKEN;

  if (!PINATA_JWT_TOKEN) {
    throw new Error("JWT TOKEN is not set in the environment variables");
  }

  const cacheBuster = `cb=${new Date().getTime()}`;

  switch (reqType) {
    case PinataReqType.Feed:
      url = `https://api.pinata.cloud/v3/farcaster/casts?reverse=true&following=true&fid=${param}&pageSize=25&${cacheBuster}`;
      break;

    case PinataReqType.CastsByChannel:
      url = `https://api.pinata.cloud/v3/farcaster/casts?channel=${param}`;
      break;

    case PinataReqType.CastsByFid:
      url = `https://api.pinata.cloud/v3/farcaster/casts?fid=${param}`;
      break;

    case PinataReqType.SingleCast:
      url = `https://api.pinata.cloud/v3/farcaster/casts/${param}`;
      break;

    default:
      throw new Error("Invalid request type");
  }

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${PINATA_JWT_TOKEN}`,
    },
  });

  if (response.status !== 200) {
    throw new Error(
      `Error fetching data from Pinata API: ${response.statusText}`
    );
  }

  const data = response.data;

  return data as T;
}

export { queryPinataAPI };
