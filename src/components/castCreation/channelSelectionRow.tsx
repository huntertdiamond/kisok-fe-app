"use client";
import { CreateCastMentionedChannel } from "@/types/internal/mention";
import { HStack, Typography } from "../elements";

import "@/styling/hiddenScrollbar.css";
import { Dispatch, useRef } from "react";
import { Search, XIcon } from "lucide-react";
import { Separator } from "../ui";
import { ChannelSelectionSlide } from "./channelSelectionSlide";

function ChannelSelectionParentContainer({
  channels,
  parentChannel,
  setParentChannel,
}: {
  channels: CreateCastMentionedChannel[];
  parentChannel: CreateCastMentionedChannel | null;
  setParentChannel: Dispatch<
    React.SetStateAction<CreateCastMentionedChannel | null>
  >;
}) {
  const handleChannelSelection = (
    channel: CreateCastMentionedChannel | null
  ) => {
    setParentChannel(channel);
  };

  return (
    <HStack
      horizontal="leading"
      vertical="center"
      gap={1}
      className="overflow-x-auto relative hidden-scrollbar py-2"
    >
      <HStack
        horizontal="center"
        vertical="center"
        className="bg-white z-[100] h-[35px] hover:cursor-pointer w-[30px]"
        gap={2}
      >
        <Search size={18} strokeWidth={3} stroke="#A3A3A3" />
        <Separator orientation="vertical" className="h-[20px]" />
      </HStack>

      {!parentChannel ? (
        <ChannelSelectionSlide
          channels={channels}
          setParentChannel={setParentChannel}
        />
      ) : (
        <HStack horizontal="leading" vertical="center" gap={2}>
          <button
            key={parentChannel.id}
            className="min-w-max group"
            onClick={() => handleChannelSelection(null)}
          >
            <HStack
              horizontal="leading"
              vertical="center"
              rounded={8}
              gap={2}
              className="rounded-lg px-2 py-1 bg-kioskPurple-100 border border-kioskPurple-200 hover:cursor-pointer active:shadow-buttonTexture select-none"
            >
              <img
                src={parentChannel.image}
                alt={parentChannel.name}
                className="rounded-full size-5 object-cover shadow-heavyShadow"
              />
              <Typography
                variant="body"
                className="text-sm text-kioskPurple-700 font-medium"
              >
                {parentChannel.name}
              </Typography>
              <span className="hidden group-hover:block transition-all duration-500 ease-linear">
                <XIcon size={20} strokeWidth={3} stroke="#A98AE0" />
              </span>
            </HStack>
          </button>
        </HStack>
      )}
    </HStack>
  );
}

export { ChannelSelectionParentContainer };
