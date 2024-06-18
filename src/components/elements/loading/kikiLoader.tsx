"use client";
import { motion } from "framer-motion";
import { Kiki } from "@/assets/icons/kioskIcon";

function KikiLoader({ size }: { size: number }) {
  return (
    <div>
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 50,

          repeat: Infinity,
        }}
      >
        <Kiki
          height={size.toString()}
          width={size.toString()}
          color="#3B5BF7"
        />
      </motion.div>
    </div>
  );
}

export { KikiLoader };
