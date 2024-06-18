import { HStack, Typography, VStack } from "../../elements";

type ConceptRowLeftColumnProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};
function ConceptRowLeftColumn({
  title,
  description,
  children,
}: ConceptRowLeftColumnProps) {
  return (
    <section className="max-w-[1100px] w-full">
      <HStack horizontal="between" vertical="top" gap={12}>
        <VStack
          horizontal="leading"
          vertical="top"
          gap={2}
          className="w-[500px]"
        >
          <Typography variant="h1" className="font-bold">
            {title}
          </Typography>
          <Typography variant="body" secondary className="leading-16">
            {description}
          </Typography>
          {children}
        </VStack>
      </HStack>
    </section>
  );
}

export { ConceptRowLeftColumn };
