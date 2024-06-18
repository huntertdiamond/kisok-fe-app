import { cn } from "@/lib/tailwind";
import React from "react";
import { Tab } from "./tabForTabBar";

interface TabBarLineProps extends React.ComponentPropsWithoutRef<"div"> {
  center?: boolean;
  layoutId?: string;
  tabs: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabBarLine: React.FC<TabBarLineProps> = ({
  center,
  layoutId,
  tabs,
  className,
  selectedTab,
  setSelectedTab,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-start gap-2",
        center && "justify-center",
        className
      )}
      {...props}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selectedTab === tab}
          setSelected={setSelectedTab}
          key={tab}
          customID={layoutId}
        />
      ))}
    </div>
  );
};

export { TabBarLine };
