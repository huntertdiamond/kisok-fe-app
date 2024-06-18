import { ConceptRowLeftColumn, ConceptRowRightColumn } from "../boilerplate";
import { MobileKeyboardAccessory } from "../mobileKeyboardAccessory";

function KeyboardAccessoryRow() {
  return (
    <section className="max-w-[1100px] w-full flex">
      <ConceptRowLeftColumn
        title="Keyboard Accessory"
        description="The keyboard accessory is a small component that is placed on the bottom of the keyboard. It contains buttons for common functions such as copy, paste, and select all."
      >
        <></>
      </ConceptRowLeftColumn>
      <ConceptRowRightColumn>
        <MobileKeyboardAccessory />
      </ConceptRowRightColumn>
    </section>
  );
}

export { KeyboardAccessoryRow };
