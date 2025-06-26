import {Meta, StoryObj} from '@storybook/react-webpack5';
import {AlertModal} from './alertmodal.js';
import {DialogTrigger} from '../../action/popover/index.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {Size} from '../../../constants/size.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {iconNames} from '../../media/icon/icons.js';
import {OverlayHeaderVariant} from '../overlayheader/overlayheader.js';
import {TextField} from '../../inputs/textfield/textfield.js';
import {Select} from '../../inputs/select/select.js';
import {useState} from 'react';

const meta = {
    component: AlertModal,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        chromatic: {
            delay: 500 // wait for animations to finish for consistent snapshots
        }
    },
    title: 'Components/Feedback/AlertModal'
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof AlertModal>;

const shortContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus est quam, eu suscipit mi aliquet vel. Praesent nec sollicitudin nulla. Duis quis justo eget ex tincidunt pretium. Praesent maximus urna a libero fringilla rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In consectetur sapien sit amet ante semper mollis.';
const longContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus est quam, eu suscipit mi aliquet vel. Praesent nec sollicitudin nulla. Duis quis justo eget ex tincidunt pretium. Praesent maximus urna a libero fringilla rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In consectetur sapien sit amet ante semper mollis. Quisque blandit eu purus placerat gravida. Morbi gravida turpis a mi aliquet scelerisque. Phasellus tristique ut sapien et condimentum. Quisque aliquam risus eros, vel feugiat urna porta et. Sed et enim nisi. Proin ornare erat quis ligula elementum, vel cursus urna porta. Pellentesque lacinia eleifend pharetra. Vivamus vel urna augue. Phasellus iaculis neque vel nibh ornare elementum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus est quam, eu suscipit mi aliquet vel. Praesent nec sollicitudin nulla. Duis quis justo eget ex tincidunt pretium. Praesent maximus urna a libero fringilla rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In consectetur sapien sit amet ante semper mollis. Quisque blandit eu purus placerat gravida. Morbi gravida turpis a mi aliquet scelerisque. Phasellus tristique ut sapien et condimentum. Quisque aliquam risus eros, vel feugiat urna porta et. Sed et enim nisi. Proin ornare erat quis ligula elementum, vel cursus urna porta. Pellentesque lacinia eleifend pharetra. Vivamus vel urna augue. Phasellus iaculis neque vel nibh ornare elementum.';

export const Playground: Story = {
    args: {
        destructiveAction: {iconName: iconNames.Delete, label: 'Delete', onPress: emptyFn},
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'AlertModal component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <DialogTrigger defaultOpen={true}>
            <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Open AlertModal
            </Button>
            <AlertModal {...args}>{shortContent}</AlertModal>
        </DialogTrigger>
    )
};

