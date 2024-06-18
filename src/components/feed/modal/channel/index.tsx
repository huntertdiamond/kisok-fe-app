import { VStack } from "@/components/elements";
import { FarcasterChannel } from "@/types/internal/farcaster";
import { ChannelHeader } from "./channelModalHeader";
import { useFeedModalContext } from "@/lib/providers";

import { FeedPost } from "@/components/post";
import { placeholderBaseTokens } from "@/lib/staticData/baseTokens";

import { placeholderCastWithMention } from "@/lib/staticData";
import { TabBarLine } from "@/components/elements/tabs";
import { useState } from "react";
import { MembersDisplay } from "./membersDisplay";
import { ChannelTokensDisplay } from "./channelTokensDisplay";

import { ChannelCollectionDisplay } from "./channelCollectionDisplay";

function ChannelModalIndex({ channel }: { channel: FarcasterChannel }) {
  const { modalHeight } = useFeedModalContext();
  const [selectedTab, setSelectedTab] = useState<
    "Posts" | "Members" | "Collection" | "Tokens"
  >("Posts");
  return (
    <VStack>
      <ChannelHeader channel={channel} />
      {modalHeight === "full" ? (
        <VStack horizontal="leading" vertical="top" gap={2}>
          <div className="px-4">
            <TabBarLine
              tabs={["Posts", "Members", "Collection", "Tokens"]}
              selectedTab={selectedTab}
              //@ts-ignore
              setSelectedTab={setSelectedTab}
            />
          </div>
          {selectedTab === "Posts" ? (
            <FeedPost post={placeholderCastWithMention} />
          ) : null}
          {selectedTab === "Members" ? <MembersDisplay /> : null}
          {selectedTab === "Collection" ? <ChannelCollectionDisplay /> : null}
          {selectedTab === "Tokens" ? (
            <ChannelTokensDisplay tokens={placeholderBaseTokens} />
          ) : null}
        </VStack>
      ) : null}
    </VStack>
  );
}

export { ChannelModalIndex };
