import {Group, LabelContext, Popover, Provider, TextContext, TimeFieldProps} from 'react-aria-components';
import {useFocusRing, useTimeField} from 'react-aria';
import {classNames} from '../../../utils/classnames';
import {Size} from '../../../constants';
import {AnyObject, ChangeArgs} from '../../../hooks/usechangeparamscallback';
import {TDataState} from '../../../constants/datastate';
import {ReactNode, RefAttributes, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS, TooltipContent} from '../../text';
import {Field} from '../common/field/field';
import {useDataState} from '../../../hooks/usedatastate';
import {getDateTimeValue} from './getdatetimevalue.js';
import {Icon, iconNames, IconSize} from '../../media';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon';
import {useLocales} from '../../../contexts';
import {useTimeFieldState} from 'react-stately';
import {TimeSegment} from './timesegment';
import {useResizeObserver} from '@react-aria/utils';
import {useSelect} from 'downshift';
import {TIME_ITEM_INTERVAL_MINUTES, useTimeItems} from './usetimeitems';
import {SelectOption} from '../select/selectoption';
import {
    CalendarDateTime,
    now,
    parseDateTime,
    Time,
    toCalendarDateTime,
    today,
    ZonedDateTime
} from '@internationalized/date';
import {safeCall} from '../../../utils/functionhelper';
import {MINUTES_IN_HOUR} from '../../../constants/time';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper';
import {VALUE} from '../../../constants/common';
import {useFieldHelpText} from '../../../hooks/usefieldhelptext.js';
import {ClearButton} from '../../action/index.js';
import {isUndefined} from '../../../utils/objecthelper.js';
import {useNonModalPopoverInModalFix} from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface TimePickerProps<P extends AnyObject>
    extends Omit<TimeFieldProps<CalendarDateTime>, 'value' | 'defaultValue' | 'minValue' | 'maxValue'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string | null>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Additional help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether the field is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the element.
     */
    label?: string;
    /**
     * Change callback
     */
    onChange?: (dateTime: CalendarDateTime | null) => void;
    /**
     * Date-time value related to selected value which will create a duration between them.
     */
    relatedValue?: CalendarDateTime | string | null;
    /**
     * Whether to show clear button when has selected date. True by default.
     */
    showClearButton?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Selected time. Can be provided as ISO 8601 date-time string (YYYY-MM-DDT:HH:mm) or CalendarDateTime object.
     */
    value?: CalendarDateTime | string | null;
}

function getNearestTimeItemValue(time: CalendarDateTime | ZonedDateTime): string {
    const nearestIntervalMinute = Math.round(time.minute / TIME_ITEM_INTERVAL_MINUTES) * TIME_ITEM_INTERVAL_MINUTES;
    const hour = time.hour + (nearestIntervalMinute >= MINUTES_IN_HOUR ? 1 : 0);
    const minute = nearestIntervalMinute >= MINUTES_IN_HOUR ? 0 : nearestIntervalMinute;

    return new CalendarDateTime(time.year, time.month, time.day, hour, minute, 0).toString();
}

