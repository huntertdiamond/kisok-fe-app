import Link from "next/link";

import { FauxChatIndex } from "../chat";
import { InlineChip } from "@/components/elements/chips";
import { DocsRow } from "@/components/docs/docsRow";

function ChatRow() {
  return (
    <DocsRow>
      <DocsRow.LeftColumn
        title="Ephemeral Chat"
        description={`One of the my favorite parts about Twitter is the instant collection of tweets about live events, like sports or TV shows.
          I've often hesitated to post event-related content on farcaster, as I didn't want to post it to the main feed.
          While warpcast has attempted to address this with 'narrowcasting', I don't think thats the solution to the aforementioned problem.
          As such,  I developed an ephemeral chat tab for each channel. 
          Channel owners can enable this for live events, fostering meaningful dialogue that they otherwise wouldn't have due to the hesitance to live cast more niche subjects. 
         To avoid the issue where only kiosk user's could partcipate in the conversation, I created a frame (very much an MVP) that is linked below, and this tab could be represented by a pinned post on other clients`}
      >
        <Link href="https://warpcast.com/dmnd/0xc1ba52be" target="_blank">
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
