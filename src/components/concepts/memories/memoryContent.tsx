import { HStack, Typography, VStack } from "@/components/elements";
import { TokenChainIconContainer } from "@/components/misc/tokenChainIconContainer";
import ethIcon from "@/assets/images/ethereum.png";
import { ArrowRight } from "lucide-react";
import { StyledCard } from "@/components/elements/cards/styledCard";

function OnchainMemoryContent() {
  return (
    <VStack
      vertical="center"
      horizontal="leading"
      padding={4}
      className="w-full bg-white"
      rounded={24}
    >
      <>
        <Typography variant="h3" className="font-bold">
          Flashback from June 17
        </Typography>
        <Typography variant="body" secondary>
          One Year Ago, Today
        </Typography>
      </>
      {/* <StyledCard> */}
      <VStack className="pt-2" gap={4}>
        <HStack className="relative" gap={1}>
          <div className="bg-neutral-100/80 rounded-[12px] w-full h-full p-4 items-center justify-center flex gap-2">
            <TokenChainIconContainer
              variant="large"
              tokenImage={ethIcon}
              chain={1}
            />
            <VStack horizontal="leading" vertical="center" gap={1}>
              <Typography variant="h2">ETH</Typography>
              <HStack horizontal="leading" vertical="center" gap={1}>
                <Typography variant="body" secondary>
                  1.25 ETH
                </Typography>
              </HStack>
            </VStack>
          </div>
          <div className="absolute inset-0 w-10 h-10 mx-auto my-auto items-center justify-center flex bg-white rounded-[12px] p-1">
            <div className="p-1 bg-neutral-100/80 w-8 h-8 items-center justify-center flex rounded-[8px]">
              <ArrowRight className="text-neutral-500" />
            </div>
          </div>
          <div className="bg-neutral-100/80 rounded-[12px] w-full h-full p-4 pl-6 items-center justify-center flex gap-2">
            <TokenChainIconContainer
              variant="large"
              tokenImage={
                "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/7GDZAKECXJBL3NVA2GUEWFZE2E.png"
              }
              chain={1}
            />
            <VStack horizontal="leading" vertical="center" gap={1}>
              <Typography variant="h2">CRV</Typography>
              <Typography variant="body" secondary>
                13,924.47
              </Typography>
            </VStack>
          </div>
        </HStack>
        <StyledCard>
          <HStack horizontal="between" gap={2}>
            <Typography variant="body" secondary className="leading-16 ">
              Actual PNL
            </Typography>
            <span className="flex gap-2 items-center justify-center">
              <Typography variant="body" className="leading-16  font-bold">
                -$11,790
              </Typography>
              <Typography
                variant="body"
                className="leading-16 text-red-500 text-sm"
              >
                (99%)
              </Typography>
            </span>
          </HStack>
          <HStack horizontal="between" gap={2}>
            <Typography variant="body" secondary className="leading-16 ">
              Coulda, Woulda, Shoulda PNL
            </Typography>
            <span className="flex gap-2 items-center justify-center">
              <Typography variant="body" className="leading-16  font-bold">
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
        <Typography variant="body" className="leading-16 text-center">
          {`You should've known better. You know the founder has a $100M loan
          against CRV. You know that he has 20% of the outstanding supply. Why
          did you do this to yourself? If you just stayed in ETH you'd be
          euphoric, but you didn't. What a shame`}
        </Typography>
      </VStack>
    </VStack>
  );
}

export { OnchainMemoryContent };
