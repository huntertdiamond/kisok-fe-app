import { useFeedActionContext } from "@/lib/providers";
import { ChainIdOption } from "@/types/internal/chains";

import { MintModalIndex } from "./mint";

import { TxFrameIndex } from "./tx/txFrameIndex";

function FrameModal() {
  const { userFrameInteraction } = useFeedActionContext();

  const parseInteractionTarget = (target: string) => {
    const parts = target.split(":");

    return {
      chainId: parts[1] || "7777777",
      tokenAddress: parts[2] || "0x8f92f96b78f250695f66ec6242c80ff0ac3c259b",
      tokenId: parts[3] || "21",
    };
  };
  if (!userFrameInteraction) return null;
  if (!userFrameInteraction.button.target) return null;

  const { chainId, tokenAddress, tokenId } = parseInteractionTarget(
    userFrameInteraction.button.target
  );

  switch (userFrameInteraction.interactionType) {
    case "mint":
      return (
        <MintModalIndex
          tokenAddress={tokenAddress as `0x${string}`}
          tokenId={tokenId}
          chainId={parseInt(chainId) as ChainIdOption}
          platform="zora"
        />
      );
    case "tx":
      return <TxFrameIndex />;
    default:
      return null;
  }
}

export { FrameModal };
