type ZoraUserResponse = {
  address: string;
  addressShort: string;
  avatar: string;
  username: string;
  displayName: string;
  ensName: string;
  handle: string;
  profileId: string;
  profileName: string;
  ensRecords: ZoraUserRecords;
  description: string;
  totalFollowers: number;
  totalFollowing: number;
  extension: ZoraStylingExtension;
  extensionUrl: string;
};

type ZoraUserRecords = {
  address: string;
  ens_name: string;
  text_records: TextRecords;
};

type TextRecords = {
  avatar: string;
  url: null;
  description: null;
  github: null;
  twitter: null;
  instagram: null;
  discord: null;
  tiktok: null;
};

type ZoraStylingExtension = {
  theme: ZoraProfileTheme;
  links: ZoraProfileLinks;
  options: ZoraProfileResponseOptions;
  profile: ZoraProfileDisplay;
  template: string;
};

type ZoraProfileLinks = {
  twitter: string | null;
  instagram: string | null;
  farcaster: string | null;
  tiktok: string | null;
  discord: string | null;
  website: string | null;
};

type ZoraProfileResponseOptions = {
  showMetadataHistories: boolean;
  useBorders: boolean | null;
  textTransform: ZoraTextTransform;
  backgroundImage: ZoraProfileBgImage;
  dropShadow: ZoraProfileDropShadow;
  textStyling: ZoraTextStyling;
};

type ZoraProfileBgImage = {
  image: string;
  title: string;
  blur: string;
  opacity: string;
  size: number;
  repeat: boolean;
  style: string;
};

type ZoraProfileDropShadow = {
  spreadRadius: number;
  blurRadius: number;
  color: string;
  opacity: number;
};

type ZoraTextStyling = {
  styleType: string;
  horizontalLength: number;
  verticalLength: number;
  blurRadius: number;
  color: string;
  opacity: number;
};

type ZoraTextTransform = {
  heading: string;
  body: string;
  caption: string;
};

type ZoraProfileDisplay = {
  displayOptions: DisplayOptions;
};

type DisplayOptions = {
  initialView: string | null;
};

type ZoraProfileTheme = {
  color: ZoraProfileColors;
  font: ZoraProfileFonts;
  button: ZoraButton;
  unit: ZoraUnit;
};

type ZoraButton = {
  shape: string;
};

type ZoraProfileColors = {
  background: string;
  text: string;
  accent: string;
  accentText: string;
  border: string;
};

type ZoraProfileFonts = {
  heading: ZoraTextFormat;
  body: ZoraTextFormat;
  caption: ZoraTextFormat;
};

type ZoraTextFormat = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};

type ZoraUnit = {
  radius: string;
  base: string;
};

export type { ZoraUserResponse };
