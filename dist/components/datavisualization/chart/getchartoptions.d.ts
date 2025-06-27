import { ChartSize } from './chartprops.js';
import Highcharts from 'highcharts';
import { LocaleCode } from '../../../contexts/index.js';
import { TranslateFn } from '../../../hooks/translations/usetranslatefn.js';
export declare function getChartBaseOptions({ locale, options, translateChartFn }: {
    locale: LocaleCode;
    options?: Highcharts.Options;
    translateChartFn: TranslateFn;
}): Highcharts.Options;
export declare function getChartForcedOptions({ options, size }: {
    options?: Highcharts.Options;
    size?: ChartSize;
}): Highcharts.Options;
export declare function getChartOptions({ locale, options, size, translateChartFn }: {
    locale: LocaleCode;
    options?: Highcharts.Options;
    size?: ChartSize;
    translateChartFn: TranslateFn;
}): any;
//# sourceMappingURL=getchartoptions.d.ts.map