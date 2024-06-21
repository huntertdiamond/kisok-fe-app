import { HStack, Typography, VStack } from "../elements";
import { StyledCard } from "../elements/cards/styledCard";
/*
I've never been a huge fan of compound components but wanted to give them another try.
*/
const DocsRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1100px] w-full my-4">
      <div className="flex flex-col md:flex-row gap-2 items-start md:justify-between justify-center w-full">
        {children}
      </div>
    </section>
  );
};

DocsRow.displayName = "DocsRow";

DocsRow.LeftColumn = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <VStack
      horizontal="leading"
      vertical="top"
      gap={2}
      className="max-w-[500px]"
    >
      <Typography variant="h1" className="font-bold">
        {title}
      </Typography>
      <Typography variant="body" secondary className="leading-16">
        {description}
      </Typography>
      {children}
    </VStack>
  );
};
// @ts-ignore
DocsRow.LeftColumn.displayName = "DocsRow.LeftColumn";

DocsRow.RightColumn = ({
  children,
  styled,
}: {
  children: React.ReactNode;
  styled?: boolean;
}) => {
  return styled ? (
    <StyledCard
      childClassName="p-0 overflow-hidden"
      parentClassName="max-w-[500px] h-min w-full"
    >
      {children}
    </StyledCard>
  ) : (
    <div className="max-w-[500px] w-full h-min">{children}</div>
  );
};
// @ts-ignore
DocsRow.RightColumn.displayName = "DocsRow.RightColumn";

interface SelectionChipProps<T> {
  option: T;
  optionSetter: (option: T) => void;
  isSelected: boolean;
  displayText: string;
}

DocsRow.SelectionChip = function <T>({
  option,
  optionSetter,
  isSelected,
  displayText,
}: SelectionChipProps<T>) {
  return (
    <button
      onClick={() => optionSetter(option)}
      className={`rounded-full px-3 py-1.5 ${
        isSelected
          ? "bg-kioskBlue-100 text-kioskBlue-500 shadow-lightInner"
          : "bg-kioskBlue-50/50 text-kioskTextSecondary"
      }`}
    >
      <Typography variant="body">{displayText}</Typography>
    </button>
  );
};
// @ts-ignore
DocsRow.SelectionChip.displayName = "DocsRow.SelectionChip";

interface SelectionRowProps<T> {
  options: T[];
  selectedOption: T;
  optionSetter: (option: T) => void;
  displayText: (option: T) => string;
}

DocsRow.SelectionRow = function <T>({
  options,
  optionSetter,
  selectedOption,
  displayText,
}: SelectionRowProps<T>) {
  return (
    <HStack gap={2} horizontal="leading" vertical="center" wrap>
      {options.map((option, index) => (
        <DocsRow.SelectionChip
          key={index}
          option={option}
          optionSetter={optionSetter}
          isSelected={selectedOption === option}
          displayText={displayText(option)}
        />
      ))}
    </HStack>
  );
};
// @ts-ignore
DocsRow.SelectionRow.displayName = "DocsRow.SelectionRow";

export { DocsRow };
