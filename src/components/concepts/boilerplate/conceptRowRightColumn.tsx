import { FancyCard } from "../../elements/cards/fancyCard";

function ConceptRowRightColumn({ children }: { children: React.ReactNode }) {
  return (
    <FancyCard
      childClassName="p-0 overflow-hidden"
      parentClassName="max-w-[450px] h-min"
    >
      {children}
    </FancyCard>
  );
}

export { ConceptRowRightColumn };
