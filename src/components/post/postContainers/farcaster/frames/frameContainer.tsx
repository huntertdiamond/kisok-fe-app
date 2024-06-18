"use client";

import { motion } from "framer-motion";
import { FrameButton } from "@/components/elements/buttons/frameButton";
import { useInteractWithFrame } from "@/lib/hooks/useInteractWithFrame";

import { InternalFarcasterCast } from "@/types/internal/feed";
import { FarcasterFrame } from "@/types/internal/farcaster";
import { HStack, Typography } from "@/components/elements";

function BaseFrameContainer({
  frame,
  cast,
}: {
  frame: FarcasterFrame;
  cast: InternalFarcasterCast;
}) {
  const { interactWithFrame } = useInteractWithFrame();

  return (
    <>
      <motion.img
        src={frame.image}
        className="rounded-[10px] w-full max-h-[500px] object-cover"
        alt="frame Image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />
      <HStack wrap gap={2} className="border-t pt-2">
        {frame.input.text ? (
          <input
            className="w-full bg-kioskLayerTwo/50 border  rounded-[10px] p-2"
            placeholder={frame.input.text}
          />
        ) : null}
        {frame.buttons.map((button) => (
          <FrameButton
            key={button.index}
            action={button.action_type}
            target={button.target}
            title={button.title}
            size="feed"
            className="flex-auto rounded-[12px]"
            style={{ flexBasis: "calc(50% - 1rem)" }}
            onMouseDown={() => interactWithFrame(cast, button, frame)}
          >
            <Typography variant="body" className="text-[14px]">
              {button.title}
            </Typography>
          </FrameButton>
        ))}
      </HStack>
    </>
  );
}

export { BaseFrameContainer };
