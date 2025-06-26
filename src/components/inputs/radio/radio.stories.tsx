import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Radio} from './radio.js';
import {RadioGroup} from 'react-aria-components';
import {Size} from '../../../constants/size.js';
import {LabelPlacement} from '../../../constants/labelplacement.js';
import {CSSProperties} from 'react';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';

const meta = {
    component: Radio,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.radio'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/Radio'
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
    args: {
        isDisabled: false,
        helpText: 'Best way to stay up-to-date',
        label: 'Allow notifications',
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'Radio component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <RadioGroup aria-label="Radio group">
            <Radio {...args} />
        </RadioGroup>
    )
};

const argsForStories = ['aria-label', 'helpText', 'isDisabled', 'isSkeleton', 'label', 'labelPlacement', 'size'];

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
        labelPlacement: LabelPlacement.End,
        size: Size.sm
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'You can use Radio with or without the label. Label can be placed at start or end. You can also use Radio with or without help text below the label.'
            }
        }
    },
    render: (args) => {
        const radios = [
            <Radio {...args} aria-label="Allow notifications" value="foo" />,
            <Radio {...args} label="Allow notifications" value="foo" />,
            <Radio {...args} label="Allow notifications" labelPlacement={LabelPlacement.Start} value="foo" />
        ];
        const selectedRadios = [
            <Radio {...args} aria-label="Allow notifications" value="foo" />,
            <Radio {...args} label="Allow notifications" value="foo" />,
            <Radio {...args} label="Allow notifications" labelPlacement={LabelPlacement.Start} value="foo" />
        ];
        const radiosWithHelp = [
            <Radio {...args} helpText="Best way to stay up-to-date" label="Allow notifications" value="foo" />,
            <Radio
                {...args}
                helpText="Best way to stay up-to-date"
                label="Allow notifications"
                labelPlacement={LabelPlacement.Start}
                value="foo"
            />
        ];

        return (
            <div style={gridStyles}>
                {radios.map((radio, i) => (
                    <div key={`unselected-${i}`}>
                        <RadioGroup aria-label="Radio group">{radio}</RadioGroup>
                    </div>
                ))}
                {selectedRadios.map((radio, i) => (
                    <div key={`selected-${i}`}>
                        <RadioGroup aria-label="Radio group" defaultValue="foo">
                            {radio}
                        </RadioGroup>
                    </div>
                ))}
                {radiosWithHelp.map((radio, i) => (
                    <div key={`help-${i}`}>
                        <RadioGroup aria-label="Radio group">{radio}</RadioGroup>
                    </div>
                ))}
            </div>
        );
    }
};

export const Sizes: Story = {
    args: {
        isDisabled: false,
        labelPlacement: LabelPlacement.End
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 2 sizes of radios: sm and md.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <RadioGroup aria-label="Radio group" defaultValue="foo">
                <Radio {...args} label="Size sm・16px" size={Size.sm} value="foo" />
            </RadioGroup>
            <RadioGroup aria-label="Radio group" defaultValue="foo">
                <Radio {...args} label="Size md・24px" size={Size.md} value="foo" />
            </RadioGroup>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        label: 'Allow notifications',
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
            <RadioGroup aria-label="Radio group">
                <Radio {...args} />
            </RadioGroup>
            <RadioGroup aria-label="Radio group" defaultValue="foo">
                <Radio {...args} value="foo" />
            </RadioGroup>
            <RadioGroup aria-label="Radio group">
                <Radio {...args} helpText="Best way to stay up-to-date" />
            </RadioGroup>
        </div>
    )
};

export const Invalid: Story = {
    args: {
        label: 'Allow notifications',
        labelPlacement: LabelPlacement.End
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Error state is visible when parent group element has error state.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <RadioGroup aria-label="Radio group" isInvalid={true}>
                <Radio {...args} />
            </RadioGroup>
            <RadioGroup aria-label="Radio group" defaultValue="foo" isInvalid={true}>
                <Radio {...args} value="foo" />
            </RadioGroup>
            <RadioGroup aria-label="Radio group" isInvalid={true}>
                <Radio {...args} helpText="Best way to stay up-to-date" />
            </RadioGroup>
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
                story: 'Radio can be displayed as skeleton with isSkeleton prop.'
            }
        }
    },
    render: (args) => (
        <RadioGroup aria-label="Radio group">
            <Radio {...args} />
        </RadioGroup>
    )
};
