import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DataCard} from './datacard.js';
import {DataCardActionElement, DataCardAlertLevel, DataCardStyle} from './types.js';
import {Orientation, Size} from '../../../constants/index.js';
import {iconNames} from '../../media/index.js';
import {BadgeStyle, BadgeVariant} from '../../feedback/index.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {Divider} from '../divider/index.js';
import {useLocales} from '../../../contexts/index.js';
import {useMemo} from 'react';
import {HelpText} from '../../text/index.js';

const meta = {
    component: DataCard,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/DataCard'
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof DataCard>;

const lineChartSVG = (
    <svg fill="none" height="100%" viewBox="0 0 212 97" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.38462 38.1013L1 40.5489V96.5715H211V0.571533L205.615 3.56303L200.231 9.81799L194.846 11.9936L189.462 6.28258L184.077 3.56303L178.692 8.18626L173.308 9.81799L167.923 14.4412L162.538 17.7047L157.154 14.4412L151.769 17.7047L146.385 24.2316L141 26.9511L135.615 24.2316L130.231 23.1438L124.846 22.8718L119.462 20.6962L114.077 25.3194L108.692 25.5914L103.308 22.3279L97.9231 25.8633L92.5385 28.3109L87.1538 26.1353L81.7692 30.2146L76.3846 27.767L71 30.2146L65.6154 25.0475L60.2308 24.2316L54.8461 28.5829L49.4615 32.1183L44.0769 29.6707L38.6923 32.1183L33.3077 29.6707L27.9231 35.9256L22.5385 38.1013L17.1538 36.4696L11.7692 40.5489L6.38462 38.1013Z"
            fill="url(#paint0_linear_10860_5613)"
            fillOpacity="0.1"
        />
        <path
            d="M1 40.5489L6.38462 38.1013L11.7692 40.5489L17.1538 36.4696L22.5385 38.1013L27.9231 35.9256L33.3077 29.6707L38.6923 32.1183L44.0769 29.6707L49.4615 32.1183L54.8462 28.5829L60.2308 24.2316L65.6154 25.0475L71 30.2146L76.3846 27.767L81.7692 30.2146L87.1538 26.1353L92.5385 28.3109L97.9231 25.8633L103.308 22.3279L108.692 25.5914L114.077 25.3194L119.462 20.6962L124.846 22.8718L130.231 23.1438L135.615 24.2316L141 26.9511L146.385 24.2316L151.769 17.7047L157.154 14.4412L162.538 17.7047L167.923 14.4412L173.308 9.81799L178.692 8.18626L184.077 3.56303L189.462 6.28258L194.846 11.9936L200.231 9.81799L205.615 3.56303L211 0.571533"
            stroke="#684FC9"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_10860_5613"
                x1="106"
                x2="106"
                y1="19.4001"
                y2="96.5715">
                <stop stopColor="#684FC9" />
                <stop offset="1" stopColor="#684FC9" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export const Playground: Story = {
    args: {
        badgeProps: {
            children: '5 %',
            iconName: iconNames.ArrowUpward,
            style: BadgeStyle.Plain,
            variant: BadgeVariant.Success
        },
        description: 'Expected sales value',
        headerIconName: iconNames.DollarFilled,
        headerText: 'Sales',
        size: Size.md,
        style: DataCardStyle.Card,
        value: '10 000 €',
        visualization: lineChartSVG
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard component, be my guest and play with it!'
            }
        }
    }
};

export const Style: Story = {
    args: {
        description: 'Expected sales value',
        size: Size.md,
        value: '10 000 €',
        visualization: lineChartSVG
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard can be displayed with Card or Plain style.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem'}}>
            <DataCard {...args} style={DataCardStyle.Card} />
            <DataCard {...args} style={DataCardStyle.Plain} />
        </div>
    )
};

export const Sizes: Story = {
    args: {
        description: 'Expected sales value',
        headerIconName: iconNames.DollarFilled,
        headerText: 'Sales',
        value: '10 000 €'
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard can be displayed in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DataCard {...args} size={Size.sm} style={DataCardStyle.Card} />
            <DataCard {...args} size={Size.sm} style={DataCardStyle.Plain} />

            <DataCard {...args} size={Size.md} style={DataCardStyle.Card} />
            <DataCard {...args} size={Size.md} style={DataCardStyle.Plain} />

            <DataCard {...args} size={Size.lg} style={DataCardStyle.Card} />
            <DataCard {...args} size={Size.lg} style={DataCardStyle.Plain} />
        </div>
    )
};

