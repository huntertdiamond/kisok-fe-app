import { NextResponse, NextRequest } from "next/server";

import { GraphQLClient } from "graphql-request";

import { readContract } from "viem/actions";

import { ChainIdOption } from "@/types/internal/chains";

import { zoraERC1155Abi } from "@/lib/constants";

import { queryReservoirAPI } from "@/lib/fetch/api";

import { zoraTokenQuery, nftCreatorAirstackQuery } from "@/lib/query";

import { ExtendedNft } from "@/types/internal/nft";

import { zeroAddress } from "viem";

import {
  airstackGraphQlCLient,
  returnViemClientForChainId,
} from "@/lib/configs";

import {
  AirstackNftCreatorResponse,
  AirstackSocial,
} from "@/types/external/airstack";

import {
  ZoraNftFromQuery,
  ZoraTokensQueryResponse,
} from "@/types/external/zora";

import {
  ReservoirNftFullMetadata,
  ReservoirTokenElement,
} from "@/types/external/reservoir";

const ZORA_API_URL = "https://api.zora.co/graphql";
const graphQLClient = new GraphQLClient(ZORA_API_URL);

/**
 * Handles GET requests to query Zora API based on zoraLink parameter.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} The response from the Zora API.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const chain = searchParams.get("chainId");
  const tokenAddress = searchParams.get("tokenAddress");
  const tokenId = searchParams.get("tokenId");

  if (!chain || !tokenAddress || !tokenId) {
    return new NextResponse(
      JSON.stringify("ERROR: Missing required parameters"),
      { status: 400 }
    );
  }

  try {
    const { formattedChain, formattedNetwork } = formatChainAndNetwork(chain);

    const selectedTokenFromZora = await queryZoraAPI(
      formattedNetwork,
      formattedChain,
      tokenAddress,
      tokenId
    );

    if (!selectedTokenFromZora) {
      return new NextResponse(JSON.stringify("ERROR: No token found in Zora"), {
        status: 501,
      });
    }

    const reservoirData = await queryReservoirAPIWrapper(tokenAddress, chain);

    const selectedReservoirToken = reservoirData.tokens.find(
      (token) => token.token.tokenId === tokenId
    );

    if (!selectedReservoirToken) {
      console.log("no reservoir token");
      return new NextResponse(
        JSON.stringify("ERROR: No token found in Reservoir"),
        { status: 502 }
      );
    }

    const viemClient = returnViemClientForChainId(
      parseInt(chain) as ChainIdOption
    );

    const contractCreator = await readContract(viemClient, {
      address: selectedReservoirToken.token.contract,
      abi: zoraERC1155Abi,
      functionName: "owner",
    });

    const creatorAirstackData = await queryAirstackAPI(contractCreator);

    let creator = null;

    if (
      creatorAirstackData.Socials.Social &&
      creatorAirstackData.Socials.Social.length > 0
    ) {
      creator = creatorAirstackData.Socials.Social[0];
    }

    const returningNft = buildExtendedNft(
      selectedTokenFromZora,
      selectedReservoirToken,
      creator,
      parseInt(chain) as ChainIdOption,
      contractCreator as `0x${string}`
    );

    return new NextResponse(JSON.stringify(returningNft), { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(JSON.stringify("ERROR: Internal Server Error"), {
      status: 500,
    });
  }
}

/**
 * Formats the chain and network based on the chain ID.
 *
 * @param {string} chain - The chain ID.
 * @returns {object} An object containing formattedChain and formattedNetwork.
 */
function formatChainAndNetwork(chain: string): {
  formattedChain: string;
  formattedNetwork: string;
} {
  let formattedChain = "BASE_MAINNET";
  let formattedNetwork = "BASE";

  switch (chain) {
    case "7777777":
      formattedNetwork = "ZORA";
      formattedChain = "ZORA_MAINNET";
      break;
    case "8453":
      formattedNetwork = "BASE";
      formattedChain = "BASE_MAINNET";
      break;
    default:
      formattedNetwork = "BASE";
      formattedChain = "BASE_MAINNET";
      break;
  }

  return { formattedChain, formattedNetwork };
}

/**
 * Queries the Zora API.
 *
 * @param {string} formattedNetwork - The formatted network name.
 * @param {string} formattedChain - The formatted chain name.
 * @param {string} tokenAddress - The token address.
 * @returns {Promise<ZoraTokensQueryResponse>} The response from the Zora API.
 */