export const Variants: Story = {
    args: {
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Different variants of AlertModal.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Neutral
                </Button>
                <AlertModal
                    {...args}
                    headerIcon={iconNames.InfoFilled}
                    primaryAction={{label: 'Primary', onPress: emptyFn, variant: ButtonVariant.Accent}}
                    variant={OverlayHeaderVariant.Neutral}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Success}>
                    Success
                </Button>
                <AlertModal
                    {...args}
                    headerIcon={iconNames.Check}
                    primaryAction={{
                        label: 'Primary',
                        onPress: emptyFn,
                        style: ButtonStyle.Outline,
                        variant: ButtonVariant.Neutral
                    }}
                    variant={OverlayHeaderVariant.Success}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Danger}>
                    Danger
                </Button>
                <AlertModal
                    {...args}
                    headerIcon={iconNames.EmergencyHomeFilled}
                    primaryAction={{label: 'Delete', onPress: emptyFn, variant: ButtonVariant.Danger}}
                    variant={OverlayHeaderVariant.Danger}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const Sizes: Story = {
    args: {
        destructiveAction: {iconName: iconNames.Delete, label: 'Delete', onPress: emptyFn},
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Width of the modal can be controlled with size prop.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Size sm
                </Button>
                <AlertModal {...args} size={Size.sm}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Size md
                </Button>
                <AlertModal {...args} size={Size.md}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Size lg
                </Button>
                <AlertModal {...args} size={Size.lg}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Size xl
                </Button>
                <AlertModal {...args} size={Size.xl}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Size xxl
                </Button>
                <AlertModal {...args} size={Size.xxl}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const Dismissal: Story = {
    args: {
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal dismissal on out-click can be controlled with isDismissibleOnOutClick prop.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Outclick dismiss
                </Button>
                <AlertModal {...args} isDismissibleOnOutClick={true}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    No outclick dismiss
                </Button>
                <AlertModal {...args} isDismissibleOnOutClick={false}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const Focus: Story = {
    args: {
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Initial focus can be controlled by giving autoFocus property for action or children. By default close button will get the focus.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Default focus
                </Button>
                <AlertModal {...args}>{shortContent}</AlertModal>
            </DialogTrigger>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Custom focus
                </Button>
                <AlertModal {...args} secondaryAction={{autoFocus: true, label: 'Secondary', onPress: emptyFn}}>
                    {shortContent}
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const ScrollBehavior: Story = {
    args: {
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Scroll behavior can be controlled with shouldScrollInViewport prop.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Scroll inside viewport
                </Button>
                <AlertModal {...args} shouldScrollInViewport={true}>
                    {longContent}
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Scroll inside body
                </Button>
                <AlertModal {...args} shouldScrollInViewport={false}>
                    {longContent}
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const BodyContent: Story = {
    args: {
        size: Size.sm
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal body can also contain JSX instead of just plain text.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Create something
                </Button>
                <AlertModal
                    {...args}
                    primaryAction={{label: 'Create', onPress: emptyFn, variant: ButtonVariant.Accent}}
                    title="Create something"
                    variant={OverlayHeaderVariant.Neutral}>
                    <TextField aria-label="Field label" placeholder="Type something..." />
                </AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Select something
                </Button>
                <AlertModal
                    {...args}
                    primaryAction={{label: 'Submit', onPress: emptyFn, variant: ButtonVariant.Accent}}
                    title="Select something">
                    <Select
                        aria-label="Field label"
                        items={[
                            {value: '1', text: 'Option 1'},
                            {value: '2', text: 'Option 2'},
                            {value: '3', text: 'Option 3'}
                        ]}
                        placeholder="Select something..."
                    />
                </AlertModal>
            </DialogTrigger>
        </div>
    )
};

export const ControlledOpenState: Story = {
    args: {
        destructiveAction: {iconName: iconNames.Delete, label: 'Delete', onPress: emptyFn},
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        docs: {
            description: {
                story: 'Modal open state can be controlled with props instead of using DialogTrigger.'
            }
        },
        controls: {
            exclude: ['UNSTABLE_portalContainer', 'slot']
        }
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => {
                        setIsOpen(true);
                    }}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Neutral}>
                    Open AlertModal
                </Button>
                <AlertModal {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
                    {shortContent}
                </AlertModal>
            </>
        );
    }
};

export const NoFooter: Story = {
    args: {
        size: Size.sm,
        title: 'Modal title'
    },
    parameters: {
        controls: {
            exclude: ['destructiveAction', 'primaryAction', 'secondaryAction', 'UNSTABLE_portalContainer', 'slot']
        },
        docs: {
            description: {
                story: 'Footer will not be rendered if primaryAction or secondaryAction props are not given.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <DialogTrigger defaultOpen={true}>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Short content
                </Button>
                <AlertModal {...args}>{shortContent}</AlertModal>
            </DialogTrigger>
            <DialogTrigger>
                <Button style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Long content
                </Button>
                <AlertModal {...args}>{longContent}</AlertModal>
            </DialogTrigger>
        </div>
    )
};
