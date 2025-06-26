import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DueDateButton, DueDateButtonVariant} from './duedatebutton.js';
import {DialogTrigger, Popover} from '../popover/index.js';
import {Calendar} from '../../inputs/index.js';
import {useState} from 'react';
import {DateValue} from 'react-aria';

const meta = {
    args: {
        onHoverChange: undefined,
        onHoverStart: undefined,
        onHoverEnd: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onFocusChange: undefined,
        onPressStart: undefined,
        onPressEnd: undefined,
        onPress: undefined,
        onPressChange: undefined,
        onPressUp: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined
    },
    component: DueDateButton,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Action/DueDateButton'
} satisfies Meta<typeof DueDateButton>;

export default meta;
type Story = StoryObj<typeof DueDateButton>;

export const Playground: Story = {
    args: {
        date: '2025-04-18',
        tooltipContent: 'Tooltip',
        variant: DueDateButtonVariant.Neutral
    },
    parameters: {
        docs: {
            description: {
                story: 'DueDateButton component, be my guest and play with it!'
            }
        }
    }
};

export const Variants: Story = {
    args: {
        date: '2025-04-18'
    },
    parameters: {
        docs: {
            description: {
                story: 'Different variants of the component.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DueDateButton {...args} tooltipContent="Due later" variant={DueDateButtonVariant.Neutral} />
            <DueDateButton {...args} tooltipContent="Due soon" variant={DueDateButtonVariant.Warning} />
            <DueDateButton {...args} tooltipContent="Overdue" variant={DueDateButtonVariant.Danger} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        date: '2025-04-18',
        isDisabled: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Disabled variants of the component.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <DueDateButton {...args} tooltipContent="Due later" variant={DueDateButtonVariant.Neutral} />
            <DueDateButton {...args} tooltipContent="Due soon" variant={DueDateButtonVariant.Warning} />
            <DueDateButton {...args} tooltipContent="Overdue" variant={DueDateButtonVariant.Danger} />
        </div>
    )
};

export const DatePickerExample: Story = {
    args: {
        date: '2025-04-18',
        tooltipContent: 'Tooltip',
        variant: DueDateButtonVariant.Neutral
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: 'You can create date picker using DueDateButton together with Calendar and Popover components.'
            }
        }
    },
    render: (args) => {
        const [value, setValue] = useState('2025-04-18');
        const [isOpen, setIsOpen] = useState(false);

        const onChange = (date: DateValue | null) => {
            if (date) {
                setValue(date.toString());
                setIsOpen(false);
            }
        };

        return (
            <DialogTrigger isOpen={isOpen} onOpenChange={(newIsOpen) => setIsOpen(newIsOpen)}>
                <DueDateButton {...args} date={value} />
                <Popover placement="bottom start">
                    <Calendar autoFocus={true} onChange={onChange} value={value} />
                </Popover>
            </DialogTrigger>
        );
    }
};
