import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Calendar} from './calendar.js';
import {CSSProperties, ReactNode, useState} from 'react';
import {BodyText} from '../../text/index.js';
import {HTMLElementType, Size} from '../../../constants/index.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {DayOfMonth} from '../../datadisplay/index.js';

const meta = {
    component: Calendar,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/Calendar'
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Simple: Story = {
    args: {
        value: '2024-06-14'
    },
    parameters: {
        docs: {
            description: {
                story: 'Simple calendar with minimum content.'
            }
        }
    }
};

const argsForStories = [
    'value',
    'className',
    'footer',
    'highlightSelectedWeek',
    'maxValue',
    'minValue',
    'onChange',
    'relatedValue',
    'renderCellContent',
    'showWeekNumbers',
    'isDisabled',
    'isReadOnly',
    'isInvalid',
    'isDateUnavailable',
    'isSkeleton'
];

export const MinAndMax: Story = {
    args: {
        maxValue: '2024-06-23',
        minValue: '2024-06-10',
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'The minValue and maxValue props can be used to limit selectable date.'
            }
        }
    }
};

export const YearSelectionRange: Story = {
    args: {
        value: '2024-06-14',
        yearSelectionRange: {start: 1925, end: 2125}
    },
    parameters: {
        docs: {
            description: {
                story: 'Year selection range can be controlled with yearSelectionRange prop.'
            }
        }
    }
};

const CompletedIndicator = ({style}: {style?: CSSProperties}) => (
    <span
        style={{
            ...style,
            display: 'inline-block',
            background: 'var(--input-icon-success)',
            height: '6px',
            width: '6px',
            borderRadius: 'var(--radius-full)'
        }}
    />
);
const AbsenceIndicator = ({style}: {style?: CSSProperties}) => (
    <span
        style={{
            ...style,
            display: 'inline-block',
            height: '0px',
            width: '0px',
            borderStyle: 'solid',
            borderWidth: '0 8px 6px 0',
            borderColor: 'transparent var(--warning-icon-weak) transparent transparent'
        }}
    />
);
const LegendItem = ({indicator, text}: {indicator: ReactNode; text: string}) => (
    <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-xxs)'}}>
        {indicator}
        <BodyText elementType={HTMLElementType.Span} size={Size.xs} style={{color: 'var(--input-text-enabled-strong)'}}>
            {text}
        </BodyText>
    </div>
);
const completedDates = ['2024-06-03', '2024-06-04'];
const absenceDates = ['2024-06-19', '2024-06-20'];
const publicHolidayDates = ['2024-06-21', '2024-06-22'];

export const CustomCellContentExample: Story = {
    args: {
        footer: (
            <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: '0 var(--space-xs)'}}>
                <LegendItem indicator={<CompletedIndicator />} text={'completed'} />
                <LegendItem indicator={<AbsenceIndicator />} text={'absent'} />
            </div>
        ),
        highlightSelectedWeek: true,
        renderCellContent: ({date, dayOfMonthProps}) => {
            const {children, isSelected} = dayOfMonthProps;
            const showAbsenceIndicator = absenceDates.includes(date);
            const showCompletedIndicator = completedDates.includes(date);
            const usePublicHolidayStyle = !isSelected && publicHolidayDates.includes(date);

            return (
                <DayOfMonth
                    {...dayOfMonthProps}
                    customContent={
                        <>
                            {showAbsenceIndicator && (
                                <AbsenceIndicator style={{position: 'absolute', top: '-4px', right: '-4px'}} />
                            )}
                            {showCompletedIndicator && (
                                <CompletedIndicator
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                            )}
                        </>
                    }
                    style={usePublicHolidayStyle ? {color: 'var(--input-text-accent)'} : undefined}>
                    {usePublicHolidayStyle ?
                        <strong>{children}</strong>
                    :   children}
                </DayOfMonth>
            );
        },
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Complex calendar with custom content.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Calendar can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const FocusTest: Story = {
    args: {
        onChange: fn(),
        onFocusChange: fn(),
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Focus test for Calendar.'
            }
        }
    },
    play: async ({args}) => {
        // Go to previous month
        await userEvent.keyboard('{Tab}{Enter}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(1));

        // Go to next month
        await userEvent.keyboard('{Tab}{Enter}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(2));

        // Select month
        await userEvent.keyboard('{Tab}{ArrowDown}{ArrowDown}{Enter}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(3));

        // Select year
        await userEvent.keyboard('{Tab}{ArrowDown}{ArrowDown}{Enter}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(4));

        // Go to today
        await userEvent.keyboard('{Tab}{Enter}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(5));

        // Move day focus
        await userEvent.keyboard('{Tab}{ArrowRight}');
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(6));

        // Reset (for consistent Chromatic snapshot)
        await userEvent.keyboard('{Tab}{Enter}');
    },
    render: (args) => {
        const [key, setKey] = useState(1);

        return (
            <div style={{position: 'relative'}}>
                <Calendar {...args} key={key} />
                <button
                    className="visually-hidden"
                    onClick={() => {
                        setKey(key + 1);
                    }}>
                    Reset
                </button>
            </div>
        );
    }
};

export const ChangeTest: Story = {
    args: {
        onChange: fn(),
        onFocusChange: fn(),
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Change test for Calendar.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole('button');

        await userEvent.click(buttons[8]);
        await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(args.onFocusChange).toHaveBeenCalledTimes(1));
    }
};
