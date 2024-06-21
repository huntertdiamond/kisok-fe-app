import { Typography, VStack } from "@/components/elements";

import { cn } from "@/lib/tailwind";
import { DefaultToken, InternalFarcasterCast } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { TipTokenRow } from "./tipTokenRow";
import { PrimaryButton } from "@/components/elements/buttons/primaryButton";
import { BouncySlider } from "@/components/elements/slider/bouncySlider";

function SelectAmountTipView({
  token,
  selectedTokenAmount,
  setSelectedTokenAmount,
  confirmTipFn,
  cast,
}: {
  token: DefaultToken;
  selectedTokenAmount: number;
  setSelectedTokenAmount: React.Dispatch<React.SetStateAction<number>>;
  confirmTipFn: () => void;
  cast: InternalFarcasterCast;
}) {
  return (
    <VStack vertical="top" horizontal="leading" gap={2}>
      <AnimatePresence>
        <TipTokenRow token={token} index={1} balance={1000} />
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 0.99,
              transition: {
                delay: 0.14,
                ease: "easeInOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <BouncySlider
            value={selectedTokenAmount}
            maxValue={1000}
            setValue={setSelectedTokenAmount}
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 0.99,
              transition: {
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
          custom={2}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <PrimaryButton variant="tip" icon onClick={confirmTipFn}>
            <span className="flex gap-4 items-center justify-center">
              <Typography variant="h3">
                Tip {cast.postedBy.displayName}
              </Typography>
            </span>
          </PrimaryButton>
        </motion.div>
      </AnimatePresence>
    </VStack>
  );
}
export { SelectAmountTipView };
