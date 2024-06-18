import { PinataCastMentionedProfile } from "@/types/external/pinata";
import { BaseFarcasterUser } from "@/types/internal/user";

function formatMentionedUsers(
  mentionedUsers: PinataCastMentionedProfile[]
): BaseFarcasterUser[] {
  if (mentionedUsers.length === 0) return [];

  const mentionedUsersFormatted: BaseFarcasterUser[] = [];

  mentionedUsers.map((user) => {
    const mentionedUser: BaseFarcasterUser = {
      farcasterId: user.fid,
      username: user.username,
      displayName: user.display_name,
      bio: user.profile.bio.text,
      pfpUrl: user.pfp_url,
      isPowerUser: user.power_badge,
      isKioskUser: false,
      preferredEthereumAddress: user.verifications[0] as `0x${string}`,
      custodyAddress: user.custody_address as `0x${string}`,
      noOfFollowers: user.follower_count,
      noOfFollowing: user.following_count,
    };

    mentionedUsersFormatted.push(mentionedUser);
  });

  return mentionedUsersFormatted;
}
export { formatMentionedUsers };
