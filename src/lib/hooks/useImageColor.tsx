// THIS IS A REFACTOR FROM https://github.com/jeffersonlicet/use-image-color
import quantize, { RgbPixel } from "quantize";
import { useEffect, useState, useCallback } from "react";

const CHANNELS = 4;

enum Formats {
  RGB = "rgb",
  HEX = "hex",
}

const DEFAULT_SETTINGS: Settings = {
  colors: 5,
  cors: false,
  windowSize: 50,
  format: "HEX",
};

interface Settings {
  colors: number;
  cors: boolean;
  windowSize: number;
  format: keyof typeof Formats;
}

interface UseImageColorResult {
  colors: string[] | undefined;
}

function useImageColor(
  src: string,
  _settings: Partial<Settings> = {}
): UseImageColorResult {
  const settings: Settings = { ...DEFAULT_SETTINGS, ..._settings };
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  const chunk = useCallback(
    (original: Uint8ClampedArray, chunkSize = CHANNELS): RgbPixel[] => {
      const data: RgbPixel[] = [];
      for (
        let i = 0;
        i < original.length;
        i += chunkSize * settings.windowSize
      ) {
        const pixel: RgbPixel = [original[i], original[i + 1], original[i + 2]];
        data.push(pixel);
      }
      return data;
    },
    [settings.windowSize]
  );

  const mapToHex = useCallback((values: RgbPixel): string => {
    return `#${values
      .map((i) => {
        const h = i.toString(16);
        return h.length < 2 ? `0${h}` : h;
      })
      .join("")}`;
  }, []);

  if (!Formats[settings.format]) {
    throw new Error("Invalid output format");
  }

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");
    const context = canvas.getContext("2d");

    if (settings.cors) {
      img.setAttribute("crossOrigin", "");
    }

    img.onload = () => {
      if (context) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        context.drawImage(img, 0, 0);
        const { data } = context.getImageData(
          0,
          0,
          img.naturalWidth,
          img.naturalHeight
        );
        const colorMap = quantize(chunk(data), settings.colors);
        if (!colorMap) return;
        const palette = colorMap.palette();
        setColors(
          settings.format === "RGB"
            ? palette.map((rgb) => `rgb(${rgb.join(",")})`)
            : palette.map(mapToHex)
        );
      }
    };

    img.src = src;
  }, [src, settings.cors, settings.colors, settings.format, chunk, mapToHex]);

  return { colors };
}

export { useImageColor };
