import { XLogoIcon } from "@/assets/icons/xLogoIcon";
import { HStack, Typography, VStack } from "@/components/elements";

import { IconButton } from "../elements/buttons/iconButton";
function TwitterEmbedDisplay() {
  return (
    <HStack
      gap={4}
      padding={2}
      horizontal="leading"
      vertical="center"
      rounded={10}
      className="border"
    >
      <IconButton>
        <XLogoIcon height="18" width="18" />
      </IconButton>
      <VStack horizontal="leading" gap={0}>
        <Typography variant="body">
          This is a cool tweet somebody posted!
        </Typography>
        <Typography variant="body" className="text-xs" secondary>
          It would be a real shame if I didn{"'"}t get the data for it
        </Typography>
      </VStack>
    </HStack>
  );
}
export { TwitterEmbedDisplay };
