import { HStack, Typography, VStack } from "@/components/elements";
import { TokenChainIconContainer } from "@/components/misc/tokenChainIconContainer";
import ethIcon from "@/assets/images/ethereum.png";
import { ArrowRight } from "lucide-react";
import { StyledCard } from "@/components/elements/cards/styledCard";
import { StaticImageData } from "next/image";
import { ChainIdOption } from "@/types";
import { cn } from "@/lib/tailwind";

const FlashbackHeader = () => (
  <>
    <Typography variant="h3" className="font-bold">
      Flashback from June 17
    </Typography>
    <Typography variant="body" secondary>
      One Year Ago, Today
    </Typography>
  </>
);

const TokenInfo = ({
  tokenImage,
  chain,
  tokenName,
  amount,
  isToToken = false,
}: {
  tokenImage: StaticImageData | string;
  chain: ChainIdOption;
  tokenName: string;
  amount: string;
  isToToken?: boolean;
}) => (
  <div
    className={cn(
      "bg-neutral-100/80 rounded-[12px] w-full h-full p-4 items-center justify-center flex gap-2",
      isToToken && "pl-6"
    )}
  >
    <TokenChainIconContainer
      variant="large"
      tokenImage={tokenImage}
      chain={chain}
    />
    <VStack horizontal="leading" vertical="center" gap={1}>
      <Typography variant="h2">{tokenName}</Typography>
      <HStack horizontal="leading" vertical="center" gap={1}>
        <Typography variant="body" secondary>
          {amount}
        </Typography>
      </HStack>
      {/* <Typography variant="body" secondary>
        {secondaryText}
      </Typography> */}
    </VStack>
  </div>
);

const PNLDetails = () => (
  <StyledCard>
    <HStack horizontal="between" gap={2}>
      <Typography variant="body" secondary className="leading-16">
        Actual PNL
      </Typography>
      <span className="flex gap-2 items-center justify-center">
        <Typography variant="body" className="leading-16 font-bold">
          -$11,790
        </Typography>
        <Typography variant="body" className="leading-16 text-red-500 text-sm">
          (99%)
        </Typography>
      </span>
    </HStack>
    <HStack horizontal="between" gap={2}>
      <Typography variant="body" secondary className="leading-16">
        Coulda, Woulda, Shoulda PNL
      </Typography>
      <span className="flex gap-2 items-center justify-center">
        <Typography variant="body" className="leading-16 font-bold">
          +$12k
        </Typography>
        <Typography
          variant="body"
          className="leading-16 text-kioskGreen-500 text-sm"
        >
          (1200%)
        </Typography>
      </span>
    </HStack>
  </StyledCard>
);

const FlashbackMessage = () => (
  <Typography variant="body" className="leading-16 text-center">
    {`You should've known better. You know the founder has a $100M loan
    against CRV. You know that he has 20% of the outstanding supply. Why
    did you do this to yourself? If you just stayed in ETH you'd be
    euphoric, but you didn't. What a shame`}
  </Typography>
);

function OnchainMemoryContent() {
  return (
    <VStack
      vertical="center"
      horizontal="leading"
      padding={4}
      className="w-full bg-white"
      rounded={24}
    >
      <FlashbackHeader />
      <VStack className="pt-2" gap={4}>
        <HStack className="relative" gap={1}>
          <TokenInfo
            tokenImage={ethIcon}
            chain={1}
            tokenName="ETH"
            amount="1.25 ETH"
          />
          <div className="absolute inset-0 w-10 h-10 mx-auto my-auto items-center justify-center flex bg-white rounded-[12px] p-1">
            <div className="p-1 bg-neutral-100/80 w-8 h-8 items-center justify-center flex rounded-[8px]">
              <ArrowRight className="text-neutral-500" />
            </div>
          </div>
          <TokenInfo
            tokenImage="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/7GDZAKECXJBL3NVA2GUEWFZE2E.png"
            chain={1}
            tokenName="CRV"
            amount="13,924.47"
            isToToken
          />
        </HStack>
        <PNLDetails />
        <FlashbackMessage />
      </VStack>
    </VStack>
  );
}

export { OnchainMemoryContent };
