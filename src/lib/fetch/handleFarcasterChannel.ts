import { APP_URL } from "../constants/environment";
import { FarcasterChannel } from "@/types/internal/farcaster";
import { fetchApiData } from "./api";
async function fetchFarcasterChannel(
  channelIdInput: string
): Promise<FarcasterChannel | undefined> {
  // Function to sanitize and extract the channelId
  const extractChannelId = (input: string): string | null => {
    const urlPattern = /https:\/\/warpcast\.com\/~\/channel\/([\w-]+)/;
    const pathPattern = /^\/([\w-]+)/;

    let match = input.match(urlPattern);
    if (match) {
      return match[1];
    }

    match = input.match(pathPattern);
    if (match) {
      return match[1];
    }

    // If no pattern matches, return the input as is
    return null;
  };

  const channelId = extractChannelId(channelIdInput);

  if (channelId) {
    try {
      const channel = await fetchApiData("farcaster-channel", {
        channelId,
      });
      return channel;
    } catch (error) {
      console.error(`Error fetching channel with ID: ${channelId}`, error);
      return undefined;
    }
  }
  return undefined;
}

export { fetchFarcasterChannel };
