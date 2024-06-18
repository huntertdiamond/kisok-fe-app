import React from "react";
import { linkChipVariants } from "@/styling";
import Link from "next/link";
import { LinkChipProps } from "@/types/internal/ui";
import { ArrowUpRight, GlobeIcon } from "lucide-react";
import { cn } from "@/lib/tailwind/utils";

const LinkChip: React.FC<LinkChipProps> = ({
  className,
  variant,
  size,
  linkType,
  children,
  link,
}) => {
  const iconSizes = {
    small: 12,
    medium: 16,
    large: 24,
  } as const;

  const icons = {
    internal: <ArrowUpRight size={iconSizes[size]} />,
    external: <GlobeIcon size={iconSizes[size]} />,
  } as const;

  return (
    <Link
      href={link}
      className={cn(linkChipVariants({ variant }), className)}
      target="_blank"
    >
      {icons[linkType]}
      {children}
    </Link>
  );
};
export { LinkChip };
