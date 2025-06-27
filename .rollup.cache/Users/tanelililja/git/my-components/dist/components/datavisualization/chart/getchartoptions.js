import { __assign } from "tslib";
import { parsePixelValue } from '../../../utils/cssunithelper.js';
import { getChartTokenValues } from './getcharttokenvalues.js';
import { ChartType } from './charttype.js';
import { Size } from '../../../constants/index.js';
import { chartMinWidth } from './chartminwidth.js';
import merge from 'lodash.merge';
var PIE_SERIES_DATA_MAX_LEN = 10;
function getSizeRelatedOptions(size) {
    var commonOptions = {
        chart: {
            className: "chart chart--".concat(size)
        }
    };
    if (size === Size.xxs) {
        return __assign(__assign({}, commonOptions), { legend: {
                enabled: false
            }, plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }, xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            }, yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            } });
    }
    var _a = getChartTokenValues(size), seriesLabelFontSize = _a.seriesLabelFontSize, seriesLabelGap = _a.seriesLabelGap, legendGap = _a.legendGap, verticalGap = _a.verticalGap, axisLabelGap = _a.axisLabelGap, barRadius = _a.barRadius;
    return __assign(__assign({}, commonOptions), { legend: {
            enabled: true,
            itemDistance: parsePixelValue(legendGap),
            margin: parsePixelValue(verticalGap),
            symbolPadding: parsePixelValue(seriesLabelGap, seriesLabelFontSize)
        }, plotOptions: {
            column: {
                borderRadius: parsePixelValue(barRadius)
            }
        }, xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(verticalGap)
            }
        }, yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(axisLabelGap)
            }
        } });
}
export function getChartBaseOptions(_a) {
    var locale = _a.locale, options = _a.options, translateChartFn = _a.translateChartFn;
    var out = {
        lang: {
            accessibility: {
                axis: {
                    rangeFromTo: translateChartFn('rangeFromTo'),
                    xAxisDescriptionSingular: translateChartFn('xAxisDescriptionSingular'),
                    yAxisDescriptionSingular: translateChartFn('yAxisDescriptionSingular')
                },
                chartTypes: {
                    barMultiple: translateChartFn('type.barMultiple'),
                    barSingle: translateChartFn('type.barSingle'),
                    columnMultiple: translateChartFn('type.barMultiple'),
                    columnSingle: translateChartFn('type.barSingle'),
                    defaultMultiple: translateChartFn('type.defaultMultiple'),
                    defaultSingle: translateChartFn('type.defaultSingle'),
                    emptyChart: translateChartFn('type.emptyChart'),
                    lineMultiple: translateChartFn('type.lineMultiple'),
                    lineSingle: translateChartFn('type.lineSingle'),
                    pieMultiple: translateChartFn('type.pieMultiple'),
                    pieSingle: translateChartFn('type.pieSingle')
                },
                chartContainerLabel: translateChartFn('chartContainerLabel'),
                defaultChartTitle: translateChartFn('defaultChartTitle'),
                legend: {
                    legendItem: translateChartFn('legendItem'),
                    legendLabelNoTitle: translateChartFn('legendLabelNoTitle')
                },
                screenReaderSection: {
                    endOfChartMarker: translateChartFn('endOfChartMarker')
                },
                series: {
                    nullPointValue: translateChartFn('nullPointValue'),
                    summary: {
                        bar: translateChartFn('seriesSummary.bar'),
                        barCombination: translateChartFn('seriesSummary.barCombination'),
                        column: translateChartFn('seriesSummary.bar'),
                        columnCombination: translateChartFn('seriesSummary.barCombination'),
                        default: translateChartFn('default'),
                        defaultCombination: translateChartFn('default'),
                        line: translateChartFn('seriesSummary.line'),
                        lineCombination: translateChartFn('seriesSummary.lineCombination'),
                        pie: translateChartFn('seriesSummary.pie'),
                        pieCombination: translateChartFn('seriesSummary.pieCombination')
                    }
                },
                svgContainerLabel: translateChartFn('svgContainerLabel'),
                zoom: {
                    resetZoomButton: translateChartFn('resetZoom')
                }
            },
            locale: locale,
            resetZoom: translateChartFn('resetZoom'),
            resetZoomTitle: translateChartFn('resetZoom')
        }
    };
    var series = (options !== null && options !== void 0 ? options : {}).series;
    if (series && series.length > 0) {
        var firstSeries = series[0];
        if (firstSeries.type === ChartType.Pie) {
            out = __assign(__assign({}, out), { legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                } });
        }
    }
    return out;
}
export function getChartForcedOptions(_a) {
    var options = _a.options, size = _a.size;
    var series = (options !== null && options !== void 0 ? options : {}).series;
    var out = {};
    if (size) {
        out = merge(out, getSizeRelatedOptions(size));
    }
    else {
        var sizes = [Size.xxs, Size.xs, Size.sm, Size.md, Size.lg];
        out = merge(out, {
            responsive: {
                rules: sizes.map(function (chartSize) { return ({
                    condition: { minWidth: chartMinWidth[chartSize] },
                    chartOptions: getSizeRelatedOptions(chartSize)
                }); })
            }
        });
    }
    if (series && series.length > 0) {
        var firstSeries = series[0];
        if (firstSeries.type === ChartType.Pie &&
            firstSeries.data &&
            firstSeries.data.length > PIE_SERIES_DATA_MAX_LEN) {
            // Don't show data labels to avoid label connector line rendering issue.
            out = merge(out, {
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                }
            });
        }
    }
    return out;
}
export function getChartOptions(_a) {
    var locale = _a.locale, options = _a.options, size = _a.size, translateChartFn = _a.translateChartFn;
    var baseOptions = getChartBaseOptions({ locale: locale, options: options, translateChartFn: translateChartFn });
    var forcedOptions = getChartForcedOptions({ options: options, size: size });
    return merge(baseOptions, options, forcedOptions);
}
//# sourceMappingURL=getchartoptions.js.map