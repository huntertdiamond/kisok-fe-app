import { Skeleton } from "@/components/ui";

import { HStack, VStack } from "../blocks";

function CollctionSkeleton() {
  const hstackArray = Array(4).fill(null);

  return (
    <VStack gap={2}>
      {hstackArray.map((_, index) => (
        <HStack key={index}>
          <Skeleton className="h-[120px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[120px] w-full bg-kioskBlue-100 rounded-[12px]" />
        </HStack>
      ))}
    </VStack>
  );
}
export { CollctionSkeleton };
