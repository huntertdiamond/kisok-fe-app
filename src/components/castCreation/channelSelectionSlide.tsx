import { PanInfo, motion, useAnimation } from "framer-motion";
import { HStack, Typography } from "@/components/elements";
import { CreateCastMentionedChannel } from "@/types";
import { useEffect, useRef } from "react";

function ChannelSelectionSlide({
  channels,
  setParentChannel,
}: {
  channels: CreateCastMentionedChannel[];
  setParentChannel: (channel: CreateCastMentionedChannel | null) => void;
}) {
  const pageNo = useRef<number>(0);
  const controls = useAnimation();
  const containerWidth = 485;
  const mountedRef = useRef<boolean>(false);
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -125) {
      // const desiredX = -containerWidth * pageNo.current;
      controls.start({
        x: -containerWidth,
        transition: { type: "spring", damping: 20 },
      });
      pageNo.current++;
    } else {
      controls.start({ x: 0, transition: { type: "ease", damping: 10 } });
    }
  };

  const handleChannelSelection = (
    channel: CreateCastMentionedChannel | null
  ) => {
    setParentChannel(channel);
  };

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    controls.start({ x: 0, transition: { type: "ease", damping: 10 } });
  }, []);

  return (
    <motion.div
      className="flex w-full justify-start gap-2 items-center h-full"
      drag="x"
      dragConstraints={{ left: -containerWidth, right: 0 }}
      onDragEnd={handleDragEnd}
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
