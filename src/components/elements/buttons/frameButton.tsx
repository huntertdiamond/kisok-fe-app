"use client";
import * as React from "react";
import { cn } from "@/lib/tailwind";
import { motion, MotionProps } from "framer-motion";

import { LinkIcon } from "@/assets/icons/linkIcon";
import { SparklesIcon } from "@/assets/icons/sparklesIcon";

export interface FrameButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: "post" | "post_redirect" | "link" | "mint" | "tx";
  size: "feed" | "large";
  target: string | undefined;
}

const FrameButton = React.forwardRef<HTMLButtonElement, FrameButtonProps>(
  (
    {
      className,
      type = "button",
      action = "post",
      target,
      size = "feed",
      children,
      ...props
    },
    ref
  ) => {
    const stylingVariants = {
      feed: "bg-kioskLayerTwo hover:bg-kioskLayerTwo/80 text-black shadow-shFS",
      large: "bg-kioskFuschia-500 hover:bg-kioskFuschia-400 text-white",
    } as const;

    const iconVariants = {
      post: null,
      post_redirect: <LinkIcon height={16} width={16} />,
      link: <LinkIcon height={16} width={16} />,
      mint: <SparklesIcon height={16} width={16} />,
      tx: <SparklesIcon height={16} width={16} />,
    } as const;

    return (
      <motion.button
        type={type}
        className={cn(
          "w-full px-4 py-2 bg-kioskLayerTwo rounded-[8px] flex items-center justify-center gap-3",
          stylingVariants[size],
          className
        )}
        ref={ref}
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
        {...(props as MotionProps)}
      >
        {iconVariants[action]}
        {children}
      </motion.button>
    );
  }
);

FrameButton.displayName = "FrameButton";

export { FrameButton };
