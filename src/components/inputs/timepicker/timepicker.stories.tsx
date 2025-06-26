import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/index.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {TimePicker} from './timepicker';
import {DataState} from '../../../constants/datastate';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';

const meta = {
    args: {
        onKeyDown: emptyFn,
        onKeyUp: emptyFn,
        onFocus: emptyFn,
        onChange: emptyFn,
        onBlur: emptyFn,
        onFocusChange: emptyFn
    },
    component: TimePicker,
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
    title: 'Components/Inputs/TimePicker'
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Playground: Story = {
    args: {
        label: 'Time',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'TimePicker component, be my guest and play with it!'
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
            <TimePicker {...args} label="Default" value="2024-07-01T12:45" />
            <TimePicker {...args} isReadOnly={true} label="Read-only" value="2024-07-01T12:45" />
            <TimePicker
                {...args}
                dataState={new Map([[DataState.LOADING, 'Loading.']])}
                label="Loading = Read-only"
                value="2024-07-01T12:45"
            />
            <TimePicker {...args} isDisabled={true} label="Disabled" value="2024-07-01T12:45" />
            <TimePicker
                {...args}
                dataState={new Map([[DataState.ERROR, 'Invalid date.']])}
                label="Error"
                value="2024-07-01T12:45"
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
            <TimePicker {...args} label="Size md" size={Size.md} value="2024-07-01T12:45" />
            <TimePicker {...args} label="Size sm" size={Size.sm} value="2024-07-01T12:45" />
            <TimePicker {...args} label="Size xs" size={Size.xs} value="2024-07-01T12:45" />
        </div>
    )
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
        label: 'Time',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'TimePicker can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        label: 'Time',
        value: '2024-07-01T12:45'
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
        const btn = canvas.getByRole('combobox');

        await userEvent.click(btn);

        const popover = canvasElement.parentNode?.querySelector('.timepicker__popover');
        const options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '2024-07-01T00:00:00'
            })
        );
    }
};
