import { DefaultToken } from "@/types";

import { AnimatedListItemWrapper } from "@/components/misc/animatedListItemWrapper";

import { HStack, VStack, Typography } from "@/components/elements";
import { formatNumberWithCommas } from "@/lib/formatters/numbers";

import { TokenChainIconContainer } from "@/components/misc/tokenChainIconContainer";

function TokenRow({
  token,
  index,
  balance,
}: {
  token: DefaultToken;
  index: number;
  balance: number;
}) {
  return (
    <AnimatedListItemWrapper index={index}>
      <HStack gap={2} vertical="center" horizontal="between">
        <TokenChainIconContainer
          tokenImage={token.image}
          chain={token.chainId}
          variant="default"
        />
        <VStack gap={1} horizontal="leading" vertical="top">
          <Typography variant="h3" className="font-medium">
            {token.name}
          </Typography>
          <Typography variant="body" secondary>
            ${token.ticker}
          </Typography>
        </VStack>
        <VStack horizontal="trailing" vertical="top">
          <Typography variant="h3">
            ${formatNumberWithCommas(token.currentPrice * balance)}
          </Typography>
          <Typography variant="body" secondary>
            {formatNumberWithCommas(balance)}
          </Typography>
        </VStack>
      </HStack>
    </AnimatedListItemWrapper>
  );
}

export { TokenRow };
