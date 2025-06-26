import {Tooltip, TooltipType} from './tooltip';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {TooltipTrigger} from './tooltiptrigger';
import {CSSProperties} from 'react';
import {iconNames} from '../../media/icon/icons';
import {Size} from '../../../constants/size';
import {Button, ButtonStyle} from '../../action/button/button';
import {ButtonVariant} from '../../action/constants/buttonvariant';
import {Position} from '../../../constants/position';

const meta = {
    component: Tooltip,
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Tooltip'
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
    args: {
        children: 'This is a tooltip',
        headerIconName: iconNames.Info,
        headerText: '',
        position: Position.Top,
        showArrow: true,
        type: TooltipType.Plain
    },
    parameters: {
        docs: {
            description: {
                story: 'Tooltip component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <TooltipTrigger>
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                Trigger
            </Button>
            <Tooltip {...args}></Tooltip>
        </TooltipTrigger>
    )
};

const listStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
};
const argsForStories = [
    'children',
    'type',
    'className',
    'crossOffset',
    'elementType',
    'headerIconName',
    'headerText',
    'offset',
    'placement',
    'position',
    'showArrow'
];

export const Types: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Tooltip component with plain and rich types.'
            }
        },
        controls: {
            include: argsForStories
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Plain
                </Button>
                <Tooltip {...args} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Rich
                </Button>
                <Tooltip {...args} headerText="What's the phone number for?" type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Rich + Icon
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="What's the phone number for?"
                    type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
        </div>
    )
};

export const Positions: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Tooltip component with various positions.'
            }
        },
        controls: {
            include: argsForStories
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Plain
                </Button>
                <Tooltip {...args} position={Position.Left} type={TooltipType.Plain}>
                    Left Position
                </Tooltip>
                <Tooltip {...args} position={Position.Top} type={TooltipType.Plain}>
                    Top Position
                </Tooltip>
                <Tooltip {...args} position={Position.Right} type={TooltipType.Plain}>
                    Right Position
                </Tooltip>
                <Tooltip {...args} position={Position.Bottom} type={TooltipType.Plain}>
                    Bottom Position
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Rich
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="Tooltip"
                    position={Position.Left}
                    type={TooltipType.Rich}>
                    Left Position
                </Tooltip>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="Tooltip"
                    position={Position.Top}
                    type={TooltipType.Rich}>
                    Top Position
                </Tooltip>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="Tooltip"
                    position={Position.Right}
                    type={TooltipType.Rich}>
                    Right Position
                </Tooltip>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="Tooltip"
                    position={Position.Bottom}
                    type={TooltipType.Rich}>
                    Bottom Position
                </Tooltip>
            </TooltipTrigger>
        </div>
    )
};

export const Arrows: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Tooltip component with optional arrow.'
            }
        },
        controls: {
            include: argsForStories
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Arrow
                </Button>
                <Tooltip {...args} position={Position.Left} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Top} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Right} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Bottom} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    No Arrow
                </Button>
                <Tooltip {...args} position={Position.Left} showArrow={false} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Top} showArrow={false} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Right} showArrow={false} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
                <Tooltip {...args} position={Position.Bottom} showArrow={false} type={TooltipType.Plain}>
                    This is a tooltip
                </Tooltip>
            </TooltipTrigger>
        </div>
    )
};

export const Width: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Tooltip component with various widths.'
            }
        },
        controls: {
            include: argsForStories
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Default (160)
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="What's the phone number for?"
                    type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Custom (200)
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="What's the phone number for?"
                    maxWidth={200}
                    type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Custom (250)
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="What's the phone number for?"
                    maxWidth={250}
                    type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Custom (300)
                </Button>
                <Tooltip
                    {...args}
                    headerIconName={iconNames.InfoFilled}
                    headerText="What's the phone number for?"
                    maxWidth={300}
                    type={TooltipType.Rich}>
                    Lorem ipsum dolor sit amet consectetur. Nulla at malesuada cursus pharetra sed.
                </Tooltip>
            </TooltipTrigger>
        </div>
    )
};
