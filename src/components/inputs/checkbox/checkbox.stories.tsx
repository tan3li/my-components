import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Checkbox} from './checkbox.js';
import {LabelPlacement} from '../../../constants/labelplacement.js';
import {Size} from '../../../constants/size.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {DataState} from '../../../constants/datastate.js';
import {CSSProperties} from 'react';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';

const meta = {
    args: {
        onHoverStart: undefined,
        onHoverEnd: undefined,
        onHoverChange: undefined,
        onFocusChange: undefined,
        onFocus: undefined,
        onBlur: undefined
    },
    component: Checkbox,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.checkbox'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/Checkbox'
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
    args: {
        helpText: 'Save my login details for next time.',
        isDisabled: false,
        isIndeterminate: false,
        isInvalid: false,
        isRequired: false,
        label: 'Remember me',
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'Checkbox component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'aria-label',
    'dataState',
    'helpText',
    'isDisabled',
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
                story: 'You can use Checkbox with or without the label. Label can be placed at start or end. You can also use Checkbox with or without help text below the label.'
            }
        }
    },
    render: (args) => {
        const checkboxes = [
            <Checkbox {...args} aria-label="Remember me" />,
            <Checkbox {...args} label="Remember me" />,
            <Checkbox {...args} label="Remember me" labelPlacement={LabelPlacement.Start} />,
            <Checkbox {...args} aria-label="Remember me" isIndeterminate={true} />,
            <Checkbox {...args} isIndeterminate={true} label="Remember me" />,
            <Checkbox {...args} isIndeterminate={true} label="Remember me" labelPlacement={LabelPlacement.Start} />,
            <Checkbox {...args} aria-label="Remember me" isSelected={true} />,
            <Checkbox {...args} isSelected={true} label="Remember me" />,
            <Checkbox {...args} isSelected={true} label="Remember me" labelPlacement={LabelPlacement.Start} />,
            <Checkbox {...args} aria-label="Remember me" isRequired={true} />,
            <Checkbox
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                label="Remember me"
            />,
            <Checkbox
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                label="Remember me"
                labelPlacement={LabelPlacement.Start}
            />,
            <Checkbox {...args} aria-label="Remember me" isRequired={true} isSelected={true} />,
            <Checkbox
                {...args}
                helpText="Save my login details for next time."
                isRequired={true}
                isSelected={true}
                label="Remember me"
            />,
            <Checkbox
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
        isIndeterminate: false,
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
            <Checkbox {...args} isSelected={true} label="Size sm・16px" size={Size.sm} />
            <Checkbox {...args} isSelected={true} label="Size md・24px" size={Size.md} />
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
            <Checkbox {...args} helpText="Help text content" isDisabled={true} label="Remember me" />
            <Checkbox {...args} isDisabled={true} isIndeterminate={true} label="Remember me" />
            <Checkbox {...args} isDisabled={true} isSelected={true} label="Remember me" />
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
                <Checkbox {...args} dataState={dataState} label="Error state" />
                <Checkbox {...args} isInvalid={true} label="Invalid, not selected" />
                <Checkbox {...args} isIndeterminate={true} isInvalid={true} label="Invalid, indeterminate" />
                <Checkbox {...args} isInvalid={true} isSelected={true} label="Invalid, selected" />
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
            <Checkbox {...args} />
            <Checkbox {...args} helpText="You can always change this later." />
            <Checkbox {...args} labelPlacement={LabelPlacement.Start} />
            <Checkbox {...args} helpText="You can always change this later." labelPlacement={LabelPlacement.Start} />
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
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Checkbox can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        dataTestId: 'checkbox',
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

        await userEvent.click(canvas.getAllByTestId('checkbox')[0]);

        await waitFor(() => expect(args.changeCallback).toHaveBeenCalledWith({field: 'foo', value: true}));
    }
};
