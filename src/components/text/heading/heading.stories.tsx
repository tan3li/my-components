import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Heading} from './heading.js';
import {Size} from '../../../constants/size.js';
import {HTMLElementType} from '../../../constants/index.js';

const meta = {
    component: Heading,
    parameters: {
        layout: 'centered',
        controls: {
            include: ['alignment', 'children', 'className', 'level', 'size'],
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Text/Heading'
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
    args: {
        children: 'Heading text',
        level: 1,
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Heading component, be my guest and play with it!'
            }
        }
    }
};

export const Variations: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Variations of Heading component.'
            }
        }
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Heading level={1} size={Size.lg}>
                Heading / lg
            </Heading>
            <Heading level={1} size={Size.md}>
                Heading / md
            </Heading>
            <Heading level={1} size={Size.sm}>
                Heading / sm
            </Heading>
            <Heading level={1} size={Size.xs}>
                Heading / xs
            </Heading>
            <Heading level={1} size={Size.xxs}>
                Heading / xxs
            </Heading>
        </div>
    )
};

export const NonSemantic: Story = {
    args: {
        children: 'Heading text',
        elementType: HTMLElementType.Div,
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Non-semantic Heading element (no level).'
            }
        }
    }
};
