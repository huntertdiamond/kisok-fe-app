import { Dispatch, SetStateAction, useState } from "react";
import { HStack } from "../elements";
import { XIcon } from "lucide-react";

function CastImagesContainer({
  imagesToUpload,
  setImagesToUpload,
}: {
  imagesToUpload: File[];
  setImagesToUpload: Dispatch<SetStateAction<File[]>>;
}) {
  const handleFileRemove = (index: number) => {
    setImagesToUpload((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return imagesToUpload.length > 0 ? (
    <HStack gap={2} horizontal="leading" wrap>
      {imagesToUpload.map((image, index) => (
        <div
          key={index}
          className="bg-neutral-100 rounded-[20px] p-2 flex items-center justify-center relative group transition transform duration-500 ease-in-out h-min hover:cursor-pointer"
          onClick={() => handleFileRemove(index)}
        >
          <button className="group-hover:opacity-100 opacity-0 absolute top-4 right-4 z-20 ">
            <XIcon />
          </button>
          <img
            src={URL.createObjectURL(image)}
            alt="Selected file"
            className=" w-40 rounded-[12px] object-contain group-hover:opacity-50"
          />
        </div>
      ))}
    </HStack>
  ) : null;
}

export { CastImagesContainer };
