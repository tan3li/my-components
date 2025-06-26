import {Meta, StoryObj} from '@storybook/react-webpack5';
import {StepItem} from './stepitem.js';
import {Steps} from './steps.js';
import {Orientation} from '../../../constants/orientation.js';
import {Alignment} from '../../../constants/alignment.js';
import {useState} from 'react';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';

const meta = {
    component: Steps,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Steps'
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof Steps>;

export const Playground: Story = {
    args: {
        activeStep: 1,
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'Steps component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <div style={{width: '500px', height: args.orientation === Orientation.vertical ? '200px' : 'auto'}}>
            <Steps {...args}>
                <StepItem isCompleted={true} progressValue={100} title="Select this" />
                <StepItem progressValue={0} title="Create this" />
                <StepItem title="Customize that" />
            </Steps>
        </div>
    )
};

export const SupportText: Story = {
    args: {
        activeStep: 1,
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'Optional support text can be given for the steps.'
            }
        }
    },
    render: (args) => (
        <div style={{width: '500px', height: args.orientation === Orientation.vertical ? '200px' : 'auto'}}>
            <Steps {...args}>
                <StepItem isCompleted={true} progressValue={100} supportText="Because..." title="Select this" />
                <StepItem progressValue={0} supportText="Because..." title="Create this" />
                <StepItem supportText="Because reason A" title="Customize that" />
            </Steps>
        </div>
    )
};

export const Vertical: Story = {
    args: {
        activeStep: 1,
        orientation: Orientation.vertical,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'Steps can be oriented vertically.'
            }
        }
    },
    render: (args) => (
        <div style={{width: '500px', height: args.orientation === Orientation.vertical ? '200px' : 'auto'}}>
            <Steps {...args}>
                <StepItem isCompleted={true} progressValue={100} title="Select this" />
                <StepItem progressValue={0} title="Create this" />
                <StepItem title="Customize that" />
            </Steps>
        </div>
    )
};

export const CenterAligned: Story = {
    args: {
        activeStep: 1,
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.center
    },
    parameters: {
        docs: {
            description: {
                story: 'Horizontal steps can be center-aligned.'
            }
        }
    },
    render: (args) => (
        <div style={{width: '500px', height: args.orientation === Orientation.vertical ? '200px' : 'auto'}}>
            <Steps {...args}>
                <StepItem isCompleted={true} progressValue={100} title="Select this" />
                <StepItem progressValue={0} title="Create this" />
                <StepItem title="Customize that" />
            </Steps>
        </div>
    )
};

export const DisabledStep: Story = {
    args: {
        activeStep: 0,
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'Steps can be disabled,'
            }
        }
    },
    render: (args) => (
        <div style={{width: '500px', height: args.orientation === Orientation.vertical ? '200px' : 'auto'}}>
            <Steps {...args}>
                <StepItem progressValue={0} title="Select this" />
                <StepItem isDisabled={true} progressValue={0} title="Disabled" />
                <StepItem title="Customize that" />
            </Steps>
        </div>
    )
};

export const Progress: Story = {
    args: {
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'Progress (0 - 100%) can be indicated per step.'
            }
        }
    },
    render: (args) => {
        const [activeStep, setActiveStep] = useState(0);
        const [isFinished, setIsFinished] = useState(false);
        const [progress, setProgress] = useState(0);
        const steps = [{title: 'Select this'}, {title: 'Create this'}, {title: 'Complete that'}];

        const onProgress = () => {
            const newProgress = progress + 25;

            setProgress(newProgress);

            if (newProgress === 50 || newProgress === 100) {
                setActiveStep(activeStep + 1);
            }
        };
        const finish = () => {
            setIsFinished(true);
        };
        const reset = () => {
            setActiveStep(0);
            setIsFinished(false);
            setProgress(0);
        };

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '500px',
                    height: args.orientation === Orientation.vertical ? '250px' : 'auto'
                }}>
                <Steps {...args} activeStep={activeStep}>
                    {steps.map((step, idx) => {
                        const progressValue = Math.min((Math.max(progress - idx * 50, 0) / 50) * 100, 100);

                        return (
                            <StepItem
                                isCompleted={isFinished || progressValue === 100}
                                key={idx}
                                progressValue={progressValue}
                                title={step.title}
                            />
                        );
                    })}
                </Steps>
                <div style={{display: 'flex', gap: '8px'}}>
                    <Button onPress={reset} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                        Reset
                    </Button>
                    <Button
                        isDisabled={isFinished}
                        onPress={progress === 100 ? finish : onProgress}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        {progress === 100 ? 'Finish' : 'Progress'}
                    </Button>
                </div>
            </div>
        );
    }
};

export const LinearExample: Story = {
    args: {
        orientation: Orientation.horizontal,
        stepAlignment: Alignment.start
    },
    parameters: {
        docs: {
            description: {
                story: 'An example of linear stepper where all steps need to be completed in sequence.'
            }
        }
    },
    render: (args) => {
        const [activeStep, setActiveStep] = useState(0);
        const [isFinished, setIsFinished] = useState(false);
        const steps = [{title: 'Select this'}, {title: 'Create this'}, {title: 'Complete that'}];
        const isInLastStep = activeStep === steps.length - 1;

        const next = () => {
            setActiveStep(activeStep + 1);
        };
        const back = () => {
            setActiveStep(activeStep - 1);
        };
        const finish = () => {
            setIsFinished(true);
        };
        const reset = () => {
            setActiveStep(0);
            setIsFinished(false);
        };

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '500px',
                    height: args.orientation === Orientation.vertical ? '250px' : 'auto'
                }}>
                <Steps {...args} activeStep={activeStep}>
                    {steps.map((step, idx) => {
                        const isCompleted = isFinished || activeStep > idx;
                        const progressValue = isCompleted ? 100 : 0;

                        return (
                            <StepItem
                                isCompleted={isCompleted}
                                key={idx}
                                progressValue={progressValue}
                                title={step.title}
                            />
                        );
                    })}
                </Steps>
                <div style={{textAlign: 'center'}}>{isFinished ? 'Completed' : `Step ${activeStep + 1}`}</div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button
                        isDisabled={activeStep === 0}
                        onPress={isFinished ? reset : back}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        {isFinished ? 'Reset' : 'Back'}
                    </Button>
                    <Button
                        isDisabled={isFinished}
                        onPress={isInLastStep ? finish : next}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        {isInLastStep ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        );
    }
};
