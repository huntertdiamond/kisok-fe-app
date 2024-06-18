"use client";

import { motion, useAnimation, PanInfo } from "framer-motion";
import { Separator } from "@/components/ui";
import { AtSign, ChevronLeft, Image, Rss, Wallet } from "lucide-react";

import { SparklesIcon } from "@/assets/icons";

function MobileKeyboardAccessory() {
  const controls = useAnimation();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -125) {
      controls.start({
        x: -550,
        transition: { type: "spring", damping: 20 },
      });
    } else {
      controls.start({ x: 0, transition: { type: "ease", damping: 10 } });
    }
  };

  const handleChevronClick = () => {
    controls.start({
      x: -550,
      transition: { type: "spring", damping: 20 },
    });
  };

  return (
    <div className="w-full rounded-lg bg-[#D3D5DC] h-[54px] overflow-x-hidden relative">
      <motion.div
        className="flex w-full gap-4 justify-center items-center h-full"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
        // onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ x: 0 }}
      >
        <motion.div
          className="flex w-full justify-center items-center h-full absolute"
          style={{ x: 0 }}
        >
          <span className="w-full flex gap-4 justify-center items-center h-full py-2">
            <span className="w-1/3 flex justify-center items-center h-full border-r-2 border-[#BBBCC2]">
              <p className="text-3xl font-thin">Hello</p>
            </span>
            <span className="w-1/3 flex justify-center items-center h-full border-r-2 border-[#BBBCC2]">
              <p className="text-3xl font-thin">Hey</p>
            </span>
            <span className="w-1/4 flex justify-center items-center h-full">
              <p className="text-3xl font-thin">gm</p>
            </span>
          </span>
          <span className="flex h-full items-center justify-center">
            <Separator
              orientation="vertical"
              className="h-full bg-[#BBBCC2] w-[1px]"
            />
            <button onMouseDown={handleChevronClick} className="z-[100]">
              <ChevronLeft size={46} strokeWidth={1} />
            </button>
          </span>
        </motion.div>

        <motion.span
          className="flex w-full justify-around items-center py-3 h-full absolute"
          style={{ x: 550 }}
        >
          <SparklesIcon height={24} width={24} />
          <AtSign size={24} />
          <Rss size={24} />
          <Image size={24} />
          <Wallet size={24} />
        </motion.span>
      </motion.div>
    </div>
  );
}
export { MobileKeyboardAccessory };
