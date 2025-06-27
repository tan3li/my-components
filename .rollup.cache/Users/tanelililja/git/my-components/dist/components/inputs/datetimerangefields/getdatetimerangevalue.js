import { isString } from '../../../utils/stringhelper';
import { parseDateTime } from '@internationalized/date';
export function getDateTimeRangeValue(value) {
    if (value) {
        var start = value.start, end = value.end;
        if (start && isString(start)) {
            start = parseDateTime(start);
        }
        if (end && isString(end)) {
            end = parseDateTime(end);
        }
        return { start: start, end: end };
    }
    return null;
}
//# sourceMappingURL=getdatetimerangevalue.js.map