import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {ToggleButton} from './togglebutton.js';
import {DataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent} from 'storybook/test';

const meta = {
    args: {
        onBlur: undefined,
        onFocus: undefined,
        onFocusChange: undefined
    },
    component: ToggleButton,
    decorators: [
        (Story) => (
            <div style={{width: 350}}>
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
    title: 'Components/Inputs/ToggleButton'
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Playground: Story = {
    args: {
        defaultValue: 'empty',
        helpText: 'Help text content',
        items: [
            {text: 'Not selected', value: 'empty'},
            {text: 'Yes', value: 'yes'},
            {text: 'No', value: 'no'}
        ],
        label: 'Field label',
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'ToggleButton component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'helpText',
    'helpTextSuccess',
    'isDisabled',
    'isInvalid',
    'isRequired',
    'isSkeleton',
    'label',
    'size',
    'tooltipContent'
];

export const Sizes: Story = {
    args: {
        defaultValue: 'empty',
        items: [
            {text: 'Not selected', value: 'empty'},
            {text: 'Yes', value: 'yes'},
            {text: 'No', value: 'no'}
        ]
    },
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
            <ToggleButton {...args} label="Size md" size={Size.md} />
            <ToggleButton {...args} label="Size sm" size={Size.sm} />
            <ToggleButton {...args} label="Size xs" size={Size.xs} />
        </div>
    )
};

export const States: Story = {
    args: {
        defaultValue: 'empty',
        helpText: 'Help text content',
        items: [
            {text: 'Not selected', value: 'empty'},
            {text: 'Yes', value: 'yes'},
            {text: 'No', value: 'no'}
        ],
        size: Size.sm
    },
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
            <ToggleButton {...args} isDisabled={true} label="Disabled" />
            <ToggleButton
                {...args}
                items={[
                    {text: 'Not selected', value: 'empty'},
                    {text: 'Yes', value: 'yes', isDisabled: true},
                    {text: 'No', value: 'no'}
                ]}
                label="Disabled option"
            />
            <ToggleButton {...args} isReadOnly={true} label="Read-only" />
            <ToggleButton {...args} dataState={new Map([[DataState.ERROR, 'Something went wrong']])} label="Error" />
        </div>
    )
};

export const ManyOptions: Story = {
    args: {
        defaultValue: '1',
        helpText: 'You can have as many options as you want, but make sure there is enough space',
        items: [...new Array(6).keys()].map((i) => {
            const value = (i + 1).toString();

            return {
                text: value,
                value
            };
        }),
        label: 'Many options',
        size: Size.sm
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'You can have as many options as you want, but make sure there is enough space.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        defaultValue: 'empty',
        helpText: 'Help text content',
        isSkeleton: true,
        items: [
            {text: 'Not selected', value: 'empty'},
            {text: 'Yes', value: 'yes'},
            {text: 'No', value: 'no'}
        ],
        label: 'Field label',
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'ToggleButton can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const InteractionTest: Story = {
    args: {
        defaultValue: 'empty',
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        helpText: 'Help text content',
        items: [
            {text: 'Not selected', value: 'empty'},
            {text: 'Yes', value: 'yes'},
            {text: 'No', value: 'no'}
        ],
        label: 'Field label',
        size: Size.sm
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
    play: async ({args, canvas}) => {
        const radios = canvas.getAllByRole('radio');

        await userEvent.click(radios[1]);
        await expect(args.changeCallback).toHaveBeenCalledWith({field: 'foo', value: 'yes'});
    }
};
