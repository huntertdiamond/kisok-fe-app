import { cn } from "@/lib/tailwind";
import { StyledCard } from "../elements/cards/styledCard";
import { StaticChannelModal } from "./modal/staticChannelModal";
import { StaticProfileModal } from "./modal/staticProfileModal";

import { higherStaticBaseToken } from "@/lib/staticData/baseTokens";
import { StaticTokenModal } from "./modal/staticTokenModal";

const staticModalSmallHeightVariants = {
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
          ? staticModalSmallHeightVariants[modalOption]
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
    </StyledCard>
  );
}
export { FeedModalConcept };
