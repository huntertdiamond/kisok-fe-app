import { useFeedActionContext } from "@/lib/providers";
import { ModalOptions } from "@/types/internal/ui";
import { TipModalIndex } from "./tipping";
import {
  isBaseFarcasterUser,
  isBaseTokenObject,
  isFarcasterChannel,
} from "@/lib/typeGuards";
import { ProfileModalIndex } from "./profile";
import { ChannelModalIndex } from "./channel";
import { TokenModalIndex } from "./token";

const SelectedOptionModal: React.FC = () => {
  const { selectedModalOption, selectedItemForModal } = useFeedActionContext();
  return (
    <>
      {selectedModalOption === ModalOptions.Tip && <TipModalIndex />}

      {selectedModalOption === ModalOptions.ProfilePreview &&
      isBaseFarcasterUser(selectedItemForModal) ? (
        <ProfileModalIndex user={selectedItemForModal} />
      ) : null}

      {selectedModalOption === ModalOptions.ChannelPreview &&
      isFarcasterChannel(selectedItemForModal) ? (
        <ChannelModalIndex channel={selectedItemForModal} />
      ) : null}

      {selectedModalOption === ModalOptions.Token &&
      isBaseTokenObject(selectedItemForModal) ? (
        <TokenModalIndex token={selectedItemForModal} />
      ) : null}
    </>
  );
};

export { SelectedOptionModal };
