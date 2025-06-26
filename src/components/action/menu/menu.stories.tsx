import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Menu, SelectionMode, SubmenuBehavior} from './menu.js';
import {Button, ButtonStyle} from '../button/button.js';
import {ButtonVariant} from '../constants/buttonvariant.js';
import {Size} from '../../../constants/size.js';
import {iconNames} from '../../media/icon/icons.js';
import {Keyboard} from 'react-aria-components';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';

const meta = {
    component: Menu,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Action/Menu'
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Simple: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Simple menu
            </Button>
        ),
        items: [
            {id: '1', name: 'Action 1'},
            {id: '2', name: 'Action 2'},
            {id: '3', name: 'Action 3'}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Simple menu, no special stuff.'
            }
        }
    }
};

const argsForStories = [
    'children',
    'items',
    'minWidth',
    'placement',
    'className',
    'onSelectionChange',
    'onAction',
    'selectionMode',
    'disabledKeys'
];

export const Grouped: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Grouped menu
            </Button>
        ),
        items: [
            {
                id: 's1',
                name: 'Section 1',
                hasSeparator: true,
                children: [
                    {id: '1', name: 'Action 1'},
                    {id: '2', name: 'Action 2'}
                ]
            },
            {
                id: 's2',
                name: 'Section 2',
                children: [
                    {id: '3', name: 'Action 3'},
                    {id: '4', name: 'Action 4'}
                ]
            }
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Menu items can be grouped under headers.'
            }
        }
    }
};

export const Description: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with descriptions
            </Button>
        ),
        items: [
            {id: '1', name: 'Action 1', props: {description: 'Action 1 description'}},
            {id: '2', name: 'Action 2', props: {description: 'Action 2 description'}},
            {id: '3', name: 'Action 3', props: {description: 'Action 3 description'}}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Menu items can have descriptions.'
            }
        }
    }
};

export const Icons: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Menu items can have icons on left or right side.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <Menu
                {...args}
                items={[
                    {id: '1', name: 'Action 1', props: {leftIconName: iconNames.FormatListBullets}},
                    {id: '2', name: 'Action 2', props: {leftIconName: iconNames.ViewKanban}},
                    {id: '3', name: 'Action 3', props: {leftIconName: iconNames.Calendar}}
                ]}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Left icons menu
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1', props: {rightIconName: iconNames.FormatListBullets}},
                    {id: '2', name: 'Action 2', props: {rightIconName: iconNames.ViewKanban}},
                    {id: '3', name: 'Action 3', props: {rightIconName: iconNames.Calendar}}
                ]}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Right icons menu
                </Button>
            </Menu>
        </div>
    )
};

export const DisabledAction: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with disabled action
            </Button>
        ),
        disabledKeys: ['2'],
        items: [
            {
                id: '1',
                name: 'Action 1',
                props: {
                    actionLabel: 'Go',
                    leftIconName: iconNames.ViewKanban,
                    rightIconName: iconNames.ArrowForwardFilled,
                    description: 'Description'
                }
            },
            {
                id: '2',
                name: 'Action 2',
                props: {
                    actionLabel: 'Go',
                    leftIconName: iconNames.FormatListBullets,
                    rightIconName: iconNames.ArrowForwardFilled,
                    description: 'Description'
                }
            },
            {
                id: '3',
                name: 'Action 3',
                props: {
                    actionLabel: 'Go',
                    leftIconName: iconNames.Calendar,
                    rightIconName: iconNames.ArrowForwardFilled,
                    description: 'Description'
                }
            }
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Actions can be disabled with disabledKeys prop.'
            }
        }
    }
};

export const DestructiveAction: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with destructive action
            </Button>
        ),
        items: [
            {id: '1', name: 'Action 1'},
            {id: '2', name: 'Action 2'},
            {id: '3', name: 'Delete', props: {leftIconName: iconNames.Delete, isDestructive: true}}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['selectionMode']
        },
        docs: {
            description: {
                story: 'Destructive menu action can be defined by setting isDestructive prop for item.'
            }
        }
    }
};

export const Links: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with links
            </Button>
        ),
        items: [
            {id: '1', name: 'Internal link', props: {rightIconName: iconNames.ArrowForwardFilled}},
            {
                id: '3',
                name: 'External link',
                props: {rightIconName: iconNames.ArrowOutwardFilled, href: 'https://google.com', target: '_blank'}
            }
        ]
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['selectionMode']
        },
        docs: {
            description: {
                story: 'Links can defined by setting rightIconName and href props for items.'
            }
        }
    }
};

export const ActionLabels: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with action labels
            </Button>
        ),
        items: [
            {id: '1', name: 'Copy', props: {actionLabel: <Keyboard>⌘C</Keyboard>}},
            {id: '2', name: 'Paste', props: {actionLabel: <Keyboard>⌘V</Keyboard>}}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Items can have action labels.'
            }
        }
    }
};

export const LongText: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with long text
            </Button>
        ),
        items: [
            {id: '1', name: 'Short action name'},
            {id: '2', name: 'This is very long action name which does not fit one row'}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Long item text wraps on multiple lines.'
            }
        }
    }
};

export const Footer: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with footer
            </Button>
        ),
        footerItems: [
            {id: 'f1', name: 'About'},
            {id: 'f2', name: 'Test'}
        ],
        items: [
            {id: '1', name: 'Action 1'},
            {id: '2', name: 'Action 2'},
            {id: '3', name: 'Action 3'}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Footer can defined by setting footerItems.'
            }
        }
    }
};

