import React from "react";
import { Typography } from "@/components/elements";
import { cn } from "@/lib/tailwind/utils";
import { inlineChipVariants } from "@/styling";

interface InlineChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "user" | "channel" | "token" | "ghost";
  textToDisplay: string;
}

function InlineChip({
  variant,
  textToDisplay,
  className,
  ...props
}: InlineChipProps) {
  return (
    <button
      className={cn(inlineChipVariants({ variant }), className)}
      {...props}
    >
      <Typography variant="body" className="text-[14px]">
        {textToDisplay}
      </Typography>
    </button>
  );
}

export { InlineChip };
