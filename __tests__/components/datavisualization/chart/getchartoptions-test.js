import {renderHook} from '@testing-library/react';
import {getChartOptions} from '../../../../src/components/datavisualization/chart/getchartoptions.js';
import {Size} from '../../../../src/index.js';
import {useTranslateChart} from '../../../../src/hooks/translations/usetranslatechart.js';
import {chartMinWidth, ChartType} from '../../../../src/components/datavisualization/index.js';
import merge from 'lodash.merge';

describe('getChartOptions', function () {
    const commonExpOptions = {
        lang: {
            accessibility: {
                axis: {
                    rangeFromTo: 'chart.rangeFromTo',
                    xAxisDescriptionSingular: 'chart.xAxisDescriptionSingular',
                    yAxisDescriptionSingular: 'chart.yAxisDescriptionSingular'
                },
                chartTypes: {
                    barMultiple: 'chart.type.barMultiple',
                    barSingle: 'chart.type.barSingle',
                    columnMultiple: 'chart.type.barMultiple',
                    columnSingle: 'chart.type.barSingle',
                    defaultMultiple: 'chart.type.defaultMultiple',
                    defaultSingle: 'chart.type.defaultSingle',
                    emptyChart: 'chart.type.emptyChart',
                    lineMultiple: 'chart.type.lineMultiple',
                    lineSingle: 'chart.type.lineSingle',
                    pieMultiple: 'chart.type.pieMultiple',
                    pieSingle: 'chart.type.pieSingle'
                },
                chartContainerLabel: 'chart.chartContainerLabel',
                defaultChartTitle: 'chart.defaultChartTitle',
                legend: {
                    legendItem: 'chart.legendItem',
                    legendLabelNoTitle: 'chart.legendLabelNoTitle'
                },
                screenReaderSection: {
                    endOfChartMarker: 'chart.endOfChartMarker'
                },
                series: {
                    nullPointValue: 'chart.nullPointValue',
                    summary: {
                        bar: 'chart.seriesSummary.bar',
                        barCombination: 'chart.seriesSummary.barCombination',
                        column: 'chart.seriesSummary.bar',
                        columnCombination: 'chart.seriesSummary.barCombination',
                        default: 'chart.default',
                        defaultCombination: 'chart.default',
                        line: 'chart.seriesSummary.line',
                        lineCombination: 'chart.seriesSummary.lineCombination',
                        pie: 'chart.seriesSummary.pie',
                        pieCombination: 'chart.seriesSummary.pieCombination'
                    }
                },
                svgContainerLabel: 'chart.svgContainerLabel',
                zoom: {
                    resetZoomButton: 'chart.resetZoom'
                }
            },
            locale: 'fi-FI',
            resetZoom: 'chart.resetZoom',
            resetZoomTitle: 'chart.resetZoom'
        }
    };
    const pieExpOptions = {
        legend: {
            align: 'center',
            verticalAlign: 'bottom'
        }
    };

    const xxsExpOptions = {
        chart: {
            className: 'chart chart--xxs'
        },
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
    const xsExpOptions = {
        chart: {
            className: 'chart chart--xs'
        },
        legend: {
            enabled: true,
            itemDistance: 16,
            margin: 4,
            symbolPadding: 3.375
        },
        plotOptions: {
            column: {
                borderRadius: 4
            }
        },
        xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 4
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 8
            }
        }
    };
    const smExpOptions = {
        chart: {
            className: 'chart chart--sm'
        },
        legend: {
            enabled: true,
            itemDistance: 20,
            margin: 12,
            symbolPadding: 3.75
        },
        plotOptions: {
            column: {
                borderRadius: 4
            }
        },
        xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 12
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 8
            }
        }
    };
    const mdExpOptions = {
        chart: {
            className: 'chart chart--md'
        },
        legend: {
            enabled: true,
            itemDistance: 24,
            margin: 20,
            symbolPadding: 4.5
        },
        plotOptions: {
            column: {
                borderRadius: 6
            }
        },
        xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 20
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 12
            }
        }
    };
    const lgExpOptions = {
        chart: {
            className: 'chart chart--lg'
        },
        legend: {
            enabled: true,
            itemDistance: 32,
            margin: 24,
            symbolPadding: 5.25
        },
        plotOptions: {
            column: {
                borderRadius: 8
            }
        },
        xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 24
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: 16
            }
        }
    };

    const sizeTests = [
        {
            size: Size.xxs,
            expOptions: xxsExpOptions
        },
        {
            size: Size.xs,
            expOptions: xsExpOptions
        },
        {
            size: Size.sm,
            expOptions: smExpOptions
        },
        {
            size: Size.md,
            expOptions: mdExpOptions
        },
        {
            size: Size.lg,
            expOptions: lgExpOptions
        }
    ];

    sizeTests.forEach(({size, expOptions}) => {
        it(`Should return options for size = ${size}`, function () {
            const {result} = renderHook(() =>
                getChartOptions({
                    size,
                    locale: 'fi-FI',
                    translateChartFn: useTranslateChart()
                })
            );

            expect(result.current).toEqual({...commonExpOptions, ...expOptions});
        });
    });

    it('Should return options when size is not defined', function () {
        const {result} = renderHook(() =>
            getChartOptions({
                locale: 'fi-FI',
                translateChartFn: useTranslateChart()
            })
        );

        expect(result.current).toEqual({
            ...commonExpOptions,
            responsive: {
                rules: [
                    {condition: {minWidth: chartMinWidth[Size.xxs]}, chartOptions: xxsExpOptions},
                    {condition: {minWidth: chartMinWidth[Size.xs]}, chartOptions: xsExpOptions},
                    {condition: {minWidth: chartMinWidth[Size.sm]}, chartOptions: smExpOptions},
                    {condition: {minWidth: chartMinWidth[Size.md]}, chartOptions: mdExpOptions},
                    {condition: {minWidth: chartMinWidth[Size.lg]}, chartOptions: lgExpOptions}
                ]
            }
        });
    });

    it('Should hide pie chart data labels if data size > 10', function () {
        const options = {
            series: [
                {
                    name: 'Percentage',
                    data: Array.from({length: 11}, (_, i) => ({name: `Series ${i + 1}`, y: 10})),
                    type: ChartType.Pie
                }
            ]
        };
        const {result} = renderHook(() =>
            getChartOptions({
                locale: 'fi-FI',
                translateChartFn: useTranslateChart(),
                size: Size.md,
                options
            })
        );

        expect(result.current).toEqual(
            merge({}, commonExpOptions, pieExpOptions, options, mdExpOptions, {
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                }
            })
        );
    });

    it('Should not hide pie chart data labels if data size <= 10', function () {
        const options = {
            series: [
                {
                    name: 'Percentage',
                    data: Array.from({length: 10}, (_, i) => ({name: `Series ${i + 1}`, y: 10})),
                    type: ChartType.Pie
                }
            ]
        };
        const {result} = renderHook(() =>
            getChartOptions({
                locale: 'fi-FI',
                translateChartFn: useTranslateChart(),
                size: Size.md,
                options
            })
        );

        expect(result.current).toEqual(merge({}, commonExpOptions, pieExpOptions, options, mdExpOptions));
    });
});
