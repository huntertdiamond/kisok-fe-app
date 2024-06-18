import { PlaceholderTokenLineChart } from "@/components/charts";
import { HStack, Typography, VStack } from "@/components/elements";
import { StatContainer } from "@/components/ui/stat";

import { opacityCodes } from "@/lib/constants/opacityCodes";
import { formatNumberWithCommas } from "@/lib/formatters/numbers";
import { useFeedModalContext } from "@/lib/providers";
import { getHexFromTailwindColor } from "@/lib/tailwind";
import { DefaultToken } from "@/types/internal/tokens";

function TokenModalBody({ token }: { token: DefaultToken }) {
  const { modalHeight } = useFeedModalContext();

  const hexColor = getHexFromTailwindColor(`${token.internalColor}-500`);

  // console.log(token);
  return (
    <VStack horizontal="leading" vertical="top" gap={4}>
      <PlaceholderTokenLineChart
        color={`${token.internalColor}-500`}
        token={token}
      />
      <HStack horizontal="between">
        <StatContainer label="Mentions" value={formatNumberWithCommas(1233)} />
        <StatContainer label="Holders" value={"1.4M"} />
        <StatContainer label="Mkt Cap" value={"$16.9M"} />
        <StatContainer label="Farcaster Value" value={"$14.5M"} />
      </HStack>
      {modalHeight === "full" ? (
        <VStack
          padding={4}
          rounded={12}
          vertical="top"
          horizontal="leading"
          className="h-[200px] w-full border"
          style={{
            backgroundColor: `${hexColor}${opacityCodes[10]}`,
            borderColor: `${hexColor}${opacityCodes[10]}`,
          }}
        >
          <Typography variant="h2" secondary>
            About
          </Typography>
          <Typography variant="body" className="">
            {token.description}
          </Typography>
        </VStack>
      ) : null}
    </VStack>
  );
}

export { TokenModalBody };