export const Interactivity: Story = {
    args: {
        badgeProps: {
            children: '5 %',
            iconName: iconNames.ArrowUpward,
            style: BadgeStyle.Plain,
            variant: BadgeVariant.Success
        },
        description: 'Expected sales value',
        headerIconName: iconNames.DollarFilled,
        headerText: 'Sales',
        size: Size.md,
        value: '10 000 €'
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard can be interactive via button or as itself.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
            <DataCard
                {...args}
                action={{
                    element: DataCardActionElement.Self,
                    onPress: emptyFn
                }}
                style={DataCardStyle.Card}
            />
            <DataCard
                {...args}
                action={{
                    element: DataCardActionElement.Button,
                    onPress: emptyFn,
                    text: 'Action'
                }}
                style={DataCardStyle.Plain}
            />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        badgeProps: {
            children: '5 %',
            iconName: iconNames.ArrowUpward,
            style: BadgeStyle.Plain,
            variant: BadgeVariant.Success
        },
        description: 'Expected sales value',
        headerIconName: iconNames.DollarFilled,
        headerText: 'Sales',
        isDisabled: true,
        size: Size.md,
        value: '10 000 €'
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard can be displayed as disabled.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
            <DataCard
                {...args}
                action={{
                    element: DataCardActionElement.Self,
                    onPress: emptyFn
                }}
                style={DataCardStyle.Card}
            />
            <DataCard
                {...args}
                action={{
                    element: DataCardActionElement.Button,
                    onPress: emptyFn,
                    text: 'Action'
                }}
                style={DataCardStyle.Plain}
            />
        </div>
    )
};

export const MinWidth: Story = {
    args: {
        description: 'Billable amount',
        minWidth: 400,
        size: Size.sm,
        style: DataCardStyle.Card,
        value: '10 000 €'
    },
    parameters: {
        docs: {
            description: {
                story: 'Min-width prop can be used to override the default min-width if needed.'
            }
        }
    }
};

export const Alert: Story = {
    args: {
        size: Size.sm,
        style: DataCardStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Alert prop can be used to highlight value that needs attention. It has 2 levels: warning and danger, and it supports custom aria-label for screen-readers.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <DataCard
                {...args}
                alert={{level: DataCardAlertLevel.Warning}}
                description="deadlines coming soon"
                value={3}
            />
            <DataCard
                {...args}
                alert={{ariaLabel: 'Critical', level: DataCardAlertLevel.Danger}}
                description="unpaid invoices"
                value={4}
            />
        </div>
    )
};

export const CardStackExample: Story = {
    args: {
        description: 'Expected sales value',
        minWidth: 138,
        size: Size.sm,
        style: DataCardStyle.Card,
        value: '10 000 €'
    },
    parameters: {
        controls: {
            exclude: ['style']
        },
        docs: {
            description: {
                story: 'Example of Card-style stacking.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                }}>
                <DataCard {...args} />
                <DataCard {...args} />
                <DataCard {...args} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                }}>
                <DataCard {...args} />
                <DataCard {...args} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                }}>
                <DataCard {...args} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                }}>
                <DataCard {...args} />
            </div>
        </div>
    )
};

export const PlainStackExample: Story = {
    args: {
        description: 'Expected sales value',
        minWidth: 118,
        size: Size.sm,
        style: DataCardStyle.Plain,
        value: '10 000 €'
    },
    parameters: {
        controls: {
            exclude: ['style']
        },
        docs: {
            description: {
                story: 'Example of Plain-style stacking.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div
                style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: '1rem',
                    padding: '0 1rem'
                }}>
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: '1rem',
                    padding: '0 1rem'
                }}>
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: '1rem',
                    padding: '0 1rem'
                }}>
                <DataCard {...args} />
                <Divider orientation={Orientation.vertical} size={Size.sm} />
                <DataCard {...args} />
            </div>
            <div
                style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: '1rem',
                    padding: '0 1rem'
                }}>
                <DataCard {...args} />
            </div>
        </div>
    )
};

export const ValueFormattingExample: Story = {
    args: {
        description: 'Billable amount',
        size: Size.sm,
        style: DataCardStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Numeric values should be formatted according to current culture locale. For example, Intl.NumberFormat can be used for this.'
            }
        }
    },
    render: (args) => {
        const {cultureLocale} = useLocales();
        const formatter = useMemo(
            () =>
                new Intl.NumberFormat(cultureLocale, {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }),
            [cultureLocale]
        );
        // Replace non-breaking spaces to make sure flex items equal sizing works as expected.
        const formatNumber = (num: number) => formatter.format(num).replace(/\u00A0/g, ' ');

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <DataCard {...args} value={formatNumber(12500.5)} />
                    <DataCard {...args} value={formatNumber(-12500.5)} />
                    <DataCard {...args} value={`${formatNumber(12500.5)}/h`} />
                </div>
                <HelpText showIcon={true}>Try changing culture locale from Storybook toolbar.</HelpText>
            </div>
        );
    }
};

export const Skeleton: Story = {
    args: {
        badgeProps: {
            children: '5 %',
            iconName: iconNames.ArrowUpward,
            style: BadgeStyle.Plain,
            variant: BadgeVariant.Success
        },
        description: 'Expected sales value',
        headerIconName: iconNames.DollarFilled,
        headerText: 'Sales',
        isSkeleton: true,
        size: Size.md,
        style: DataCardStyle.Card,
        value: '10 000 €',
        visualization: lineChartSVG
    },
    parameters: {
        docs: {
            description: {
                story: 'DataCard can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};
