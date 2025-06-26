import {Meta, StoryObj} from '@storybook/react-webpack5';
import {ToggleSwitch} from './toggleswitch.js';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {CSSProperties} from 'react';
import {Size} from '../../../constants/size.js';
import {DataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {LabelPlacement} from '../../../constants/labelplacement.js';

const meta = {
    args: {
        onHoverStart: undefined,
        onHoverEnd: undefined,
        onHoverChange: undefined,
        onFocusChange: undefined,
        onFocus: undefined,
        onBlur: undefined
    },
    component: ToggleSwitch,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.toggle-switch'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/ToggleSwitch'
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Playground: Story = {
    args: {
        helpText: 'Save my login details for next time.',
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        label: 'Remember me',
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'ToggleSwitch component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'aria-label',
    'dataState',
    'helpText',
    'isDisabled',
    'isInvalid',
    'isRequired',
    'isSelected',
    'isSkeleton',
    'label',
    'labelPlacement',
    'size'
];
const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '3rem',
    rowGap: '3rem'
};
const listStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
};

export const Variants: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'You can use ToggleSwitch with or without the label. Label can be placed at start or end. You can also use ToggleSwitch with or without help text below the label.'
            }
        }
    },
    render: (args) => {
        const checkboxes = [
            <ToggleSwitch {...args} aria-label="Remember me" />,
            <ToggleSwitch {...args} label="Remember me" />,
            <ToggleSwitch {...args} label="Remember me" labelPlacement={LabelPlacement.Start} />,
            <ToggleSwitch {...args} aria-label="Remember me" isSelected={true} />,
            <ToggleSwitch {...args} isSelected={true} label="Remember me" />,
            <ToggleSwitch {...args} isSelected={true} label="Remember me" labelPlacement={LabelPlacement.Start} />,
            <ToggleSwitch {...args} aria-label="Remember me" isRequired={true} />,
            <ToggleSwitch
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                label="Remember me"
            />,
            <ToggleSwitch
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                label="Remember me"
                labelPlacement={LabelPlacement.Start}
            />,
            <ToggleSwitch {...args} aria-label="Remember me" isRequired={true} isSelected={true} />,
            <ToggleSwitch
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                isSelected={true}
                label="Remember me"
            />,
            <ToggleSwitch
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                isSelected={true}
                label="Remember me"
                labelPlacement={LabelPlacement.Start}
            />
        ];

        return (
            <div style={gridStyles}>
                {checkboxes.map((checkbox, i) => (
                    <div key={i}>{checkbox}</div>
                ))}
            </div>
        );
    }
};

export const Sizes: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        labelPlacement: LabelPlacement.End
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 2 sizes of checkboxes: sm and md.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <ToggleSwitch {...args} isSelected={true} label="Size sm・16px" size={Size.sm} />
            <ToggleSwitch {...args} isSelected={true} label="Size md・24px" size={Size.md} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        isInvalid: false,
        isRequired: false,
        labelPlacement: LabelPlacement.End
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Disabled state can be set by passing isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <ToggleSwitch {...args} helpText="Help text content" isDisabled={true} label="Remember me" />
            <ToggleSwitch {...args} isDisabled={true} isSelected={true} label="Remember me" />
        </div>
    )
};

export const Invalid: Story = {
    args: {
        isRequired: false,
        isSelected: false,
        labelPlacement: LabelPlacement.End
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Error state can be set by passing isInvalid prop or dataState with ERROR.'
            }
        }
    },
    render: (args) => {
        const dataState = new Map();

        dataState.set(DataState.ERROR, 'Something is not right.');

        return (
            <div style={listStyles}>
                <ToggleSwitch {...args} dataState={dataState} label="Error state" />
                <ToggleSwitch {...args} isInvalid={true} label="Invalid, not selected" />
                <ToggleSwitch {...args} isInvalid={true} isSelected={true} label="Invalid, selected" />
            </div>
        );
    }
};

export const Multiline: Story = {
    args: {
        label: 'Yes, I agree to the processing of my personal data to identify my interest as further outlined here, and I am aware that I can withdraw my consent at any time.'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'When label is very long.'
            }
        }
    },
    render: (args) => (
        <div style={{...listStyles, width: '40rem'}}>
            <ToggleSwitch {...args} />
            <ToggleSwitch {...args} helpText="You can always change this later." />
            <ToggleSwitch {...args} labelPlacement={LabelPlacement.Start} />
            <ToggleSwitch
                {...args}
                helpText="You can always change this later."
                labelPlacement={LabelPlacement.Start}
            />
        </div>
    )
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
        label: 'Remember me',
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'ToggleSwitch can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        dataTestId: 'toggle-switch',
        label: 'Remember me',
        labelPlacement: LabelPlacement.End
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

        await userEvent.click(canvas.getAllByTestId('toggle-switch')[0]);

        await waitFor(() => expect(args.changeCallback).toHaveBeenCalledWith({field: 'foo', value: true}));
    }
};
