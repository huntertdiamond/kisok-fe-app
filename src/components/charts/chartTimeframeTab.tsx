import { TimeframeForChart } from "@/types/internal/ui";
import { opacityCodes } from "@/lib/constants/opacityCodes";
import { Typography } from "../elements";

function TabDisplay({
  isSelected,
  setIsSelected,
  textToDisplay,
  tailwindBgColor,
  hexColor,
}: {
  isSelected: boolean;
  setIsSelected: (isSelected: TimeframeForChart) => void;
  textToDisplay: TimeframeForChart;
  tailwindBgColor: string;
  hexColor: string;
}) {
  return (
    <button
      className={`px-2.5 py-0.5  rounded-[12px]  flex items-center justify-center ${
        isSelected ? `text-${tailwindBgColor}` : ""
      }`}
      style={{
        backgroundColor: isSelected
          ? `${hexColor}${opacityCodes[10]}`
          : "transparent",
      }}
      onClick={() => setIsSelected(textToDisplay)}
    >
      <Typography
        variant="h3"
        className="text-kioskBlueSecondary-600 my-1 font-bold leading-none"
        style={{ color: `${hexColor}${opacityCodes[100]}` }}
      >
        {textToDisplay}
      </Typography>
    </button>
  );
}

export { TabDisplay };
