import { DefaultToken } from "@/types/internal/tokens";
import { TokenModalHeader } from "./tokenModalHeader";
import { VStack } from "@/components/elements";
import { cn } from "@/lib/tailwind";
import { tokenModalStylingVariants } from "@/styling";
import { TokenModalBody } from "./tokenModalBody";

function TokenModalIndex({ token }: { token: DefaultToken }) {
  return (
    <VStack
      className={cn(
        tokenModalStylingVariants({ variant: token.internalColor })
      )}
    >
      <TokenModalHeader token={token} />
      <TokenModalBody token={token} />
    </VStack>
  );
}

export { TokenModalIndex };
