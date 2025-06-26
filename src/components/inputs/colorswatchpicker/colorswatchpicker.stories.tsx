import {Meta, StoryObj} from '@storybook/react-webpack5';
import {ColorSwatchPicker} from './colorswatchpicker.js';
import {Size} from '../../../constants/index.js';
import {lightTokens} from '@visma-severa/severa-design-tokens';

const meta = {
    component: ColorSwatchPicker,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/ColorSwatchPicker'
} satisfies Meta<typeof ColorSwatchPicker>;

export default meta;
type Story = StoryObj<typeof ColorSwatchPicker>;

export const Playground: Story = {
    args: {
        items: [
            {color: lightTokens.color.ganttTimelineBlue.value},
            {color: lightTokens.color.ganttTimelineBlack.value},
            {color: lightTokens.color.ganttTimelineRed.value},
            {color: lightTokens.color.ganttTimelineGreen.value},
            {color: lightTokens.color.ganttTimelineGray.value},
            {color: lightTokens.color.ganttTimelineMaroon.value},
            {color: lightTokens.color.ganttTimelineOlive.value},
            {color: lightTokens.color.ganttTimelineTeal.value},
            {color: lightTokens.color.ganttTimelineNavy.value},
            {color: lightTokens.color.ganttTimelinePurple.value}
        ],
        layout: 'grid',
        size: Size.md,
        value: lightTokens.color.ganttTimelineTeal.value
    },
    parameters: {
        docs: {
            description: {
                story: 'ColorSwatchPicker component, be my guest and play with it!'
            }
        }
    }
};

export const Sizes: Story = {
    args: {
        items: [{color: lightTokens.color.ganttTimelineTeal.value}]
    },
    parameters: {
        docs: {
            description: {
                story: 'Colo swatches can be displayed in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <ColorSwatchPicker {...args} size={Size.md} />
            <ColorSwatchPicker {...args} size={Size.sm} />
            <ColorSwatchPicker {...args} size={Size.xs} />
        </div>
    )
};

export const States: Story = {
    args: {
        items: [
            {color: lightTokens.color.ganttTimelineTeal.value, isInvalid: true},
            {color: lightTokens.color.ganttTimelineNavy.value, isDisabled: true},
            {color: lightTokens.color.ganttTimelinePurple.value}
        ],
        size: Size.md,
        value: lightTokens.color.ganttTimelinePurple.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Color swatch can be in error, disabled or normal state.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        items: [
            {color: lightTokens.color.ganttTimelineBlue.value},
            {color: lightTokens.color.ganttTimelineBlack.value},
            {color: lightTokens.color.ganttTimelineRed.value},
            {color: lightTokens.color.ganttTimelineGreen.value},
            {color: lightTokens.color.ganttTimelineGray.value},
            {color: lightTokens.color.ganttTimelineMaroon.value},
            {color: lightTokens.color.ganttTimelineOlive.value},
            {color: lightTokens.color.ganttTimelineTeal.value},
            {color: lightTokens.color.ganttTimelineNavy.value},
            {color: lightTokens.color.ganttTimelinePurple.value}
        ],
        isSkeleton: true,
        layout: 'grid',
        size: Size.md,
        value: lightTokens.color.ganttTimelineTeal.value
    },
    parameters: {
        docs: {
            description: {
                story: 'ColorSwatchPicker can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};
