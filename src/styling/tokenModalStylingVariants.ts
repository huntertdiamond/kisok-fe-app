import { cva } from "class-variance-authority";

const tokenModalStylingVariants = cva(
  "flex flex-col bg-gradient-to-b p-4 w-full  items-start justify-start pb-8",
  {
    variants: {
      variant: {
        kioskRed: "from-kioskRed-100  to-white via-kioskRed-50",
        kioskGreen: "from-kioskGreen-100  to-white via-kioskGreen-50",
        kioskBlue: "from-kioskBlue-100  to-white via-kioskBlue-50",
        kioskYellow: "from-kioskYellow-100  to-white via-kioskYellow-50",
        kioskFuschia: "from-kioskFuschia-100  to-white via-kioskFuschia-50",
        kioskPurple: "from-kioskPurple-100  to-white via-kioskPurple-50",
        kioskBlueSecondary:
          "from-kioskBlueSecondary-100  to-white via-kioskBlueSecondary-50",
        unknown: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "unknown",
    },
  }
);
export { tokenModalStylingVariants };
