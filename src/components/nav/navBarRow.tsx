import { Home, PlusIcon, User } from "lucide-react";
import { cn } from "@/lib/tailwind";
import { HStack } from "../elements";

const icons = [
  {
    Component: Home,
    name: "feed",
    className: "text-kioskBlue-300 hover:text-kioskBlue-200",
  },
  {
    Component: PlusIcon,
    name: "create a post",
    className: "text-neutral-400 hover:text-kioskBlue-200",
  },
  {
    Component: User,
    name: "profile",
    className: "text-neutral-400 hover:text-kioskBlue-200",
  },
];

function NavBarRow() {
  return (
    <HStack>
      <HStack
        vertical="center"
        horizontal="center"
        rounded={999}
        padding={2}
        className="z-[100] bottom-2 fixed  shadow-heavyShadow text-white bg-white/80  max-w-[200px] "
      >
        {icons.map(({ Component, className, name }, index) => (
          <button
            key={index}
            className="p-2 "
            onClick={() => {
              alert(name);
            }}
          >
            <Component className={cn(className)} strokeWidth={2} />
          </button>
        ))}
      </HStack>
    </HStack>
  );
}

export { NavBarRow };
