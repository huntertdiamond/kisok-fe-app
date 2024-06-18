import { DragHandleIcon } from "@/assets/icons";
import { cn } from "@/lib/tailwind/utils";
import React from "react";

type FeedModalHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "styled" | "unstyled";
};

const ModalDragHandle = React.forwardRef<HTMLDivElement, FeedModalHeaderProps>(
  ({ className, children, variant = "styled", ...props }, ref) => {
    const variants = {
      styled: "flex w-full justify-center pb-2 h-min flex-col",
      unstyled:
        "absolute z-20 items-center justify-center flex flex-col w-full top-2",
    } as const;

    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props}>
        <button>
          <DragHandleIcon />
        </button>
        {children}
      </div>
    );
  }
);

ModalDragHandle.displayName = "ModalDragHandle";

export { ModalDragHandle };
