import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {AvatarGroup, AvatarGroupLayout} from './avatargroup.js';
import {Avatar} from '../avatar/index.js';
import {useState} from 'react';
import {BodyText} from '../../text/index.js';

const meta = {
    component: AvatarGroup,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/AvatarGroup'
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const imageSrc = 'https://fastly.picsum.photos/id/617/200/200.jpg?hmac=hA4FoiLXjwqHcRxZZSlEI_ruilvP8o_m7FsJ-JD4t4I';

const avatars = [
    {id: '1', alt: 'Kenzie Dennis', text: 'KD', src: imageSrc},
    {id: '2', alt: 'Emanuel Cruz', text: 'EC'},
    {id: '3', alt: 'Claire Rodgers', text: 'CR'},
    {id: '4', alt: 'Mathias Holmes', text: 'MH'},
    {id: '5', alt: 'Bailey Woods', text: 'BW'},
    {id: '6', alt: 'Zion Keith', text: 'ZK'},
    {id: '7', alt: 'Elyse Schmidt', text: 'ES'},
    {id: '8', alt: 'Zayden Dominguez', text: 'ZD'},
    {id: '9', alt: 'Noelle Brennan', text: 'NB'},
    {id: '10', alt: 'Curtis Jarvis', text: 'CJ'},
    {id: '11', alt: 'Elisabeth Patrick', text: 'EP'},
    {id: '12', alt: 'Derrick Ibarra', text: 'DI'},
    {id: '13', alt: 'Madilynn Bartlett', text: 'MB'},
    {id: '14', alt: 'Kace Esparza', text: 'KE', src: imageSrc}
];

function getAvatarElements() {
    return avatars.map((item) => {
        const {id, ...avatarProps} = item;

        return <Avatar {...avatarProps} key={id} />;
    });
}

export const Stack: Story = {
    args: {
        children: getAvatarElements(),
        layout: AvatarGroupLayout.Stack,
        size: Size.lg
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar group with stack layout.'
            }
        }
    }
};

export const StackSizes: Story = {
    args: {
        children: getAvatarElements(),
        layout: AvatarGroupLayout.Stack
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar group stack layout sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <AvatarGroup {...args} size={Size.lg} />
            <AvatarGroup {...args} size={Size.md} />
            <AvatarGroup {...args} size={Size.sm} />
        </div>
    )
};

export const Grid: Story = {
    args: {
        children: getAvatarElements(),
        layout: AvatarGroupLayout.Grid,
        size: Size.lg
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar group with grid layout.'
            }
        }
    },
    render: (args) => (
        <div style={{width: '170px'}}>
            <AvatarGroup {...args} />
        </div>
    )
};

export const GridSizes: Story = {
    args: {
        children: getAvatarElements(),
        layout: AvatarGroupLayout.Grid
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar group grid layout sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <div style={{width: '170px'}}>
                <AvatarGroup {...args} size={Size.lg} />
            </div>
            <div style={{width: '150px'}}>
                <AvatarGroup {...args} size={Size.md} />
            </div>
            <div style={{width: '130px'}}>
                <AvatarGroup {...args} size={Size.sm} />
            </div>
        </div>
    )
};

export const Pressable: Story = {
    args: {
        layout: AvatarGroupLayout.Stack,
        size: Size.lg
    },
    parameters: {
        docs: {
            description: {
                story: 'Avatar group with pressable avatars.'
            }
        }
    },
    render: (args) => {
        const [lastPressedItem, setLastPressedItem] = useState<{
            id: string;
            alt: string;
            text: string;
            src?: string;
        } | null>(null);

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <AvatarGroup {...args}>
                    {avatars.map((item) => {
                        const {id, ...avatarProps} = item;

                        return (
                            <Avatar
                                {...avatarProps}
                                key={id}
                                onPress={() => {
                                    setLastPressedItem(item);
                                }}
                            />
                        );
                    })}
                </AvatarGroup>
                <BodyText size={Size.xs}>
                    {lastPressedItem ? `Pressed ${lastPressedItem.alt}` : 'Press avatar'}
                </BodyText>
            </div>
        );
    }
};