export function TimePicker<P extends AnyObject>({
    changeCallback,
    changeParams,
    className,
    dataState,
    helpText,
    helpTextSuccess,
    isReadOnly: propsIsReadOnly,
    isSkeleton,
    label,
    ref,
    relatedValue,
    showClearButton = true,
    showHelpTextIcon,
    size = Size.md,
    tooltipContent,
    value,
    ...props
}: TimePickerProps<P>) {
    const {cultureLocale, timeZone} = useLocales();
    const {isDisabled, isInvalid, isRequired} = props;
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, propsIsReadOnly);
    const [selectedValue, setSelectedValue] = useState(getDateTimeValue(value));
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);
    const groupRef = useRef<HTMLDivElement>(null);
    const presetMenuRef = useRef<HTMLDivElement>(null);
    const toggleBtnRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const firstSpinBtnRef = useRef<HTMLDivElement>(null);
    const translateCommon = useTranslateCommon();

    const onInnerChange = (time: CalendarDateTime | Time | null) => {
        let dateTime: CalendarDateTime | null;

        if (time instanceof Time) {
            dateTime = toCalendarDateTime(selectedValue ?? getDateTimeValue(relatedValue) ?? today(timeZone), time);
        } else {
            dateTime = time;
        }
        setSelectedValue(dateTime);
    };

    const onChange = (dateTime: CalendarDateTime | null) => {
        if (!isUndefined(value) && dateTime?.toString() === getDateTimeValue(value)?.toString()) {
            return;
        }
        safeCall(props.onChange, dateTime);
        safeCall(changeCallback, {...changeParams, value: dateTime ? dateTime.toString() : null} as ChangeArgs<
            P,
            string | null
        >);
    };

    // Time field hooks
    const timeFieldHookProps = {
        ...props,
        label,
        onBlur: () => {
            onChange(selectedValue);
        },
        onChange: onInnerChange,
        isInvalid: hasError,
        isReadOnly,
        value: selectedValue
    };
    const state = useTimeFieldState({
        ...timeFieldHookProps,
        locale: cultureLocale
    });
    const {fieldProps, labelProps} = useTimeField(timeFieldHookProps, state, inputRef);
    const {fieldProps: fieldProps2, helpTextProps} = useFieldHelpText({
        dataState,
        helpText,
        helpTextSuccess,
        isInvalid
    });

    // To match popover width to group element width.
    const [groupWidth, setGroupWidth] = useState<string | null>(null);
    const onResize = useCallback(() => {
        if (groupRef.current) {
            setGroupWidth(`${groupRef.current.offsetWidth}px`);
        }
    }, []);

    useResizeObserver({
        ref: groupRef,
        onResize
    });

    // Preset dropdown
    const timeItems = useTimeItems(selectedValue, relatedValue);
    const selectedItem = useMemo(() => (selectedValue ? {value: selectedValue.toString()} : null), [selectedValue]);
    const defaultHighlightedIndex = getIndexWithPropertyValue(
        VALUE,
        getNearestTimeItemValue(selectedValue ?? now(timeZone)),
        timeItems
    );
    const {getItemProps, getToggleButtonProps, getMenuProps, highlightedIndex} = useSelect({
        defaultHighlightedIndex,
        isOpen,
        items: timeItems,
        selectedItem,
        onIsOpenChange: ({isOpen: newIsOpen}) => {
            if (isReadOnly) {
                return;
            }

            setIsOpen(newIsOpen);
        },
        onSelectedItemChange: ({selectedItem: newSelectedItem, type}) => {
            // Downshift triggers selection for highlighted item on click outside dropdown, we don't want this.
            if (newSelectedItem && type !== useSelect.stateChangeTypes.ToggleButtonBlur) {
                const dateTime = parseDateTime(newSelectedItem.value);

                onInnerChange(dateTime);
                onChange(dateTime);
            }
        }
    });
    const toggleButtonFocusRing = useFocusRing({within: true, isTextInput: false});
    const toggleBtnProps = getToggleButtonProps(
        {
            ...toggleButtonFocusRing.focusProps,
            disabled: !!isDisabled || isReadOnly,
            ref: toggleBtnRef
        },
        {suppressRefError: true}
    );
    const menuProps = getMenuProps({ref: presetMenuRef}, {suppressRefError: true});

    useNonModalPopoverInModalFix(isOpen, toggleBtnRef, popoverRef);

    useEffect(() => {
        setSelectedValue(getDateTimeValue(value));
    }, [value]);

    useEffect(() => {
        if (isOpen) {
            const presetMenu = presetMenuRef.current;

            if (presetMenu) {
                const dataValue = getNearestTimeItemValue(selectedValue ?? now(timeZone));
                const selectedElement = presetMenu.querySelector(`.select-option[data-value="${dataValue}"]`);

                if (selectedElement instanceof HTMLElement) {
                    presetMenu.scrollTop = selectedElement.offsetTop - presetMenu.offsetHeight / 2;
                }
            }
        }
    }, [isOpen]);

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-timepicker"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                size={size}
            />
        );
    }

    return (
        <Provider
            values={[
                [LabelContext, {...labelProps}],
                [TextContext, {slots: {description: helpTextProps}}]
            ]}>
            <div className={classNames('timepicker', className)} ref={ref}>
                <Field
                    dataState={dataState}
                    helpText={helpText}
                    helpTextSuccess={helpTextSuccess}
                    isDisabled={isDisabled}
                    isInvalid={hasError}
                    isRequired={isRequired}
                    label={label}
                    showHelpTextIcon={showHelpTextIcon}
                    size={size === Size.xs ? Size.sm : Size.md}
                    tooltipContent={tooltipContent}>
                    <Group
                        className={`timepicker__controls timepicker__controls--${size}`}
                        isDisabled={isDisabled}
                        isInvalid={hasError}
                        ref={groupRef}>
                        <div {...fieldProps} {...fieldProps2} className="timepicker__input" ref={inputRef}>
                            {state.segments.map((segment, i) => (
                                <TimeSegment
                                    className={size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS}
                                    key={i}
                                    ref={i === 0 ? firstSpinBtnRef : undefined}
                                    segment={segment}
                                    state={state}
                                />
                            ))}
                        </div>
                        <div className="timepicker__buttons">
                            {showClearButton && !isDisabled && !isReadOnly && selectedValue && (
                                <ClearButton
                                    className="timepicker__clear-button"
                                    onPress={() => {
                                        setSelectedValue(null);
                                        onChange(null);
                                        firstSpinBtnRef.current?.focus();
                                    }}
                                    slot={null}
                                />
                            )}
                            <button
                                {...toggleBtnProps}
                                aria-label={translateCommon('toggleMenu')}
                                className="timepicker__button"
                                data-disabled={toggleBtnProps.disabled || undefined}
                                data-focus-visible={toggleButtonFocusRing.isFocusVisible || undefined}
                                data-focused={toggleButtonFocusRing.isFocused || undefined}>
                                <Icon name={iconNames.Schedule} size={IconSize.MD} />
                            </button>
                        </div>
                    </Group>
                </Field>
                <Popover
                    className="timepicker__popover"
                    isNonModal={true}
                    isOpen={isOpen}
                    maxHeight={280}
                    placement="bottom start"
                    ref={popoverRef}
                    style={groupWidth ? {width: groupWidth} : undefined}
                    triggerRef={groupRef}>
                    <div {...menuProps} className="timepicker__menu">
                        {timeItems.map((item, index) => {
                            const itemValue = item.value;
                            const isSelected = selectedItem?.value === itemValue;

                            return (
                                <SelectOption
                                    getItemProps={getItemProps}
                                    isFocused={highlightedIndex === index}
                                    isSelected={isSelected}
                                    item={item}
                                    itemIndex={index}
                                    key={itemValue}
                                    level={0}
                                    size={size}
                                    useDataValue={true}
                                />
                            );
                        })}
                    </div>
                </Popover>
            </div>
        </Provider>
    );
}
