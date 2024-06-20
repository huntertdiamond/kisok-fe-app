import { EmbedRowForDocs } from "@/components/exampleComponents/embedRow";
import { ChatRow } from "./chatRow";
import { KeyboardAccessoryRow } from "./keyboardAccessoryRow";
import { OnchainMemoriesRow } from "./onchainMemoriesRow";

function ConceptRows() {
  return (
    <article className="max-w-[1100px] w-full flex flex-col gap-6">
      <EmbedRowForDocs />
      <OnchainMemoriesRow />
      <ChatRow />
      <KeyboardAccessoryRow />
    </article>
  );
}
export { ConceptRows };
