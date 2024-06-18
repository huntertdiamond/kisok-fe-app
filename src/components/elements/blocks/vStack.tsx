import { cn } from "@/lib/tailwind/utils";
import { gaps, paddingVariants, roundedVariants } from "@/styling/blockStyling";
import React from "react";
type VStackProps = React.HTMLAttributes<HTMLDivElement> & {
  horizontal?: "center" | "leading" | "trailing";
  vertical?: "center" | "top" | "bottom";
  padding?: keyof typeof paddingVariants;
  gap?: keyof typeof gaps;
  rounded?: keyof typeof roundedVariants;
};

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (
    {
      className,
      children,
      horizontal = "center",
      vertical = "leading",
      rounded = 0,
      padding = 0,
      gap = 0,
      ...props
    },
    ref
  ) => {
    const horizontalClass = {
      center: "items-center",
      leading: "items-start",
      trailing: "items-end",
    }[horizontal];

    const verticalClass = {
      center: "justify-center",
      top: "justify-start",
      bottom: "justify-end",
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
          "flex flex-col w-full",
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

VStack.displayName = "VStack";
export { VStack };
