import Link from "next/link";

import { FauxChatIndex } from "../chat";
import { InlineChip } from "@/components/elements/chips";
import { DocsRow } from "@/components/docs/docsRow";

function ChatRow() {
  return (
    <DocsRow>
      <DocsRow.LeftColumn
        title="Ephemeral Chat"
        description={`
        One of my favorite aspects of Twitter is the immediate discoverability of tweets about live events, like sports or TV shows. I've often hesitated to post event-related content on Farcaster because I didn't want to clutter the main feed. While Warpcast has attempted to address this with 'narrowcasting', I don't think it fully solves the problem.
        To address this, I developed an ephemeral chat tab for each channel. Channel owners can enable this for live events, encouraging meaningful dialogue that might otherwise be missed due to hesitance in posting niche content. To ensure participation isn't limited to just Kiosk users, I created a frame (very much an MVP) that is linked below. This tab could be represented by a pinned frame on other clients, ensuring client agnostic participation.`}
      >
        <Link href="https://warpcast.com/dmnd/0xa23bc150" target="_blank">
          <InlineChip variant="ghost" textToDisplay="MVP Frame" />
        </Link>
      </DocsRow.LeftColumn>
      <DocsRow.RightColumn styled>
        <FauxChatIndex />
      </DocsRow.RightColumn>
    </DocsRow>
  );
}
export { ChatRow };
