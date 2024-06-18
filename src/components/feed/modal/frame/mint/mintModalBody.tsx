import { HStack, Typography, VStack } from "@/components/elements";
import { AvatarStack } from "@/components/ui";

import { longerPlaceholderPfps } from "@/lib/constants/placeholderPfps";
import baseBadge from "@/assets/images/base_badge.png";

import { ExtendedNft } from "@/types/internal/nft";
function MintModalBody({ token }: { token: ExtendedNft }) {
  return (
    <VStack gap={2} horizontal="leading" vertical="top">
      <HStack horizontal="between">
        <VStack horizontal="leading" vertical="top" gap={1}>
          <Typography variant="body" secondary>
            Minted by
          </Typography>
          <AvatarStack avatars={longerPlaceholderPfps} variant="small" />
        </VStack>
        <VStack horizontal="leading" vertical="center" gap={1}>
          <Typography variant="body" secondary>
            Platform
          </Typography>
          <img
            src={"https://zora.co/assets/zora-tm-black.svg"}
            alt="zora"
            className="h-6"
          />
        </VStack>
        <VStack horizontal="leading" vertical="center" gap={1}>
          <Typography variant="body" secondary>
            Chain
          </Typography>
          <img src={baseBadge.src} alt="base" className="h-6" />
        </VStack>
      </HStack>
    </VStack>
  );
}

export { MintModalBody };
