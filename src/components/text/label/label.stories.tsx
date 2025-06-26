import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {Label} from './label.js';

const meta = {
    component: Label,
    parameters: {
        layout: 'centered',
        controls: {
            include: ['children', 'className', 'htmlFor', 'size', 'style'],
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Text/Label'
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Playground: Story = {
    args: {
        children: 'Label text',
        htmlFor: 'someId',
        size: Size.lg
    },
    parameters: {
        docs: {
            description: {
                story: 'Label component, be my guest and play with it!'
            }
        }
    }
};

export const Variations: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Different variants of Label.'
            }
        }
    },
    render: (args) => (
        <>
            <Label {...args} htmlFor="someId" size={Size.lg}>
                Label / lg
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.lg}>
                <strong>Label / lg strong</strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.lg}>
                <strong>
                    <u>Label / lg strong underline</u>
                </strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.md}>
                Label / md
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.md}>
                <strong>Label / md strong</strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.md}>
                <strong>
                    <u>Label / md strong underline</u>
                </strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.sm}>
                Label / sm
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.sm}>
                <strong>Label / sm strong</strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.sm}>
                <strong>
                    <u>Label / sm strong underline</u>
                </strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.xs}>
                Label / xs
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.xs}>
                <strong>Label / xs strong</strong>
            </Label>
            <br />
            <Label {...args} htmlFor="someId" size={Size.xs}>
                <strong>
                    <u>Label / xs strong underline</u>
                </strong>
            </Label>
        </>
    )
};
