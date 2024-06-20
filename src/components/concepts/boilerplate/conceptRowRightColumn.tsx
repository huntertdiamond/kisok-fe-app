import { StyledCard } from "../../elements/cards/styledCard";

function ConceptRowRightColumn({ children }: { children: React.ReactNode }) {
  return (
    <StyledCard
      childClassName="p-0 overflow-hidden"
      parentClassName="max-w-[450px] h-min"
    >
      {children}
    </StyledCard>
  );
}

export { ConceptRowRightColumn };
