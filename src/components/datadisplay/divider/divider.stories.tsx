import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {Divider} from './divider.js';
import {Orientation} from '../../../constants/orientation.js';
import {Alignment} from '../../../constants/alignment.js';

const meta = {
    component: Divider,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/Divider'
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
    args: {
        orientation: Orientation.horizontal,
        size: Size.sm,
        text: 'Divider text'
    },
    parameters: {
        docs: {
            description: {
                story: 'Divider component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', height: '100%', minHeight: '100px', minWidth: '500px', width: '100%'}}>
            <Divider {...args} />
        </div>
    )
};

export const Variations: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Different variants of Divider.'
            }
        },
        controls: {
            exclude: ['orientation', 'size', 'text']
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                gridTemplateRows: 'auto auto auto auto auto auto',
                rowGap: '1.5rem',
                height: '100%',
                minHeight: '400px',
                minWidth: '500px',
                width: '100%'
            }}>
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.horizontal}
                size={Size.sm}
                text="center - horizontal - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.vertical}
                size={Size.sm}
                text="center - vertical - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.horizontal}
                size={Size.md}
                text="center - horizontal - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.vertical}
                size={Size.md}
                text="center - vertical - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.horizontal}
                size={Size.lg}
                text="center - horizontal - size lg"
            />
            <Divider
                {...args}
                alignment={Alignment.center}
                orientation={Orientation.vertical}
                size={Size.lg}
                text="center - vertical - size lg"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.horizontal}
                size={Size.sm}
                text="start - horizontal - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.vertical}
                size={Size.sm}
                text="start - vertical - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.horizontal}
                size={Size.md}
                text="start - horizontal - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.vertical}
                size={Size.md}
                text="start - vertical - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.horizontal}
                size={Size.lg}
                text="start - horizontal - size lg"
            />
            <Divider
                {...args}
                alignment={Alignment.start}
                orientation={Orientation.vertical}
                size={Size.lg}
                text="start - vertical - size lg"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.horizontal}
                size={Size.sm}
                text="end - horizontal - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.vertical}
                size={Size.sm}
                text="end - vertical - size sm"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.horizontal}
                size={Size.md}
                text="end - horizontal - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.vertical}
                size={Size.md}
                text="end - vertical - size md"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.horizontal}
                size={Size.lg}
                text="end - horizontal - size lg"
            />
            <Divider
                {...args}
                alignment={Alignment.end}
                orientation={Orientation.vertical}
                size={Size.lg}
                text="end - vertical - size lg"
            />
            <Divider {...args} orientation={Orientation.horizontal} size={Size.sm} />
            <Divider {...args} orientation={Orientation.vertical} size={Size.sm} />
            <Divider {...args} orientation={Orientation.horizontal} size={Size.md} />
            <Divider {...args} orientation={Orientation.vertical} size={Size.md} />
            <Divider {...args} orientation={Orientation.horizontal} size={Size.lg} />
            <Divider {...args} orientation={Orientation.vertical} size={Size.lg} />
        </div>
    )
};
