import Image from "next/image";
import zoraLogo from "../images/zoraLogo.png";

import { cn } from "@/lib/tailwind/utils";

function ZoraIcon({ variant }: { variant: "inFeed" | "profile" }) {
  const variants = {
    inFeed: "h-[20px] w-[20px]",
    profile: "h-[40px] w-[40px]",
  };
  return (
    <div className="items-center flex">
      <Image
        src={zoraLogo}
        alt="ZORA"
        height={40}
        width={40}
        className={cn(`rounded-full`, variants[variant])}
      />
    </div>
  );
}

export { ZoraIcon };
