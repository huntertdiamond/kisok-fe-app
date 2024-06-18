import Image from "next/image";
import React from "react";
import { Typography, VStack } from "../blocks";
import { BaseNft } from "@/types/internal/nft";

function NftCard({ token }: { token: BaseNft }) {
  return (
    <VStack
      horizontal="center"
      vertical="top"
      padding={2}
      gap={1}
      rounded={20}
      className="w-auto shadow-heavyShadow"
    >
      <Image
        src={token.tokenMedia || "https://kiosk.app/kiosk-banner.svg"}
        className="rounded-[12px] h-[125px] w-full object-cover "
        height={100}
        width={170}
        alt="NFT"
        placeholder="empty"
      />
      <VStack horizontal="leading" className="px-2">
        <Typography variant="body" className="line-clamp-2">
          {token.tokenName}
        </Typography>
        <Typography variant="body" secondary>
          @creator
        </Typography>
      </VStack>
    </VStack>
  );
}

export { NftCard };
