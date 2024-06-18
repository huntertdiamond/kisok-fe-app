import * as React from "react";
import { cn } from "@/lib/tailwind/utils";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, type = "button", children, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "bg-transparent hover:bg-kioskLayerTwo rounded-full p-2 hover:scale-[1.08] transition-transform duration-200 focus:scale-[0.99] flex items-center  gap-2 justify-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
