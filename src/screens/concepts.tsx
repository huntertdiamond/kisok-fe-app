import { ConceptRows } from "@/components/concepts/rows";
import { PageWrapper } from "@/components/misc/pageWrapper";

function Concepts() {
  return (
    <PageWrapper pageTitle="Concepts" slug="concepts">
      <ConceptRows />
    </PageWrapper>
  );
}

export { Concepts };
