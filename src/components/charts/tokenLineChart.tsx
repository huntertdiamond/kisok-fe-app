import { LineChart, Line, ResponsiveContainer } from "recharts";
import { getHexFromTailwindColor } from "@/lib/tailwind";

import { placeholderChartData } from "./placeholderChartData";
import { HStack, Typography, VStack } from "../elements";
import { DefaultToken, TimeframeForChart } from "@/types";
import { useState } from "react";
import { TabDisplay } from "./chartTimeframeTab";

function PlaceholderTokenLineChart({
  color = "kioskBlue-500",
  token,
}: {
  color: string;
  token: DefaultToken;
}) {
  const [duration, setDuration] = useState<TimeframeForChart>(
    TimeframeForChart.OneDay
  );

  const formattedColor = getHexFromTailwindColor(color);

  const chartData = {
    "1D": placeholderChartData(),
    "1W": placeholderChartData(),
    "1M": placeholderChartData(),
    "6M": placeholderChartData(),
    "1Y": placeholderChartData(),
    All: placeholderChartData(),
  };

  const handleDurationChange = (newDuration: TimeframeForChart) => {
    setDuration(newDuration);
  };

  return (
    <VStack gap={4}>
      <div className="h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={200}
            data={chartData[duration]}
            margin={{ top: 20, right: 1, bottom: 10, left: 1 }}
          >
            <Line
              type="monotone"
              dataKey="pv"
              stroke={formattedColor}
              strokeWidth={5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <HStack gap={4} horizontal="between">
        {Object.values(TimeframeForChart).map((val) => (
          <TabDisplay
            key={val}
            isSelected={duration === val}
            setIsSelected={handleDurationChange}
            textToDisplay={val}
            tailwindBgColor={token.internalColor}
            hexColor={formattedColor}
          />
        ))}
      </HStack>
    </VStack>
  );
}
export { PlaceholderTokenLineChart };
