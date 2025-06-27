import { DatePickerProps } from '../datepicker';
import { Size } from '../../../constants';
import { RefAttributes } from 'react';
import { TimePickerProps } from '../timepicker';
import { RangeValue } from '@react-types/shared';
import { CalendarDateTime } from '@internationalized/date';
import { ChangeArgs, AnyObject } from '../../../hooks/usechangeparamscallback';
export declare const enum DateTimeFieldType {
    EndDate = 0,
    EndTime = 1,
    StartDate = 2,
    StartTime = 3
}
export interface DateField<P extends AnyObject> extends DatePickerProps<P> {
    type: DateTimeFieldType.StartDate | DateTimeFieldType.EndDate;
}
export interface TimeField<P extends AnyObject> extends TimePickerProps<P> {
    type: DateTimeFieldType.StartTime | DateTimeFieldType.EndTime;
}
export type DateTimeField<P extends AnyObject> = DateField<P> | TimeField<P>;
export interface DateTimeRangeFieldsProps<P extends AnyObject> extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, RangeValue<string | null> | null>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Fields to render. Fields will rendered on 2 rows, 2 items per row in given order.
     */
    fields: Array<DateTimeField<P>>;
    /**
     * Selected value change callback.
     */
    onChange?: (value: RangeValue<CalendarDateTime | null> | null) => void;
    /**
     * Size of the fields.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Current range containing start and end.
     * Can be provided as ISO 8601 date-time strings without timezone (YYYY-MM-DDT:HH:mm) or CalendarDateTime objects.
     */
    value?: RangeValue<CalendarDateTime | string | null> | null;
}
export declare function DateTimeRangeFields<P extends AnyObject>({ className, changeCallback, changeParams, fields, ref, size, value, ...props }: DateTimeRangeFieldsProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datetimerangefields.d.ts.map