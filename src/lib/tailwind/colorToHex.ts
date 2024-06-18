import config from "../../../tailwind.config";
type ColorShades = {
  [key: string]: string;
};

type ExtendedColors = {
  [key: string]: string | ColorShades;
};

function getHexFromTailwindColor(tailwindColor: string): string {
  const [colorName, shade] = tailwindColor.split("-");

  const colors: ExtendedColors = config.theme.extend.colors;

  const colorShades = colors[colorName];
  if (typeof colorShades === "object" && shade in colorShades) {
    return colorShades[shade];
  }

  return "#5f84fb";
}

export { getHexFromTailwindColor };
