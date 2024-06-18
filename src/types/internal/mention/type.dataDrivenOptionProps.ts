import { OptionProps } from "./type.optionProps";

interface DataDrivenOptionProps extends Omit<OptionProps, "children"> {
  label?: React.ReactNode;
}

export type { DataDrivenOptionProps };
