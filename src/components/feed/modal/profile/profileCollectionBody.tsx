import React from "react";
import { Typography, VStack } from "@/components/elements";
import { useQuery } from "@tanstack/react-query";
import { fetchApiData } from "@/lib/fetch/api";
import { BaseNft } from "@/types/internal/nft";
import { CollctionSkeleton } from "@/components/elements/loading";

import { NftCard } from "@/components/elements/cards/nftCard";
function ProfileCollectionBody({
  userAddresses,
}: {
  userAddresses: `0x${string}`[];
}) {
  const {
    data: userCollectionData,
    isLoading: isUserCollectionLoading,
    error,
  } = useQuery({
    queryKey: ["userCollection", userAddresses],
    queryFn: () =>
      fetchApiData("owned-nfts", {
        userAddress: userAddresses[0],
      }),
  });
  if (error) return <div>Error</div>;
  if (userCollectionData?.length === 0) return <div>No NFTs</div>;
  return (
    <VStack horizontal="leading" vertical="top" gap={1}>
      {isUserCollectionLoading && !userCollectionData ? (
        <CollctionSkeleton />
      ) : null}
      {userCollectionData ? (
        <div>
          <Typography variant="body" className="text-kioskRed-400 my-1">
            I am not happy with this.. Definitely deserves more
          </Typography>
          <div className="grid grid-cols-2 gap-2">
            {userCollectionData.map((token) => (
              <NftCard key={token.placeholderId} token={token} />
            ))}
          </div>
        </div>
      ) : null}
    </VStack>
  );
}

export { ProfileCollectionBody };
