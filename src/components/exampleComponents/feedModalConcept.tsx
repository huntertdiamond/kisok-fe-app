// import StaticCha
import { cn } from "@/lib/tailwind";
import { StyledCard } from "../elements/cards/styledCard";
import { StaticChannelModal } from "./modal/staticChannelModal";
import { StaticProfileModal } from "./modal/staticProfileModal";
import { TokenModalIndex } from "../feed/modal/token";
import { higherStaticBaseToken } from "@/lib/staticData/baseTokens";
import { StaticTokenModal } from "./modal/staticTokenModal";
import { SelectedOptionModal } from "../feed/modal/selectedOptionModal";
import { TipModalIndex } from "../feed/modal/tipping";

const staticModalSmallHeights = {
  tip: "h-[350px]",
  profile: "h-[160px]",
  channel: "h-[330px]",
  token: "h-[350px]",
};
function FeedModalConcept({
  modalHeight,
  modalOption,
}: {
  modalHeight: "small" | "full";
  modalOption: "tip" | "profile" | "channel" | "token";
}) {
  return (
    <StyledCard
      childClassName="p-0"
      parentClassName={cn(
        modalHeight === "small"
          ? staticModalSmallHeights[modalOption]
          : "h-[777px]"
      )}
    >
      {modalOption === "channel" ? (
        <StaticChannelModal modalHeight={modalHeight} />
      ) : null}

      {modalOption === "profile" ? (
        <StaticProfileModal modalHeight={modalHeight} />
      ) : null}
      {modalOption === "token" ? (
        <StaticTokenModal
          token={higherStaticBaseToken}
          modalHeight={modalHeight}
        />
      ) : null}

      {modalOption === "tip" ? <TipModalIndex /> : null}
    </StyledCard>
  );
}
export { FeedModalConcept };
