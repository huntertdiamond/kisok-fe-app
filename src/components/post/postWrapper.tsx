import React from "react";
import { cn } from "@/lib/tailwind/utils";
import { VStack } from "@/components/elements";

const PostWrapper = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "flex  items-center justify-start  border-b border-gray-200 w-full ",
      className
    )}
    {...props}
  >
    <VStack vertical="top" horizontal="leading">
      {children}
    </VStack>
  </li>
));

PostWrapper.displayName = "Post Wrapper";
export { PostWrapper };
