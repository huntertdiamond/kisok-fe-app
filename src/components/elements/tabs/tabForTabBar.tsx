import { TabProps } from "@/types/internal/ui";
import { motion } from "framer-motion";

import { Typography } from "../blocks";
function Tab({ text, selected, setSelected, customID }: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-kioskBlue-500"
          : "hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 font-medium text-gray-500 transition-colors duration-300 focus-within:outline-kioskBlue-500/50`}
    >
      <Typography variant="body" className="relative z-10 text-[17px]">
        {text}
      </Typography>

      {selected && (
        <motion.div
          className="absolute left-0 bottom-0 flex w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-kioskBlue-500"></span>
        </motion.div>
      )}
    </button>
  );
}

export { Tab };
