import { TimeFieldProps } from 'react-aria-components';
import { Size } from '../../../constants';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback';
import { TDataState } from '../../../constants/datastate';
import { ReactNode, RefAttributes } from 'react';
import { TooltipContent } from '../../text';
import { CalendarDateTime } from '@internationalized/date';
export interface TimePickerProps<P extends AnyObject> extends Omit<TimeFieldProps<CalendarDateTime>, 'value' | 'defaultValue' | 'minValue' | 'maxValue'>, RefAttributes<HTMLDivElement> {
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
export declare function TimePicker<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isReadOnly: propsIsReadOnly, isSkeleton, label, ref, relatedValue, showClearButton, showHelpTextIcon, size, tooltipContent, value, ...props }: TimePickerProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=timepicker.d.ts.map