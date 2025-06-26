import {coreTokens} from '@tan3li/d-tokens';
import {Size} from '../../../constants/index.js';
import {ChartProps} from './chartprops.js';

export function getChartTokenValues(size: ChartProps['size']) {
    const tokenValues = {
        seriesLabelFontSize: '',
        seriesLabelGap: '',
        legendGap: '',
        verticalGap: '',
        axisLabelGap: '',
        barRadius: ''
    };
    const {
        // Series label font size
        chartSeriesLabelXsFontSize,
        chartSeriesLabelSmFontSize,
        chartSeriesLabelMdFontSize,
        chartSeriesLabelLgFontSize,
        // Series label gap
        chartSpaceSeriesLabelGapXs,
        chartSpaceSeriesLabelGapSm,
        chartSpaceSeriesLabelGapMd,
        chartSpaceSeriesLabelGapLg,
        // Legend gap
        chartSpaceLegendGapXs,
        chartSpaceLegendGapSm,
        chartSpaceLegendGapMd,
        chartSpaceLegendGapLg,
        // Vertical gap
        chartSpaceChartVerticalGapXs,
        chartSpaceChartVerticalGapSm,
        chartSpaceChartVerticalGapMd,
        chartSpaceChartVerticalGapLg,
        // Axis label ap
        chartSpaceAxisLabelGapXs,
        chartSpaceAxisLabelGapSm,
        chartSpaceAxisLabelGapMd,
        chartSpaceAxisLabelGapLg,
        // Bar radius
        chartRadiusBarChartXs,
        chartRadiusBarChartSm,
        chartRadiusBarChartMd,
        chartRadiusBarChartLg
    } = coreTokens.dimension;

    switch (size) {
        case Size.xs:
            tokenValues.seriesLabelFontSize = chartSeriesLabelXsFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapXs.value;
            tokenValues.legendGap = chartSpaceLegendGapXs.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapXs.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapXs.value;
            tokenValues.barRadius = chartRadiusBarChartXs.value;
            break;
        case Size.sm:
            tokenValues.seriesLabelFontSize = chartSeriesLabelSmFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapSm.value;
            tokenValues.legendGap = chartSpaceLegendGapSm.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapSm.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapSm.value;
            tokenValues.barRadius = chartRadiusBarChartSm.value;
            break;
        case Size.md:
            tokenValues.seriesLabelFontSize = chartSeriesLabelMdFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapMd.value;
            tokenValues.legendGap = chartSpaceLegendGapMd.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapMd.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapMd.value;
            tokenValues.barRadius = chartRadiusBarChartMd.value;
            break;
        case Size.lg:
            tokenValues.seriesLabelFontSize = chartSeriesLabelLgFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapLg.value;
            tokenValues.legendGap = chartSpaceLegendGapLg.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapLg.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapLg.value;
            tokenValues.barRadius = chartRadiusBarChartLg.value;
            break;
        default:
            break;
    }

    return tokenValues;
}
