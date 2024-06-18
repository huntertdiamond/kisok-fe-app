import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { BaseInput } from "rc-input";
import { HolderRef } from "rc-input/lib/BaseInput";

import { TextAreaRef } from "rc-textarea";
import TextArea from "rc-textarea";
import toArray from "rc-util/lib/Children/toArray";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import KeyCode from "rc-util/lib/KeyCode";

import { useEffectState } from "@/lib/hooks/useEffectState";
import KeywordTrigger from "./keywordTrigger";

import MentionsContext from "@/lib/providers/mentionsProvider";

import {
  OptionProps,
  MentionsProps,
  MentionsRef,
} from "@/types/internal/mention";

import { Option } from "./option";

import {
  filterOption as defaultFilterOption,
  getBeforeSelectionText,
  getLastMeasureIndex,
  replaceWithMeasure,
  setInputSelection,
  validateSearch as defaultValidateSearch,
} from "@/lib/castCreation";

import { cn } from "@/lib/tailwind";

const InternalMentions = forwardRef<MentionsRef, MentionsProps>(
  (props, ref) => {
    const {
      // Style
      prefixCls,
      className,
      style,
      // Misc
      prefix = "@",
      split = " ",
      notFoundContent = "Not Found",
      value,
      defaultValue,
      children,
      options,
      open,
      allowClear,
      silent,

      // Events
      validateSearch = defaultValidateSearch,
      filterOption = defaultFilterOption,
      onChange,
      onKeyDown,
      onKeyUp,
      onPressEnter,
      onSearch,
      onSelect,
      onFocus,
      onBlur,
      mentionVariants,
      // Dropdown
      transitionName,
      placement,
      direction,
      getPopupContainer,
      dropdownClassName,

      rows = 4,

      // Rest
      ...restProps
    } = props;

    const mergedPrefix = useMemo(
      () => (Array.isArray(prefix) ? prefix : [prefix]),
      [prefix]
    );

    // =============================== Refs ===============================
    const containerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<TextAreaRef>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const nonBreakingSpace = String.fromCharCode(160);

    const getTextArea = () =>
      textareaRef.current?.resizableTextArea?.textArea || null;

    useImperativeHandle(ref, () => ({
      focus: () => textareaRef.current?.focus(),
      blur: () => textareaRef.current?.blur(),
      textarea: getTextArea(),
      nativeElement: containerRef.current,
    }));

    // ============================== State ===============================
    const [measuring, setMeasuring] = useState(false);
    const [measureText, setMeasureText] = useState("");
    const [measurePrefix, setMeasurePrefix] = useState("");
    const [measureLocation, setMeasureLocation] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFocus, setIsFocus] = useState(false);

    // ============================== Value ===============================
    const [mergedValue, setMergedValue] = useMergedState("", {
      defaultValue,
      value: value,
    });

    // =============================== Open ===============================
    useEffect(() => {
      // Sync measure div top with textarea for rc-trigger usage
      if (measuring && measureRef.current) {
        measureRef.current.scrollTop = getTextArea()?.scrollTop || 0;
      }
    }, [measuring]);

    const [
      mergedMeasuring,
      mergedMeasureText,
      mergedMeasurePrefix,
      mergedMeasureLocation,
    ] = useMemo<
      [
        typeof measuring,
        typeof measureText,
        typeof measurePrefix,
        typeof measureLocation,
      ]
    >(() => {
      if (open) {
        for (let i = 0; i < mergedPrefix.length; i += 1) {
          const curPrefix = mergedPrefix[i];
          const index = mergedValue.lastIndexOf(curPrefix);
          if (index >= 0) {
            return [true, "", curPrefix, index];
          }
        }
      }

      return [measuring, measureText, measurePrefix, measureLocation];
    }, [
      open,
      measuring,
      mergedPrefix,
      mergedValue,
      measureText,
      measurePrefix,
      measureLocation,
    ]);

    // ============================== Option ==============================
    const getOptions = useCallback(
      (targetMeasureText: string) => {
        let list;
        if (options && options.length > 0) {
          list = options.map((item) => ({
            ...item,
            key: item?.key ?? item.value,
          }));
        } else {
          list = toArray(children).map((child) => {
            const { props: optionProps, key } =
              child as React.ReactElement<OptionProps>;
            return {
              ...optionProps,
              label: optionProps.children,
              key: key != null ? key.toString() : optionProps.value,
            };
          });
        }

        return list.filter((option: OptionProps) => {
          /** Return all result if `filterOption` is false. */
          if (filterOption === false) {
            return true;
          }
          return filterOption(targetMeasureText, option);
        });
      },
      [children, options, filterOption]
    );

    const mergedOptions = useMemo(
      () => getOptions(mergedMeasureText),
      [getOptions, mergedMeasureText]
    );

    // ============================= Measure ==============================
    // Mark that we will reset input selection to target position when user select option
    const onSelectionEffect = useEffectState();

    const startMeasure = (
      nextMeasureText: string,
      nextMeasurePrefix: string,
      nextMeasureLocation: number
    ) => {
      // console.log(nextMeasureLocation);
      setMeasuring(true);
      setMeasureText(nextMeasureText);
      setMeasurePrefix(nextMeasurePrefix);
      setMeasureLocation(nextMeasureLocation);
      setActiveIndex(0);
    };

    const stopMeasure = (callback?: VoidFunction) => {
      setMeasuring(false);
      setMeasureLocation(0);
      setMeasureText("");
      onSelectionEffect(callback);
    };

    // ============================== Change ==============================
    const triggerChange = (nextValue: string) => {
      setMergedValue(nextValue);
      onChange?.(nextValue);
    };

    const onInternalChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
      target: { value: nextValue },
    }) => {
      triggerChange(nextValue);
    };

    const selectOption = (option: OptionProps) => {
      const { value: mentionValue = "" } = option;
      const mentionWithSpaces = `${nonBreakingSpace}${mentionValue}${nonBreakingSpace}`;
      const { text, selectionLocation } = replaceWithMeasure(mergedValue, {
        measureLocation: mergedMeasureLocation,
        targetText: mentionWithSpaces,
        prefix: mergedMeasurePrefix,
        selectionStart: getTextArea()?.selectionStart || 0,
        split,
      });
      triggerChange(text);
      stopMeasure(() => {
        // We need to restore the selection position
        setInputSelection(getTextArea()!, selectionLocation);
      });

      onSelect?.(option, mergedMeasurePrefix);
    };

    // ============================= KeyEvent =============================
    // Check if hit the measure keyword
    const onInternalKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      const { which } = event;

      onKeyDown?.(event);

      // Skip if not measuring
      if (!mergedMeasuring) {
        return;
      }

      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        // Control arrow function
        const optionLen = mergedOptions.length;
        const offset = which === KeyCode.UP ? -1 : 1;
        const newActiveIndex = (activeIndex + offset + optionLen) % optionLen;
        setActiveIndex(newActiveIndex);
        event.preventDefault();
      } else if (which === KeyCode.ESC) {
        stopMeasure();
      } else if (which === KeyCode.ENTER) {
        // Measure hit
        event.preventDefault();
        // loading skip
        if (silent) {
          return;
        }

        if (!mergedOptions.length) {
          stopMeasure();
          return;
        }
        const option = mergedOptions[activeIndex];
        selectOption(option);
      }
    };

    /**
     * When to start measure:
     * 1. When user press `prefix`
     * 2. When measureText !== prevMeasureText
     *  - If measure hit
     *  - If measuring
     *
     * When to stop measure:
     * 1. Selection is out of range
     * 2. Contains `space`
     * 3. ESC or select one
     */
    const onInternalKeyUp: React.KeyboardEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      const { key, which } = event;
      const target = event.target as HTMLTextAreaElement;
      const selectionStartText = getBeforeSelectionText(target);
      const { location: measureIndex, prefix: nextMeasurePrefix } =
        getLastMeasureIndex(selectionStartText, mergedPrefix);

      // If the client implements an onKeyUp handler, call it
      onKeyUp?.(event);

      // Skip if match the white key list
      if (
        [KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(
          which
        ) !== -1
      ) {
        return;
      }

      if (measureIndex !== -1) {
        const nextMeasureText = selectionStartText.slice(
          measureIndex + nextMeasurePrefix.length
        );
        const validateMeasure: boolean = validateSearch(nextMeasureText, split);
        const matchOption = !!getOptions(nextMeasureText).length;

        if (validateMeasure) {
          if (
            key === nextMeasurePrefix ||
            key === "Shift" ||
            mergedMeasuring ||
            (nextMeasureText !== mergedMeasureText && matchOption)
          ) {
            startMeasure(nextMeasureText, nextMeasurePrefix, measureIndex);
          }
        } else if (mergedMeasuring) {
          // Stop if measureText is invalidate
          stopMeasure();
        }

        /**
         * We will trigger `onSearch` to developer since they may use for async update.
         * If met `space` means user finished searching.
         */
        if (onSearch && validateMeasure) {
          onSearch(nextMeasureText, nextMeasurePrefix);
        }
      } else if (mergedMeasuring) {
        stopMeasure();
      }
    };

    const onInternalPressEnter: React.KeyboardEventHandler<
      HTMLTextAreaElement
    > = (event) => {
      if (!mergedMeasuring && onPressEnter) {
        onPressEnter(event);
      }
    };

    // ============================ Focus Blur ============================
    const focusRef = useRef<number>();

    const onInternalFocus = (event?: React.FocusEvent<HTMLTextAreaElement>) => {
      window.clearTimeout(focusRef.current);
      if (!isFocus && event && onFocus) {
        onFocus(event);
      }
      setIsFocus(true);
    };

    const onInternalBlur = (event?: React.FocusEvent<HTMLTextAreaElement>) => {
      focusRef.current = window.setTimeout(() => {
        setIsFocus(false);
        stopMeasure();
        onBlur;
      }, 0);
    };
    const onDropdownFocus = () => {
      onInternalFocus();
    };

    const onDropdownBlur = () => {
      onInternalBlur();
    };

    // ============================== Render ==============================
    const renderOverlay = () => {
      const regex = new RegExp(
        `(${mergedPrefix
          .map((prefix) => `\\${prefix}${nonBreakingSpace}`)
          .join("|")})[^${nonBreakingSpace}]+${nonBreakingSpace}`,
        "g"
      );
      const matches = mergedValue.match(regex);
      let lastIndex = 0;

      const result = [];

      if (matches) {
        matches.forEach((match, index) => {
          const matchIndex = mergedValue.indexOf(match, lastIndex);

          if (matchIndex > lastIndex) {
            result.push(
              <span key={`text-${index}`} style={{ color: "transparent" }}>
                {mergedValue.slice(lastIndex, matchIndex)}
              </span>
            );
          }

          const matchPrefix = mergedPrefix.find((prefix) =>
            match.startsWith(`${prefix}${nonBreakingSpace}`)
          );
          const variant = props.mentionVariants.find(
            (variant) => variant.trigger === matchPrefix
          );

          const matchDisplay = match
            .replace(
              new RegExp(
                `^(${mergedPrefix
                  .map((prefix) => `\\${prefix}${nonBreakingSpace}`)
                  .join("|")})`
              ),
              ""
            )
            .trim();
          const className = variant
            ? `mention-highlight ${variant.variantName}`
            : "mention-highlight";

          result.push(
            <span key={`mention-${index}`} className={className}>
              {nonBreakingSpace}

              {matchPrefix}
              {matchDisplay}

              {nonBreakingSpace}
            </span>
          );

          lastIndex = matchIndex + match.length;
        });
        if (lastIndex < mergedValue.length) {
          result.push(
            <span key="remaining-text" style={{ color: "transparent" }}>
              {mergedValue.slice(lastIndex)}
            </span>
          );
        }
      } else {
        result.push(
          <span key="full-text" style={{ color: "transparent" }}>
            {mergedValue}
          </span>
        );
      }

      return result;
    };

    return (
      <div
        className={classNames(prefixCls, className)}
        style={style}
        ref={containerRef}
      >
        <div className={`${prefixCls}-overlay`}>{renderOverlay()}</div>
        <TextArea
          ref={textareaRef}
          value={mergedValue}
          {...restProps}
          rows={rows}
          onChange={onInternalChange}
          onKeyDown={onInternalKeyDown}
          onKeyUp={onInternalKeyUp}
          onPressEnter={onInternalPressEnter}
          onFocus={onInternalFocus}
          onBlur={onInternalBlur}
          className="resize-none text-neutral-600"
        />
        {mergedMeasuring && (
          <div ref={measureRef} className={`${prefixCls}-measure`}>
            {mergedValue.slice(0, mergedMeasureLocation)}
            <MentionsContext.Provider
              value={{
                notFoundContent,
                activeIndex,
                setActiveIndex,
                selectOption,
                onFocus: onDropdownFocus,
                onBlur: onDropdownBlur,
              }}
            >
              <KeywordTrigger
                prefixCls={prefixCls}
                transitionName={transitionName}
                placement={placement}
                direction={direction}
                options={mergedOptions}
                visible
                getPopupContainer={getPopupContainer}
                dropdownClassName={dropdownClassName}
              >
                <span>{mergedMeasurePrefix}</span>
              </KeywordTrigger>
            </MentionsContext.Provider>
            {mergedValue.slice(
              mergedMeasureLocation + mergedMeasurePrefix.length
            )}
          </div>
        )}
      </div>
    );
  }
);

