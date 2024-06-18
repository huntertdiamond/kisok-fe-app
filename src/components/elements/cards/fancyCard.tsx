import { cn } from "@/lib/tailwind";
import { VStack } from "../blocks";

interface FancyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  parentClassName?: string;
  childClassName?: string;
  variant?: "default" | "blue" | "fancy";
  children: React.ReactNode;
}

function FancyCard({
  parentClassName,
  childClassName,
  variant = "default",
  children,
}: FancyCardProps) {
  const outerStackVariants = {
    default: "bg-gradient-to-b from-[#F7F7F7]/50 to-white",
    blue: "bg-gradient-to-b from-kioskBlue-200 via-kioskBlue-100 to-white",
    fancy:
      "bg-gradient-to-b from-[#F7F7F7]/50 to-white hover:bg-gradient-to-b hover:from-kioskBlue-200 hover:via-kioskBlue-100 hover:to-white  hover:shadow-fancyCardShadow transition transform duration-500 ease-in-out",
  }[variant];

  return (
    <VStack
      padding={2}
      horizontal="leading"
      vertical="top"
      className={cn(
        "border border-[#F1F1F1] w-full",
        outerStackVariants,
        parentClassName
      )}
      gap={2}
      rounded={20}
    >
      <VStack
        className={cn(
          "bg-white border border-[#F1F1F1] p-4 h-full w-full",
          childClassName
        )}
        horizontal="leading"
        padding={2}
        rounded={12}
        gap={4}
      >
        {children}
      </VStack>
    </VStack>
  );
}
export { FancyCard };
