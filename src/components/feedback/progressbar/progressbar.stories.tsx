import {Meta, StoryObj} from '@storybook/react-webpack5';
import {ProgressBar} from './progressbar.js';
import {Position} from '../../../constants/position.js';

const meta = {
    component: ProgressBar,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/ProgressBar'
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {
    args: {
        'aria-label': 'Progress',
        isIndeterminate: false,
        value: 60
    },
    parameters: {
        docs: {
            description: {
                story: 'Progress bar component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <div style={{width: '800px'}}>
            <ProgressBar {...args} isIndeterminate={args.isIndeterminate} value={args.value} />
        </div>
    )
};

export const Variants: Story = {
    args: {
        'aria-label': 'Progress'
    },
    parameters: {
        controls: {
            exclude: ['aria-label', 'labelPosition', 'value', 'valueLabelPosition']
        },
        docs: {
            description: {
                story: 'Progress bar component with different variants.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <div style={{display: 'grid', width: '100%'}}>
                <ProgressBar {...args} value={0} />
                <ProgressBar {...args} value={50} />
                <ProgressBar {...args} value={100} />
                <ProgressBar {...args} value={0} valueLabelPosition={Position.Right} />
                <ProgressBar {...args} value={50} valueLabelPosition={Position.Right} />
                <ProgressBar {...args} value={100} valueLabelPosition={Position.Right} />
                <ProgressBar {...args} value={0} valueLabelPosition={Position.Bottom} />
                <ProgressBar {...args} value={50} valueLabelPosition={Position.Bottom} />
                <ProgressBar {...args} value={100} valueLabelPosition={Position.Bottom} />
            </div>
        </div>
    )
};

export const NoValueLabel: Story = {
    args: {
        'aria-label': 'Progress'
    },
    parameters: {
        controls: {
            exclude: ['aria-label', 'helpText', 'labelPosition', 'value', 'valueLabelPosition']
        },
        docs: {
            description: {
                story: 'Progress bar component when there is no value label.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <div style={{display: 'grid', width: '100%'}}>
                <ProgressBar {...args} value={0} />
                <ProgressBar {...args} helpText={'This is a help text.'} value={25} />
                <ProgressBar {...args} helpText={'This is a help text.'} labelPosition={Position.Top} value={50} />
                <ProgressBar {...args} helpText={'This is a help text.'} labelPosition={Position.Bottom} value={100} />
            </div>
        </div>
    )
};

export const ValueLabelOnTheRight: Story = {
    args: {
        'aria-label': 'Progress'
    },
    parameters: {
        controls: {
            exclude: ['aria-label', 'helpText', 'labelPosition', 'value', 'valueLabelPosition']
        },
        docs: {
            description: {
                story: 'Progress bar component when the value label is positioned on the right.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <div style={{display: 'grid', width: '100%'}}>
                <ProgressBar {...args} value={0} valueLabelPosition={Position.Right} />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    value={25}
                    valueLabelPosition={Position.Right}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    labelPosition={Position.Top}
                    value={50}
                    valueLabelPosition={Position.Right}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    labelPosition={Position.Bottom}
                    value={100}
                    valueLabelPosition={Position.Right}
                />
            </div>
        </div>
    )
};

export const ValueLabelOnTheBottom: Story = {
    args: {
        'aria-label': 'Progress'
    },
    parameters: {
        controls: {
            exclude: ['aria-label', 'helpText', 'labelPosition', 'value', 'valueLabelPosition']
        },
        docs: {
            description: {
                story: 'Progress bar component when the value label is positioned on the bottom.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <div style={{display: 'grid', width: '100%'}}>
                <ProgressBar {...args} value={0} valueLabelPosition={Position.Bottom} />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    value={25}
                    valueLabelPosition={Position.Bottom}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    labelPosition={Position.Top}
                    value={50}
                    valueLabelPosition={Position.Bottom}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    labelPosition={Position.Bottom}
                    value={100}
                    valueLabelPosition={Position.Bottom}
                />
            </div>
        </div>
    )
};

export const Indeterminate: Story = {
    args: {
        'aria-label': 'Progress'
    },
    parameters: {
        controls: {
            exclude: ['aria-label', 'helpText', 'isIndeterminate', 'labelPosition', 'value', 'valueLabelPosition']
        },
        docs: {
            description: {
                story: 'Progress bar component in indeterminate state.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <div style={{display: 'grid', width: '100%'}}>
                <ProgressBar {...args} isIndeterminate={true} value={0} valueLabelPosition={Position.Bottom} />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    isIndeterminate={true}
                    value={25}
                    valueLabelPosition={Position.Bottom}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    isIndeterminate={true}
                    labelPosition={Position.Top}
                    value={50}
                    valueLabelPosition={Position.Bottom}
                />
                <ProgressBar
                    {...args}
                    helpText={'This is a help text.'}
                    isIndeterminate={true}
                    labelPosition={Position.Bottom}
                    value={100}
                    valueLabelPosition={Position.Bottom}
                />
            </div>
        </div>
    )
};
