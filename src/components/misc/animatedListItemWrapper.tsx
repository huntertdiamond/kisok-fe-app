import { cn } from "@/lib/tailwind/utils";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedListItemWrapper({
  children,
  className,
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) {
  return (
    <AnimatePresence>
      <motion.li
        className={cn(
          "flex gap-2 w-full items-center justify-between px-4 py-2",
          className
        )}
        variants={{
          hidden: { opacity: 0 },
          visible: (index) => ({
            opacity: 1,
            transition: {
              delay: index * 0.03,
            },
          }),
        }}
        initial="hidden"
        animate="visible"
        custom={index}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.li>
    </AnimatePresence>
  );
}
export { AnimatedListItemWrapper };
