import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Radio} from '../radio/radio.js';
import {Size} from '../../../constants/size.js';
import {RadioGroup} from './radiogroup.js';
import {DataState, TDataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {iconNames} from '../../media/index.js';
import {useState} from 'react';

const meta = {
    component: RadioGroup,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/RadioGroup'
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isInvalid: false,
        isRequired: true,
        label: 'Your preferred contact method',
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
                story: 'RadioGroup component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <RadioGroup {...args}>
            <Radio label="Don't contact me" value="none" />
            <Radio label="Phone" value="phone" />
            <Radio label="Email" value="email" />
            <Radio label="Snail mail" value="mail" />
        </RadioGroup>
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
        label: 'Your preferred contact method'
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
            <RadioGroup {...args} size={Size.sm}>
                <Radio label="Don't contact me" value="none" />
                <Radio label="Phone" value="phone" />
                <Radio label="Email" value="email" />
                <Radio label="Snail mail" value="mail" />
            </RadioGroup>
            <RadioGroup {...args} size={Size.md}>
                <Radio label="Don't contact me" value="none" />
                <Radio label="Phone" value="phone" />
                <Radio label="Email" value="email" />
                <Radio label="Snail mail" value="mail" />
            </RadioGroup>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: true,
        isInvalid: false,
        isRequired: true,
        label: 'Your preferred contact method',
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
        <RadioGroup {...args}>
            <Radio label="Don't contact me" value="none" />
            <Radio label="Phone" value="phone" />
            <Radio label="Email" value="email" />
            <Radio label="Snail mail" value="mail" />
        </RadioGroup>
    )
};

export const Invalid: Story = {
    args: {
        helpText: 'Help text content',
        helpTextSuccess: '',
        isDisabled: false,
        isRequired: true,
        label: 'Your preferred contact method',
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
            new Map([[DataState.ERROR, 'Please, select one option.']])
        );

        const onChange = () => {
            setHelpTextSuccess("We won't spam. Pinky promise!");
            setDataState(new Map());
        };

        return (
            <RadioGroup {...args} dataState={dataState} helpTextSuccess={helpTextSuccess} onChange={onChange}>
                <Radio label="Don't contact me" value="none" />
                <Radio label="Phone" value="phone" />
                <Radio label="Email" value="email" />
                <Radio label="Snail mail" value="mail" />
            </RadioGroup>
        );
    }
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        isSkeleton: true,
        label: 'Your preferred contact method',
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
        <RadioGroup {...args}>
            <Radio label="Don't contact me" value="none" />
            <Radio label="Phone" value="phone" />
            <Radio label="Email" value="email" />
            <Radio label="Snail mail" value="mail" />
        </RadioGroup>
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
        label: 'Your preferred contact method',
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
        const radioGroup = canvas.getByRole('radiogroup');
        const radios = radioGroup.querySelectorAll('.radio');

        await userEvent.click(radios[0]);

        await waitFor(() => expect(args.changeCallback).toHaveBeenCalledWith({field: 'foo', value: 'none'}));
    },
    render: (args) => (
        <RadioGroup {...args}>
            <Radio label="Don't contact me" value="none" />
            <Radio label="Phone" value="phone" />
            <Radio label="Email" value="email" />
            <Radio label="Snail mail" value="mail" />
        </RadioGroup>
    )
};
