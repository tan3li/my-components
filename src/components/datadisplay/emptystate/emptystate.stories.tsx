import {Meta, StoryObj} from '@storybook/react-webpack5';
import {EmptyState, EmptyStateLayoutVariant} from './emptystate.js';
import {iconNames} from '../../media/index.js';
import {AlertModal} from '../../feedback/alertmodal/alertmodal.js';
import {Drawer, DrawerVariant, DrawerWidth} from '../../feedback/drawer/drawer.js';
import {useState} from 'react';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {Size} from '../../../constants/size.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';

const meta = {
    component: EmptyState,
    decorators: [
        (Story) => (
            <div style={{minWidth: '210px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/EmptyState'
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Playground: Story = {
    args: {
        buttonProps: {
            children: 'Add entry',
            onPress: emptyFn,
            style: ButtonStyle.Fill,
            variant: ButtonVariant.Accent
        },
        bodyText: 'You can log your work hour, or absence & expenses for the day',
        iconName: iconNames.HourglassDisabled,
        title: 'No entries found'
    },
    parameters: {
        docs: {
            description: {
                story: 'EmptyState component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', height: '100%', minWidth: '500px', width: '100%'}}>
            <EmptyState {...args} />
        </div>
    )
};

export const Variants: Story = {
    args: {
        bodyText:
            'This body copy explains the empty state and direct the user to the UI element to clicks. The icon relates to the situation'
    },
    parameters: {
        docs: {
            description: {
                story: 'Different variants of EmptyState.'
            }
        },
        controls: {
            exclude: ['buttonProps', 'className', 'iconName', 'key', 'ref', 'title']
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '75px',
                height: '100%',
                width: '600px'
            }}>
            <EmptyState {...args} title={'Title and text'} />
            <EmptyState {...args} iconName={iconNames.HourglassDisabled} title={'Title, text and icon'} />
            <EmptyState
                {...args}
                buttonProps={{
                    children: 'Call to action',
                    onPress: emptyFn,
                    variant: ButtonVariant.Accent,
                    style: ButtonStyle.Link
                }}
                title={'Title, text and button'}
            />
            <EmptyState
                {...args}
                buttonProps={{
                    children: 'Call to action',
                    onPress: emptyFn,
                    variant: ButtonVariant.Accent,
                    style: ButtonStyle.Fill
                }}
                iconName={iconNames.HourglassDisabled}
                title={'Title, text, button and icon'}
            />
        </div>
    )
};

export const LayoutVariants: Story = {
    args: {
        buttonProps: {
            children: 'Call to action',
            onPress: emptyFn,
            style: ButtonStyle.Dash,
            variant: ButtonVariant.Neutral
        },
        bodyText:
            'This body copy explains the empty state and directs the user to the UI element to click. The icon relates to the situation',
        iconName: iconNames.HourglassDisabled
    },
    parameters: {
        docs: {
            description: {
                story: 'Different layout variants of EmptyState.'
            }
        },
        controls: {
            exclude: ['layout']
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '75px',
                height: '100%',
                width: '600px'
            }}>
            <EmptyState {...args} layout={EmptyStateLayoutVariant.SideBySide} title={'Side by side'} />
            <EmptyState {...args} layout={EmptyStateLayoutVariant.LeftAligned} title={'Left aligned'} />
            <EmptyState {...args} layout={EmptyStateLayoutVariant.Centered} title={'Centered'} />
        </div>
    )
};

export const InsideAlertModal: Story = {
    args: {
        bodyText: 'Please check without admin whether you have permission to access this file',
        title: "Can't view this file",
        iconName: iconNames.DetachFile
    },
    parameters: {
        docs: {
            description: {
                story: 'EmptyState component inside AlertModal.'
            }
        }
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button
                    onPress={() => {
                        setIsOpen(true);
                    }}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Open AlertModal
                </Button>
                <AlertModal isOpen={isOpen} onOpenChange={setIsOpen} size={Size.sm} title={'This is a modal'}>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <EmptyState {...args} />
                    </div>
                </AlertModal>
            </>
        );
    }
};

export const InsideDrawer: Story = {
    args: {
        bodyText: 'We’re unable to connect your integration. Click reload to try again.',
        title: 'Something’s wrong',
        iconName: iconNames.LinkOff
    },
    parameters: {
        docs: {
            description: {
                story: 'EmptyState component inside Drawer.'
            }
        }
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    title={'Drawer Heading'}
                    variant={DrawerVariant.Standard}
                    width={DrawerWidth.Medium}>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <EmptyState
                            {...args}
                            buttonProps={{
                                children: 'Reload',
                                onPress: () => setIsOpen(false),
                                style: ButtonStyle.Fill,
                                variant: ButtonVariant.Accent
                            }}
                        />
                    </div>
                </Drawer>
            </>
        );
    }
};
