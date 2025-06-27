import Highcharts from 'highcharts';
import 'highcharts/modules/accessibility';
import { ChartProps } from './chartprops.js';
declare module 'highcharts' {
    interface Chart {
        _totalLabel?: Highcharts.SVGElement;
    }
}
export declare function Chart(props: ChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=chart.d.ts.map