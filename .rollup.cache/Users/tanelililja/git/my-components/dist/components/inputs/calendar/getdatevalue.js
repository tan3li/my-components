import { isString } from '../../../utils/stringhelper.js';
import { parseDate } from '@internationalized/date';
export function getDateValue(value) {
    if (value) {
        return isString(value) ? parseDate(value) : value;
    }
    return null;
}
//# sourceMappingURL=getdatevalue.js.map