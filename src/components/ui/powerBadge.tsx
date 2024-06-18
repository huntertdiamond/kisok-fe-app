import { PowerBadgeIcon } from "@/assets/icons";

function PowerBadge({
  variant,
}: {
  variant: "feed" | "profile" | "quoteCast";
}) {
  const iconSizes = {
    feed: 18,
    quoteCast: 15,
    profile: 18,
  } as const;

  return (
    <PowerBadgeIcon height={iconSizes[variant]} width={iconSizes[variant]} />
  );
}

export { PowerBadge };
