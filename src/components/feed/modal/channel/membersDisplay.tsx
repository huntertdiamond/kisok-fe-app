import { VStack } from "@/components/elements";

import { UserListRow } from "@/components/misc/userListRow";
import { placeholderPfps } from "@/lib/constants/placeholderPfps";

function MembersDisplay() {
  // I didn't have time to make this dynamic, so I just hardcoded it.
  // Steps to make it dynamic:
  // 1. Take the channelID and use it to get the member list here https://api.warpcast.com/v1/channel-followers?channelId=books
  //   a. This isn't optimized, would likely want to figure out a way to add context to the request without drastically increasing the compute time, or by creating a search bar and taking the UX tradeoff for the time being
  // 2. Take a list of the viewing user's closest ~300 friends and display the first 50 that follow the channel, by querying the channel Id in a theoretical 'followed_channels' table column if any

  const dummyUsers = [
    {
      pfpUrl:
        "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/bd489c70-302f-469e-8367-41ec417b1400/original",
      username: "@ndoherty",
      displayName: "nd",
      isFollowing: true,
    },
    {
      pfpUrl:
        "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/307fbc8b-d18d-463a-097e-222c54cb8f00/rectcrop3",
      username: "@nick",
      displayName: "Nickm",
      isFollowing: false,
    },
    {
      pfpUrl:
        "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/af0fbc75-63e1-4d4f-12ae-c94c49a3b400/original",
      username: "@will",
      displayName: "Will",
      isFollowing: false,
    },
    {
      pfpUrl: placeholderPfps[1],
      username: "@rob",
      displayName: "rob",
      isFollowing: false,
    },
  ];
  return (
    <VStack>
      <ul className="w-full">
        {dummyUsers.map((user, index) => (
          <UserListRow
            key={index}
            pfpUrl={user.pfpUrl}
            name={user.displayName}
            username={user.username}
            isFollowing={user.isFollowing}
            index={index}
          />
        ))}
      </ul>
    </VStack>
  );
}

export { MembersDisplay };
