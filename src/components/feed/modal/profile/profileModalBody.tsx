import { VStack } from "@/components/elements";

import { TabBarLine } from "@/components/elements/tabs";

import { ExpandedFarcasterProfile } from "@/types/internal/farcaster";
import { BaseFarcasterUser } from "@/types/internal/user";
import { useState } from "react";
import { ProfileCollectionBody } from "./profileCollectionBody";
import { ProfileSkeleton } from "@/components/elements/loading/profileSkeleton";

import { FrowningEmptyState } from "@/components/emptyState";
import { FeedPost } from "@/components/post";
import { StarLoaderContainer } from "@/components/elements/loading/kikiLoaderContainer";
/**
 I like the idea of having the shared interesting items, but for now it is too crowded. I left it commented out below in case you want to toggle them back on to see how it looks
   <Typography variant="body" secondary>
        Shared Interests
      </Typography>
      <HStack className="flex-wrap" gap="gap-1">
        {profileData?.sharedChannels
          .slice(0, 8)
          .map((channel) => (
            <InlineChip
              key={channel.channelId}
              variant="channel"
              textToDisplay={channel.name}
            />
          ))}
      </HStack> 
*/
function ProfileModalBody({
  user,
  profileData,
  profileDataIsLoading,
}: {
  user: BaseFarcasterUser;
  profileData: ExpandedFarcasterProfile | undefined;
  profileDataIsLoading: boolean;
}) {
  const tabs = ["Posts", "Replies", "Collection", "Likes"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  if (!profileData) return <ProfileSkeleton />;

  return (
    <VStack horizontal="leading" vertical="center" gap={1}>
      <TabBarLine
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        className="my-2"
      />
      {profileDataIsLoading ? <StarLoaderContainer size={100} /> : null}

      {selectedTab === tabs[0] ? (
        <VStack horizontal="leading" vertical="top" gap={4}>
          {profileData.casts.map((post) => (
            <FeedPost key={post.postId} post={post} profile />
          ))}
        </VStack>
      ) : null}
      {selectedTab === tabs[1] ? (
        <FrowningEmptyState
          label={`${user.username} is not a replyooor`}
          description="Bad, Awful, Terrible, Horrendous, Embarrassing"
        />
      ) : null}
      {selectedTab === tabs[2] ? (
        <ProfileCollectionBody
          userAddresses={[user.preferredEthereumAddress]}
        />
      ) : null}
      {selectedTab === tabs[3] ? (
        <FrowningEmptyState
          label="So, so empty"
          description="Kiki, do you love me"
        />
      ) : null}
    </VStack>
  );
}

export { ProfileModalBody };