export const Separator: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with separators
            </Button>
        ),
        items: [
            {id: '1', name: 'Action 1', hasSeparator: true},
            {id: '2', name: 'Action 2'},
            {id: '3', name: 'Action 3', hasSeparator: true},
            {id: '4', name: 'Action 4'}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Items can be separated using hasSeparator prop.'
            }
        }
    }
};

export const Header: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu with header
            </Button>
        ),
        header: 'Testing Environment',
        items: [
            {id: '1', name: 'Action 1'},
            {id: '2', name: 'Action 2'},
            {id: '3', name: 'Action 3'}
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Header can be set for menu with header prop.'
            }
        }
    }
};

export const Selection: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Single or multiple selection for items can be enabled with selectionMode prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <Menu
                {...args}
                items={[
                    {id: '1', name: 'Action 1'},
                    {id: '2', name: 'Action 2'},
                    {id: '3', name: 'Action 3'}
                ]}
                selectionMode="single">
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Single-select menu
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {id: '2', name: 'Action 2'},
                    {id: '3', name: 'Action 3'}
                ]}
                selectionMode="multiple">
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Multi-select menu
                </Button>
            </Menu>
        </div>
    )
};

export const SubMenu: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Submenus can be created by using isSubmenuTrigger and submenuBehavior properties for items.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            <Menu
                {...args}
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        children: [
                            {id: 'sub1', name: 'Sub-action 1'},
                            {id: 'sub2', name: 'Sub-action 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Separate submenu
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        submenuBehavior: SubmenuBehavior.InPlace,
                        children: [
                            {id: 'sub1', name: 'Sub-action 1'},
                            {id: 'sub2', name: 'Sub-action 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}
                minWidth={140}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    In-place submenu
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        selectionMode: SelectionMode.Single,
                        children: [
                            {id: 'sub1', name: 'Sub-option 1'},
                            {id: 'sub2', name: 'Sub-option 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Separate submenu + single-select
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        selectionMode: SelectionMode.Single,
                        submenuBehavior: SubmenuBehavior.InPlace,
                        children: [
                            {id: 'sub1', name: 'Sub-option 1'},
                            {id: 'sub2', name: 'Sub-option 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}
                minWidth={140}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    In-place submenu + single-select
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        selectionMode: SelectionMode.Multiple,
                        children: [
                            {id: 'sub1', name: 'Sub-option 1'},
                            {id: 'sub2', name: 'Sub-option 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    Separate submenu + multi-select
                </Button>
            </Menu>
            <Menu
                items={[
                    {id: '1', name: 'Action 1'},
                    {
                        id: '2',
                        name: 'Submenu',
                        isSubmenuTrigger: true,
                        selectionMode: SelectionMode.Multiple,
                        submenuBehavior: SubmenuBehavior.InPlace,
                        children: [
                            {id: 'sub1', name: 'Sub-option 1'},
                            {id: 'sub2', name: 'Sub-option 2'}
                        ]
                    },
                    {id: '3', name: 'Action 2'}
                ]}
                minWidth={140}>
                <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                    In-place submenu + multi-select
                </Button>
            </Menu>
        </div>
    )
};

export const ReadOnlyItemWithTooltip: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Read-only item with tooltip
            </Button>
        ),
        items: [
            {id: '1', name: 'Edit', props: {leftIconName: iconNames.Edit}},
            {id: '2', name: 'Copy link', props: {leftIconName: iconNames.Link}},
            {
                id: '3',
                name: 'Delete',
                props: {
                    leftIconName: iconNames.Delete,
                    isDestructive: true,
                    isReadOnly: true,
                    tooltip: {content: 'This is the reason why you cannot delete this.'}
                }
            }
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Display item as read-only by setting isReadOnly property. You can also set tooltip to tell why it is read-only.'
            }
        }
    }
};

export const InteractionTest: Story = {
    args: {
        children: (
            <Button size={Size.lg} style={ButtonStyle.Fill} variant={ButtonVariant.Neutral}>
                Menu
            </Button>
        ),
        items: [
            {
                id: '1',
                name: 'Action 1'
            },
            {
                id: '2',
                name: 'Action 2',
                isSubmenuTrigger: true,
                selectionMode: SelectionMode.Single,
                children: [
                    {id: 'sub1', name: 'Sub 1'},
                    {id: 'sub2', name: 'Sub 2'}
                ]
            },
            {
                id: '3',
                name: 'Action 3',
                isSubmenuTrigger: true,
                submenuBehavior: SubmenuBehavior.InPlace,
                selectionMode: SelectionMode.Single,
                children: [
                    {id: 'sub1', name: 'Sub 1'},
                    {id: 'sub2', name: 'Sub 2'}
                ]
            }
        ],
        onAction: fn(),
        onClose: fn(),
        onSelectionChange: fn()
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Interaction test for menu.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const btn = canvas.getByRole('button');
        let popover, items;

        function findAndSetItems(popoverIdx = 0) {
            popover = canvasElement.parentNode?.querySelectorAll('.menu-popover');
            items = popover[popoverIdx]?.querySelectorAll('.menu-item') ?? [];
        }

        // Root level action
        await userEvent.click(btn);
        findAndSetItems();
        await userEvent.click(items[0]);
        await waitFor(() => expect(args.onAction).toHaveBeenCalledWith('1'));

        // Separate submenu select
        await userEvent.click(btn);
        findAndSetItems();
        await userEvent.click(items[1]);
        findAndSetItems(1);
        await userEvent.click(items[0]);
        await waitFor(() => expect(args.onSelectionChange).toHaveBeenCalled());

        // In-place submenu select
        await userEvent.click(btn);
        findAndSetItems();
        await userEvent.click(items[2]);
        findAndSetItems();
        await userEvent.click(items[1]);
        await waitFor(() => expect(args.onSelectionChange).toHaveBeenCalled());
    }
};
