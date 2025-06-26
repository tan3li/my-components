import {DatePicker, DatePickerProps} from '../datepicker';
import {Size} from '../../../constants';
import {ReactNode, RefAttributes, useEffect, useState} from 'react';
import {TimePicker, TimePickerProps} from '../timepicker';
import {RangeValue} from '@react-types/shared';
import {DateValue} from 'react-aria';
import {getDateTimeRangeValue} from './getdatetimerangevalue';
import {CalendarDateTime, isSameDay, toCalendarDate, toCalendarDateTime, toTime} from '@internationalized/date';
import {ChangeArgs, AnyObject} from '../../../hooks/usechangeparamscallback';
import {classNames} from '../../../utils/classnames';
import {safeCall} from '../../../utils/functionhelper';
import {useTranslateValidation} from '../../../hooks/translations/usetranslatevalidation';

export const enum DateTimeFieldType {
    EndDate,
    EndTime,
    StartDate,
    StartTime
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

function useDateTimeValidation(value: RangeValue<CalendarDateTime | null> | null) {
    const translateValidation = useTranslateValidation();
    const {start, end} = value ?? {};
    let field = DateTimeFieldType.EndDate,
        isInvalid = false,
        errorMessage = '';

    if (start && end && end.compare(start) < 0) {
        isInvalid = true;
        errorMessage = translateValidation('endAfterStart');

        if (isSameDay(start, end)) {
            field = DateTimeFieldType.EndTime;
        }
    }

    return {
        errorMessage,
        field,
        isInvalid
    };
}

// eslint-disable-next-line complexity
export function DateTimeRangeFields<P extends AnyObject>({
    className,
    changeCallback,
    changeParams,
    fields,
    ref,
    size = Size.md,
    value,
    ...props
}: DateTimeRangeFieldsProps<P>) {
    const [selectedValue, setSelectedValue] = useState(getDateTimeRangeValue(value));
    const dateTimeValidation = useDateTimeValidation(selectedValue);
    const hasTimesOnly =
        fields.filter(({type}) => type === DateTimeFieldType.EndDate || type === DateTimeFieldType.StartDate).length ===
        0;

    const onChange = (newValue: RangeValue<CalendarDateTime | null>) => {
        const newValueToSet = newValue.start === null && newValue.end === null ? null : newValue;

        setSelectedValue(newValueToSet);
        safeCall(props.onChange, newValueToSet);
        safeCall(changeCallback, {
            ...changeParams,
            value:
                newValueToSet ?
                    {
                        start: newValueToSet.start?.toString() ?? null,
                        end: newValueToSet.end?.toString() ?? null
                    }
                :   null
        } as ChangeArgs<P, RangeValue<string | null> | null>);
    };

    const onStartDateChange = (date: DateValue | null) => {
        const {start, end} = selectedValue ?? {};
        const endTime = end ? toTime(end) : undefined;
        const newStart = date ? toCalendarDateTime(date, start ? toTime(start) : endTime) : null;
        let newEnd = end ?? null;

        // If end is before selected start date, change it to same.
        if (newStart && end && end.compare(newStart) < 0) {
            newEnd = newStart.copy();
        }

        onChange({
            start: newStart,
            end: newEnd
        });
    };
    const onEndDateChange = (date: DateValue | null) => {
        const {start, end} = selectedValue ?? {};
        const startTime = start ? toTime(start) : undefined;
        const newEnd = date ? toCalendarDateTime(date, end ? toTime(end) : startTime) : null;
        let newStart = start ?? null;

        // If start is after selected end date, change it to same.
        if (newEnd && start && start.compare(newEnd) > 0) {
            newStart = newEnd.copy();
        }

        onChange({
            start: newStart,
            end: newEnd
        });
    };

    const onStartTimeChange = (dateTime: CalendarDateTime | null) => {
        const {end} = selectedValue ?? {};
        let newEnd = end ?? null;

        // If end is before selected start date, change it to same.
        if (dateTime && end && end.compare(dateTime) < 0) {
            newEnd = dateTime.copy();
        }

        onChange({
            start: dateTime,
            end: newEnd
        });
    };
    const onEndTimeChange = (dateTime: CalendarDateTime | null) => {
        const {start} = selectedValue ?? {};
        let newStart = start ?? null;

        // If start is after selected end date, change it to same.
        if (dateTime && start && start.compare(dateTime) > 0) {
            newStart = dateTime.copy();
        }

        onChange({
            start: newStart,
            end: dateTime
        });
    };

    useEffect(() => {
        setSelectedValue(getDateTimeRangeValue(value));
    }, [value]);

    const pickerRows: ReactNode[][] = [];

    for (let i = 0, len = fields.length; i < len; i++) {
        const {type, ...fieldProps} = fields[i];
        let pickers = pickerRows[pickerRows.length - 1],
            isInvalid: boolean | undefined,
            errorMessage: string | undefined;

        if (dateTimeValidation.field === type) {
            isInvalid = dateTimeValidation.isInvalid;
            errorMessage = dateTimeValidation.errorMessage;
        }

        if (!pickers || pickers.length === 2) {
            pickers = [];
            pickerRows.push(pickers);
        }

        if (type === DateTimeFieldType.StartDate || type === DateTimeFieldType.EndDate) {
            const isStart = type === DateTimeFieldType.StartDate;
            const dateTime = isStart ? selectedValue?.start : selectedValue?.end;

            pickers.push(
                <DatePicker
                    {...(fieldProps as DatePickerProps<P>)}
                    helpText={errorMessage}
                    isInvalid={isInvalid}
                    key={type}
                    onChange={isStart ? onStartDateChange : onEndDateChange}
                    relatedValue={isStart ? selectedValue?.end : selectedValue?.start}
                    size={size}
                    value={dateTime ? toCalendarDate(dateTime).toString() : null}
                />
            );
        } else if (type === DateTimeFieldType.StartTime || type === DateTimeFieldType.EndTime) {
            const isStart = type === DateTimeFieldType.StartTime;
            const dateTime = isStart ? selectedValue?.start : selectedValue?.end;
            let relatedValue: CalendarDateTime | null | undefined;

            if (
                !isStart &&
                selectedValue?.start &&
                (!dateTime || hasTimesOnly || isSameDay(selectedValue?.start, dateTime))
            ) {
                relatedValue = selectedValue?.start;
            }

            pickers.push(
                <TimePicker
                    {...(fieldProps as TimePickerProps<P>)}
                    helpText={errorMessage}
                    isInvalid={isInvalid}
                    key={type}
                    onChange={isStart ? onStartTimeChange : onEndTimeChange}
                    relatedValue={relatedValue}
                    size={size}
                    value={dateTime ? dateTime.toString() : null}
                />
            );
        }
    }

    return (
        <div className={classNames('datetime-range-fields', className)} ref={ref}>
            {pickerRows.map((pickers, i) => (
                <div className="datetime-range-fields__row" key={i}>
                    {pickers}
                </div>
            ))}
        </div>
    );
}
