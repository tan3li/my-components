import Highcharts from 'highcharts';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';

export function formatChartValue(options: Highcharts.TooltipOptions, value?: number) {
    const {valueDecimals = 0, valuePrefix = '', valueSuffix = ''} = options;

    if (isNullOrUndefined(value)) {
        return '';
    }

    return `${valuePrefix}${Highcharts.numberFormat(value, valueDecimals)}${valueSuffix}`;
}
