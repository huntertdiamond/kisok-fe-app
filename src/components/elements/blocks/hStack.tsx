import { cn } from "@/lib/tailwind/utils";
import { gaps, paddingVariants, roundedVariants } from "@/styling/blockStyling";
import React from "react";

type HStackProps = React.HTMLAttributes<HTMLDivElement> & {
  horizontal?: "center" | "leading" | "trailing" | "between";
  vertical?: "center" | "top" | "bottom";
  padding?: keyof typeof paddingVariants;
  gap?: keyof typeof gaps;
  wrap?: boolean;
  rounded?: keyof typeof roundedVariants;
};

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (
    {
      className,
      children,
      horizontal = "center",
      vertical = "leading",
      padding = 0,
      gap = 0,
      rounded = 0,
      wrap = false,
      ...props
    },
    ref
  ) => {
    const horizontalClass = {
      center: "justify-center",
      leading: "justify-start",
      trailing: "justify-end",
      between: "justify-between",
    }[horizontal];

    const verticalClass = {
      center: "items-center",
      top: "items-start",
      bottom: "items-end",
    }[vertical];

    const configedGap = gaps[gap as keyof typeof gaps];
    const configedPadding =
      paddingVariants[padding as keyof typeof paddingVariants];

    const configedRounded =
      roundedVariants[rounded as keyof typeof roundedVariants];

    return (
      <div
        ref={ref}
        className={cn(
          "flex  w-full",
          wrap ? "flex-wrap" : "",
          horizontalClass,
          verticalClass,
          configedGap,
          configedPadding,
          configedRounded,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HStack.displayName = "HStack";
export { HStack };
