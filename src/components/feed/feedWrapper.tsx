import React from "react";
import { cn } from "@/lib/tailwind";
import { useFeedActionContext } from "@/lib/providers/feedActionProvider";

import { NavBarRow } from "../nav";
import { GradientBlur } from "../ui/gradientBlur";

import "@/styling/scrollbar.css";
import "@/styling/feedBlur.css";

interface FeedWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const FeedWrapper = React.forwardRef<HTMLDivElement, FeedWrapperProps>(
  ({ className, children, ...props }, ref) => {
    const { hideModal, showModal } = useFeedActionContext();

    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-white  max-w-[500px] min-w-[400px] overflow-hidden border h-full",
          className
        )}
        {...props}
      >
        {showModal && (
          <div
            className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-40"
            onMouseDown={() => hideModal()}
          ></div>
        )}
        <ul
          className={cn(
            "scrollbar-custom h-full",
            showModal ? "overflow-hidden" : "overflow-y-auto"
          )}
        >
          {children}
        </ul>
        <NavBarRow />
        <GradientBlur />
      </div>
    );
  }
);

FeedWrapper.displayName = "FeedWrapper";
export { FeedWrapper };
