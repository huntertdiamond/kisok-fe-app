import { PanInfo, motion, useAnimation } from "framer-motion";
import { HStack, Typography } from "@/components/elements";
import { CreateCastMentionedChannel } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useChannelSelectionSlide } from "@/lib/hooks/useChannelSelectionSlide";

function ChannelSelectionSlide({
  channels,
  setParentChannel,
}: {
  channels: CreateCastMentionedChannel[];
  setParentChannel: (channel: CreateCastMentionedChannel | null) => void;
}) {
  const containerWidth = 485;

  const {
    handleDragEnd,
    handleChannelSelection,
    handleMouseDown,
    handleMouseUp,
    controls,
  } = useChannelSelectionSlide(containerWidth, setParentChannel);

  return (
    <motion.div
      className="flex w-full justify-start gap-2 items-center h-full"
      drag="x"
      dragConstraints={{ left: -containerWidth, right: 0 }}
      onDragEnd={(event, info) => handleDragEnd(event, info)}
      onMouseDown={() => handleMouseDown()}
      onMouseUp={() => handleMouseUp()}
      animate={controls}
      initial={{ x: 0 }}
    >
      {channels.map((channel) => (
        <button
          key={channel.id}
          className="min-w-max"
          onClick={() => handleChannelSelection(channel)}
        >
          <HStack
            horizontal="center"
            vertical="center"
            rounded={12}
            gap={2}
            className="px-2 py-1 bg-[#F7F7F7]/90 hover:shadow-buttonTextureHover hover:cursor-pointer active:shadow-buttonTexture select-none border border-transparent"
          >
            <img
              src={channel.image}
              alt={channel.name}
              className="rounded-full size-5 object-cover shadow-heavyShadow "
            />
            <Typography variant="body" className="text-sm">
              {channel.name}
            </Typography>
          </HStack>
        </button>
      ))}
    </motion.div>
  );
}

export { ChannelSelectionSlide };
