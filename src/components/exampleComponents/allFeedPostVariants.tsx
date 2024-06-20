import { StyledCard } from "../elements/cards/styledCard";

import { FeedPost } from "../post";
import { ParentPostObject } from "@/types";

function AllFeedPostVariants({
  selectedCast,
}: {
  selectedCast: ParentPostObject;
}) {
  return (
    <div className="w-full">
      <StyledCard className="p-4">
        <FeedPost post={selectedCast} hideBottomBorder largeEmbed profile />
      </StyledCard>
    </div>
  );
}

export { AllFeedPostVariants };
