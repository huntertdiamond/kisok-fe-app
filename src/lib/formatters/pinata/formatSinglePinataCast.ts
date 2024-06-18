import { ParentPostObject, PlatformOptions } from "@/types/internal/feed";
import { PinataCast } from "@/types/external/pinata";

import { fetchFarcasterChannel } from "@/lib/fetch/handleFarcasterChannel";
import { handleMentionedTokens } from "@/lib/fetch/handleMentionedTokens";
import { parseRichText, formatCastEmbeds, formatMentionedUsers } from "../cast";
import { FarcasterChannel } from "@/types/internal/farcaster";

async function formatSinglePinataCast(
  cast: PinataCast
): Promise<ParentPostObject> {
  const castType = cast.frames ? "frame" : "default";
  const formattedEmbeds = formatCastEmbeds(cast);
  const timestamp = new Date(cast.timestamp);
  const parsedCastText = parseRichText(cast.text);
  let typeOfPost: PlatformOptions = PlatformOptions.Farcaster;

  // Mock logic for typing the post
  if (cast) {
    typeOfPost = PlatformOptions.Farcaster;
  }

  const mentionedChannelPromises = parsedCastText.mentionedChannels.map(
    (channel) => fetchFarcasterChannel(channel.value)
  );

  // Fetch mentioned channels
  const formattedMentionedChannels = (
    await Promise.all(mentionedChannelPromises)
  ).filter((channel): channel is FarcasterChannel => channel !== undefined);

  const handlePostedInChannel = async () => {
    if (!cast.parent_url) return undefined;

    const channelMentioned = await fetchFarcasterChannel(cast.parent_url);
    return channelMentioned;
  };

  const postedInChannel = await handlePostedInChannel();

  const mentionedTokens = await handleMentionedTokens(parsedCastText);
  const mentionedUsers = formatMentionedUsers(cast.mentioned_profiles);
  // const quoteCast = await handleQuoteCast(formattedEmbeds);
  const formattedCast: ParentPostObject = {
    postId: crypto.randomUUID(),
    postedBy: {
      farcasterId: cast.author.fid,
      username: cast.author.username,
      displayName: cast.author.display_name,
      bio: cast.author.profile.bio.text || "",
      pfpUrl: cast.author.pfp_url,
      isPowerUser: cast.author.power_badge,
      isKioskUser: false,
      preferredEthereumAddress: cast.author.verifications[0] as `0x${string}`,
      custodyAddress: cast.author.custody_address as `0x${string}`,
      noOfFollowers: cast.author.follower_count,
      noOfFollowing: cast.author.following_count,
    },
    datePosted: timestamp,
    platform: typeOfPost,
    castType: castType,
    hash: cast.hash as `0x${string}`,
    threadHash: cast.thread_hash as `0x${string}`,
    parentHash: cast.parent_hash as `0x${string}`,
    parent_url: cast.parent_url,
    text: parsedCastText.text,
    likeCount: cast.reactions.likes_count,
    recastCount: cast.reactions.recasts_count,
    replyCount: cast.replies.count,
    embeds: formattedEmbeds,
    mentionedUsers: mentionedUsers,
    frame: cast.frames,
    parsedText: parsedCastText,
    mentionedChannels: formattedMentionedChannels,
    mentionedTokens: mentionedTokens,
    channel: postedInChannel,
    quoteCast: null,
  };

  return formattedCast;
}

export { formatSinglePinataCast };
