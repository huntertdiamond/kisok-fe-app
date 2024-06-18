import { FrowningKikiAnimated } from "@/assets/icons/frowningKikiAnimated";

import { VStack, Typography } from "@/components/elements";
function FrowningEmptyState({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <VStack padding={4}>
      <VStack
        gap={2}
        padding={4}
        rounded={12}
        className="bg-neutral-100/50 w-full h-full"
      >
        <FrowningKikiAnimated color="#3B5BF7" width={100} height={100} />
        <Typography variant="h1" className="font-base text-center">
          {label}
        </Typography>
        <Typography variant="body" secondary>
          {description}
        </Typography>
      </VStack>
    </VStack>
  );
}
export { FrowningEmptyState };
