import { DatePickerProps as ReactAriaDatePickerProps, DateValue } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
import { TDataState } from '../../../constants/datastate.js';
import { ReactNode, RefAttributes } from 'react';
import { TooltipContent } from '../../text/index.js';
import { CalendarProps } from '../calendar/index.js';
import { ChangeArgs, AnyObject } from '../../../hooks/usechangeparamscallback.js';
export interface DatePickerProps<P extends AnyObject> extends Omit<ReactAriaDatePickerProps<DateValue>, 'value' | 'minValue' | 'maxValue' | 'defaultValue'>, RefAttributes<HTMLDivElement> {
    /**
     * Props for Calendar component displayed inside popover.
     */
    calendarProps?: Omit<CalendarProps, 'isDateUnavailable' | 'maxValue' | 'minValue' | 'onChange' | 'relatedValue' | 'value'>;
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
export declare function DatePicker<P extends AnyObject>({ calendarProps, changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isReadOnly: propsIsReadOnly, isRequired, isSkeleton, label, maxValue, minValue, relatedValue, showClearButton, showHelpTextIcon, size, tooltipContent, value, ...props }: DatePickerProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datepicker.d.ts.map