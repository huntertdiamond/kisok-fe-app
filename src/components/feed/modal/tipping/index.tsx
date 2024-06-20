import { VStack, HStack, Typography } from "@/components/elements";
import { TokenRow } from "@/components/misc/tokenRow";
import { useFeedActionContext } from "@/lib/providers";
import {
  placeholderCastWithMintFrame,
  placeholderCastWithQuote,
} from "@/lib/staticData";
import { placeholderBaseTokens } from "@/lib/staticData/baseTokens";
import { isFormattedFarcasterCast } from "@/lib/typeGuards";
import { TippingFlowPositions } from "@/types/internal";

function TipModalIndex({}: {}) {
  // const { setSelectedModalOption, selectedItemForModal } =
  //   useFeedActionContext();
  const positionInFlow = "selectAToken";
  const cast = placeholderCastWithMintFrame;

  const headingText = {
    selectAToken: `Tip ${cast.postedBy.displayName}`,
    selectAmount: "Confirm Tip Amount",
    pending: "Loading",
    confirmed: "Confirmed!",
    error: "Error",
  } as const;

  return (
    <VStack gap={2} padding={4} horizontal="leading">
      <Typography variant="h1">{headingText[positionInFlow]}</Typography>
      <ul className="flex flex-col gap-0 w-full">
        {placeholderBaseTokens.map((token, index) => (
          <TokenRow
            token={token}
            index={index}
            balance={100}
            key={token.address}
          />
        ))}
      </ul>
    </VStack>
  );
}

export { TipModalIndex };
