import { DocsRow } from "@/components/docs/docsRow";

import { MobileKeyboardAccessory } from "../mobileKeyboardAccessory";

function KeyboardAccessoryRow() {
  return (
    <DocsRow>
      <DocsRow.LeftColumn
        title="Keyboard Accessory"
        description="This is a really simple component that could be used in tandem with the <CreateCastInput /> component to make the cast creation process more user friendly."
      >
        <></>
      </DocsRow.LeftColumn>
      <DocsRow.RightColumn styled>
        <MobileKeyboardAccessory />
      </DocsRow.RightColumn>
    </DocsRow>
  );
}

export { KeyboardAccessoryRow };
