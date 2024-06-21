"use client";
import { DefaultToken } from "@/types";

import { AnimatedListItemWrapper } from "@/components/misc/animatedListItemWrapper";

import { HStack, VStack, Typography } from "@/components/elements";
import { formatNumberWithCommas } from "@/lib/formatters/numbers";

import { cn } from "@/lib/tailwind";
import { chainIcons } from "@/lib/constants/chainIcons";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TipTokenRowProps = ComponentProps<typeof motion.div> & {
  token: DefaultToken;
  index: number;
  balance: number;
  childClassName?: string;
};

const TipTokenRow: React.FC<TipTokenRowProps> = ({
  token,
  index,
  balance,
  childClassName,
  ...divProps
}) => {
  return (
    <motion.div
      className="w-full group hover:cursor-pointer"
      layoutId={token.address}
      {...divProps}
    >
      <AnimatedListItemWrapper index={index}>
        <HStack
          gap={2}
          vertical="center"
          horizontal="between"
          className={cn("p-2 rounded-[12px]", childClassName)}
        >
          <motion.div
            className={cn(
              "relative inline-block",
              "h-10 w-10 min-w-10 min-h-10"
            )}
          >
            <img
              src={token.image}
              alt={"token"}
              height={50}
              width={50}
              className={cn("h-10 w-10 min-w-10 min-h-10 rounded-full")}
            />
            <img
              src={chainIcons[token.chainId]}
              alt={"chain"}
              height={50}
              width={50}
              className={cn(
                "absolute -bottom-1 -right-1",
                "h-6 w-6 min-h-6 min-w-6 rounded-full border-2 border-white"
              )}
            />
          </motion.div>
          <VStack gap={1} horizontal="leading" vertical="top">
            <Typography variant="h3" className="font-medium">
              {token.name}
            </Typography>
            <Typography variant="body" secondary>
              ${token.ticker}
            </Typography>
          </VStack>
          <VStack horizontal="trailing" vertical="top">
            <Typography variant="h3">
              ${formatNumberWithCommas(token.currentPrice * balance)}
            </Typography>
            <Typography variant="body" secondary>
              {formatNumberWithCommas(balance)}
            </Typography>
          </VStack>
        </HStack>
      </AnimatedListItemWrapper>
    </motion.div>
  );
};

export { TipTokenRow };
