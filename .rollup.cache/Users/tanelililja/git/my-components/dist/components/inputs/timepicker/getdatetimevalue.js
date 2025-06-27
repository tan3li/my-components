import { isString } from '../../../utils/stringhelper.js';
import { parseDateTime } from '@internationalized/date';
export function getDateTimeValue(value) {
    if (value) {
        return isString(value) ? parseDateTime(value) : value;
    }
    return null;
}
//# sourceMappingURL=getdatetimevalue.js.map