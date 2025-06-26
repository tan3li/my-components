import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {CheckboxGroup} from './checkboxgroup.js';
import {Checkbox} from '../checkbox/checkbox.js';
import {DataState, TDataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {iconNames} from '../../media/index.js';
import {useState} from 'react';

const meta = {
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/CheckboxGroup'
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isInvalid: false,
        isRequired: true,
        label: 'Your preferred contact methods',
        size: Size.sm,
        tooltipContent: {
            headerIconName: iconNames.InfoFilled,
            headerText: 'Contact method',
            content: 'Contact method is a way of contacting.'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'CheckboxGroup component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <CheckboxGroup {...args}>
            <Checkbox label="Phone" value="phone" />
            <Checkbox label="Email" value="email" />
            <Checkbox label="Snail mail" value="mail" />
        </CheckboxGroup>
    )
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
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        label: 'Your preferred contact methods'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 2 sizes: sm and md.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem'}}>
            <CheckboxGroup {...args} size={Size.sm}>
                <Checkbox label="Phone" value="phone" />
                <Checkbox label="Email" value="email" />
                <Checkbox label="Snail mail" value="mail" />
            </CheckboxGroup>
            <CheckboxGroup {...args} size={Size.md}>
                <Checkbox label="Phone" value="phone" />
                <Checkbox label="Email" value="email" />
                <Checkbox label="Snail mail" value="mail" />
            </CheckboxGroup>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: true,
        isInvalid: false,
        isRequired: true,
        label: 'Your preferred contact methods',
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'Disabled state can be controlled with isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <CheckboxGroup {...args}>
            <Checkbox label="Phone" value="phone" />
            <Checkbox label="Email" value="email" />
            <Checkbox label="Snail mail" value="mail" />
        </CheckboxGroup>
    )
};

export const Invalid: Story = {
    args: {
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isRequired: true,
        label: 'Your preferred contact methods',
        size: Size.sm
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Error state can be controlled with isInvalid or dataState prop.'
            }
        }
    },
    render: (args) => {
        const [helpTextSuccess, setHelpTextSuccess] = useState<string | undefined>();
        const [dataState, setDataState] = useState<Map<TDataState, string>>(
            new Map([[DataState.ERROR, 'Please, select at least one option.']])
        );

        const onChange = (value: string[]) => {
            const newDataState = new Map();
            let newHelpTextSuccess = '';

            if (value.length > 0) {
                newHelpTextSuccess = "We won't spam. Pinky promise!";
            } else {
                newDataState.set(DataState.ERROR, 'Please, select at least one option.');
            }

            setHelpTextSuccess(newHelpTextSuccess);
            setDataState(newDataState);
        };

        return (
            <CheckboxGroup {...args} dataState={dataState} helpTextSuccess={helpTextSuccess} onChange={onChange}>
                <Checkbox label="Phone" value="phone" />
                <Checkbox label="Email" value="email" />
                <Checkbox label="Snail mail" value="mail" />
            </CheckboxGroup>
        );
    }
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        isSkeleton: true,
        label: 'Your preferred contact methods',
        size: Size.sm
    },
    decorators: [
        (Story) => (
            <div style={{width: 220}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'CheckboxGroup can be displayed as skeleton with isSkeleton prop.'
            }
        }
    },
    render: (args) => (
        <CheckboxGroup {...args}>
            <Checkbox label="Phone" value="phone" />
            <Checkbox label="Email" value="email" />
            <Checkbox label="Snail mail" value="mail" />
        </CheckboxGroup>
    )
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isRequired: false,
        label: 'Your preferred contact methods',
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
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const checkboxGroup = canvas.getByRole('group');
        const checkboxes = checkboxGroup.querySelectorAll('.checkbox');

        await userEvent.click(checkboxes[0]);

        await waitFor(() => expect(args.changeCallback).toHaveBeenCalledWith({field: 'foo', value: ['phone']}));
    },
    render: (args) => (
        <CheckboxGroup {...args}>
            <Checkbox label="Phone" value="phone" />
            <Checkbox label="Email" value="email" />
            <Checkbox label="Snail mail" value="mail" />
        </CheckboxGroup>
    )
};
