import {
  InternalFarcasterCast,
  ParentPostObject,
  PlatformOptions,
  SelectedItemForFeedModal,
} from "@/types";

const isFarcasterPost = (
  post: ParentPostObject
): post is InternalFarcasterCast => {
  return post.platform === PlatformOptions.Farcaster;
};

function isFormattedFarcasterCast(
  item: SelectedItemForFeedModal
): item is InternalFarcasterCast {
  return (
    item !== null &&
    typeof item === "object" &&
    "platform" in item &&
    item.platform === PlatformOptions.Farcaster
  );
}

export { isFarcasterPost, isFormattedFarcasterCast };
