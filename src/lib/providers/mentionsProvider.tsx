import { createContext, useContext } from "react";
import { OptionProps } from "@/types/internal/mention";
export interface MentionsContextProps {
  notFoundContent: React.ReactNode;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  selectOption: (option: OptionProps) => void;
  onFocus: React.FocusEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
}

const MentionsContext = createContext<MentionsContextProps | undefined>(
  undefined
);

const useMentionsContext = () => {
  const context = useContext(MentionsContext);
  if (!context) {
    throw new Error(
      "useFeedModalContext must be used within a FeedLayoutProvider"
    );
  }
  return context;
};

export { useMentionsContext };

export default MentionsContext;
