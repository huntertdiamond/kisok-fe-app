"use client";

// I didn't have the time to make this  work properly, so I'm just going to use a simple slider for now, but wanted to keep this in for the time being.
import * as RadixSlider from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ElementRef, useRef, useState } from "react";

const MAX_OVERFLOW = 10;

function BouncySlider({
  value,
  maxValue,
  setValue,
}: {
  value: number;
  maxValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  let ref = useRef<ElementRef<typeof RadixSlider.Root>>(null);
  let [region, setRegion] = useState("middle");
  let clientX = useMotionValue(0);
  let overflow = useMotionValue(0);
  let scale = useMotionValue(1);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      let { left, right } = ref.current.getBoundingClientRect();
      let newValue;

      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  return (
    <motion.div
      initial={{ scale: 1 }}
      onHoverStart={() => animate(scale, 1.01)}
      onHoverEnd={() => animate(scale, 1)}
      onTouchStart={() => animate(scale, 1.05)}
      onTouchEnd={() => animate(scale, 1)}
      style={{
        scale,
        opacity: useTransform(scale, [1, 1.05], [0.7, 1]),
      }}
      className="flex w-full touch-none select-none items-center justify-center gap-3"
    >
      <motion.div
        animate={{
          scale: region === "left" ? [1, 1.05, 1] : 1,
          transition: { duration: 0.25 },
        }}
        style={{
          x: useTransform(() =>
            region === "left" ? -overflow.get() / scale.get() : 0
          ),
        }}
      ></motion.div>

      <RadixSlider.Root
        ref={ref}
        value={[value]}
        onValueChange={([v]) => setValue(Math.floor(v))}
        step={1}
        max={maxValue}
        className="relative flex w-full  grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
        onPointerMove={(e) => {
          if (e.buttons > 0) {
            clientX.jump(e.clientX);
          }
        }}
        onLostPointerCapture={() => {
          animate(overflow, 0, { type: "spring", bounce: 0.5 });
        }}
      >
        <motion.div
          style={{
            scaleX: useTransform(() => {
              if (ref.current) {
                let { width } = ref.current.getBoundingClientRect();

                return 1 + overflow.get() / width;
              }
            }),
            scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
            transformOrigin: useTransform(() => {
              if (ref.current) {
                let { left, width } = ref.current.getBoundingClientRect();

                return clientX.get() < left + width / 2 ? "right" : "left";
              }
            }),
            height: useTransform(scale, [1, 1.2], [6, 12]),
            marginTop: useTransform(scale, [1, 1.2], [0, -3]),
            marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
          }}
          className="flex grow"
        >
          <RadixSlider.Track className="relative isolate h-6 grow overflow-hidden rounded-full bg-kioskBlue-100 ">
            <RadixSlider.Range className="absolute h-6 bg-kioskBlue-300" />
          </RadixSlider.Track>
        </motion.div>
        <RadixSlider.Thumb />
      </RadixSlider.Root>

      <motion.div
        animate={{
          scale: region === "right" ? [1, 1.4, 1] : 1,
          transition: { duration: 0.25 },
        }}
        style={{
          x: useTransform(() =>
            region === "right" ? overflow.get() / scale.get() : 0
          ),
        }}
      ></motion.div>
    </motion.div>
  );
}

// Sigmoid-based decay function
function decay(value: number, max: number) {
  if (max === 0) {
    return 0;
  }

  let entry = value / max;
  let sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}

export { BouncySlider };
