import {isString} from '../../../utils/stringhelper.js';
import {CalendarDateTime, parseDateTime} from '@internationalized/date';

export function getDateTimeValue(value?: CalendarDateTime | string | null): CalendarDateTime | null {
    if (value) {
        return isString(value) ? parseDateTime(value) : value;
    }

    return null;
}
