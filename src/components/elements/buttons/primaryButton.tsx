"use client";
import * as React from "react";
import { cn } from "@/lib/tailwind/utils";
import { Check } from "lucide-react";
import { motion, MotionProps } from "framer-motion";
import { SparklesIcon } from "@/assets/icons/sparklesIcon";
import { TokenIcon } from "@/assets/icons/tokenIcon";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "mint" | "tip" | "primary" | "ghost";
  icon?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      type = "button",
      icon = false,
      variant = "mint",
      children,
      ...props
    },
    ref
  ) => {
    const stylingVariants = {
      mint: "bg-kioskYellow-400 hover:bg-kioskYellow-300 text-black shadow-shFSNoBorder",
      tip: "bg-kioskFuschia-500 hover:bg-kioskFuschia-400 text-white",
      primary: "bg-kioskBlue-500 hover:bg-kioskBlue-400 text-white",
      ghost: "bg-kioskLayerTwo/40 text-black",
    } as const;

    const iconVariants = {
      mint: <SparklesIcon height={18} width={18} />,
      tip: <TokenIcon height={18} width={18} stroke="#fff" fill="#fff" />,
      primary: <Check size={18} />,
      ghost: <Check size={18} />,
    } as const;

    return (
      <motion.button
        type={type}
        className={cn(
          "rounded-full p-2 hover:scale-[1.08] transition-transform duration-200 focus:scale-[0.99] text-white w-full flex items-center justify-center gap-4 font-medium py-2",
          stylingVariants[variant],
          className
        )}
        ref={ref}
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.9 }}
        {...(props as MotionProps)}
      >
        {icon ? iconVariants[variant] : null}
        {children}
      </motion.button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
