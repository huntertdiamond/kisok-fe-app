import { DefaultToken } from "@/types/internal/tokens";
import { FarcasterChannel } from "@/types/internal/farcaster";
import { BaseFarcasterUser } from "@/types/internal/user";
import { SelectedItemForFeedModal } from "@/types/internal/props";

const isBaseTokenObject = (
  item: SelectedItemForFeedModal
): item is DefaultToken => {
  return item !== null && (item as DefaultToken).ticker !== undefined;
};

const isFarcasterChannel = (
  item: SelectedItemForFeedModal
): item is FarcasterChannel => {
  return item !== null && (item as FarcasterChannel).channelName !== undefined;
};

const isBaseFarcasterUser = (
  item: SelectedItemForFeedModal
): item is BaseFarcasterUser => {
  return item !== null && (item as BaseFarcasterUser).username !== undefined;
};

export { isBaseTokenObject, isFarcasterChannel, isBaseFarcasterUser };
