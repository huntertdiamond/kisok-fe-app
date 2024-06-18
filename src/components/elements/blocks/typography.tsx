import React from "react";
import { cn } from "@/lib/tailwind/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: "h1" | "h2" | "h3" | "body";
  secondary?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  secondary = false,
  ...props
}) => {
  const getVariantClasses = (variant: "h1" | "h2" | "h3" | "body"): string => {
    switch (variant) {
      case "h1":
        return "text-[1.5rem] md:text-[1.875rem] sm:text-[1.5rem] font-medium leading-none";
      case "h2":
        return "text-[1.25rem] md:text-[1.5rem] sm:text-[1.25rem] font-medium leading-none";
      case "h3":
        return "text-[1.15rem] md:text-xl leading-none";
      case "body":
        return "text-[1rem] text-base leading-none";
      default:
        return "text-[1rem] text-base leading-none m-0";
    }
  };

  const combinedClasses = cn(
    getVariantClasses(variant),
    "font-abc-diatype align-middle flex items-center leading-[1]",

    {
      "text-kioskTextSecondary": secondary,
    },
    className
  );

  const Tag = variant === "body" ? "p" : variant;

  return (
    <Tag className={combinedClasses} {...props}>
      {children}
    </Tag>
  );
};

export { Typography };
