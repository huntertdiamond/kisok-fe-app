import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (selected: boolean) => ({
    gap: selected ? ".5rem" : 0,
    paddingLeft: selected ? "1rem" : ".5rem",
    paddingRight: selected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.05, type: "spring", bounce: 0, duration: 0.25 };

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (tabId: string) => void;
  children: ReactNode;
}

const Tab = ({ text, selected, setSelected, children }: TabProps) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      custom={selected}
      onClick={() => setSelected(text)}
      transition={transition}
      className={`${
        selected
          ? "bg-kioskBlue-500/15 text-kioskBlue-500 "
          : " hover:text-gray-900 dark:hover:text-gray-100"
      } relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-kioskBlue-500/50`}
    >
      {children}
      <AnimatePresence>
        {selected && (
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="overflow-hidden"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

type TabFormat = {
  title: string;
  icon: ReactNode;
};
// IconTabs component
const IconTabs = ({
  center,
  tabs,
  selectedTabId,
  setSelectedTabId,
}: {
  center?: boolean;
  tabs: TabFormat[];
  selectedTabId: string;
  setSelectedTabId: (tabId: string) => void;
}) => {
  // State to manage selected tab

  return (
    <div
      className={` ${
        center ? "justify-center " : ""
      } flex flex-wrap items-center gap-2 `}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab.title}
          selected={selectedTabId === tab.title}
          setSelected={setSelectedTabId}
          key={tab.title}
        >
          {tab.icon}
        </Tab>
      ))}
    </div>
  );
};

export { IconTabs };
