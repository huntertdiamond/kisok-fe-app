import React from "react";
import { TokenIcon } from "@/assets/icons/tokenIcon";
import { Typography } from "@/components/elements";
import { cn } from "@/lib/tailwind/utils";

interface TokenChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ticker: string;
  twentyFourHourPriceChange: number;
}

function TokenChip({
  ticker,
  className,
  twentyFourHourPriceChange,
  ...props
}: TokenChipProps) {
  let priceChangeColor = "text-kioskTextSecondary";
  if (twentyFourHourPriceChange > 0) {
    priceChangeColor = "text-kioskGreen-600";
  }
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-full border border-kioskLayerTwo px-2 py-[1px]  font-medium transition-colors focus:outline-none focus:ring-1  focus:ring-offset-2  gap-1",
        "bg-kioskLayerTwo/40 text-black shadow-lightInner",
        className
      )}
      {...props}
    >
      <TokenIcon
        stroke="#000"
        fill="#000"
        strokeWidth={0.01}
        height={20}
        width={20}
      />
      <Typography variant="body" className={cn("text-[14px]")}>
        ${ticker}
      </Typography>
      <Typography
        variant="body"
        className={cn("text-[14px]", priceChangeColor)}
      >
        {twentyFourHourPriceChange}%
      </Typography>
    </button>
  );
}

export { TokenChip };
