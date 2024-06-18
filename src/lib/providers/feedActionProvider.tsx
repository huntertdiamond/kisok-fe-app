"use client";
import { createContext, useContext, useMemo, useState } from "react";

import { ModalOptions } from "@/types/internal/ui";
import { useSearchParams } from "next/navigation";
import {
  UserFrameInteraction,
  SelectedItemForFeedModal,
} from "@/types/internal/props";

type FeedActionContextValues = {
  selectedModalOption: ModalOptions | null;
  setSelectedModalOption: (value: ModalOptions | null) => void;

  selectedItemForModal: SelectedItemForFeedModal;
  setSelectedItemForModal: (value: SelectedItemForFeedModal) => void;

  userFrameInteraction: UserFrameInteraction | null;
  setUserFrameInteraction: (value: UserFrameInteraction | null) => void;
  showFrameModal: boolean;
  hideModal: () => void;
  viewingFid: number;
  showModal: boolean;
};

const FeedActionContext = createContext<FeedActionContextValues | undefined>(
  undefined
);

const useFeedActionContext = () => {
  const context = useContext(FeedActionContext);
  if (!context) {
    throw new Error(
      "useFeedActionContext must be used within a FeedLayoutProvider"
    );
  }
  return context;
};

const FeedActionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const searchParams = useSearchParams();
  const [selectedModalOption, setSelectedModalOption] =
    useState<ModalOptions | null>(null);

  const [selectedItemForModal, setSelectedItemForModal] =
    useState<SelectedItemForFeedModal>(null);

  const [userFrameInteraction, setUserFrameInteraction] =
    useState<UserFrameInteraction | null>(null);

  const showFrameModal = useMemo(() => {
    if (!userFrameInteraction) return false;
    return ["mint", "tx"].includes(userFrameInteraction.interactionType);
  }, [userFrameInteraction]);

  const viewingFid = useMemo(() => {
    const queryFid = searchParams.get("fid");
    if (!queryFid) return 53;
    return parseInt(queryFid);
  }, [searchParams]);

  function hideModal() {
    setSelectedModalOption(null);
    setSelectedItemForModal(null);
    setUserFrameInteraction(null);
  }

  const showModal = useMemo(() => {
    if (selectedModalOption) {
      return true;
    }
    if (userFrameInteraction) {
      return ["mint", "tx"].includes(userFrameInteraction.interactionType);
    } else return false;
  }, [selectedModalOption, userFrameInteraction]);

  return (
    <FeedActionContext.Provider
      value={{
        selectedModalOption,
        setSelectedModalOption,

        selectedItemForModal,
        setSelectedItemForModal,

        userFrameInteraction,
        setUserFrameInteraction,

        showFrameModal,

        hideModal,
        viewingFid,

        showModal,
      }}
    >
      {children}
    </FeedActionContext.Provider>
  );
};

export { useFeedActionContext, FeedActionsProvider };
