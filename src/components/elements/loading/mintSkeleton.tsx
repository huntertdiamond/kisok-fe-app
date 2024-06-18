import { Skeleton } from "@/components/ui";
import { HStack, VStack } from "../blocks";

function MintSkeleton() {
  return (
    <VStack horizontal="center" vertical="center" className="p-8" gap={2}>
      <HStack horizontal="leading" vertical="center" className="w-full" gap={2}>
        <Skeleton className="w-full h-[205px] bg-kioskBlue-100 rounded-[12px]" />
        <VStack gap={2} vertical="top" horizontal="leading">
          <Skeleton className="w-full h-[50px] bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="w-full h-[150px] bg-kioskBlue-100 rounded-[12px]" />
        </VStack>
      </HStack>
      <Skeleton className="w-full h-[100px] bg-kioskBlue-100 rounded-[12px]" />
      <Skeleton className="w-full h-[50px] bg-kioskBlue-100 rounded-[12px]" />
    </VStack>
  );
}

export { MintSkeleton };
