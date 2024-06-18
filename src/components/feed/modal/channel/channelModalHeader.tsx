import Image from "next/image";
import { FarcasterChannel } from "@/types/internal/farcaster";
import { ModalDragHandle } from "../shared";
import { TokenChip } from "@/components/elements/chips";

import { HStack, Typography, VStack } from "@/components/elements";
import { parseRichText } from "@/lib/formatters/cast";

import { AnimatedButton } from "@/components/elements/buttons/animatedButton";
import { RichTextDisplay } from "@/components/misc/richTextDisplay";

const ImagesForHeader = ({
  bannerImage,
  pfpImage,
}: {
  bannerImage: string;
  pfpImage: string;
}) => (
  <div className="relative w-full">
    <ModalDragHandle variant="unstyled" />
    <div className="h-36 w-full overflow-hidden">
      <Image
        className="object-cover w-full h-full select-none pointer-events-none"
        src={bannerImage}
        alt={"header"}
        width={1200}
        height={200}
      />
    </div>
    <Image
      className="absolute left-4 bottom-[-40px] z-20 h-20 w-20 p-1 bg-white rounded-[12px] shadow-heavyShadow shrink-0 object-cover aspect-square"
      src={pfpImage}
      alt={"channel.channelId"}
      width={80}
      height={80}
    />
  </div>
);

function ChannelHeader({ channel }: { channel: FarcasterChannel }) {
  const parsedBio = parseRichText(channel.channelDescription);

  return (
    <VStack>
      <ImagesForHeader
        bannerImage={channel.channelBanner}
        pfpImage={channel.channelPfp}
      />
      <VStack
        horizontal="leading"
        vertical="top"
        className="pt-12"
        gap={1}
        padding={4}
      >
        <HStack vertical="center" horizontal="between">
          <Typography variant="h1" className="text-2xl font-bold">
            {channel.channelName}
          </Typography>
          <span className="w-1/4 flex justify-end items-center">
            <AnimatedButton
              idleText="Follow"
              loadingText="Loading"
              successText="Followed"
            />
          </span>
        </HStack>
        <VStack horizontal="leading" gap={2}>
          {channel.token ? (
            <TokenChip
              ticker={channel.token.symbol}
              twentyFourHourPriceChange={parseInt(
                channel.token.stats.price_change_percentage.h24
              )}
            />
          ) : null}
          <HStack horizontal="leading" gap={1}>
            <Typography variant="body">
              {channel.followerCount.toLocaleString()}
            </Typography>
            <Typography variant="body" secondary>
              followers
            </Typography>
          </HStack>
        </VStack>
        <RichTextDisplay
          text={channel.channelDescription}
          richTextObject={parsedBio}
        />
      </VStack>
    </VStack>
  );
}

export { ChannelHeader };