async function queryZoraAPI(
  formattedNetwork: string,
  formattedChain: string,
  tokenAddress: string,
  tokenId: string
): Promise<ZoraNftFromQuery> {
  const query = zoraTokenQuery;

  const variables = {
    network: { network: formattedNetwork, chain: formattedChain },
    collectionAddresses: [tokenAddress],
  };

  const data = await graphQLClient.request<ZoraTokensQueryResponse>(
    query,
    variables
  );

  let selectedTokenFromZora = data.tokens.nodes.find(
    (token) => token.token.tokenId === tokenId
  );

  if (!selectedTokenFromZora) {
    selectedTokenFromZora = data.tokens.nodes[0];
  }
  return selectedTokenFromZora;
}

/**
 * Queries the Reservoir API.
 *
 * @param {string} tokenAddress - The token address.
 * @param {string} chain - The chain ID.
 * @returns {Promise<any>} The response from the Reservoir API.
 */
async function queryReservoirAPIWrapper(
  tokenAddress: string,
  chain: string
): Promise<ReservoirNftFullMetadata> {
  const chainId = parseInt(chain) as ChainIdOption;
  return await queryReservoirAPI<"tokenFullMetadata">(
    "tokenFullMetadata",
    { collection: tokenAddress, sortBy: "updatedAt", sortDirection: "DESC" },
    chainId
  );
}

/**
 * Queries the Airstack API.
 *
 * @param {string} contractCreator - The contract creator address.
 * @returns {Promise<AirstackNftCreatorResponse>} The response from the Airstack API.
 */
async function queryAirstackAPI(
  contractCreator: string
): Promise<AirstackNftCreatorResponse> {
  const variables = { _eq: contractCreator as `0x${string}` };

  const query = nftCreatorAirstackQuery;

  return await airstackGraphQlCLient.request<AirstackNftCreatorResponse>(
    query,
    variables
  );
}

/**
 * Builds the ExtendedNft object.
 *
 * @param {any} selectedTokenFromZora - The selected token from Zora.
 * @param {any} selectedReservoirToken - The selected token from Reservoir.
 * @param {AirstackNftCreatorResponse} creatorAirstackData - The Airstack creator data.
 * @param {string} chain - The chain ID.
 * @param {string} contractCreator - The contract creator address.
 * @returns {ExtendedNft} The ExtendedNft object.
 */
function buildExtendedNft(
  selectedTokenFromZora: ZoraNftFromQuery,
  selectedReservoirToken: ReservoirTokenElement,
  creatorAirstackData: AirstackSocial | null,
  chain: ChainIdOption,
  contractCreator: `0x${string}`
): ExtendedNft {
  const profile = creatorAirstackData;

  const token = {
    placeholderId: crypto.randomUUID(),
    description: selectedReservoirToken.token.description,
    contractAddress: selectedReservoirToken.token.contract,
    acquiredDate: new Date(),
    chain: chain,
    priceInUsd: 0,
    priceInToken: 0,
    tokenForPayment: zeroAddress,
    tokenMedia: selectedReservoirToken.token.image,
    nftCollectionName: selectedReservoirToken.token.collection.name,
    creatorAddress: contractCreator as `0x${string}`,
    tokenName: selectedTokenFromZora.token.name,
    platform: "zora",
    collection: {
      name: selectedReservoirToken.token.collection.name,
      image: selectedReservoirToken.token.collection.image,
      symbol: selectedReservoirToken.token.collection.symbol,
      tokenCount: selectedReservoirToken.token.collection.tokenCount,
    },
    supply: 1,
  };

  if (!profile) {
    return {
      ...token,
      creator: {
        displayName: contractCreator,
        username: contractCreator,
        pfpUrl:
          "https://zora.co/api/avatar/0x68ae5140826F2962849B8ab1dE934ee0CF6c7435?size=32",
      },
    };
  }

  const username = (profile.fnames && profile.fnames[0]) || contractCreator;
  return {
    ...token,
    creator: {
      farcasterId: parseInt(profile.profileTokenId),
      username: username,
      displayName: profile.profileName,
      bio: profile.profileBio,
      pfpUrl: profile.profileImage,
      isPowerUser: profile.isFarcasterPowerUser,
      isKioskUser: false,
      preferredEthereumAddress: profile.userRecoveryAddress as `0x${string}`,
      custodyAddress: contractCreator as `0x${string}`,
      noOfFollowers: profile.followerCount,
      noOfFollowing: profile.followingCount,
    },
  };
}
