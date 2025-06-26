import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Link, LinkRole} from './link.js';
import {Size} from '../../../constants/index.js';
import {BodyText} from '../../text/index.js';
import {useState} from 'react';

const meta = {
    args: {
        onHoverChange: undefined,
        onHoverEnd: undefined,
        onHoverStart: undefined,
        onBlur: undefined,
        onFocus: undefined,
        onFocusChange: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        onPress: undefined,
        onPressEnd: undefined,
        onPressUp: undefined,
        onPressStart: undefined,
        onPressChange: undefined
    },
    component: Link,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Link'
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
    args: {
        children: 'Link',
        href: 'https://google.com',
        isDisabled: false,
        isVisited: false,
        size: Size.md,
        target: '_blank'
    },
    parameters: {
        docs: {
            description: {
                story: 'Link component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = ['href', 'isDisabled', 'isVisited', 'target', 'size', 'children', 'role'];

export const Sizes: Story = {
    args: {
        href: 'https://google.com',
        isDisabled: false,
        isVisited: false,
        target: '_blank'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Link size is determined by surrounding text or given size prop.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <BodyText size={Size.xs}>
                {'This '}
                <Link {...args}>
                    <strong>link</strong>
                </Link>
                {' is part of xs-size body text.'}
            </BodyText>
            <Link {...args} size={Size.sm}>
                Link sm
            </Link>
            <Link {...args} size={Size.md}>
                Link md
            </Link>
            <Link {...args} size={Size.lg}>
                Link lg
            </Link>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        children: 'Link',
        href: 'https://google.com',
        isDisabled: true,
        isVisited: false,
        size: Size.md,
        target: '_blank'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Link can be disabled with isDisabled prop.'
            }
        }
    }
};

export const Visited: Story = {
    args: {
        href: 'https://google.com',
        isDisabled: false,
        size: Size.md,
        target: '_blank'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Visited state is determined by browser history or isVisited prop.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Link {...args}>Visited depending on your browser history</Link>
            <Link {...args} isVisited={true}>
                Visited always
            </Link>
        </div>
    )
};

export const PressHandling: Story = {
    args: {
        isDisabled: false,
        isVisited: false,
        size: Size.md
    },
    decorators: [
        (Story) => (
            <div style={{minWidth: '150px'}}>
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
                story: 'Besides href, navigation can be handled with onPress prop.'
            }
        }
    },
    render: (args) => {
        const [count, setCount] = useState(0);

        return (
            <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Link {...args} onPress={() => setCount((prevCount) => prevCount + 1)}>
                    Link
                </Link>
                <BodyText size={Size.xs}>{`Pressed link ${count} times.`}</BodyText>
            </div>
        );
    }
};

export const LinkButton: Story = {
    args: {
        children: 'Link button',
        isDisabled: false,
        isVisited: false,
        role: LinkRole.Button,
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Link with button role.'
            }
        }
    }
};