InternalMentions.displayName = "InternalMentions";

const Mentions = forwardRef<MentionsRef, MentionsProps>(
  (
    {
      suffix,
      prefixCls = "rc-mentions",
      defaultValue,
      value: customValue,
      allowClear,
      onChange,
      classNames: classes,
      className,
      disabled,
      rows,
      mentionVariants,

      ...rest
    },
    ref
  ) => {
    // =============================== Ref ================================
    const holderRef = useRef<HolderRef>(null);
    const mentionRef = useRef<MentionsRef>(null);

    useImperativeHandle(ref, () => ({
      focus: mentionRef.current?.focus || (() => {}),
      blur: mentionRef.current?.blur || (() => {}),
      nativeElement:
        holderRef.current?.nativeElement ||
        mentionRef.current?.nativeElement ||
        null,
    }));

    // ============================== Value ===============================
    const [mergedValue, setMergedValue] = useMergedState("", {
      defaultValue,
      value: customValue,
    });

    // ============================== Change ==============================
    const triggerChange = (currentValue: string) => {
      setMergedValue(currentValue);
      onChange?.(currentValue);
    };

    // ============================== Reset ===============================
    const handleReset = () => {
      triggerChange("");
    };

    return (
      <BaseInput
        suffix={suffix}
        prefixCls={prefixCls}
        value={mergedValue}
        allowClear={allowClear}
        handleReset={handleReset}
        className={cn(className, "resize-none")}
        classNames={classes}
        disabled={disabled}
        ref={holderRef}
      >
        <InternalMentions
          className={cn(classes?.mentions)}
          prefixCls={prefixCls}
          ref={mentionRef}
          onChange={triggerChange}
          disabled={disabled}
          mentionVariants={mentionVariants}
          rows={rows}
          {...rest}
        />
      </BaseInput>
    );
  }
) as React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MentionsProps> & React.RefAttributes<MentionsRef>
> & {
  Option: typeof Option;
};

Mentions.Option = Option;
Mentions.displayName = "Mentions";
export { Mentions };
