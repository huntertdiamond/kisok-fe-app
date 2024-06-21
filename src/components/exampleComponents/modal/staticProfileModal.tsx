import { VStack } from "@/components/elements";
import { ProfileModalBody } from "@/components/feed/modal/profile/profileModalBody";

import { ModalDragHandle } from "@/components/feed/modal/shared";
import { hunterUserObject } from "@/lib/staticData/staticFcUsers";
import { hunterProfileData } from "@/lib/staticData/staticProfileData";
import { StaticProfileModalHeader } from "./staticProfileModalHeader";

function StaticProfileModal({
  modalHeight,
}: {
  modalHeight: "small" | "full";
}) {
  return (
    <VStack
      horizontal="leading"
      vertical="top"
      gap={1}
      className="overflow-y-hidden "
    >
      <ModalDragHandle className="pb-0 w-full items-center justify-center py-1 " />

      <VStack
        horizontal="leading"
        vertical="top"
        gap={1}
        className="px-4 pb-6 py-3"
      >
        <StaticProfileModalHeader
          user={hunterUserObject}
          modalHeight={modalHeight}
        />
        {modalHeight === "full" && (
          <ProfileModalBody
            user={hunterUserObject}
            profileData={hunterProfileData}
            profileDataIsLoading={false}
          />
        )}
      </VStack>
    </VStack>
  );
}

export { StaticProfileModal };
