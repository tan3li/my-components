import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {iconNames} from '../../media/icon/icons.js';
import {CSSProperties, useState} from 'react';
import {IconButton} from './iconbutton.js';
import {ButtonVariant} from '../constants/buttonvariant.js';
import {ButtonRole, ButtonStyle} from '../button/button.js';

const meta = {
    component: IconButton,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Action/IconButton'
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

const wrapperDivStyles: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    justifyItems: 'center',
    gap: '16px',
    margin: '32px',
    width: '100%'
};

const argsForStories = ['children', 'iconName', 'isDisabled', 'isLoading', 'onPress', 'size', 'style', 'variant'];

export const Playground: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isDisabled: false,
        isLoading: false,
        onPress: emptyFn,
        size: Size.lg,
        style: ButtonStyle.Fill,
        variant: ButtonVariant.Accent
    },
    parameters: {
        docs: {
            description: {
                story: 'IconButton component, be my guest and play with it!'
            }
        }
    }
};

export const Styles: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isDisabled: false,
        isLoading: false,
        onPress: emptyFn,
        size: Size.lg,
        variant: ButtonVariant.Accent
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 4 styles of IconButtons: Fill, Outline, Dash and Plain.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <IconButton {...args} style={ButtonStyle.Fill} />
            <IconButton {...args} style={ButtonStyle.Outline} />
            <IconButton {...args} style={ButtonStyle.Dash} />
            <IconButton {...args} style={ButtonStyle.Plain} />
        </div>
    )
};

export const Sizes: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isDisabled: false,
        isLoading: false,
        onPress: emptyFn,
        style: ButtonStyle.Fill,
        variant: ButtonVariant.Accent
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 3 sizes of IconButtons: sm, md and lg.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <IconButton {...args} size={Size.sm} />
            <IconButton {...args} size={Size.md} />
            <IconButton {...args} size={Size.lg} />
        </div>
    )
};

export const Variants: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isDisabled: false,
        isLoading: false,
        onPress: emptyFn,
        size: Size.lg
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 4 variants of IconButtons: Neutral, Accent, Danger and Success.'
            }
        }
    },
    render: (args) => (
        <>
            <div style={wrapperDivStyles}>
                <IconButton {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral} />
                <IconButton {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Accent} />
                <IconButton {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Danger} />
                <IconButton {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Success} />
            </div>
            <div style={wrapperDivStyles}>
                <IconButton {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Neutral} />
                <IconButton {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Accent} />
                <IconButton {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Danger} />
                <IconButton {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Success} />
            </div>
            <div style={wrapperDivStyles}>
                <IconButton {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Neutral} />
                <IconButton {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Accent} />
                <IconButton {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Danger} />
                <IconButton {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Success} />
            </div>
            <div style={wrapperDivStyles}>
                <IconButton {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Neutral} />
                <IconButton {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Accent} />
                <IconButton {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Danger} />
                <IconButton {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Success} />
            </div>
        </>
    )
};

export const Inverted: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        inverted: true,
        onPress: emptyFn,
        size: Size.lg,
        variant: ButtonVariant.Neutral
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Inverted style can be set by passing inverted prop.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                justifyItems: 'center',
                gap: '1rem',
                padding: '2rem',
                backgroundColor: '#003254'
            }}>
            <div style={{color: '#fff'}}>Outline</div>
            <div style={{color: '#fff'}}>Plain</div>
            <IconButton {...args} style={ButtonStyle.Outline} />
            <IconButton {...args} style={ButtonStyle.Plain} />
            <IconButton {...args} isDisabled={true} style={ButtonStyle.Outline} />
            <IconButton {...args} isDisabled={true} style={ButtonStyle.Plain} />
            <IconButton {...args} isLoading={true} style={ButtonStyle.Outline} />
            <IconButton {...args} isLoading={true} style={ButtonStyle.Plain} />
        </div>
    )
};

const TIMEOUT_TO_CHANGE_STATE_BACK = 5000;

export const Disabled: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isLoading: false,
        onPress: emptyFn,
        size: Size.lg,
        variant: ButtonVariant.Accent
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
    render: (args) => {
        const [isDisabled, setIsDisabled] = useState(false);

        function onPress() {
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
            }, TIMEOUT_TO_CHANGE_STATE_BACK);
        }

        return (
            <>
                <div style={wrapperDivStyles}>
                    <IconButton
                        {...args}
                        aria-label="Text to show aria label"
                        isDisabled={true}
                        style={ButtonStyle.Fill}
                    />
                    <IconButton {...args} isDisabled={true} style={ButtonStyle.Outline} />
                    <IconButton {...args} isDisabled={true} style={ButtonStyle.Dash} />
                    <IconButton {...args} isDisabled={true} style={ButtonStyle.Plain} />
                </div>
                <div style={wrapperDivStyles}>
                    <IconButton
                        {...args}
                        aria-label="Press to set disabled for 5s!"
                        isDisabled={isDisabled}
                        onPress={onPress}
                        style={ButtonStyle.Fill}
                    />
                </div>
            </>
        );
    }
};

export const Loading: Story = {
    args: {
        'aria-label': iconNames.Add.toString(),
        iconName: iconNames.Add,
        isDisabled: false,
        onPress: emptyFn,
        size: Size.lg,
        variant: ButtonVariant.Accent
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Loading state can be set by passing isLoading prop.'
            }
        }
    },
    render: (args) => {
        const [isLoading, setIsLoading] = useState(false);

        function onPress() {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, TIMEOUT_TO_CHANGE_STATE_BACK);
        }

        return (
            <>
                <div style={wrapperDivStyles}>
                    <IconButton {...args} isLoading={true} style={ButtonStyle.Fill} />
                    <IconButton {...args} isLoading={true} style={ButtonStyle.Outline} />
                    <IconButton {...args} isLoading={true} style={ButtonStyle.Dash} />
                    <IconButton {...args} isLoading={true} style={ButtonStyle.Plain} />
                </div>
                <div style={wrapperDivStyles}>
                    <IconButton
                        {...args}
                        aria-label="Press to set disabled for 5s!"
                        isLoading={isLoading}
                        onPress={onPress}
                        style={ButtonStyle.Fill}
                    />
                </div>
            </>
        );
    }
};

export const Link: Story = {
    args: {
        iconName: iconNames.ArrowOutward,
        isDisabled: false,
        isLoading: false,
        size: Size.lg,
        style: ButtonStyle.Plain,
        variant: ButtonVariant.Neutral
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'IconButton can act as semantic button or semantic link based on role prop.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <IconButton {...args} aria-label="Semantic button" role={ButtonRole.Button} />
            <IconButton {...args} aria-label="Semantic link" role={ButtonRole.Link} />
        </div>
    )
};
