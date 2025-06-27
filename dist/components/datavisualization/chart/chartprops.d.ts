import { OmitIndexSignature } from '../../../utils/types.js';
import { HighchartsReactProps, HighchartsReactRefObject as ChartRefObject } from 'highcharts-react-official';
import { CSSProperties, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
export type ChartSize = Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
export interface ChartProps extends Omit<OmitIndexSignature<HighchartsReactProps>, 'highcharts'>, RefAttributes<ChartRefObject> {
    /**
     * Make chart maintain specific aspect ratio when resized.
     * Has no effect if options.chart.height is set.
     */
    aspectRatio?: CSSProperties['aspectRatio'];
    /**
     * CSS class name for the container element.
     */
    className?: string;
    /**
     * Whether chart should take full height of the containing element.
     * Has no effect if options.chart.height or aspectRatio is set.
     */
    fullHeight?: boolean;
    /**
     * Size of the chart that affects the font sizes and spacings.
     * When set, font sizes and spacings are fixed to the given size regardless of containing element width.
     * If not set, font sizes and spacings scale depending on containing element width.
     */
    size?: ChartSize;
}
export type { ChartRefObject };
//# sourceMappingURL=chartprops.d.ts.map