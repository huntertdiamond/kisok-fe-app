import { useCallback } from "react";
import { ModalOptions, InlineChipValues } from "@/types/internal/ui";
import { useFeedActionContext } from "../providers";

function usePressInlineChip() {
  const { setSelectedModalOption, setSelectedItemForModal } =
    useFeedActionContext();

  const pressInlineChip = useCallback(
    <T extends keyof InlineChipValues>(
      chipVariant: T,
      selectedValue: InlineChipValues[T] | null
    ) => {
      setSelectedModalOption(
        chipVariant === "user"
          ? ModalOptions.ProfilePreview
          : chipVariant === "channel"
            ? ModalOptions.ChannelPreview
            : chipVariant === "token"
              ? ModalOptions.Token
              : ModalOptions.CastPreview
      );

      setSelectedItemForModal(selectedValue);
    },
    [setSelectedModalOption, setSelectedItemForModal]
  );

  return { pressInlineChip };
}

export { usePressInlineChip };
