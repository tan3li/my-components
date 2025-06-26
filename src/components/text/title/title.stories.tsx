import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {Title} from './title.js';

const meta = {
    component: Title,
    parameters: {
        layout: 'centered',
        controls: {
            include: ['children', 'className', 'level', 'size'],
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Text/Title'
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Playground: Story = {
    args: {
        children: 'Title text',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Title component, be my guest and play with it!'
            }
        }
    }
};

export const Variations: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Variations of Title component.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Title {...args} size={Size.xxs}>
                Title / xxs
            </Title>
            <Title {...args} size={Size.xxs}>
                <strong>Title / xxs strong</strong>
            </Title>

            <Title {...args} size={Size.xs}>
                Title / xs
            </Title>
            <Title {...args} size={Size.xs}>
                <strong>Title / xs strong</strong>
            </Title>

            <Title {...args} size={Size.sm}>
                Title / sm
            </Title>
            <Title {...args} size={Size.sm}>
                <strong>Title / sm strong</strong>
            </Title>

            <Title {...args} size={Size.md}>
                Title / md
            </Title>
            <Title {...args} size={Size.md}>
                <strong>Title / md strong</strong>
            </Title>

            <Title {...args} size={Size.lg}>
                Title / lg
            </Title>
            <Title {...args} size={Size.lg}>
                <strong>Title / lg strong</strong>
            </Title>
        </div>
    )
};

export const Semantic: Story = {
    args: {
        children: 'Title text',
        level: 1,
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Semantic Title element (with level).'
            }
        }
    }
};
