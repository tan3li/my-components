import Highcharts from 'highcharts';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
export function formatChartValue(options, value) {
    var _a = options.valueDecimals, valueDecimals = _a === void 0 ? 0 : _a, _b = options.valuePrefix, valuePrefix = _b === void 0 ? '' : _b, _c = options.valueSuffix, valueSuffix = _c === void 0 ? '' : _c;
    if (isNullOrUndefined(value)) {
        return '';
    }
    return "".concat(valuePrefix).concat(Highcharts.numberFormat(value, valueDecimals)).concat(valueSuffix);
}
//# sourceMappingURL=formatchartvalue.js.map