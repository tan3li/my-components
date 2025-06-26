import {ChartSize} from './chartprops.js';
import Highcharts from 'highcharts';
import {parsePixelValue} from '../../../utils/cssunithelper.js';
import {getChartTokenValues} from './getcharttokenvalues.js';
import {LocaleCode} from '../../../contexts/index.js';
import {TranslateFn} from '../../../hooks/translations/usetranslatefn.js';
import {ChartType} from './charttype.js';
import {Size} from '../../../constants/index.js';
import {chartMinWidth} from './chartminwidth.js';
import merge from 'lodash.merge';

const PIE_SERIES_DATA_MAX_LEN = 10;

function getSizeRelatedOptions(size: ChartSize): Highcharts.Options {
    const commonOptions: Highcharts.Options = {
        chart: {
            className: `chart chart--${size}`
        }
    };

    if (size === Size.xxs) {
        return {
            ...commonOptions,
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            }
        };
    }

    const {seriesLabelFontSize, seriesLabelGap, legendGap, verticalGap, axisLabelGap, barRadius} =
        getChartTokenValues(size);

    return {
        ...commonOptions,
        legend: {
            enabled: true,
            itemDistance: parsePixelValue(legendGap),
            margin: parsePixelValue(verticalGap),
            symbolPadding: parsePixelValue(seriesLabelGap, seriesLabelFontSize)
        },
        plotOptions: {
            column: {
                borderRadius: parsePixelValue(barRadius)
            }
        },
        xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(verticalGap)
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(axisLabelGap)
            }
        }
    };
}

export function getChartBaseOptions({
    locale,
    options,
    translateChartFn
}: {
    locale: LocaleCode;
    options?: Highcharts.Options;
    translateChartFn: TranslateFn;
}): Highcharts.Options {
    let out: Highcharts.Options = {
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
            locale,
            resetZoom: translateChartFn('resetZoom'),
            resetZoomTitle: translateChartFn('resetZoom')
        }
    };
    const {series} = options ?? {};

    if (series && series.length > 0) {
        const firstSeries = series[0];

        if (firstSeries.type === ChartType.Pie) {
            out = {
                ...out,
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            };
        }
    }

    return out;
}

export function getChartForcedOptions({options, size}: {options?: Highcharts.Options; size?: ChartSize}) {
    const {series} = options ?? {};
    let out: Highcharts.Options = {};

    if (size) {
        out = merge(out, getSizeRelatedOptions(size));
    } else {
        const sizes: ChartSize[] = [Size.xxs, Size.xs, Size.sm, Size.md, Size.lg];

        out = merge(out, {
            responsive: {
                rules: sizes.map((chartSize) => ({
                    condition: {minWidth: chartMinWidth[chartSize]},
                    chartOptions: getSizeRelatedOptions(chartSize)
                }))
            }
        } satisfies Highcharts.Options);
    }

    if (series && series.length > 0) {
        const firstSeries = series[0];

        if (
            firstSeries.type === ChartType.Pie &&
            firstSeries.data &&
            firstSeries.data.length > PIE_SERIES_DATA_MAX_LEN
        ) {
            // Don't show data labels to avoid label connector line rendering issue.
            out = merge(out, {
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                }
            } satisfies Highcharts.Options);
        }
    }

    return out;
}

export function getChartOptions({
    locale,
    options,
    size,
    translateChartFn
}: {
    locale: LocaleCode;
    options?: Highcharts.Options;
    size?: ChartSize;
    translateChartFn: TranslateFn;
}) {
    const baseOptions = getChartBaseOptions({locale, options, translateChartFn});
    const forcedOptions = getChartForcedOptions({options, size});

    return merge(baseOptions, options, forcedOptions);
}
