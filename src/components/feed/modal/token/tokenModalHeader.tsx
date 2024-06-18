import { HStack, Typography, VStack } from "@/components/elements";
import { DefaultToken } from "@/types/internal/tokens";
import { ModalDragHandle } from "../shared";

import { TokenChainIconContainer } from "@/components/misc/tokenChainIconContainer";
function TokenModalHeader({ token }: { token: DefaultToken }) {
  return (
    <VStack horizontal="leading" vertical="top">
      <ModalDragHandle variant="unstyled" />
      <HStack horizontal="between" vertical="bottom" gap={1}>
        <VStack horizontal="leading" vertical="top" gap={1}>
          <TokenChainIconContainer
            chain={token.chainId}
            variant="twoXL"
            tokenImage={token.image}
          />

          <Typography variant="h1" className="text-3xl font-medium">
            {token.name}
          </Typography>
        </VStack>
        <VStack vertical="top" horizontal="trailing" className="w-min">
          <Typography variant="h2">${token.currentPrice}</Typography>
          <Typography variant="h3" secondary>
            {token.oneDayPriceChange}%
          </Typography>
        </VStack>
      </HStack>
    </VStack>
  );
}

export { TokenModalHeader };
