"use client";
import { createContext, useContext, useState } from "react";

type FeedModalContextValues = {
  modalHeight: "hidden" | "small" | "full";
  setModalHeight: (height: "hidden" | "small" | "full") => void;

  dragY: number;
  setDragY: (dragY: number) => void;
};

const FeedModalContext = createContext<FeedModalContextValues | undefined>(
  undefined
);

const useFeedModalContext = () => {
  const context = useContext(FeedModalContext);
  if (!context) {
    throw new Error(
      "useFeedModalContext must be used within a FeedLayoutProvider"
    );
  }
  return context;
};

const FeedModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalHeight, setModalHeight] = useState<"hidden" | "small" | "full">(
    "small"
  );
  const [dragY, setDragY] = useState(0);

  return (
    <FeedModalContext.Provider
      value={{ modalHeight, setModalHeight, dragY, setDragY }}
    >
      {children}
    </FeedModalContext.Provider>
  );
};

export { useFeedModalContext, FeedModalProvider };
