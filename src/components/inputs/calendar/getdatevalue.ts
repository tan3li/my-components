import {DateValue} from 'react-aria';
import {isString} from '../../../utils/stringhelper.js';
import {parseDate} from '@internationalized/date';

export function getDateValue(value?: DateValue | string | null): DateValue | null {
    if (value) {
        return isString(value) ? parseDate(value) : value;
    }

    return null;
}
