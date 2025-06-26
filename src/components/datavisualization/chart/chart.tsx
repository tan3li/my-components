import Highcharts from 'highcharts';
import 'highcharts/modules/accessibility';
import {HighchartsReact} from 'highcharts-react-official';
import {CSSProperties, useMemo} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {ChartProps} from './chartprops.js';
import {getChartOptions} from './getchartoptions.js';
import {useLocales} from '../../../contexts/index.js';
import {useTranslateChart} from '../../../hooks/translations/usetranslatechart.js';
import {ChartType} from './charttype.js';
import {formatChartValue} from './formatchartvalue.js';

declare module 'highcharts' {
    interface Chart {
        _totalLabel?: Highcharts.SVGElement;
    }
}

// Global options
Highcharts.setOptions({
    chart: {
        colorCount: 21, // match with CSS
        events: {
            render() {
                const chartType = this.options.chart?.type;

                if (chartType === ChartType.Donut) {
                    const series = this.series[0];
                    const total = series.data.reduce((sum, seriesItem) => sum + (seriesItem.y ?? 0), 0);
                    const totalText = formatChartValue(this.tooltip.options, total);

                    this._totalLabel ??= this.renderer
                        .label(totalText, 0)
                        .css({
                            textAnchor: 'middle'
                        })
                        .addClass('chart-total-label')
                        .add();

                    const x = series.center[0] + this.plotLeft;
                    const y = series.center[1] + this.plotTop - (this._totalLabel.attr('height') as number) / 2;

                    this._totalLabel.attr({
                        text: totalText,
                        x,
                        y
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
        formatter(tooltip) {
            const formattedValue = formatChartValue(tooltip.options, this.y);

            return `
                <div class="chart-tooltip">
                    <div class="chart-tooltip__line">${this.key}</div>
                    <div class="chart-tooltip__line">
                        <svg class="chart-tooltip__legend-symbol"><rect/></svg>
                        ${this.series.name}: <span class="chart-tooltip__value"><b>${formattedValue}</b></span>
                    </div>
                </div>
            `;
        },
        outside: true,
        padding: 0,
        shadow: false,
        useHTML: true
    }
});

export function Chart(props: ChartProps) {
    const {aspectRatio, className, containerProps, fullHeight, options: propsOptions, size, ...otherProps} = props;
    const {cultureLocale} = useLocales();
    const translateChart = useTranslateChart();
    const options = useMemo(() => {
        const chartOptions = getChartOptions({
            options: propsOptions,
            locale: cultureLocale,
            size,
            translateChartFn: translateChart
        });

        // Lang options don't change dynamically without calling setOptions().
        Highcharts.setOptions({lang: chartOptions.lang});

        return chartOptions;
    }, [propsOptions, size, cultureLocale, translateChart]);
    const style: CSSProperties = {};

    if (!options?.chart?.height) {
        if (aspectRatio) {
            style.aspectRatio = aspectRatio;
        } else if (fullHeight) {
            style.height = '100%';
        }
    }

    return (
        <HighchartsReact
            {...otherProps}
            containerProps={{
                // HC styled mode forces light/dark theme based on user system preference.
                // We have only light theme for now so must include "highcharts-light" CSS class.
                className: classNames('chart-container highcharts-light', className),
                ...containerProps,
                style: {
                    ...containerProps?.style,
                    ...style
                }
            }}
            highcharts={Highcharts}
            // Must re-draw chart for certain property changes to take effect
            key={`${cultureLocale};${size ?? ''}`}
            options={options}
        />
    );
}
