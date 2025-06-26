import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Popover, PopoverProps} from './popover.js';
import {Position, Size} from '../../../constants/index.js';
import {Button, ButtonStyle} from '../button/index.js';
import {ButtonVariant} from '../constants/index.js';
import {DialogTrigger} from './dialogtrigger.js';
import {BodyText} from '../../text/index.js';
import {useRef, useState} from 'react';
import {Calendar} from '../../inputs/index.js';
import {DateValue} from 'react-aria';

const meta = {
    component: Popover,
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
    title: 'Components/Action/Popover'
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
    args: {
        padding: 'var(--space-xs)',
        maxWidth: 250
    },
    parameters: {
        docs: {
            description: {
                story: 'Popover component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <DialogTrigger>
            <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Trigger
            </Button>
            <Popover {...args}>
                <BodyText size={Size.md}>This is a popover.</BodyText>
            </Popover>
        </DialogTrigger>
    )
};

const argsForStories = ['maxWidth', 'placement', 'padding', 'offset', 'crossOffset'];

export const Padding: Story = {
    args: {
        maxWidth: 250
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Popover content padding can be adjusted with padding prop. Alternatively can just use padding for the content itself.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Even padding
                </Button>
                <Popover {...args} padding="var(--space-md)">
                    <BodyText size={Size.md}>This is a popover.</BodyText>
                </Popover>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Uneven padding
                </Button>
                <Popover {...args} padding={{left: 'var(--space-sm)', right: 'var(--space-sm)'}}>
                    <BodyText size={Size.md}>This is a popover.</BodyText>
                </Popover>
            </DialogTrigger>
        </div>
    )
};

export const Placement: Story = {
    args: {
        padding: 'var(--space-xs)',
        maxWidth: 250
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: "Popover's placement with respect to trigger element can be adjusted with placement prop."
            }
        }
    },
    render: (args) => {
        const placements: Array<PopoverProps['placement']> = [
            'bottom',
            'bottom left',
            'bottom right',
            'top',
            'top left',
            'top right',
            'left',
            'left top',
            'left bottom',
            'right',
            'right top',
            'right bottom'
        ];

        return (
            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(3, auto)'}}>
                {placements.map((placement) => (
                    <div key={placement}>
                        <DialogTrigger>
                            <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                                {placement}
                            </Button>
                            <Popover {...args} placement={placement}>
                                <BodyText size={Size.md}>{`This popover is on the ${placement}`}.</BodyText>
                            </Popover>
                        </DialogTrigger>
                    </div>
                ))}
            </div>
        );
    }
};

export const Offset: Story = {
    args: {
        crossOffset: 100,
        offset: 50,
        padding: 'var(--space-xs)',
        placement: Position.Top,
        maxWidth: 250
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: "Popover's offset with respect to its anchor element can be adjusted using the offset and crossOffset props."
            }
        }
    },
    render: ({crossOffset, offset, ...args}) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Offset
                </Button>
                <Popover {...args} offset={offset}>
                    <BodyText size={Size.md}>{`Offset by additional ${offset}px.`}</BodyText>
                </Popover>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Cross offset
                </Button>
                <Popover {...args} crossOffset={crossOffset}>
                    <BodyText size={Size.md}>{`Offset by additional ${crossOffset}px.`}</BodyText>
                </Popover>
            </DialogTrigger>
        </div>
    )
};

export const Controlled: Story = {
    args: {
        padding: 'var(--space-xs)',
        maxWidth: 250
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'If DialogTrigger cannot be used, open state can be controlled with isOpen and onOpenChange props.'
            }
        }
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        const triggerRef = useRef<HTMLButtonElement>(null);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(true)}
                    ref={triggerRef}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Neutral}>
                    Trigger
                </Button>
                <Popover
                    {...args}
                    aria-label="Popover"
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    triggerRef={triggerRef}>
                    <BodyText size={Size.md}>This is a popover.</BodyText>
                </Popover>
            </>
        );
    }
};

export const Examples: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Real-life examples of using Popover.'
            }
        },
        layout: 'padded'
    },
    render: (args) => {
        const [isCalendarOpen, setIsCalendarOpen] = useState(false);
        const [date, setDate] = useState<DateValue | null>(null);

        const onChange = (newDate: DateValue) => {
            setIsCalendarOpen(false);
            setDate(newDate);
        };

        return (
            <div style={{display: 'flex', gap: '1rem'}}>
                <DialogTrigger isOpen={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                        Calendar
                    </Button>
                    <Popover {...args} placement="bottom left">
                        <Calendar autoFocus={true} onChange={onChange} value={date} />
                    </Popover>
                </DialogTrigger>
            </div>
        );
    }
};
