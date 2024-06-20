import { PlaceholderTokenLineChart } from "@/components/charts";
import { HStack, Typography, VStack } from "@/components/elements";
import { PrimaryButton } from "@/components/elements/buttons/primaryButton";
import { StyledCard } from "@/components/elements/cards/styledCard";

import { TokenChainIconContainer } from "@/components/misc/tokenChainIconContainer";
import { StatContainer } from "@/components/ui/stat";
import { opacityCodes } from "@/lib/constants";
import { formatNumberWithCommas } from "@/lib/formatters/numbers";
import { cn, getHexFromTailwindColor } from "@/lib/tailwind";
import { tokenModalStylingVariants } from "@/styling";
import { DefaultToken } from "@/types";

// THIS IS A REFACTORED VERSION OF THE IMPLEMENTED TOKEN MODAL. GO TO @/components/feed/modal/token to see the original
function StaticTokenModal({
  token,
  modalHeight,
}: {
  token: DefaultToken;
  modalHeight: "small" | "full";
}) {
  const hexColor = getHexFromTailwindColor(`${token.internalColor}-500`);
  return (
    <VStack
      className={cn(
        tokenModalStylingVariants({ variant: token.internalColor })
      )}
    >
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
      <VStack horizontal="leading" vertical="top" gap={4}>
        <PlaceholderTokenLineChart
          color={`${token.internalColor}-500`}
          token={token}
        />
        <HStack horizontal="between">
          <StatContainer
            label="Mentions"
            value={formatNumberWithCommas(1233)}
          />
          <StatContainer label="Holders" value={"1.4M"} />
          <StatContainer label="Mkt Cap" value={"$16.9M"} />
          <StatContainer label="Farcaster Value" value={"$14.5M"} />
        </HStack>
        <PrimaryButton variant="primary">Buy</PrimaryButton>
        {/* I Really don't like this */}
        {/* {modalHeight === "full" ? (
          <StyledCard>
            <VStack gap={1} horizontal="leading">
              <Typography variant="h2" secondary>
                About
              </Typography>
              <Typography variant="body" className="text-neutral-500">
                {token.description}
              </Typography>
            </VStack>
          </StyledCard>
        ) : null} */}
      </VStack>
    </VStack>
  );
}

export { StaticTokenModal };
