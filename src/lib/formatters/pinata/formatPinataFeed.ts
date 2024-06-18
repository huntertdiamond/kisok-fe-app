import { formatSinglePinataCast } from "./formatSinglePinataCast";

import { PinataFeedResponse } from "@/types/external/pinata";
import { ParentPostObject } from "@/types/internal/feed";

// TO DO: THIS IS REALLY INEFFICIENT, I NEED TO REWRITE THIS
async function formatPinataFeed(
  pinataFeed: PinataFeedResponse
): Promise<ParentPostObject[]> {
  let feedPosts: ParentPostObject[] = [];

  for (const cast of pinataFeed.casts) {
    const formattedCast = await formatSinglePinataCast(cast);
    feedPosts.push(formattedCast);
  }

  return feedPosts;
}

export { formatPinataFeed };
