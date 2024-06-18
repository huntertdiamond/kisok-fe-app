import { useQuery } from "@tanstack/react-query";
import { useFeedActionContext, useFeedModalContext } from "@/lib/providers";
import { MintModalProps } from "@/types/internal/props";
import { VStack } from "@/components/elements";
import { MintModalHeader } from "./mintModalHeader";
import { MintModalBody } from "./mintModalBody";

import { fetchOurNextApi } from "@/lib/fetch/api";
import { MintSkeleton } from "@/components/elements/loading";
import { ExtendedNft } from "@/types/internal/nft";

import { PrimaryButton } from "@/components/elements/buttons/primaryButton";

function MintModalIndex({
  chainId,
  tokenAddress,
  tokenId,
  platform,
}: MintModalProps) {
  const { userFrameInteraction } = useFeedActionContext();
  const { modalHeight } = useFeedModalContext();
  const {
    data: nftData,
    isLoading,
    error,
  } = useQuery<ExtendedNft>({
    queryKey: ["nftData", tokenAddress, tokenId, chainId],
    queryFn: async () => {
      const responseData = await fetchOurNextApi("zora-data", {
        chainId,
        tokenId,
        tokenAddress,
      });

      return responseData;
    },
  });

  if (isLoading) return <MintSkeleton />;

  if (!userFrameInteraction || error) return <MintSkeleton />;

  if (!nftData) return <MintSkeleton />;

  return (
    <VStack padding={4} gap={2}>
      <MintModalHeader token={nftData} tokenAddress={tokenAddress} />
      {modalHeight === "full" ? <MintModalBody token={nftData} /> : null}
      <PrimaryButton variant="mint" icon={true} className="mb-4">
        Mint
      </PrimaryButton>
    </VStack>
  );
}

export { MintModalIndex };
