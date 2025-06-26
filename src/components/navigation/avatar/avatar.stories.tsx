import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Avatar} from './avatar.js';
import {Size} from '../../../constants/size.js';
import {expect, userEvent, within} from 'storybook/test';
import {BodyText, Heading} from '../../text/index.js';
import {useState} from 'react';
import {iconNames} from '../../media/index.js';

const meta = {
    args: {
        description: '',
        label: '',
        onPress: undefined
    },
    component: Avatar,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Avatar'
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

const imageSrc = 'https://fastly.picsum.photos/id/617/200/200.jpg?hmac=hA4FoiLXjwqHcRxZZSlEI_ruilvP8o_m7FsJ-JD4t4I';

export const Image: Story = {
    args: {
        alt: 'Avatar',
        size: Size.md,
        src: imageSrc
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar with image can created using src prop.'
            }
        }
    }
};

export const Text: Story = {
    args: {
        alt: 'Topi Ilmoni',
        text: 'TI'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar with initials can created using text prop.'
            }
        }
    }
};

export const Icon: Story = {
    args: {
        alt: 'Avatar'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar with icon can be created using iconName prop. Defaults to ghost icon which can be used e.g. to indicate deleted/inactive user.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <Avatar {...args} alt="Deleted user" />
            <Avatar {...args} iconName={iconNames.PersonFilled} />
        </div>
    )
};

export const Sizes: Story = {
    args: {
        alt: 'Avatar'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar can be displayed in 4 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '1rem'}}>
            <Avatar {...args} alt="Deleted user" size={Size.xs} />
            <Avatar {...args} alt="Deleted user" size={Size.sm} />
            <Avatar {...args} alt="Deleted user" size={Size.md} />
            <Avatar {...args} alt="Deleted user" size={Size.lg} />

            <Avatar {...args} size={Size.xs} text="XS" />
            <Avatar {...args} size={Size.sm} text="SM" />
            <Avatar {...args} size={Size.md} text="MD" />
            <Avatar {...args} size={Size.lg} text="LG" />

            <Avatar {...args} size={Size.xs} src={imageSrc} />
            <Avatar {...args} size={Size.sm} src={imageSrc} />
            <Avatar {...args} size={Size.md} src={imageSrc} />
            <Avatar {...args} size={Size.lg} src={imageSrc} />
        </div>
    )
};

export const Label: Story = {
    args: {
        alt: 'John Smith',
        label: 'John Smith',
        src: imageSrc,
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: "Label prop can be used to show person's name alongside the avatar."
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Avatar {...args} size={Size.xs} />
            <Avatar {...args} size={Size.sm} />
            <Avatar {...args} size={Size.md} />
            <Avatar {...args} size={Size.lg} />
        </div>
    )
};

export const Description: Story = {
    args: {
        alt: 'John Smith, Software Engineer',
        description: 'Software Engineer',
        label: 'John Smith',
        src: imageSrc,
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: "Description prop can be used to display role/job title under person's name."
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Avatar {...args} size={Size.xs} />
            <Avatar {...args} size={Size.sm} />
            <Avatar {...args} size={Size.md} />
            <Avatar {...args} size={Size.lg} />
        </div>
    )
};

export const LabelMaxWidth: Story = {
    args: {
        alt: 'John Smith',
        description: 'Software Engineer ⋅ Visma Solutions ⋅ Sera Design System at Severa',
        label: 'John Smith',
        labelMaxWidth: 120,
        size: Size.lg,
        src: imageSrc,
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: 'For long label and/or description, labelMaxWidth can be used to limit the label area width.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                maxWidth: 400,
                border: '1px solid',
                padding: '1rem'
            }}>
            <div>
                <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                    Limited by container
                </Heading>
                <Avatar {...args} labelMaxWidth={undefined} />
            </div>
            <div>
                <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                    Limited by labelMaxWidth
                </Heading>
                <Avatar {...args} />
            </div>
        </div>
    )
};

export const Interactive: Story = {
    args: {
        alt: 'John Smith',
        isInteractive: true,
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: 'Keyboard navigable interactive avatar can be created using isInteractive prop. Interactive avatar has a tooltip.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <Avatar {...args} src={imageSrc} />
            <Avatar {...args} />
            <Avatar {...args} alt="Deleted user" text={undefined} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        alt: 'John Smith, Software Engineer',
        description: 'Software Engineer',
        isDisabled: true,
        label: 'John Smith',
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar can be disabled with isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Avatar {...args} src={imageSrc} />
            <Avatar {...args} />
            <Avatar {...args} alt="Deleted user" description="N/A" label="Deleted user" text={undefined} />
        </div>
    )
};

export const Pressable: Story = {
    args: {
        alt: 'John Smith',
        isInteractive: true,
        src: imageSrc,
        text: 'JS'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar can be made pressable by setting isInteractive = true and providing onPress handler.'
            }
        }
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        await userEvent.click(button);
        await expect(canvas.getByText('Pressed avatar 1 times.')).not.toBeNull();
    },
    render: (args) => {
        const [count, setCount] = useState(0);

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <Avatar {...args} onPress={() => setCount((prevCount) => prevCount + 1)} />
                <BodyText size={Size.xs}>{`Pressed avatar ${count} times.`}</BodyText>
            </div>
        );
    }
};
