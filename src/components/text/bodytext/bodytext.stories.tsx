import {Meta, StoryObj} from '@storybook/react-webpack5';
import {BodyText} from './bodytext.js';
import {Size} from '../../../constants/size.js';

const meta = {
    component: BodyText,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Text/BodyText'
} satisfies Meta<typeof BodyText>;

export default meta;
type Story = StoryObj<typeof BodyText>;

export const Default: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'BodyText component, be my guest and play with it!'
            }
        }
    }
};

export const Variations: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Different variants of BodyText.'
            }
        }
    },
    render: (args) => (
        <>
            <BodyText {...args} size={Size.lg}>
                Body text / lg
            </BodyText>
            <BodyText {...args} size={Size.lg}>
                <strong>Body text / lg strong</strong>
            </BodyText>
            <BodyText {...args} size={Size.md}>
                Body text / md
            </BodyText>
            <BodyText {...args} size={Size.md}>
                <strong>Body text / md strong</strong>
            </BodyText>
            <BodyText {...args} size={Size.sm}>
                Body text / sm
            </BodyText>
            <BodyText {...args} size={Size.sm}>
                <strong>Body text / sm strong</strong>
            </BodyText>
            <BodyText {...args} size={Size.xs}>
                Body text / xs
            </BodyText>
            <BodyText {...args} size={Size.xs}>
                <strong>Body text / xs strong</strong>
            </BodyText>
        </>
    )
};
