import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Drawer, DrawerHeaderStyle, DrawerVariant, DrawerWidth} from './drawer.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {Heading} from '../../text/heading/heading.js';
import {Size} from '../../../constants/size.js';
import {TextField} from '../../inputs/textfield/textfield.js';
import {TextArea} from '../../inputs/textarea/textarea.js';
import {Divider} from '../../datadisplay/divider/divider.js';
import {Orientation} from '../../../constants/orientation.js';
import {Checkbox} from '../../inputs/checkbox/checkbox.js';
import {ToggleSwitch} from '../../inputs/toggleswitch/toggleswitch.js';
import {Select} from '../../inputs/select/select.js';
import {useState} from 'react';
import {emptyFn} from '../../../utils/functionhelper.js';
import {iconNames} from '../../media/index.js';
import {IconButton} from '../../action/index.js';
import {Label} from '../../text/index.js';
import {Link} from '../../navigation/index.js';

const meta = {
    component: Drawer,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        chromatic: {
            delay: 500 // wait for animations to finish for consistent snapshots
        }
    },
    title: 'Components/Feedback/Drawer'
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

const drawerBody = (
    <>
        <Heading level={2} size={Size.sm}>
            Heading of example form
        </Heading>
        <TextField autoFocus={true} label="First field of example form" value="Some example value" />
        <TextArea label="Second field of example form" />
        <Divider orientation={Orientation.horizontal} size={Size.md} />
        <Checkbox label="Checkbox for example form" size={Size.md} />
        <TextField label="Third field of example form" value="Some example value" />
        <ToggleSwitch label="ToggleSwitch for example form" size={Size.md} />
        <Select
            helpText="Help text content"
            items={[
                {value: '1', text: 'Option 1'},
                {value: '2', text: 'Option 2'},
                {value: '3', text: 'Option 3'},
                {value: '4', text: 'Option 4'},
                {value: '5', text: 'Option 5'},
                {value: '6', text: 'Option 6'},
                {value: '7', text: 'Option 7'},
                {value: '8', text: 'Option 8'},
                {value: '9', text: 'Option 9'},
                {value: '10', text: 'Option 10'}
            ]}
            label="Select for example form"
            text="Option 1"
            value="1"
        />
    </>
);

export const Standard: Story = {
    args: {
        children: drawerBody,
        primaryAction: {label: 'Primary', onPress: emptyFn},
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Medium
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const FullOverlay: Story = {
    args: {
        children: drawerBody,
        primaryAction: {label: 'Primary', onPress: emptyFn},
        title: 'Drawer Heading',
        variant: DrawerVariant.FullOverlay,
        width: DrawerWidth.Wide
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const CustomHeaderAndFooter: Story = {
    args: {
        'aria-label': 'Custom header content',
        children: drawerBody,
        footer: <div>Custom footer content</div>,
        header: <div>Custom header content</div>,
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Wide
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const CustomHeaderAndFooterWithClose: Story = {
    args: {
        'aria-label': 'Custom header content',
        children: drawerBody,
        footer: ({close}) => (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>Custom footer</div>
                <Button onPress={close} size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Accent}>
                    Action with close
                </Button>
            </div>
        ),
        header: ({close}) => (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Heading size={Size.xs} slot="title" style={{flex: 1}}>
                    Custom header
                </Heading>
                <IconButton
                    aria-label="close"
                    iconName={iconNames.CloseFilled}
                    onPress={close}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </div>
        ),
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Wide
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const NoFooter: Story = {
    args: {
        children: drawerBody,
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Wide
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const Actions: Story = {
    args: {
        children: drawerBody,
        destructiveAction: {label: 'Delete', onPress: emptyFn, iconName: iconNames.Delete},
        primaryAction: {label: 'Primary', onPress: emptyFn},
        secondaryAction: {label: 'Secondary', onPress: emptyFn},
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Medium
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const HeaderLoadingIndicator: Story = {
    args: {
        children: drawerBody,
        primaryAction: {label: 'Primary', onPress: emptyFn},
        showHeaderLoadingIndicator: true,
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Medium
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const HeaderDetails: Story = {
    args: {
        children: drawerBody,
        headerDetails: <Label size={Size.md}>Some details here</Label>,
        primaryAction: {label: 'Primary', onPress: emptyFn},
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Medium
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};

export const EmphasizedHeader: Story = {
    args: {
        children: drawerBody,
        headerDetails: (
            <div style={{color: 'var(--nav-text-enabled-weak)'}}>
                <Link size={Size.md}>Customer</Link>
                {' ⋅ '}
                <Link size={Size.md}>Project</Link>
            </div>
        ),
        headerStyle: DrawerHeaderStyle.Emphasized,
        primaryAction: {label: 'Primary', onPress: emptyFn},
        title: 'Drawer Heading',
        variant: DrawerVariant.Standard,
        width: DrawerWidth.Medium
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <Button
                    onPress={() => setIsOpen(!isOpen)}
                    size={Size.lg}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Toggle Drawer
                </Button>
                <Drawer {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
            </>
        );
    }
};
