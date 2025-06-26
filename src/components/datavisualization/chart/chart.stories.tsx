import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Chart} from './chart.js';
import {Size} from '../../../constants/index.js';
import {ChartType} from './charttype.js';
import {chartMinWidth} from './chartminwidth.js';
import {ReactNode, useCallback, useRef, useState} from 'react';
import {useResizeObserver} from '@react-aria/utils';

const meta = {
    component: Chart,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        chromatic: {
            delay: 2000 // wait for animations to finish for consistent snapshots
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Visualization/Chart'
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof Chart>;

export const ColumnChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of column chart.'
            }
        }
    }
};

export const BarChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Bar
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                stackLabels: {
                    enabled: true
                },
                title: {
                    text: 'Value'
                }
            },
            plotOptions: {
                bar: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Bar
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Bar
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Bar
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of bar chart.'
            }
        }
    }
};

export const PieChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Pie
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [
                {
                    name: 'Percentage',
                    data: [
                        {
                            name: 'Series 1',
                            y: 50
                        },
                        {
                            name: 'Series 2',
                            y: 25
                        },
                        {
                            name: 'Series 3',
                            y: 25
                        }
                    ],
                    type: ChartType.Pie
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of pie chart.'
            }
        }
    }
};

export const DonutChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Donut
            },
            tooltip: {
                valueSuffix: ' pcs'
            },
            series: [
                {
                    innerSize: '70%',
                    name: 'Amount',
                    data: [
                        {
                            name: 'Series 1',
                            y: 50
                        },
                        {
                            name: 'Series 2',
                            y: 25
                        },
                        {
                            name: 'Series 3',
                            y: 25
                        }
                    ],
                    type: ChartType.Pie
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of donut chart.'
            }
        }
    }
};

export const LineChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Line
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [2, 9, 9, 9, 9, 9, 9],
                    type: ChartType.Line
                },
                {
                    name: 'Series 2',
                    data: [5, 5, 5, 5, 5, 4, 4],
                    type: ChartType.Line
                },
                {
                    name: 'Series 3',
                    data: [7, 7, 2, 7, 2, 7, 7],
                    type: ChartType.Line
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of line chart.'
            }
        }
    }
};

export const AreaChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Area
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [2, 9, 9, 9, 9, 9, 9],
                    type: ChartType.Area
                },
                {
                    name: 'Series 2',
                    data: [5, 5, 5, 5, 5, 4, 4],
                    type: ChartType.Area
                },
                {
                    name: 'Series 3',
                    data: [7, 7, 2, 7, 2, 7, 7],
                    type: ChartType.Area
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of area chart.'
            }
        }
    }
};

export const AreasplineChart: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Areaspline
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [2, 9, 9, 9, 9, 9, 9],
                    type: ChartType.Areaspline
                },
                {
                    name: 'Series 2',
                    data: [5, 5, 5, 5, 5, 4, 4],
                    type: ChartType.Areaspline
                },
                {
                    name: 'Series 3',
                    data: [7, 7, 2, 7, 2, 7, 7],
                    type: ChartType.Areaspline
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of areaspline chart.'
            }
        }
    }
};

function ResizableBox({
    children,
    defaultDimensions
}: {
    children: ReactNode;
    defaultDimensions: {height: number; width: number};
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState(defaultDimensions);

    const onResize = useCallback(() => {
        setDimensions({
            width: wrapperRef.current?.offsetWidth ?? 0,
            height: wrapperRef.current?.offsetHeight ?? 0
        });
    }, []);

    useResizeObserver({ref: wrapperRef, onResize});

    const {width, height} = dimensions;

    return (
        <div
            ref={wrapperRef}
            style={{
                border: '1px solid',
                height,
                width,
                resize: 'both',
                overflow: 'auto',
                position: 'relative'
            }}>
            <code
                style={{
                    background: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: '0.5rem',
                    zIndex: 1
                }}>
                {`${width}px × ${height}px`}
            </code>
            {children}
        </div>
    );
}

export const ResponsiveSizing: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            responsive: {
                rules: [Size.xxs, Size.xs, Size.sm, Size.md, Size.lg].map((size) => ({
                    condition: {minWidth: chartMinWidth[size]},
                    chartOptions: {title: {text: `Chart ${size}`}}
                }))
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'When size prop is not set, font sizes and spacings scale depending on containing element width.'
            }
        }
    },
    render: (args) => (
        <ResizableBox defaultDimensions={{width: 500, height: 420}}>
            <Chart {...args} />
        </ResizableBox>
    )
};

export const FixedHeight: Story = {
    args: {
        options: {
            chart: {
                height: 300,
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Use options prop to give fixed height for the chart.'
            }
        }
    },
    render: (args) => (
        <ResizableBox defaultDimensions={{width: 500, height: 350}}>
            <Chart {...args} />
        </ResizableBox>
    )
};

export const AspectRatio: Story = {
    args: {
        aspectRatio: '1.5 / 1',
        options: {
            chart: {
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Use aspectRatio prop to maintain specific aspect ratio.'
            }
        }
    },
    render: (args) => (
        <ResizableBox defaultDimensions={{width: 500, height: 350}}>
            <Chart {...args} />
        </ResizableBox>
    )
};

export const FullHeight: Story = {
    args: {
        fullHeight: true,
        options: {
            chart: {
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Use fullHeight prop to make chart take full height of the containing element.'
            }
        }
    },
    render: (args) => (
        <ResizableBox defaultDimensions={{width: 500, height: 350}}>
            <Chart {...args} />
        </ResizableBox>
    )
};

export const Sizes: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Column
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                stackLabels: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [3, 4, 4, 6, 6, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 2',
                    data: [3, 4, 4, 4, 4, 5],
                    type: ChartType.Column
                },
                {
                    name: 'Series 3',
                    data: [3, 4, 3, 4, 6, 5],
                    type: ChartType.Column
                }
            ]
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'When size prop is set, font sizes and spacings are fixed to the given size regardless of containing element width.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
            <Chart {...args} options={{...args.options, title: {text: 'Chart xxs'}}} size={Size.xxs} />
            <Chart {...args} options={{...args.options, title: {text: 'Chart xs'}}} size={Size.xs} />
            <Chart {...args} options={{...args.options, title: {text: 'Chart sm'}}} size={Size.sm} />
            <Chart {...args} options={{...args.options, title: {text: 'Chart md'}}} size={Size.md} />
            <Chart {...args} options={{...args.options, title: {text: 'Chart lg'}}} size={Size.lg} />
        </div>
    )
};

const COLOR_COUNT = 21;
const colorSeriesData: Array<{name: string; y: number}> = [];

for (let i = 0; i < COLOR_COUNT; i++) {
    colorSeriesData.push({
        name: `Color ${i + 1}`,
        y: 50
    });
}

export const SeriesColors: Story = {
    args: {
        options: {
            chart: {
                type: ChartType.Pie
            },
            series: [
                {
                    name: 'Data',
                    data: colorSeriesData,
                    type: ChartType.Pie
                }
            ]
        },
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'All series colors.'
            }
        }
    }
};
