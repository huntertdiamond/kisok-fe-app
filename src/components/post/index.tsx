import { ParentPostObject } from "@/types/internal/feed";
import { cn } from "@/lib/tailwind/utils";

import { PostWrapper } from "./postWrapper";

import { UserHeader } from "../misc/userHeader";
import {
  FarcasterPostContainer,
  OnchainPostContainer,
  MirrorPostContainer,
  ZoraPostContainer,
} from "./postContainers";

interface FeedPostContainerProps extends React.HTMLAttributes<HTMLLIElement> {
  post: ParentPostObject;
  hideBottomBorder?: boolean;
  profile?: boolean;
  largeEmbed?: boolean;
}

const FeedPost: React.FC<FeedPostContainerProps> = ({
  className,
  post,
  hideBottomBorder = false,
  profile = false,
  largeEmbed = false,
  ...props
}) => {
  /**
   * Renders the post content based on the platform variant.
   *
   * @returns {JSX.Element | null} The rendered post content or null if the post type is invalid.
   */
  const renderPostContent = (): JSX.Element | null => {
    switch (post.platform) {
      case "zora":
        return <ZoraPostContainer post={post} />;
      case "mirror":
        return <MirrorPostContainer post={post} />;
      case "farcaster":
        return <FarcasterPostContainer post={post} />;
      case "onChain":
        return <OnchainPostContainer post={post} />;
      default:
        return null;
    }
  };

  return (
    <PostWrapper
      className={cn(
        className,
        !hideBottomBorder ? "" : "border-none",
        !profile ? "p-5" : "p-0",
        "gap-2"
      )}
      {...props}
    >
      <UserHeader user={post.postedBy} datePosted={post.datePosted} />
      {renderPostContent()}
    </PostWrapper>
  );
};

export { FeedPost };
