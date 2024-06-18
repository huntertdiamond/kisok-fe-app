import { cn } from "@/lib/tailwind/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

function AvatarStack({
  avatars,
  noOfOthers,
  variant,
}: {
  avatars: string[];
  noOfOthers?: number;
  variant: "small" | "medium" | "large";
}) {
  const variants = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  } as const;
  return (
    <div className="flex -space-x-2 ">
      {avatars.map((avatar, index) => (
        <Avatar
          className={cn("border-2 border-white", variants[variant])}
          key={index}
        >
          <AvatarImage src={avatar} />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
      ))}
      {noOfOthers ? (
        <Avatar
          className={cn(
            "border-2 border-white bg-white flex items-center justify-center",
            variants[variant]
          )}
        >
          <AvatarFallback className="text-kioskTextSecondary text-xs bg-kioskLayerTwo ">
            +{noOfOthers}
          </AvatarFallback>
        </Avatar>
      ) : null}
    </div>
  );
}

export { AvatarStack };
