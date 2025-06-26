import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DatePicker} from './datepicker.js';
import {HTMLElementType, Size} from '../../../constants/index.js';
import {DataState, TDataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {emptyFn} from '../../../utils/functionhelper.js';
import {CSSProperties, ReactNode, useState} from 'react';
import {useCultureDay} from '../../../hooks/usecultureday.js';
import {BodyText} from '../../text/index.js';
import {DayOfMonth} from '../../datadisplay/index.js';

const meta = {
    args: {
        onKeyDown: emptyFn,
        onKeyUp: emptyFn,
        onFocus: emptyFn,
        onChange: emptyFn,
        onBlur: emptyFn,
        onOpenChange: emptyFn,
        onFocusChange: emptyFn
    },
    component: DatePicker,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', width: '200px'}}>
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
    title: 'Components/Inputs/DatePicker'
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {
    args: {
        label: 'Date',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'DatePicker component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'onChange',
    'label',
    'size',
    'changeCallback',
    'changeParams',
    'dataState',
    'helpText',
    'helpTextSuccess',
    'isRequired',
    'minValue',
    'maxValue',
    'relatedValue',
    'showClearButton',
    'showHelpTextIcon',
    'tooltipContent',
    'value',
    'className',
    'isDisabled',
    'isSkeleton'
];

export const States: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Different states of the component.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DatePicker {...args} label="Default" value="2024-06-24" />
            <DatePicker {...args} isReadOnly={true} label="Read-only" value="2024-06-24" />
            <DatePicker
                {...args}
                dataState={new Map([[DataState.LOADING, 'Loading.']])}
                label="Loading = Read-only"
                value="2024-06-24"
            />
            <DatePicker {...args} isDisabled={true} label="Disabled" value="2024-06-24" />
            <DatePicker
                {...args}
                dataState={new Map([[DataState.ERROR, 'Invalid date.']])}
                label="Error"
                value="2024-06-24"
            />
        </div>
    )
};

export const Sizes: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Different sizes of the component.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DatePicker {...args} label="Size md" size={Size.md} value="2024-06-24" />
            <DatePicker {...args} label="Size sm" size={Size.sm} value="2024-06-24" />
            <DatePicker {...args} label="Size xs" size={Size.xs} value="2024-06-24" />
        </div>
    )
};

export const MinAndMax: Story = {
    args: {
        maxValue: '2024-06-23',
        minValue: '2024-06-10',
        label: 'Date',
        size: Size.md
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
    },
    render: (args) => {
        const [value, setValue] = useState<string | null>('2024-06-14');
        const [dataState, setDataState] = useState<Map<TDataState, string> | null>(null);
        const cultureDay = useCultureDay();

        const dateChanged = (obj: {value: string | null}) => {
            const newValue = obj.value;
            const {minValue, maxValue} = args;

            if (newValue && minValue && newValue < minValue) {
                setDataState(
                    new Map([[DataState.ERROR, `Date must be ${cultureDay(minValue as string).format('l')} or later.`]])
                );
            } else if (newValue && maxValue && newValue > maxValue) {
                setDataState(
                    new Map([
                        [DataState.ERROR, `Date must be ${cultureDay(maxValue as string).format('l')} or earlier.`]
                    ])
                );
            } else {
                setDataState(null);
            }

            setValue(newValue);
        };

        return (
            <DatePicker
                {...args}
                changeCallback={dateChanged}
                dataState={dataState}
                label="Date"
                size={Size.md}
                value={value}
            />
        );
    }
};

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
const absenceDates = ['2024-06-19', '2024-06-20'];

export const CalendarWithCustomCellContentExample: Story = {
    args: {
        calendarProps: {
            footer: (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: '0 var(--space-xs)'
                    }}>
                    <LegendItem indicator={<AbsenceIndicator />} text="absent" />
                </div>
            ),
            renderCellContent: ({date, dayOfMonthProps}) => {
                const hasAbsence = absenceDates.includes(date);

                return (
                    <DayOfMonth
                        {...dayOfMonthProps}
                        aria-label={`${dayOfMonthProps['aria-label']}${hasAbsence ? ', absent' : ''}`}
                        customContent={
                            hasAbsence && (
                                <AbsenceIndicator style={{position: 'absolute', top: '-4px', right: '-4px'}} />
                            )
                        }
                    />
                );
            }
        },
        label: 'Date',
        size: Size.md,
        value: '2024-06-14'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'DatePicker calendar can be customized via calendarProps.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
        label: 'Date',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'DatePicker can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        label: 'Date',
        value: '2024-06-24'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Test changeCallback with changeParams.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const btns = canvas.getAllByRole('button');

        await userEvent.click(btns[1]);

        const popover = canvasElement.parentNode?.querySelector('.datepicker__popover');
        const dates = popover?.querySelectorAll('.day-of-month') ?? [];

        await userEvent.click(dates[10]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '2024-06-06'
            })
        );
    }
};
