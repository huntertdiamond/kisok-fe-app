"use client";
import { VStack } from "@/components/elements";
import { FeedPost } from "@/components/post";
import {
  placeholderCastWithChannel,
  placeholderCastWithMention,
} from "@/lib/staticData";
import { OnchainMemoryContent } from "./memoryContent";

function OnchainMemoryFauxModal() {
  return (
    <VStack className="relative w-[450px] h-[700px]">
      <FeedPost post={placeholderCastWithMention} />
      <FeedPost post={placeholderCastWithChannel} hideBottomBorder />
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-20 "></div>
      <div className="absolute bottom-2 left-2 z-50 flex  w-[92%]">
        <OnchainMemoryContent />
      </div>
    </VStack>
  );
}

export { OnchainMemoryFauxModal };
