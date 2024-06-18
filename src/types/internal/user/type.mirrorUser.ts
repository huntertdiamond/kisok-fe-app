import { StaticImageData } from "next/image";

type MirrorUser = {
  mirrorUserName: string;
  mirrorAddress: `0x${string}`;
  mirrorPfp: string | StaticImageData;
  mirrorBannerImage: string | StaticImageData;
};

export type { MirrorUser };
