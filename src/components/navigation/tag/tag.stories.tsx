import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {Tag, TagStyle} from './tag.js';
import {iconNames} from '../../media/index.js';
import {emptyFn} from '../../../utils/functionhelper.js';

const meta = {
    args: {
        onPress: undefined,
        onRemove: undefined
    },
    component: Tag,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Tag'
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
    args: {
        children: 'Tag',
        iconName: iconNames.Person,
        onRemove: emptyFn,
        size: Size.md,
        style: TagStyle.Outline
    },
    parameters: {
        docs: {
            description: {
                story: 'Tag component, be my guest and play with it!'
            }
        }
    }
};

export const Variants: Story = {
    args: {
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Tag can be displayed in Fill or Outline style, with icon and remove button.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '2rem', rowGap: '1rem'}}>
            <div>Outline</div>
            <div>Fill</div>

            <div>
                <Tag {...args} style={TagStyle.Outline}>
                    Label
                </Tag>
            </div>
            <div>
                <Tag {...args} style={TagStyle.Fill}>
                    Label
                </Tag>
            </div>

            <div>
                <Tag {...args} onRemove={emptyFn} style={TagStyle.Outline}>
                    Label
                </Tag>
            </div>
            <div>
                <Tag {...args} onRemove={emptyFn} style={TagStyle.Fill}>
                    Label
                </Tag>
            </div>

            <div>
                <Tag {...args} iconName={iconNames.Person} style={TagStyle.Outline}>
                    Icon + Label
                </Tag>
            </div>
            <div>
                <Tag {...args} iconName={iconNames.Person} style={TagStyle.Fill}>
                    Icon + Label
                </Tag>
            </div>

            <div>
                <Tag {...args} iconName={iconNames.Person} onRemove={emptyFn} style={TagStyle.Outline}>
                    Icon + Label
                </Tag>
            </div>
            <div>
                <Tag {...args} iconName={iconNames.Person} onRemove={emptyFn} style={TagStyle.Fill}>
                    Icon + Label
                </Tag>
            </div>
        </div>
    )
};

export const Sizes: Story = {
    args: {
        iconName: iconNames.Person,
        onRemove: emptyFn,
        style: TagStyle.Outline
    },
    parameters: {
        docs: {
            description: {
                story: 'Tag can be displayed in different sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <Tag {...args} size={Size.xs}>
                Tag xs
            </Tag>
            <Tag {...args} size={Size.sm}>
                Tag sm
            </Tag>
            <Tag {...args} size={Size.md}>
                Tag md
            </Tag>
        </div>
    )
};

export const Interaction: Story = {
    args: {
        iconName: iconNames.Person,
        onPress: emptyFn,
        size: Size.md,
        style: TagStyle.Outline
    },
    parameters: {
        docs: {
            description: {
                story: 'Tag can be made interactive with onPress prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <Tag {...args}>Tag</Tag>
            <Tag {...args} onRemove={emptyFn}>
                Tag
            </Tag>
        </div>
    )
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        onPress: emptyFn,
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Tag can be disabled with isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '2rem', rowGap: '1rem'}}>
            <div>Outline</div>
            <div>Fill</div>

            <div>
                <Tag {...args} style={TagStyle.Outline}>
                    Label
                </Tag>
            </div>
            <div>
                <Tag {...args} style={TagStyle.Fill}>
                    Label
                </Tag>
            </div>

            <div>
                <Tag {...args} onRemove={emptyFn} style={TagStyle.Outline}>
                    Label
                </Tag>
            </div>
            <div>
                <Tag {...args} onRemove={emptyFn} style={TagStyle.Fill}>
                    Label
                </Tag>
            </div>

            <div>
                <Tag {...args} iconName={iconNames.Person} style={TagStyle.Outline}>
                    Icon + Label
                </Tag>
            </div>
            <div>
                <Tag {...args} iconName={iconNames.Person} style={TagStyle.Fill}>
                    Icon + Label
                </Tag>
            </div>

            <div>
                <Tag {...args} iconName={iconNames.Person} onRemove={emptyFn} style={TagStyle.Outline}>
                    Icon + Label
                </Tag>
            </div>
            <div>
                <Tag {...args} iconName={iconNames.Person} onRemove={emptyFn} style={TagStyle.Fill}>
                    Icon + Label
                </Tag>
            </div>
        </div>
    )
};

export const TextOverflow: Story = {
    args: {
        onRemove: emptyFn,
        size: Size.md,
        style: TagStyle.Outline
    },
    parameters: {
        docs: {
            description: {
                story: 'Long texts will be truncated.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start'}}>
                <div>{'Tag label width > 160px'}</div>
                <Tag {...args}>Super long tag label that must be truncated</Tag>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div>{'Tag does not fit inside container'}</div>
                <div style={{border: '1px solid', padding: '1rem', width: '180px'}}>
                    <Tag {...args}>Longer tag label</Tag>
                </div>
            </div>
        </div>
    )
};
