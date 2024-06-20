import { DocsRow } from "@/components/docs/docsRow";
import { ConceptRowLeftColumn, ConceptRowRightColumn } from "../boilerplate";
import { OnchainMemoryFauxModal } from "../memories/fauxModal";

function OnchainMemoriesRow() {
  return (
    <DocsRow>
      <DocsRow.LeftColumn
        title="Onchain Memories"
        description="
        Inspired by Snapchat Memories, I aimed to create a component to boost DAUs and foster a viral loop. The goal is to give users content to share (eg their memefied onchain history) so other users see it on their TL, while giving the sharing user another reason to  come back day over day. While the current implementation needs refinement, I think it's a concept worth exploring further.
        "
      >
        <></>
      </DocsRow.LeftColumn>
      <DocsRow.RightColumn styled>
        <OnchainMemoryFauxModal />
      </DocsRow.RightColumn>
    </DocsRow>
  );
}

export { OnchainMemoriesRow };
