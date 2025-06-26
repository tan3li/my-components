import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DateTimeFieldType, DateTimeRangeFields} from './datetimerangefields.js';
import {emptyFn} from '../../../utils/functionhelper';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';

const meta = {
    args: {
        onChange: emptyFn
    },
    component: DateTimeRangeFields,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', width: '400px'}}>
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
    title: 'Components/Inputs/DateTimeRangeFields'
} satisfies Meta<typeof DateTimeRangeFields>;

export default meta;
type Story = StoryObj<typeof DateTimeRangeFields>;

export const Playground: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'End date', type: DateTimeFieldType.EndDate},
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'DateTimeRangeFields component, be my guest and play with it!'
            }
        }
    }
};

export const DateRangeFields: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'End date', type: DateTimeFieldType.EndDate}
        ],
        value: {
            start: '2024-07-01',
            end: '2024-07-05'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Component can be used with Dates only.'
            }
        }
    }
};

export const TimeRangeFields: Story = {
    args: {
        fields: [
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ],
        value: {
            start: '2024-07-01T08:00:00',
            end: '2024-07-01T16:00:00'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Component can be used with Times only.'
            }
        }
    }
};

export const FieldOrder: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End date', type: DateTimeFieldType.EndDate},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Order of the fields can be set as needed.'
            }
        }
    }
};

export const DateValidation: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'End date', type: DateTimeFieldType.EndDate},
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ],
        value: {
            start: '2024-07-05T08:00:00',
            end: '2024-07-01T16:00:00'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Error message is shown if end date is before start date.'
            }
        }
    }
};

export const TimeValidation: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'End date', type: DateTimeFieldType.EndDate},
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ],
        value: {
            start: '2024-07-05T16:00:00',
            end: '2024-07-05T08:00:00'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Error message is shown if end time is before start time.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate, isSkeleton: true},
            {label: 'End date', type: DateTimeFieldType.EndDate, isSkeleton: true},
            {label: 'Start time', type: DateTimeFieldType.StartTime, isSkeleton: true},
            {label: 'End time', type: DateTimeFieldType.EndTime, isSkeleton: true}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'DateTimeRangeFields can be displayed as skeleton be setting isSkeleton prop for each field.'
            }
        }
    }
};

export const InteractionTest: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        fields: [
            {label: 'Start date', type: DateTimeFieldType.StartDate},
            {label: 'End date', type: DateTimeFieldType.EndDate},
            {label: 'Start time', type: DateTimeFieldType.StartTime},
            {label: 'End time', type: DateTimeFieldType.EndTime}
        ],
        value: {
            start: '2024-07-01T08:00:00',
            end: '2024-07-05T16:00:00'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Interaction test for date time range selection.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const btns = canvas.getAllByRole('button');
        const comboboxBtns = canvas.getAllByRole('combobox');

        // Start date
        await userEvent.click(btns[1]);

        let popover = canvasElement.parentNode?.querySelector('.datepicker__popover'),
            dates = popover?.querySelectorAll('.day-of-month') ?? [];

        await userEvent.click(dates[1]);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: {
                    start: '2024-07-02T08:00:00',
                    end: '2024-07-05T16:00:00'
                }
            })
        );

        // End date
        await userEvent.click(btns[3]);
        popover = canvasElement.parentNode?.querySelector('.datepicker__popover');
        dates = popover?.querySelectorAll('.day-of-month') ?? [];

        await userEvent.click(dates[5]);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: {
                    start: '2024-07-02T08:00:00',
                    end: '2024-07-06T16:00:00'
                }
            })
        );

        // Start time
        await userEvent.click(comboboxBtns[0]);
        popover = canvasElement.parentNode?.querySelector('.timepicker__popover');
        let options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[36]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: {
                    start: '2024-07-02T09:00:00',
                    end: '2024-07-06T16:00:00'
                }
            })
        );

        // End time
        await userEvent.click(comboboxBtns[1]);
        popover = canvasElement.parentNode?.querySelector('.timepicker__popover');
        options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[68]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: {
                    start: '2024-07-02T09:00:00',
                    end: '2024-07-06T17:00:00'
                }
            })
        );
    }
};
