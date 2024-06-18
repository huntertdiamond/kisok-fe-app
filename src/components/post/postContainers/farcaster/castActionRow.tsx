import {
  HeartIcon,
  ReplyIcon,
  RepostIcon,
  GridIcon,
  HigherIcon,
  DegenIcon,
  ShareIcon,
} from "@/assets/icons";
import { IconButton } from "@/components/elements/buttons/iconButton";

import { Typography } from "@/components/elements";

import { useFeedActionContext } from "@/lib/providers";

import { ModalOptions, InternalFarcasterCast } from "@/types/internal";

import { likeButtonHandler } from "@/lib/formatters/cast";

function CastActionsRow({ cast }: { cast: InternalFarcasterCast }) {
  const { setSelectedModalOption, setSelectedItemForModal } =
    useFeedActionContext();

  const likeButtonVariants = {
    higher: <HigherIcon />,
    degen: <DegenIcon size="14" fill_color="#000" />,
    default: <HeartIcon />,
  } as const;

  const handledVariant = likeButtonHandler(cast);

  function clickTip() {
    setSelectedModalOption(ModalOptions.Tip);
    setSelectedItemForModal(cast);
  }

  return (
    <div className="flex w-full gap-2">
      <div className="w-2/3 flex justify-between items-center">
        <IconButton>
          <ReplyIcon />
          <Typography variant="body" className="text-xs">
            {cast.replyCount}
          </Typography>
        </IconButton>
        <IconButton>
          <RepostIcon />
          <Typography variant="body" className="text-xs">
            {cast.recastCount}
          </Typography>
        </IconButton>
        <IconButton>
          {likeButtonVariants[handledVariant]}
          <Typography variant="body" className="text-xs">
            {cast.likeCount}
          </Typography>
        </IconButton>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <IconButton onClick={clickTip}>
          <GridIcon stroke="#000" height={20} width={20} />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  );
}

export { CastActionsRow };
