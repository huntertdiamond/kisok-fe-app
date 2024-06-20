"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "@/components/elements/loading";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  idleText: string;
  loadingText: string;
  successText: string;
  buttonFn?: () => void; // Optional onClick prop
};

function AnimatedButton({
  idleText,
  loadingText,
  successText,
  buttonFn,
  ...props
}: AnimatedButtonProps) {
  const buttonDisplay = {
    idle: idleText,
    loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
    success: successText,
  };

  const [buttonState, setButtonState] =
    useState<keyof typeof buttonDisplay>("idle");

  const handleClick = async () => {
    if (buttonState === "success") return;

    setButtonState("loading");

    if (buttonFn) {
      buttonFn();
    }

    setButtonState("success");

    setTimeout(() => {
      setButtonState("idle");
    }, 5000);
  };

  return (
    <button
      className="flex min-w-max items-center justify-center text-white bg-gradient-to-b from-kioskBlue-400/90 to-kioskBlue-400 py-1.5 rounded-[12px] shadow-buttonShadowTwo min-w-24 overflow-hidden px-4"
      style={{ textShadow: "0px 1px 1.5px rgba(0, 0, 0, 0.16)" }}
      disabled={buttonState === "loading"}
      onClick={handleClick}
      id={idleText}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          key={buttonState}
        >
          {buttonDisplay[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export { AnimatedButton };
