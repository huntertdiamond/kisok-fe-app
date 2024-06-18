import { cva } from "class-variance-authority";

const linkChipVariants = cva(
  "flex gap-1 items-center justify-center px-3 py-1 rounded-full font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        ghost:
          " bg-kioskLayerTwo  border-transparent  text-secondary-foreground hover:bg-secondary/80 ring-neutral-400",
        outline: "rounded-full border border-neutral-300  bg-kioskLayerTwo",
      },
    },
  }
);
export { linkChipVariants };
