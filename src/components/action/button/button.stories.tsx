import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Button, ButtonRole, ButtonStyle} from './button.js';
import {Size} from '../../../constants/size.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {iconNames} from '../../media/icon/icons.js';
import {CSSProperties, useState} from 'react';
import {ButtonVariant} from '../constants/buttonvariant.js';

const meta = {
    component: Button,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Action/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

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

const argsForStories = [
    'children',
    'endIconName',
    'isDisabled',
    'isLoading',
    'onPress',
    'size',
    'startIconName',
    'style',
    'variant'
];

export const Playground: Story = {
    args: {
        children: 'Press me!',
        endIconName: undefined,
        isDisabled: false,
        isLoading: false,
        onPress: emptyFn,
        size: Size.lg,
        startIconName: undefined,
        style: ButtonStyle.Fill,
        variant: ButtonVariant.Accent
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'Button component, be my guest and play with it!'
            }
        }
    }
};

export const Styles: Story = {
    args: {
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
                story: 'There are 5 styles of buttons: Fill, Outline, Dash, Plain and Link.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <Button {...args} style={ButtonStyle.Fill}>
                Fill
            </Button>
            <Button {...args} style={ButtonStyle.Outline}>
                Outline
            </Button>
            <Button {...args} style={ButtonStyle.Dash}>
                Dash
            </Button>
            <Button {...args} style={ButtonStyle.Plain}>
                Plain
            </Button>
            <Button {...args} style={ButtonStyle.Link}>
                Link
            </Button>
        </div>
    )
};

export const Sizes: Story = {
    args: {
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
                story: 'There are 3 sizes of buttons: sm, md and lg.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <Button {...args} size={Size.sm}>
                Size sm
            </Button>
            <Button {...args} size={Size.md}>
                Size md
            </Button>
            <Button {...args} size={Size.lg}>
                Size lg
            </Button>
        </div>
    )
};

export const Variants: Story = {
    args: {
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
                story: 'There are 4 variants of buttons: Neutral, Accent, Danger and Success.'
            }
        }
    },
    render: (args) => (
        <>
            <div style={wrapperDivStyles}>
                <Button {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <Button {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Accent
                </Button>
                <Button {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <Button {...args} style={ButtonStyle.Fill} variant={ButtonVariant.Success}>
                    Success
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <Button {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Accent}>
                    Accent
                </Button>
                <Button {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <Button {...args} style={ButtonStyle.Outline} variant={ButtonVariant.Success}>
                    Success
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <Button {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Accent}>
                    Accent
                </Button>
                <Button {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <Button {...args} style={ButtonStyle.Dash} variant={ButtonVariant.Success}>
                    Success
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <Button {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Accent}>
                    Accent
                </Button>
                <Button {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <Button {...args} style={ButtonStyle.Plain} variant={ButtonVariant.Success}>
                    Success
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} style={ButtonStyle.Link} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <Button {...args} style={ButtonStyle.Link} variant={ButtonVariant.Accent}>
                    Accent
                </Button>
                <Button {...args} style={ButtonStyle.Link} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <Button {...args} style={ButtonStyle.Link} variant={ButtonVariant.Success}>
                    Success
                </Button>
            </div>
        </>
    )
};

export const Icons: Story = {
    args: {
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
                story: 'You can have icon on the left, right or both sides of the button.'
            }
        }
    },
    render: (args) => (
        <>
            <div style={wrapperDivStyles}>
                <Button {...args} startIconName={iconNames.Add} style={ButtonStyle.Fill}>
                    Fill & startIcon
                </Button>
                <Button {...args} startIconName={iconNames.Add} style={ButtonStyle.Outline}>
                    Outline & startIcon
                </Button>
                <Button {...args} startIconName={iconNames.Add} style={ButtonStyle.Dash}>
                    Dash & startIcon
                </Button>
                <Button {...args} startIconName={iconNames.Add} style={ButtonStyle.Plain}>
                    Plain & startIcon
                </Button>
                <Button {...args} startIconName={iconNames.Add} style={ButtonStyle.Link}>
                    Link & startIcon
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} endIconName={iconNames.Add} style={ButtonStyle.Fill}>
                    Fill & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} style={ButtonStyle.Outline}>
                    Outline & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} style={ButtonStyle.Dash}>
                    Dash & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} style={ButtonStyle.Plain}>
                    Plain & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} style={ButtonStyle.Link}>
                    Link & endIcon
                </Button>
            </div>
            <div style={wrapperDivStyles}>
                <Button {...args} endIconName={iconNames.Add} startIconName={iconNames.Add} style={ButtonStyle.Fill}>
                    Fill & startIcon & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} startIconName={iconNames.Add} style={ButtonStyle.Outline}>
                    Outline & startIcon & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} startIconName={iconNames.Add} style={ButtonStyle.Dash}>
                    Dash & startIcon & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} startIconName={iconNames.Add} style={ButtonStyle.Plain}>
                    Plain & startIcon & endIcon
                </Button>
                <Button {...args} endIconName={iconNames.Add} startIconName={iconNames.Add} style={ButtonStyle.Link}>
                    Link & startIcon & endIcon
                </Button>
            </div>
        </>
    )
};

