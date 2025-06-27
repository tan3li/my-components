import { coreTokens } from '@tan3li/d-tokens';
import { Size } from '../../../constants/index.js';
export function getChartTokenValues(size) {
    var tokenValues = {
        seriesLabelFontSize: '',
        seriesLabelGap: '',
        legendGap: '',
        verticalGap: '',
        axisLabelGap: '',
        barRadius: ''
    };
    var _a = coreTokens.dimension, 
    // Series label font size
    chartSeriesLabelXsFontSize = _a.chartSeriesLabelXsFontSize, chartSeriesLabelSmFontSize = _a.chartSeriesLabelSmFontSize, chartSeriesLabelMdFontSize = _a.chartSeriesLabelMdFontSize, chartSeriesLabelLgFontSize = _a.chartSeriesLabelLgFontSize, 
    // Series label gap
    chartSpaceSeriesLabelGapXs = _a.chartSpaceSeriesLabelGapXs, chartSpaceSeriesLabelGapSm = _a.chartSpaceSeriesLabelGapSm, chartSpaceSeriesLabelGapMd = _a.chartSpaceSeriesLabelGapMd, chartSpaceSeriesLabelGapLg = _a.chartSpaceSeriesLabelGapLg, 
    // Legend gap
    chartSpaceLegendGapXs = _a.chartSpaceLegendGapXs, chartSpaceLegendGapSm = _a.chartSpaceLegendGapSm, chartSpaceLegendGapMd = _a.chartSpaceLegendGapMd, chartSpaceLegendGapLg = _a.chartSpaceLegendGapLg, 
    // Vertical gap
    chartSpaceChartVerticalGapXs = _a.chartSpaceChartVerticalGapXs, chartSpaceChartVerticalGapSm = _a.chartSpaceChartVerticalGapSm, chartSpaceChartVerticalGapMd = _a.chartSpaceChartVerticalGapMd, chartSpaceChartVerticalGapLg = _a.chartSpaceChartVerticalGapLg, 
    // Axis label ap
    chartSpaceAxisLabelGapXs = _a.chartSpaceAxisLabelGapXs, chartSpaceAxisLabelGapSm = _a.chartSpaceAxisLabelGapSm, chartSpaceAxisLabelGapMd = _a.chartSpaceAxisLabelGapMd, chartSpaceAxisLabelGapLg = _a.chartSpaceAxisLabelGapLg, 
    // Bar radius
    chartRadiusBarChartXs = _a.chartRadiusBarChartXs, chartRadiusBarChartSm = _a.chartRadiusBarChartSm, chartRadiusBarChartMd = _a.chartRadiusBarChartMd, chartRadiusBarChartLg = _a.chartRadiusBarChartLg;
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
//# sourceMappingURL=getcharttokenvalues.js.map