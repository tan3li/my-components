import { __assign, __rest } from "tslib";
import { createElement as _createElement } from "react";
import Highcharts from 'highcharts';
import 'highcharts/modules/accessibility';
import { HighchartsReact } from 'highcharts-react-official';
import { useMemo } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { getChartOptions } from './getchartoptions.js';
import { useLocales } from '../../../contexts/index.js';
import { useTranslateChart } from '../../../hooks/translations/usetranslatechart.js';
import { ChartType } from './charttype.js';
import { formatChartValue } from './formatchartvalue.js';
// Global options
Highcharts.setOptions({
    chart: {
        colorCount: 21,
        events: {
            render: function () {
                var _a, _b;
                var chartType = (_a = this.options.chart) === null || _a === void 0 ? void 0 : _a.type;
                if (chartType === ChartType.Donut) {
                    var series = this.series[0];
                    var total = series.data.reduce(function (sum, seriesItem) { var _a; return sum + ((_a = seriesItem.y) !== null && _a !== void 0 ? _a : 0); }, 0);
                    var totalText = formatChartValue(this.tooltip.options, total);
                    (_b = this._totalLabel) !== null && _b !== void 0 ? _b : (this._totalLabel = this.renderer
                        .label(totalText, 0)
                        .css({
                        textAnchor: 'middle'
                    })
                        .addClass('chart-total-label')
                        .add());
                    var x = series.center[0] + this.plotLeft;
                    var y = series.center[1] + this.plotTop - this._totalLabel.attr('height') / 2;
                    this._totalLabel.attr({
                        text: totalText,
                        x: x,
                        y: y
                    });
                }
            }
        },
        styledMode: true // positioning related styling must still be handled in TS
    },
    credits: {
        enabled: false
    },
    legend: {
        align: 'right',
        verticalAlign: 'top'
    },
    plotOptions: {
        series: {
            showInLegend: true
        }
    },
    title: {
        text: undefined
    },
    tooltip: {
        className: 'chart-tooltip-container',
        formatter: function (tooltip) {
            var formattedValue = formatChartValue(tooltip.options, this.y);
            return "\n                <div class=\"chart-tooltip\">\n                    <div class=\"chart-tooltip__line\">".concat(this.key, "</div>\n                    <div class=\"chart-tooltip__line\">\n                        <svg class=\"chart-tooltip__legend-symbol\"><rect/></svg>\n                        ").concat(this.series.name, ": <span class=\"chart-tooltip__value\"><b>").concat(formattedValue, "</b></span>\n                    </div>\n                </div>\n            ");
        },
        outside: true,
        padding: 0,
        shadow: false,
        useHTML: true
    }
});
export function Chart(props) {
    var _a;
    var aspectRatio = props.aspectRatio, className = props.className, containerProps = props.containerProps, fullHeight = props.fullHeight, propsOptions = props.options, size = props.size, otherProps = __rest(props, ["aspectRatio", "className", "containerProps", "fullHeight", "options", "size"]);
    var cultureLocale = useLocales().cultureLocale;
    var translateChart = useTranslateChart();
    var options = useMemo(function () {
        var chartOptions = getChartOptions({
            options: propsOptions,
            locale: cultureLocale,
            size: size,
            translateChartFn: translateChart
        });
        // Lang options don't change dynamically without calling setOptions().
        Highcharts.setOptions({ lang: chartOptions.lang });
        return chartOptions;
    }, [propsOptions, size, cultureLocale, translateChart]);
    var style = {};
    if (!((_a = options === null || options === void 0 ? void 0 : options.chart) === null || _a === void 0 ? void 0 : _a.height)) {
        if (aspectRatio) {
            style.aspectRatio = aspectRatio;
        }
        else if (fullHeight) {
            style.height = '100%';
        }
    }
    return (_createElement(HighchartsReact, __assign({}, otherProps, { containerProps: __assign(__assign({ 
            // HC styled mode forces light/dark theme based on user system preference.
            // We have only light theme for now so must include "highcharts-light" CSS class.
            className: classNames('chart-container highcharts-light', className) }, containerProps), { style: __assign(__assign({}, containerProps === null || containerProps === void 0 ? void 0 : containerProps.style), style) }), highcharts: Highcharts, 
        // Must re-draw chart for certain property changes to take effect
        key: "".concat(cultureLocale, ";").concat(size !== null && size !== void 0 ? size : ''), options: options })));
}
//# sourceMappingURL=chart.js.map