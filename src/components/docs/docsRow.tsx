import { HStack, Typography, VStack } from "../elements";
import { StyledCard } from "../elements/cards/styledCard";

const DocsRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1100px] w-full my-4">
      <HStack gap={2} horizontal="between" vertical="top">
        {children}
      </HStack>
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
    <VStack horizontal="leading" vertical="top" gap={2} className="w-[500px]">
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
      parentClassName="max-w-[450px] h-min"
    >
      {children}
    </StyledCard>
  ) : (
    <div className="w-[450px] h-min">{children}</div>
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
      className={`rounded-full px-3 py-0.5 ${
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
    <HStack gap={2} horizontal="leading" vertical="center">
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
