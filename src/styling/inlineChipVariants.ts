import { cva } from "class-variance-authority";

const inlineChipVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-[1px] my-[2px] font-medium transition-colors focus:outline-none focus:ring-1  focus:ring-offset-2 mx-[2px] gap-1",
  {
    variants: {
      variant: {
        token:
          "border-kioskGreen-400/40 text-kioskGreen-700 focus:ring-kioskGreen-600 bg-kioskGreen-100 shadow-lightInner",
        user: "border-kioskBlue-300 text-kioskBlue-700 focus:ring-kioskBlue-600 bg-kioskBlue-100 shadow-lightInner",
        channel:
          "border-kioskPurple-400 text-kioskPurple-700 focus:ring-kioskPurple-600  bg-kioskPurple-100 shadow-lightInner",
        ghost: "bg-kioskLayerTwo/40 text-black shadow-lightInner",
      },
    },
  }
);

export { inlineChipVariants };
