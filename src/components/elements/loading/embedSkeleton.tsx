import { Skeleton } from "@/components/ui";

import { HStack, VStack } from "../blocks";
import { cn } from "@/lib/tailwind";

function EmbedSkeleton({
  variant = "default",
}: {
  variant?: "default" | "error" | "warning";
}) {
  const variants = {
    default: "bg-neutral-200",
    error: "bg-kioskRed-200",
    warning: "bg-kioskFuschia-200",
  }[variant];

  return (
    <HStack
      horizontal="leading"
      vertical="center"
      padding={2}
      gap={2}
      rounded={12}
      className="w-full max-w-[400px]  shadow-heavyShadow h-min"
    >
      <Skeleton className={cn("h-[80px] w-[80px] rounded-[12px]", variants)} />
      <VStack vertical="center" horizontal="leading" gap={2}>
        <Skeleton className={cn("h-[30px] w-1/2 rounded-[8px]", variants)} />
        <Skeleton className={cn("h-[40px] w-full rounded-[8px]", variants)} />
      </VStack>
    </HStack>
  );
}
export { EmbedSkeleton };
