import {RangeValue} from '@react-types/shared';
import {isString} from '../../../utils/stringhelper';
import {CalendarDateTime, parseDateTime} from '@internationalized/date';

export function getDateTimeRangeValue(
    value?: RangeValue<CalendarDateTime | string | null> | null
): RangeValue<CalendarDateTime | null> | null {
    if (value) {
        let {start, end} = value;

        if (start && isString(start)) {
            start = parseDateTime(start);
        }
        if (end && isString(end)) {
            end = parseDateTime(end);
        }

        return {start, end} as unknown as RangeValue<CalendarDateTime | null>;
    }

    return null;
}
