"use client";

import {
  placeholderLightChannel,
  staticLightChannelCast,
} from "@/lib/staticData";
import { VStack } from "../../elements";
import { ChannelHeader } from "../../feed/modal/channel/channelModalHeader";
import { useState } from "react";
import { FeedPost } from "../../post";
import { TabBarLine } from "../../elements/tabs";
import { MembersDisplay } from "../../feed/modal/channel/membersDisplay";
import { ChannelTokensDisplay } from "../../feed/modal/channel/channelTokensDisplay";

import { ChannelCollectionDisplay } from "../../feed/modal/channel/channelCollectionDisplay";
import { placeholderBaseTokens } from "@/lib/staticData/baseTokens";
import { cn } from "@/lib/tailwind";
enum TabOptions {
  Posts = "Posts",
  Members = "Members",
  Collection = "Collection",
  Tokens = "Tokens",
}
function StaticChannelModal({
  modalHeight,
}: {
  modalHeight: "small" | "full";
}) {
  const [selectedTab, setSelectedTab] = useState<TabOptions>(TabOptions.Posts);
  return (
    <VStack>
      <ChannelHeader channel={placeholderLightChannel} />
      {modalHeight === "full" ? (
        <VStack horizontal="leading" vertical="top" gap={2}>
          <div className="px-4 h-[33.5px]">
            <TabBarLine
              tabs={Object.values(TabOptions)}
              selectedTab={selectedTab}
              //@ts-ignore
              setSelectedTab={setSelectedTab}
              layoutId="channelModal"
            />
          </div>
          {selectedTab === TabOptions.Posts ? (
            <FeedPost post={staticLightChannelCast} hideBottomBorder />
          ) : null}
          {selectedTab === TabOptions.Members ? <MembersDisplay /> : null}
          {selectedTab === TabOptions.Collection ? (
            <ChannelCollectionDisplay />
          ) : null}
          {selectedTab === TabOptions.Tokens ? (
            <ChannelTokensDisplay tokens={placeholderBaseTokens} />
          ) : null}
        </VStack>
      ) : null}
    </VStack>
  );
}
export { StaticChannelModal };
