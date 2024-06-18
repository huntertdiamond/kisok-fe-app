import { motion } from "framer-motion";
import { useFeedActionContext, useFeedModalContext } from "@/lib/providers";

import { HStack, VStack, Typography } from "@/components/elements";

import { cn } from "@/lib/tailwind";
import { ExtendedNft } from "@/types/internal/nft";
import { isAddress } from "viem";
import { truncateEthereumAddress } from "@/lib/formatters/onchain";

function MintModalHeader({
  token,
  tokenAddress,
}: {
  token: ExtendedNft;
  tokenAddress: `0x${string}`;
}) {
  const { modalHeight } = useFeedModalContext();
  const { userFrameInteraction } = useFeedActionContext();

  if (!userFrameInteraction) return <div>This is an error message </div>;

  const displayName = isAddress(token.creator.displayName)
    ? truncateEthereumAddress(token.creator.displayName)
    : token.creator.displayName;

  const username = isAddress(token.creator.username)
    ? truncateEthereumAddress(token.creator.username)
    : token.creator.username;

  return (
    <VStack horizontal="leading" vertical="center" gap={2}>
      <motion.img
        src={userFrameInteraction.frame.image}
        alt={token.tokenName}
        width={200}
        height={200}
        className={cn(
          "rounded-[12px] w-full object-cover select-none pointer-events-none ",
          modalHeight === "small" ? "max-h-[300px]" : "max-h-[450px]"
        )}
        layoutId={userFrameInteraction!.cast.postId}
      />

      <VStack horizontal="leading" vertical="top" gap={2}>
        <Typography variant="h1" className="font-bold text-3xl line-clamp-2">
          {token.tokenName}
        </Typography>
        <HStack horizontal="leading" vertical="center" gap={1}>
          <img
            src={token.creator.pfpUrl}
            alt="creator pfp"
            className="rounded-full h-10 w-10 object-cover"
          />

          <VStack horizontal="leading" vertical="center" className="-space-y-1">
            <Typography variant="h2">{displayName}</Typography>
            <Typography variant="body" secondary>
              {username}
            </Typography>
          </VStack>
        </HStack>
        <Typography variant="body" className="line-clamp-4" secondary>
          {token.description || "No description available"}
        </Typography>
      </VStack>
    </VStack>
  );
}
export { MintModalHeader };
