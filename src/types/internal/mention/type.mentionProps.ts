import { Placement } from "./type.placement";
import { Direction } from "./type.direction";
import { TextAreaProps } from "rc-textarea";

import {
  filterOption as defaultFilterOption,
  validateSearch as defaultValidateSearch,
} from "@/lib/customMention";
import { OptionProps } from "./type.optionProps";
import { DataDrivenOptionProps } from "./type.dataDrivenOptionProps";
import { CommonInputProps } from "rc-input/lib/interface";
import { HiglightVariant } from "./type.higlightVariant";

type BaseTextareaAttrs = Omit<
  TextAreaProps,
  "prefix" | "onChange" | "onSelect" | "showCount" | "classNames"
>;
interface MentionsProps extends BaseTextareaAttrs {
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  notFoundContent?: React.ReactNode;
  split?: string;
  style?: React.CSSProperties;
  transitionName?: string;
  placement?: Placement;
  direction?: Direction;
  prefix?: string | string[];
  prefixCls?: string;
  value?: string;
  silent?: boolean;
  filterOption?: false | typeof defaultFilterOption;
  validateSearch?: typeof defaultValidateSearch;
  onChange?: (text: string) => void;
  onSelect?: (option: OptionProps, prefix: string) => void;
  onSearch?: (text: string, prefix: string) => void;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  getPopupContainer?: () => HTMLElement;
  mentionVariants: HiglightVariant[];
  dropdownClassName?: string;
  /** @private Testing usage. Do not use in prod. It will not work as your expect. */
  open?: boolean;
  children?: React.ReactNode;
  options?: DataDrivenOptionProps[];
  classNames?: CommonInputProps["classNames"] & {
    mentions?: string;
  };
}

export type { MentionsProps, BaseTextareaAttrs };
