import { VStack, HStack, Typography } from "@/components/elements";

import { staticLightChannelCast } from "@/lib/staticData";
import { placeholderBaseTokens } from "@/lib/staticData/baseTokens";

import { DefaultToken, TippingFlowPositions } from "@/types/internal";
import { TipTokenRow } from "./tipTokenRow";
import { useState } from "react";
import { SelectAmountTipView } from "./selectAmountTipView";

function TipModalIndex({}: {}) {
  const [positionInFlow, setPositionInFlow] = useState<TippingFlowPositions>(
    TippingFlowPositions.SelectAToken
  );
  const [selectedToken, setSelectedToken] = useState<DefaultToken | null>(null);
  const [selectedTokenAmount, setSelectedTokenAmount] = useState<number>(0);
  const cast = staticLightChannelCast;

  const headingText = {
    selectAToken: `Tip ${cast.postedBy.displayName}`,
    selectAmount: "Confirm Tip Amount",
    pending: "Loading",
    confirmed: "Confirmed!",
    error: "Error",
  } as const;

  const handleSelectToken = (token: DefaultToken) => {
    setSelectedToken(token);
    setPositionInFlow(TippingFlowPositions.SelectAmount);
  };

  const confirmTipFn = () => {
    setPositionInFlow(TippingFlowPositions.Pending);
  };
  return (
    <VStack gap={2} horizontal="leading">
      <span className="px-4 pt-4 pb-1">
        <Typography variant="h1">{headingText[positionInFlow]}</Typography>
      </span>
      {positionInFlow === TippingFlowPositions.SelectAToken ? (
        <ul className="flex flex-col gap-0 w-full">
          {placeholderBaseTokens.map((token, index) => (
            <TipTokenRow
              token={token}
              index={index}
              balance={1000}
              key={token.address}
              onClick={() => handleSelectToken(token)}
              childClassName="group-hover:bg-neutral-100/80"
            />
          ))}
        </ul>
      ) : null}
      {positionInFlow === TippingFlowPositions.SelectAmount && selectedToken ? (
        <SelectAmountTipView
          token={selectedToken}
          selectedTokenAmount={selectedTokenAmount}
          setSelectedTokenAmount={setSelectedTokenAmount}
          confirmTipFn={confirmTipFn}
          cast={cast}
        />
      ) : null}

      <button
        onClick={() => setPositionInFlow(TippingFlowPositions.SelectAToken)}
      >
        RESET
      </button>
    </VStack>
  );
}

export { TipModalIndex };
