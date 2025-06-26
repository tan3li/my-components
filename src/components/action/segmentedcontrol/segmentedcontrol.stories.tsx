import {SegmentedControl} from './segmentedcontrol';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {iconNames} from '../../media';

const meta = {
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Action/SegmentedControl'
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Playground: Story = {
    args: {
        items: [
            {id: 'day', label: 'Day'},
            {id: 'week', label: 'Week'},
            {id: 'month', label: 'Month'}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'SegmentedControl component, be my guest and play with it!'
            }
        }
    }
};

export const Variants: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Items can be rendered with or without icons or label.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', label: 'List', startIconName: iconNames.FormatListBullets},
                    {id: 'board', label: 'Board', startIconName: iconNames.ViewKanban},
                    {id: 'timeline', label: 'Timeline', startIconName: iconNames.ViewTimeline}
                ]}
            />
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', label: 'List'},
                    {id: 'board', label: 'Board'},
                    {id: 'timeline', label: 'Timeline'}
                ]}
            />
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', ariaLabel: 'List', startIconName: iconNames.FormatListBullets},
                    {id: 'board', ariaLabel: 'Board', startIconName: iconNames.ViewKanban},
                    {id: 'timeline', ariaLabel: 'Timeline', startIconName: iconNames.ViewTimeline}
                ]}
            />
        </div>
    )
};

export const Disabled: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Items can be disabled with isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', label: 'List', startIconName: iconNames.FormatListBullets},
                    {id: 'board', label: 'Board', startIconName: iconNames.ViewKanban, isDisabled: true},
                    {id: 'timeline', label: 'Timeline', startIconName: iconNames.ViewTimeline}
                ]}
            />
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', label: 'List'},
                    {id: 'board', label: 'Board', isDisabled: true},
                    {id: 'timeline', label: 'Timeline'}
                ]}
            />
            <SegmentedControl
                {...args}
                items={[
                    {id: 'list', ariaLabel: 'List', startIconName: iconNames.FormatListBullets},
                    {id: 'board', ariaLabel: 'Board', startIconName: iconNames.ViewKanban, isDisabled: true},
                    {id: 'timeline', ariaLabel: 'Timeline', startIconName: iconNames.ViewTimeline}
                ]}
            />
        </div>
    )
};