export const Inverted: Story = {
    args: {
        endIconName: iconNames.Add,
        inverted: true,
        onPress: emptyFn,
        size: Size.lg,
        startIconName: iconNames.Add,
        style: ButtonStyle.Outline,
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
                gridTemplateColumns: '1fr 1fr 1fr',
                justifyItems: 'center',
                gap: '1rem',
                padding: '2rem',
                backgroundColor: '#003254'
            }}>
            <div style={{color: '#fff'}}>Outline</div>
            <div style={{color: '#fff'}}>Plain</div>
            <div style={{color: '#fff'}}>Link</div>
            <Button {...args} style={ButtonStyle.Outline}>
                I&apos;m inverted
            </Button>
            <Button {...args} style={ButtonStyle.Plain}>
                I&apos;m inverted
            </Button>
            <Button {...args} style={ButtonStyle.Link}>
                I&apos;m inverted
            </Button>
            <Button {...args} isDisabled={true} style={ButtonStyle.Outline}>
                I&apos;m inverted disabled
            </Button>
            <Button {...args} isDisabled={true} style={ButtonStyle.Plain}>
                I&apos;m inverted disabled
            </Button>
            <Button {...args} isDisabled={true} style={ButtonStyle.Link}>
                I&apos;m inverted disabled
            </Button>
            <Button {...args} isLoading={true} style={ButtonStyle.Outline}>
                I&apos;m inverted loading
            </Button>
            <Button {...args} isLoading={true} style={ButtonStyle.Plain}>
                I&apos;m inverted loading
            </Button>
            <Button {...args} isLoading={true} style={ButtonStyle.Link}>
                I&apos;m inverted loading
            </Button>
        </div>
    )
};

const TIMEOUT_TO_CHANGE_STATE_BACK = 5000;

export const Disabled: Story = {
    args: {
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
                    <Button {...args} isDisabled={true} style={ButtonStyle.Fill}>
                        I&apos;m disabled
                    </Button>
                    <Button {...args} isDisabled={true} style={ButtonStyle.Outline}>
                        I&apos;m disabled
                    </Button>
                    <Button {...args} isDisabled={true} style={ButtonStyle.Dash}>
                        I&apos;m disabled
                    </Button>
                    <Button {...args} isDisabled={true} style={ButtonStyle.Plain}>
                        I&apos;m disabled
                    </Button>
                    <Button {...args} isDisabled={true} style={ButtonStyle.Link}>
                        I&apos;m disabled
                    </Button>
                </div>
                <div style={wrapperDivStyles}>
                    <Button {...args} isDisabled={isDisabled} onPress={onPress} style={ButtonStyle.Fill}>
                        Press to set disabled for 5s!
                    </Button>
                </div>
            </>
        );
    }
};

export const Loading: Story = {
    args: {
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
                    <Button {...args} isLoading={true} style={ButtonStyle.Fill}>
                        I&apos;m loading
                    </Button>
                    <Button {...args} isLoading={true} style={ButtonStyle.Outline}>
                        I&apos;m loading
                    </Button>
                    <Button {...args} isLoading={true} style={ButtonStyle.Dash}>
                        I&apos;m loading
                    </Button>
                    <Button {...args} isLoading={true} style={ButtonStyle.Plain}>
                        I&apos;m loading
                    </Button>
                    <Button {...args} isLoading={true} style={ButtonStyle.Link}>
                        I&apos;m loading
                    </Button>
                </div>
                <div style={wrapperDivStyles}>
                    <Button {...args} isLoading={isLoading} onPress={onPress} style={ButtonStyle.Fill}>
                        Press to set loading for 5s!
                    </Button>
                </div>
            </>
        );
    }
};

export const Link: Story = {
    args: {
        isDisabled: false,
        isLoading: false,
        size: Size.lg,
        style: ButtonStyle.Link,
        variant: ButtonVariant.Neutral
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Button can act as semantic button or semantic link based on role prop.'
            }
        }
    },
    render: (args) => (
        <div style={wrapperDivStyles}>
            <Button {...args} role={ButtonRole.Button}>
                Semantic button
            </Button>
            <Button {...args} role={ButtonRole.Link}>
                Semantic link
            </Button>
        </div>
    )
};
