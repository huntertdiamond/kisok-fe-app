import React from "react";
import { VStack } from "@/components/elements";
import { ProfileModalBody } from "./profileModalBody";
import { ProfileModalHeader } from "./profileModalHeader";
import { BaseFarcasterUser } from "@/types/internal/user";
import { useFeedActionContext, useFeedModalContext } from "@/lib/providers";
import { useQuery } from "@tanstack/react-query";
import { fetchApiData } from "@/lib/fetch/api";
import { ExpandedFarcasterProfile } from "@/types/internal/farcaster";
import { ModalDragHandle } from "../shared";

function ProfileModalIndex({ user }: { user: BaseFarcasterUser }) {
  const { modalHeight } = useFeedModalContext();
  const { viewingFid } = useFeedActionContext();
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile", user.username],
    queryFn: () =>
      fetchApiData("profile", {
        viewingFid,
        fidBeingViewed: user.farcasterId,
      }),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return (
    <VStack horizontal="leading" vertical="top" gap={1}>
      <ModalDragHandle className="pb-0 w-full items-center justify-center py-1" />

      <VStack
        horizontal="leading"
        vertical="top"
        gap={1}
        className="px-4 pb-6 py-3"
      >
        <ProfileModalHeader user={user} />
        {modalHeight === "full" && !isError && (
          <ProfileModalBody
            user={user}
            profileData={profileData}
            profileDataIsLoading={isLoading}
          />
        )}
      </VStack>
    </VStack>
  );
}

export { ProfileModalIndex };
