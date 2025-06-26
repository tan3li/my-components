import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Badge, BadgeStyle, BadgeVariant} from './badge.js';
import {iconNames} from '../../media/icon/icons.js';
import BadgeDesignMdx from './badgedesign.mdx';

const meta = {
    component: Badge,
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            design: BadgeDesignMdx
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Badge'
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
    args: {
        children: 'Badge',
        isDisabled: false,
        style: BadgeStyle.Fill,
        variant: BadgeVariant.Neutral
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'Badge component, be my guest and play with it!'
            }
        }
    }
};

export const Icon: Story = {
    args: {
        isDisabled: false,
        variant: BadgeVariant.Neutral
    },
    parameters: {
        controls: {
            include: ['isDisabled', 'variant']
        },
        docs: {
            description: {
                story: 'Badge can be displayed with or without icon.'
            }
        }
    },
    render: (args) => {
        const badges = [
            <Badge {...args} style={BadgeStyle.Fill}>
                Badge
            </Badge>,
            <Badge {...args} style={BadgeStyle.Outline}>
                Badge
            </Badge>,
            <Badge {...args} style={BadgeStyle.Plain}>
                Badge
            </Badge>,

            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Fill}>
                Badge
            </Badge>,
            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Outline}>
                Badge
            </Badge>,
            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Plain}>
                Badge
            </Badge>
        ];

        return (
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}}>
                {badges.map((badge, i) => (
                    <div key={i}>{badge}</div>
                ))}
            </div>
        );
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        variant: BadgeVariant.Neutral
    },
    parameters: {
        controls: {
            include: ['isDisabled', 'variant']
        },
        docs: {
            description: {
                story: 'Badge can have disabled outlook.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem'}}>
            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Fill}>
                Badge
            </Badge>
            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Outline}>
                Badge
            </Badge>
            <Badge {...args} iconName={iconNames.StatusLightFilled} style={BadgeStyle.Plain}>
                Badge
            </Badge>
        </div>
    )
};

export const Variants: Story = {
    args: {
        isDisabled: false
    },
    parameters: {
        controls: {
            include: ['isDisabled']
        },
        docs: {
            description: {
                story: 'Different variants of the Badge.'
            }
        }
    },
    render: (args) => {
        const badges = [
            <Badge {...args} style={BadgeStyle.Fill} variant={BadgeVariant.Neutral}>
                Neutral
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Outline}
                variant={BadgeVariant.Neutral}>
                Neutral
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Plain}
                variant={BadgeVariant.Neutral}>
                Neutral
            </Badge>,

            <Badge {...args} style={BadgeStyle.Fill} variant={BadgeVariant.Success}>
                Success
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Outline}
                variant={BadgeVariant.Success}>
                Success
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Plain}
                variant={BadgeVariant.Success}>
                Success
            </Badge>,

            <Badge {...args} style={BadgeStyle.Fill} variant={BadgeVariant.Danger}>
                Danger
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Outline}
                variant={BadgeVariant.Danger}>
                Danger
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Plain}
                variant={BadgeVariant.Danger}>
                Danger
            </Badge>,

            <Badge {...args} style={BadgeStyle.Fill} variant={BadgeVariant.Warning}>
                Warning
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Outline}
                variant={BadgeVariant.Warning}>
                Warning
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Plain}
                variant={BadgeVariant.Warning}>
                Warning
            </Badge>,

            <Badge {...args} style={BadgeStyle.Fill} variant={BadgeVariant.Informative}>
                Informative
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Outline}
                variant={BadgeVariant.Informative}>
                Informative
            </Badge>,
            <Badge
                {...args}
                iconName={iconNames.StatusLightFilled}
                style={BadgeStyle.Plain}
                variant={BadgeVariant.Informative}>
                Informative
            </Badge>
        ];

        return (
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}}>
                {badges.map((badge, i) => (
                    <div key={i}>{badge}</div>
                ))}
            </div>
        );
    }
};
