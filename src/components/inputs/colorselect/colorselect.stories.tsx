import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {ColorSelect} from './colorselect.js';
import {lightTokens} from '@tan3li/d-tokens';
import {Size} from '../../../constants/index.js';

const meta = {
    args: {
        onInputChange: undefined
    },
    component: ColorSelect,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', minWidth: '210px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.select__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/ColorSelect'
} satisfies Meta<typeof ColorSelect>;

export default meta;
type Story = StoryObj<typeof ColorSelect>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: lightTokens.color.ganttTimelineBlue.value, text: 'Blue'},
            {value: lightTokens.color.ganttTimelineBlack.value, text: 'Black'},
            {value: lightTokens.color.ganttTimelineRed.value, text: 'Red'},
            {value: lightTokens.color.ganttTimelineGreen.value, text: 'Green'},
            {value: lightTokens.color.ganttTimelineGray.value, text: 'Gray'},
            {value: lightTokens.color.ganttTimelineMaroon.value, text: 'Maroon'},
            {value: lightTokens.color.ganttTimelineOlive.value, text: 'Olive'},
            {value: lightTokens.color.ganttTimelineTeal.value, text: 'Teal'},
            {value: lightTokens.color.ganttTimelineNavy.value, text: 'Navy'},
            {value: lightTokens.color.ganttTimelinePurple.value, text: 'Purple'}
        ],
        label: 'Field label',
        text: 'Olive',
        value: lightTokens.color.ganttTimelineOlive.value
    },
    parameters: {
        docs: {
            description: {
                story: 'ColorSelect component, be my guest and play with it!'
            }
        }
    }
};

export const Sizes: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: lightTokens.color.ganttTimelineBlue.value, text: 'Blue'},
            {value: lightTokens.color.ganttTimelineBlack.value, text: 'Black'},
            {value: lightTokens.color.ganttTimelineRed.value, text: 'Red'},
            {value: lightTokens.color.ganttTimelineGreen.value, text: 'Green'},
            {value: lightTokens.color.ganttTimelineGray.value, text: 'Gray'},
            {value: lightTokens.color.ganttTimelineMaroon.value, text: 'Maroon'},
            {value: lightTokens.color.ganttTimelineOlive.value, text: 'Olive'},
            {value: lightTokens.color.ganttTimelineTeal.value, text: 'Teal'},
            {value: lightTokens.color.ganttTimelineNavy.value, text: 'Navy'},
            {value: lightTokens.color.ganttTimelinePurple.value, text: 'Purple'}
        ],
        text: 'Olive',
        value: lightTokens.color.ganttTimelineOlive.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Component can be displayed in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <ColorSelect {...args} label="Size md" size={Size.md} />
            <ColorSelect {...args} label="Size sm" size={Size.sm} />
            <ColorSelect {...args} label="Size xs" size={Size.xs} />
        </div>
    )
};
