import { Skeleton } from "@/components/ui";
import { HStack, VStack } from "../blocks";
import { CastLoader } from "./castLoader";

function ProfileSkeleton() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <VStack horizontal="leading" vertical="top" gap={4}>
        {/* TAB CHIPS */}
        <HStack className="w-2/3" gap={1}>
          <Skeleton className="h-[35px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[35px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[35px] w-full bg-kioskBlue-100 rounded-[12px]" />
          <Skeleton className="h-[35px] w-full bg-kioskBlue-100 rounded-[12px]" />
        </HStack>
        {/* SINGLE CAST */}
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <CastLoader key={index} />
          ))}
      </VStack>
    </div>
  );
}
export { ProfileSkeleton };
