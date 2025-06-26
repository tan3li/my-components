import {Meta, StoryObj} from '@storybook/react-webpack5';
import {TopNav} from './topnav.js';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {iconNames} from '../../media/icon/icons.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {Button, ButtonRole, ButtonStyle} from '../../action/button/button.js';
import {SearchField} from '../../inputs/searchfield/searchfield.js';
import {Divider} from '../../datadisplay/divider/divider.js';
import {Orientation} from '../../../constants/orientation.js';
import {Size} from '../../../constants/size.js';
import {Menu} from '../../action/menu/menu.js';
import {Avatar} from '../avatar/avatar.js';

const meta = {
    component: TopNav,
    parameters: {
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/TopNav'
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof TopNav>;

const exampleLeftItems = [
    {
        id: 'timer',
        children: (
            <IconButton
                aria-label={iconNames.Timer.toString()}
                iconName={iconNames.Timer}
                size={Size.lg}
                style={ButtonStyle.Outline}
                variant={ButtonVariant.Neutral}
            />
        )
    },
    {
        id: 'reports',
        children: (
            <IconButton
                aria-label={iconNames.SignalCellularAlt.toString()}
                iconName={iconNames.SignalCellularAlt}
                size={Size.lg}
                style={ButtonStyle.Outline}
                variant={ButtonVariant.Neutral}
            />
        )
    },
    {
        id: 'history',
        children: (
            <IconButton
                aria-label={iconNames.ClockClockwise.toString()}
                iconName={iconNames.ClockClockwise}
                size={Size.lg}
                style={ButtonStyle.Outline}
                variant={ButtonVariant.Neutral}
            />
        )
    },
    {
        ariaHidden: true,
        id: 'divider',
        children: <Divider orientation={Orientation.vertical} size={Size.sm} />
    },
    {
        id: 'help',
        children: (
            <Menu
                items={[
                    {id: '1', name: 'Contact support'},
                    {id: '2', name: 'Visit support page'},
                    {id: '3', name: 'Take a guided tour'}
                ]}>
                <Button
                    endIconName={iconNames.ExpandMore}
                    size={Size.lg}
                    startIconName={iconNames.Help}
                    style={ButtonStyle.Outline}
                    variant={ButtonVariant.Neutral}>
                    Help
                </Button>
            </Menu>
        )
    }
];

const exampleRightItems = [
    {
        id: 'search',
        children: <SearchField aria-label="Search" placeholder="Search" style={{flexGrow: 1, width: '292px'}} />
    },
    {
        id: 'add',
        children: (
            <Menu
                items={[
                    {
                        id: 's1',
                        name: 'Test Environment Visma',
                        hasSeparator: true,
                        children: [
                            {id: '1', name: 'Work hours'},
                            {id: '2', name: 'Absence'},
                            {id: '3', name: 'Travel expenses'},
                            {id: '4', name: 'Task (Activity)'}
                        ]
                    },
                    {id: '5', name: 'Sales case'},
                    {id: '6', name: 'Project'},
                    {id: '7', name: 'Customer'},
                    {id: '8', name: 'Proposal'},
                    {id: '9', name: 'Invoice'}
                ]}>
                <Button
                    size={Size.lg}
                    startIconName={iconNames.Add}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Add
                </Button>
            </Menu>
        )
    },
    {
        id: 'profile',
        children: (
            <Menu
                footerItems={[
                    {id: 'f1', name: 'About', role: ButtonRole.Link},
                    {id: 'f2', name: 'Terms', role: ButtonRole.Link},
                    {id: 'f3', name: 'Notice', role: ButtonRole.Link}
                ]}
                header="Severa Design System"
                items={[
                    {
                        id: '1',
                        name: 'Matti Virtanen',
                        props: {
                            prefix: <Avatar alt="MV" size={Size.sm} text="MV" />,
                            description: 'Administrator',
                            rightIconName: iconNames.ArrowForwardFilled
                        }
                    },
                    {
                        id: '2',
                        name: 'Settings',
                        props: {leftIconName: iconNames.Gear, rightIconName: iconNames.ArrowForwardFilled}
                    },
                    {
                        id: '3',
                        name: 'Subscription',
                        hasSeparator: true,
                        props: {leftIconName: iconNames.Cycle, rightIconName: iconNames.ArrowForwardFilled}
                    },
                    {id: '4', name: 'User management'},
                    {id: '5', name: 'Data transfer'},
                    {id: '6', name: 'Customer import'},
                    {id: '7', name: 'Project fee import'},
                    {id: '8', name: 'Action history'},
                    {id: '9', name: 'Close work hour & travel period'},
                    {id: '10', name: 'Recurring fees'},
                    {id: '11', name: 'Integrations', hasSeparator: true},
                    {
                        id: 's3',
                        name: 'Quick links',
                        hasSeparator: true,
                        children: [
                            {id: '12', name: "Matti's personal website"},
                            {
                                id: '13',
                                name: 'TIEKE - verkkolaskuosoitteet',
                                props: {rightIconName: iconNames.ArrowOutward, href: '#', target: '_blank'}
                            },
                            {
                                id: '14',
                                name: 'YTH - yrityshaku',
                                props: {rightIconName: iconNames.ArrowOutward, href: '#', target: '_blank'}
                            }
                        ]
                    },
                    {id: '15', name: 'Send us feedback', props: {leftIconName: iconNames.Comment}},
                    {id: '16', name: 'Sign out', props: {leftIconName: iconNames.Login}}
                ]}
                minWidth={270}
                placement="bottom right">
                <Button
                    aria-label="User"
                    endIconName={iconNames.ExpandMore}
                    size={Size.lg}
                    style={ButtonStyle.Outline}
                    variant={ButtonVariant.Neutral}>
                    <Avatar alt="MV" text="MV" />
                </Button>
            </Menu>
        )
    }
];

export const Example: Story = {
    args: {
        leftItems: exampleLeftItems,
        rightItems: exampleRightItems
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage with buttons, search and menus.'
            }
        }
    }
};

export const LoadingIndicator: Story = {
    args: {
        leftItems: exampleLeftItems,
        rightItems: exampleRightItems,
        showLoadingIndicator: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Display loading indicator by setting showLoadingIndicator = true.'
            }
        }
    }
};
