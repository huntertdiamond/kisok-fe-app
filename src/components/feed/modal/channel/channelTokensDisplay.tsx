import { VStack } from "@/components/elements";
import { TokenRow } from "@/components/misc/tokenRow";
import { DefaultToken } from "@/types/internal/tokens";

function ChannelTokensDisplay({ tokens }: { tokens: DefaultToken[] }) {
  return (
    <VStack horizontal="leading" vertical="top" gap={2}>
      <ul className="flex flex-col gap-0 w-full">
        {tokens.map((token, index) => (
          <TokenRow
            token={token}
            index={index}
            balance={100000}
            key={token.address}
          />
        ))}
      </ul>
    </VStack>
  );
}

export { ChannelTokensDisplay };
