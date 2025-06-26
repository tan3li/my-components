import {
    Button,
    DateInput,
    DatePicker as ReactAriaDatePicker,
    DatePickerProps as ReactAriaDatePickerProps,
    DateSegment,
    DateValue,
    Dialog,
    Group,
    Popover
} from 'react-aria-components';
import {Size} from '../../../constants/index.js';
import {Field} from '../common/field/field.js';
import {TDataState} from '../../../constants/datastate.js';
import {ReactNode, RefAttributes, useEffect, useRef, useState} from 'react';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS, TooltipContent} from '../../text/index.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Calendar, CalendarProps} from '../calendar/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {getDateValue} from '../calendar/getdatevalue.js';
import {ChangeArgs, AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {useLocales} from '../../../contexts/index.js';
import {I18nProvider} from 'react-aria';
import {getPlaceholder} from './getplaceholder.js';
import {ClearButton} from '../../action/index.js';
import {isUndefined} from '../../../utils/objecthelper.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface DatePickerProps<P extends AnyObject>
    extends Omit<ReactAriaDatePickerProps<DateValue>, 'value' | 'minValue' | 'maxValue' | 'defaultValue'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Props for Calendar component displayed inside popover.
     */
    calendarProps?: Omit<
        CalendarProps,
        'isDateUnavailable' | 'maxValue' | 'minValue' | 'onChange' | 'relatedValue' | 'value'
    >;
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
     * Maximum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    maxValue?: DateValue | string;
    /**
     * Minimum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    minValue?: DateValue | string;
    /**
     * Change callback
     */
    onChange?: (date: DateValue | null) => void;
    /**
     * Date related to selected value which will create a range between them.
     */
    relatedValue?: DateValue | string | null;
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
     * Selected date. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    value?: DateValue | string | null;
}

export function DatePicker<P extends AnyObject>({
    calendarProps,
    changeCallback,
    changeParams,
    className,
    dataState,
    helpText,
    helpTextSuccess,
    isReadOnly: propsIsReadOnly,
    isRequired,
    isSkeleton,
    label,
    maxValue,
    minValue,
    relatedValue,
    showClearButton = true,
    showHelpTextIcon,
    size = Size.md,
    tooltipContent,
    value,
    ...props
}: DatePickerProps<P>) {
    const {isDisabled, isInvalid} = props;
    const [selectedValue, setSelectedValue] = useState(getDateValue(value));
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, propsIsReadOnly);
    const translateCommon = useTranslateCommon();
    const {cultureLocale, languageLocale} = useLocales();
    const firstSpinBtnRef = useRef<HTMLDivElement>(null);

    const onChange = (date: DateValue | null) => {
        if (!isUndefined(value) && date?.toString() === getDateValue(value)?.toString()) {
            return;
        }
        safeCall(props.onChange, date);
        safeCall(changeCallback, {...changeParams, value: date ? date.toString() : null} as ChangeArgs<
            P,
            string | null
        >);
    };

    useEffect(() => {
        setSelectedValue(getDateValue(value));
    }, [value]);

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-datepicker"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                size={size}
            />
        );
    }

    return (
        <ReactAriaDatePicker
            {...props}
            className={classNames('datepicker', className)}
            isInvalid={hasError}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            maxValue={getDateValue(maxValue) ?? undefined}
            minValue={getDateValue(minValue) ?? undefined}
            onBlur={() => {
                onChange(selectedValue);
            }}
            onChange={(date) => {
                setSelectedValue(date);

                if (isCalendarOpen) {
                    onChange(date);
                }
            }}
            onOpenChange={setIsCalendarOpen}
            value={selectedValue}>
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
                <Group className={`datepicker__controls datepicker__controls--${size}`}>
                    <I18nProvider locale={cultureLocale}>
                        <DateInput className="datepicker__input">
                            {(segment) => (
                                // Need to wrap DateSegment with div: https://github.com/adobe/react-spectrum/issues/3164
                                <I18nProvider locale={languageLocale}>
                                    <div
                                        ref={(node) => {
                                            if (node && node.parentNode?.firstChild === node) {
                                                firstSpinBtnRef.current = node.firstChild as HTMLDivElement;
                                            }
                                        }}>
                                        <DateSegment
                                            className={`datepicker__segment ${size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS}`}
                                            segment={segment}>
                                            {segment.isPlaceholder ?
                                                getPlaceholder(segment.type, segment.text, languageLocale)
                                            :   segment.text}
                                        </DateSegment>
                                    </div>
                                </I18nProvider>
                            )}
                        </DateInput>
                    </I18nProvider>
                    <div className="datepicker__buttons">
                        {showClearButton && !isDisabled && !isReadOnly && selectedValue && (
                            <ClearButton
                                className="datepicker__clear-button"
                                onPress={() => {
                                    setSelectedValue(null);
                                    onChange(null);
                                    firstSpinBtnRef.current?.focus();
                                }}
                                slot={null}
                            />
                        )}
                        <Button aria-label={translateCommon('toggleCalendar')} className="datepicker__button">
                            <Icon name={iconNames.Calendar} size={IconSize.MD} />
                        </Button>
                    </div>
                </Group>
            </Field>
            <Popover className="datepicker__popover" placement="bottom left">
                <Dialog className="datepicker__dialog">
                    <Calendar {...calendarProps} relatedValue={relatedValue} />
                </Dialog>
            </Popover>
        </ReactAriaDatePicker>
    );
}
