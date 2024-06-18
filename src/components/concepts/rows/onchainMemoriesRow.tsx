import { ConceptRowLeftColumn, ConceptRowRightColumn } from "../boilerplate";
import { OnchainMemoryFauxModal } from "../memories/fauxModal";

function OnchainMemoriesRow() {
  return (
    <section className="max-w-[1100px] w-full flex">
      <ConceptRowLeftColumn
        title="Onchain Memories"
        description="Inspired by snapchat memories, I wanted to create a component that would achieve two things: 1. Drive DAU and 2. Create a viral loop, where other farcaster users who are not using kiosk, make a decision to switch after seeing something like this in their timeline. The displayed implentation definitely needs some work, but I think it would be an interesting concept to explore further."
      >
        <></>
      </ConceptRowLeftColumn>
      <ConceptRowRightColumn>
        <OnchainMemoryFauxModal />
      </ConceptRowRightColumn>
    </section>
  );
}

export { OnchainMemoriesRow };
