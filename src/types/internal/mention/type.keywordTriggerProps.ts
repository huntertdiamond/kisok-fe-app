import { DataDrivenOptionProps } from "./type.dataDrivenOptionProps";
import { Direction } from "./type.direction";
import { Placement } from "./type.placement";

interface KeywordTriggerProps {
  loading?: boolean;
  options: DataDrivenOptionProps[];
  prefixCls?: string;
  placement?: Placement;
  direction?: Direction;
  visible?: boolean;
  transitionName?: string;
  children: React.ReactElement;
  getPopupContainer?: () => HTMLElement;
  dropdownClassName?: string;
}

export type { KeywordTriggerProps };
