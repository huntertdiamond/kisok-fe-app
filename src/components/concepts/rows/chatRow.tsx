import Link from "next/link";
import { ConceptRowLeftColumn, ConceptRowRightColumn } from "../boilerplate";
import { FauxChatIndex } from "../chat";
import { InlineChip } from "@/components/elements/chips";

function ChatRow() {
  return (
    <section className="max-w-[1100px] w-full flex">
      <ConceptRowLeftColumn
        title="Ephemeral Chat"
        description={`One of my favorite things about twitter is that whenever something
        is happening, be it a sporting event or a TV show, you can
        immediately find a collection of tweets about the event. There are a
        handful of times where I have thought about casting something
        related to an event like this, but have stopped because I didn't
        want to post it on my main feed. I don't think that 'narrowcasting' is the solution to the aforementioned problem, so I created this.
        \n\n An ephemeral chat tab for each
        channel would be interesting, enabling channel owners to toggle it
        on for a live event that would attract a meaningful dialogue. I
        created a frame that is linked below, and this tab could be represented by a pinned post on other clients`}
      >
        <Link href="https://warpcast.com/dmnd/0xc1ba52be" target="_blank">
          <InlineChip variant="ghost" textToDisplay="MVP Frame" />
        </Link>
      </ConceptRowLeftColumn>
      <ConceptRowRightColumn>
        <FauxChatIndex />
      </ConceptRowRightColumn>
    </section>
  );
}
export { ChatRow };
