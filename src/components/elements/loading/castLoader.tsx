import { Skeleton } from "@/components/ui";
import { HStack, VStack } from "../blocks";

function CastLoader() {
  return (
    <VStack gap={2} horizontal="leading">
      <HStack gap={2} horizontal="leading">
        <Skeleton className="h-[42px] w-[42px] shrink-0 bg-kioskBlue-100 rounded-full" />
        <VStack gap={1} horizontal="leading">
          <Skeleton className="h-[24px] w-2/3 bg-kioskBlue-100 rounded-[10px]" />
          <Skeleton className="h-[12px] w-1/3 bg-kioskBlue-100 rounded-[8px]" />
        </VStack>
      </HStack>
      <VStack gap={1}>
        <Skeleton className="h-[30px] w-full bg-kioskBlue-100 rounded-[12px]" />
        <Skeleton className="h-[30px] w-full bg-kioskBlue-100 rounded-[12px]" />
        <Skeleton className="h-[30px] w-full bg-kioskBlue-100 rounded-[12px]" />
      </VStack>
    </VStack>
  );
}

export { CastLoader };
