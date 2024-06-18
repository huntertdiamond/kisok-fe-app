import { InternalFarcasterCast } from "@/types/internal/feed";
import { BaseFrameContainer } from "./frameContainer";

function FrameContainer({ cast }: { cast: InternalFarcasterCast }) {
  const frame = cast.frame;
  if (!frame) return null;

  return (
    <div className="flex w-full flex-col gap-2  p-1.5 border  rounded-[16px] mb-1">
      <BaseFrameContainer frame={frame[0]} cast={cast} />
    </div>
  );
}

export { FrameContainer };
