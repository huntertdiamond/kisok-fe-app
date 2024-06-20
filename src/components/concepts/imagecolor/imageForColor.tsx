// THIS IS A REFACTOR FROM https://github.com/jeffersonlicet/use-image-color
import React, { CSSProperties } from "react";
import { useImageColor } from "@/lib/hooks/useImageColor";

const wrapperDiv: CSSProperties = {
  width: "100%",
  position: "relative",
};

const bg: CSSProperties = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
};
const imageStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
  position: "relative",
};
interface ImageForColorProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  style?: CSSProperties;
  thumbnail: string;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
}

const ImageForColor: React.FC<ImageForColorProps> = ({
  src,
  style = {},
  thumbnail,
  wrapperStyle = {},
  wrapperClassName = "",
  ...props
}) => {
  const { colors } = useImageColor(thumbnail, { cors: true });

  return (
    <div
      className={wrapperClassName}
      style={{ ...wrapperDiv, ...wrapperStyle }}
    >
      {colors && <div style={{ ...bg, backgroundColor: colors[0] }} />}
      <img style={{ ...imageStyle, ...style }} src={src} {...props} />
    </div>
  );
};

export { ImageForColor };
