import { HStack, Typography } from "../elements";

function FollowerFollowingLabel({
  value,
  isFollowers = true,
}: {
  value: string;
  isFollowers?: boolean;
}) {
  return (
    <HStack className="w-min" gap={1}>
      <Typography variant="body">{value}</Typography>
      <Typography variant="body" secondary>
        {isFollowers ? "Followers" : "Following"}
      </Typography>
    </HStack>
  );
}
export { FollowerFollowingLabel };
