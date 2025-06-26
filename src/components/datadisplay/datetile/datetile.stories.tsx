import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DateTile, DateTileProps} from './datetile.js';
import {useState} from 'react';
import {iconNames} from '../../media/index.js';
import {MenuItem} from '../../action/index.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {DayOfMonth} from './dayofmonth.js';

const meta = {
    args: {
        onPress: undefined
    },
    component: DateTile,
    decorators: [
        (Story) => (
            <div style={{minWidth: '210px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/DateTile'
} satisfies Meta<typeof DateTile>;

export default meta;
type Story = StoryObj<typeof DateTile>;

export const Playground: Story = {
    args: {
        date: '2024-08-31',
        isCompleted: false,
        isLocked: false,
        isSelected: false,
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        secondaryText: '7:30'
    },
    parameters: {
        docs: {
            description: {
                story: 'DateTile component, be my guest and play with it!'
            }
        }
    }
};

export const States: Story = {
    args: {
        date: '2024-08-31',
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        secondaryText: '7:30'
    },
    parameters: {
        docs: {
            description: {
                story: 'DateTile can be shown in selected, today, completed or locked state.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DateTile {...args} isSelected={true} />
            <DateTile {...args} isToday={true} />
            <DateTile {...args} isCompleted={true} />
            <DateTile {...args} isLocked={true} />
        </div>
    )
};

export const Completed: Story = {
    args: {
        date: '2024-08-31',
        isCompleted: true,
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        secondaryText: '7:30'
    },
    parameters: {
        docs: {
            description: {
                story: 'Completed state variants.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DateTile {...args} isSelected={true} />
            <DateTile {...args} isToday={true} />
            <DateTile {...args} isLocked={true} />
            <DateTile {...args} completedIconName={iconNames.Verified} />
        </div>
    )
};

export const AriaLabel: Story = {
    args: {
        date: '2024-12-24',
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        onPress: emptyFn,
        secondaryText: '0:00'
    },
    parameters: {
        docs: {
            description: {
                story: 'Default aria-label can be overridden or extended with ariaLabel prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DateTile {...args} ariaLabel="It's beginning to look a lot like christmas..." />
            <DateTile {...args} ariaLabel={(defaultAriaLabel) => `${defaultAriaLabel}, Christmas Eve`} />
        </div>
    )
};

export const InteractiveExample: Story = {
    args: {
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        secondaryText: '7:30'
    },
    decorators: [
        (Story) => (
            <div style={{minWidth: '650px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'Example of using DateTiles as interactive tabs.'
            }
        }
    },
    render: (args) => {
        const [selectedDate, setSelectedDate] = useState('2024-10-14');
        const dates: Array<DateTileProps<MenuItem, string> & {hasAbsences?: boolean}> = [
            {date: '2024-10-14'},
            {date: '2024-10-15', hasAbsences: true, tooltipProps: {content: 'Date has absences'}},
            {date: '2024-10-16'},
            {date: '2024-10-17', isCompleted: true, tooltipProps: {content: 'Date is completed'}},
            {date: '2024-10-18', isLocked: true, tooltipProps: {content: 'Date is locked'}}
        ];

        return (
            <div style={{display: 'flex'}}>
                {dates.map(({date, hasAbsences, ...props}) => (
                    <div
                        key={date}
                        style={{
                            borderRight: '1px solid var(--data-border-enabled-weak',
                            borderBottom: '1px solid var(--data-border-enabled-weak',
                            flex: '1 1 0%',
                            position: 'relative'
                        }}>
                        <DateTile
                            {...args}
                            {...props}
                            date={date}
                            isSelected={selectedDate === date}
                            onPress={setSelectedDate}
                            role="tab"
                        />
                        {hasAbsences && (
                            <span
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    display: 'inline-block',
                                    height: '11px',
                                    width: '14px',
                                    background:
                                        'repeating-linear-gradient(' +
                                        '-45deg, ' +
                                        'var(--warning-background-strong), ' +
                                        'var(--warning-background-strong) 3px, ' +
                                        'var(--warning-400) 3px, ' +
                                        'var(--warning-400) 4px ' +
                                        ')',
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
};

export const CustomDayOfMonthExample: Story = {
    args: {
        date: '2025-12-06',
        isCompleted: false,
        isSelected: false,
        isToday: false,
        menuProps: {
            items: [
                {id: '1', name: 'Action 1'},
                {id: '2', name: 'Action 2'},
                {id: '3', name: 'Action 3'}
            ]
        },
        renderDayOfMonth: (props) => {
            const {isSelected, isCompleted, children} = props;

            return (
                <DayOfMonth
                    {...props}
                    style={!isSelected && !isCompleted ? {color: 'var(--input-text-accent)'} : undefined}>
                    {isSelected ? children : <strong>{children}</strong>}
                </DayOfMonth>
            );
        },
        secondaryText: '0:00',
        tooltipProps: {
            content: 'Independence day'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Use renderDayOfMonth prop to display day number in a custom way, f.e. to indicate public holiday.'
            }
        }
    }
};
