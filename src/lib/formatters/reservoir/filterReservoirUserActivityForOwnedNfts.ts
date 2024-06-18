import { ReservoirActivityWithChain } from "@/types/external/reservoir/type.userActivityResponse";
import { BaseNft } from "@/types/internal/nft";
import { zeroAddress } from "viem";

/**
 * Filters Reservoir user activity to format owned NFTs.
 *
 * @param tokens - Array of user activities from Reservoir API.
 * @param userAddress - The user's address to filter activities for.
 * @returns Array of formatted NFTs.
 */
function filterReservoirUserActivityForOwnedNfts(
  tokens: ReservoirActivityWithChain[],
  userAddress: `0x${string}`
): BaseNft[] {
  const formattedNfts: BaseNft[] = [];

  tokens.forEach((activity) => {
    if (activity.type === "ask") return;

    const isRecipient =
      activity.toAddress?.toLowerCase() === userAddress.toLowerCase();
    if (!isRecipient) return;

    const commonFormattedData = {
      placeholderId: crypto.randomUUID(),
      contractAddress: activity.contract as `0x${string}`,
      chain: activity.chain,
      priceInUsd: activity.price?.amount.usd || -1,
      priceInToken: activity.price?.amount.native || -1,
      tokenForPayment:
        (activity.price?.currency.contract as `0x${string}`) || zeroAddress,
      tokenMedia: activity.token.tokenImage || "",
      nftCollectionName: activity.collection.collectionName,
      creatorAddress: zeroAddress,
      tokenName: activity.token.tokenName || "",
      platform: activity.fillSource?.name || "other",
    };

    const acquiredDate = new Date(
      activity.type === "mint" ? activity.createdAt : activity.timestamp
    );

    formattedNfts.push({
      ...commonFormattedData,
      acquiredDate,
    });
  });

  return formattedNfts;
}

export { filterReservoirUserActivityForOwnedNfts };
