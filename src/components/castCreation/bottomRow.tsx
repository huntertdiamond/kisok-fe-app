import { ImageIcon } from "lucide-react";
import { HStack, Typography } from "../elements";
import { WalletIcon } from "@/assets/icons";
import { useCreateCast } from "@/lib/hooks/useCreateCast";
import { AnimatedButton } from "../elements/buttons/animatedButton";
import { Dispatch, useState } from "react";

const MAX_BYTES_FOR_BODY = 320;
function TextLengthDisplay({ textLength }: { textLength: number }) {
  const variants = {
    default: "text-neutral-400",
    warning: "text-orange-400",
    error: "text-kioskRed-400",
  };

  const getVariant = (length: number) => {
    if (length <= 250) return variants.default;
    if (length <= MAX_BYTES_FOR_BODY) return variants.warning;
    return variants.error;
  };

  return (
    <div>
      <Typography variant="body" className={getVariant(textLength)}>
        {textLength}/{MAX_BYTES_FOR_BODY}
      </Typography>
    </div>
  );
}
function CastCreationBottomRow({
  handleSubmit,
  textValue,
  setImagesToUpload,
}: {
  handleSubmit: () => void;
  textValue: string;
  setImagesToUpload: Dispatch<React.SetStateAction<File[]>>;
}) {
  const { calculateTextLength } = useCreateCast();
  const textLength = calculateTextLength(textValue);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const file = files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        setImagesToUpload((prevValues) => [...prevValues, file]);
      } else {
        alert("Please select a .png or .jpeg file.");
      }
    }
  };

  return (
    <HStack horizontal="between" vertical="center">
      <HStack
        gap={4}
        horizontal="leading"
        className="text-neutral-400 stroke-neutral-400"
      >
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center hover:cursor-pointer">
            <ImageIcon size={20} />
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept=".png, .jpeg"
            onChange={handleFileSelected}
          />
        </label>

        <button
          onClick={() =>
            alert(
              "this doesn't do anything, but could upload NFTs from wallet, a tx / a token holding"
            )
          }
        >
          <WalletIcon />
        </button>
      </HStack>

      <HStack vertical="center" horizontal="trailing" gap={4}>
        <TextLengthDisplay textLength={textLength} />
        <AnimatedButton
          idleText="Share"
          loadingText="Loading"
          successText="Done"
          buttonFn={handleSubmit}
        />
      </HStack>
    </HStack>
  );
}

export { CastCreationBottomRow };
