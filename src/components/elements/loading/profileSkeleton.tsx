import { Skeleton } from "@/components/ui";
import { HStack, VStack } from "../blocks";

function ProfileSkeleton() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <VStack horizontal="leading" vertical="top" gap={1}>
        <HStack className="w-2/3">
          <Skeleton className="h-[20px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[20px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[20px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[20px] w-full bg-kioskBlue-100 rounded-[12px]" />
        </HStack>
        <Skeleton className="h-[120px] w-full bg-kioskBlue-100 rounded-[12px]" />
        <Skeleton className="h-[120px] w-full bg-kioskBlue-100 rounded-[12px]" />
        <Skeleton className="h-[120px] w-full bg-kioskBlue-100 rounded-[12px]" />
      </VStack>
    </div>
  );
}
export { ProfileSkeleton };
