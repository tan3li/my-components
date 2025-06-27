import './sidenav.stories.scss';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {SideNav, SideNavMode} from './sidenav.js';
import {iconNames} from '../../media/icon/icons.js';
import {useMemo, useState} from 'react';
import {SideNavItem} from './sidenavitem.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {Heading} from '../../text/heading/heading.js';
import {Size} from '../../../constants/size.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {tan3liLogo, tan3liLogoVariant} from '../../media/tan3lilogo/tan3lilogo.js';
import {Key} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {HTMLElementType, Position} from '../../../constants/index.js';
import {TriggerElement} from '../../action/index.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {Icon, IconSize} from '../../media/index.js';

const meta = {
    component: SideNav,
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        layout: 'fullscreen'
    },
    title: 'Components/Navigation/SideNav'
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof SideNav>;

const sideNavItems: SideNavItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: iconNames.House,
        isActive: true
    },
    {
        id: 'customer',
        label: 'Customer',
        icon: iconNames.CorporateFare
    },
    {
        id: 'sales',
        label: 'Sales',
        icon: iconNames.Dollar
    },
    {
        id: 'projects',
        label: 'Projects',
        icon: iconNames.ViewTimeline
    },
    {
        id: 'timeExpense',
        label: 'Time & Expense',
        icon: iconNames.Schedule
    },
    {
        id: 'schedule',
        label: 'Schedule',
        icon: iconNames.Calendar
    },
    {
        id: 'resourcing',
        label: 'Resourcing',
        icon: iconNames.Group
    },
    {
        id: 'invoicing',
        label: 'Invoicing',
        icon: iconNames.RequestPage,
        items: [
            {
                id: 'invoices',
                label: 'Invoices'
            },
            {
                id: 'createInvoices',
                label: 'Create invoices'
            },
            {
                id: 'scheduledInvoicing',
                label: 'Scheduled invoicing'
            }
        ]
    },
    {
        id: 'report',
        label: 'Report',
        icon: iconNames.BarChartAlt,
        items: [
            {
                id: 'reportCreation',
                label: 'Report creation'
            },
            {
                id: 'reportGallery',
                label: 'Report gallery'
            }
        ]
    }
];

function setActiveItem(id: Key | undefined, items: SideNavItem[], handlePress: (id: Key) => void): SideNavItem[] {
    for (const item of items) {
        item.isActive = item.id === id;
        item.onPress = () => handlePress(item.id);

        if (item.items) {
            setActiveItem(id, item.items, handlePress);
        }
    }

    return items;
}

export const Default: Story = {
    args: {
        'aria-label': 'Main navigation',
        mode: SideNavMode.Default
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage of Default SideNav with some nav items.'
            }
        }
    },
    render(args) {
        const [isExpanded, setIsExpanded] = useState<boolean>(true);
        const [activeId, setActiveId] = useState<Key>(sideNavItems[0].id);
        const handlePress = (id: Key) => {
            setActiveId(id);
        };

        return (
            <SideNav
                {...args}
                header={
                    <tan3liLogo
                        inverted={args.mode === SideNavMode.Inverted}
                        variant={isExpanded ? tan3liLogoVariant.Full : tan3liLogoVariant.Symbol}
                    />
                }
                items={setActiveItem(activeId, sideNavItems, handlePress)}
                toggleCallback={setIsExpanded}
            />
        );
    }
};

export const Inverted: Story = {
    args: {
        'aria-label': 'Main navigation',
        mode: SideNavMode.Inverted
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage of Inverted SideNav with some nav items.'
            }
        }
    },
    render(args) {
        const [isExpanded, setIsExpanded] = useState<boolean>(true);
        const [activeId, setActiveId] = useState<Key>(sideNavItems[0].id);
        const handlePress = (id: Key) => {
            setActiveId(id);
        };

        return (
            <SideNav
                {...args}
                header={
                    <tan3liLogo
                        inverted={args.mode === SideNavMode.Inverted}
                        variant={isExpanded ? tan3liLogoVariant.Full : tan3liLogoVariant.Symbol}
                    />
                }
                items={setActiveItem(activeId, sideNavItems, handlePress)}
                mode={SideNavMode.Inverted}
                toggleCallback={setIsExpanded}
            />
        );
    }
};

const settingsItems: SideNavItem[] = [
    {
        id: 'organization',
        label: 'Organization',
        items: [
            {
                id: 'companySettings',
                isHeading: true,
                label: 'Company settings',
                showLine: true,
                useDecorLine: true,
                items: [
                    {
                        id: 'companyDetails',
                        label: 'Company details',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'bankAccounts',
                        label: 'Bank accounts',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'electronicInvoicing',
                        label: 'Electronic invoicing',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'formattingAndLanguage',
                        label: 'Formatting & language',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'otherSettings',
                        label: 'Other settings',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'logos',
                        label: 'Logos',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'footer',
                        label: 'Footer',
                        showLine: true,
                        useDecorLine: true
                    }
                ]
            },
            {
                id: 'financialDetails',
                isHeading: true,
                label: 'Financial details',
                showLine: true,
                useDecorLine: true,
                items: [
                    {
                        id: 'costCenters',
                        label: 'Cost centers',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'businessUnit',
                        label: 'Business unit',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'taxRate',
                        label: 'Tax rate',
                        showLine: true,
                        useDecorLine: true
                    }
                ]
            }
        ]
    },
    {
        id: 'systemSettings',
        label: 'System settings',
        items: [
            {
                id: 'searchSettings',
                label: 'Search settings',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'projectNameDisplay',
                label: 'Project name display',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'columnSortingDisplay',
                label: 'Column sorting display',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'quickLinks',
                label: 'Quick links',
                showLine: true,
                useDecorLine: true
            }
        ]
    },
    {
        id: 'workTimeTravelExpensesProductRegistries',
        label: 'Work time, travel expenses & product registries',
        items: [
            {
                id: 'registrySettings',
                label: 'Registry settings',
                showLine: true,
                useDecorLine: true,
                items: [
                    {
                        id: 'identifierUsage',
                        label: 'Identifier usage',
                        showLine: true,
                        useDecorLine: true
                    },
                    {
                        id: 'projectFeeAllocation',
                        label: 'Project fee allocation',
                        showLine: true,
                        useDecorLine: true
                    }
                ]
            },
            {
                id: 'workType',
                label: 'Work type',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'overtimeTypes',
                label: 'Overtime types',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'timeEntryTypes',
                label: 'Time entry types',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'absenceTypes',
                label: 'Absence types',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'travelExpenseTypes',
                label: 'Travel expense types',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'productCategories',
                label: 'Product categories',
                showLine: true,
                useDecorLine: true
            },
            {
                id: 'products',
                label: 'Products',
                showLine: true,
                useDecorLine: true
            }
        ]
    },
    {
        id: 'timeAndExpenses',
        label: 'Time & expenses'
    },
    {
        id: 'users',
        label: 'Users'
    },
    {
        id: 'pricing',
        label: 'Pricing'
    },
    {
        id: 'customerAndContacts',
        label: 'Customer & contacts'
    },
    {
        id: 'salesAndProposal',
        label: 'Sales & proposal'
    },
    {
        id: 'projectManagement',
        label: 'Project management'
    }
];

export const WithMenudecorline: Story = {
    args: {
        'aria-label': 'Settings navigation'
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage of SideNav with nested nav items which have MenuDecorLine.'
            }
        }
    },
    render(args) {
        const [activeId, setActiveId] = useState<Key>(settingsItems[0].items![0].items![0].id);
        const handlePress = (id: Key) => {
            setActiveId(id);
        };

        return <SideNav {...args} canShrink={false} items={setActiveItem(activeId, settingsItems, handlePress)} />;
    }
};

export const ComplexExample: Story = {
    args: {
        'aria-label': 'Main navigation',
        mode: SideNavMode.Inverted
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage of multiple SideNavs in page'
            }
        }
    },
    render(args) {
        const [isExpanded, setIsExpanded] = useState<boolean>(true);
        const [activeSideNavId, setActiveSideNavId] = useState<Key>(sideNavItems[0].id);
        const handleSideNavPress = (id: Key) => {
            setActiveSideNavId(id);
        };
        const [activeSettingsNavId, setActiveSettingsNavId] = useState<Key>(settingsItems[3].id);
        const handleSettingsNavPress = (id: Key) => {
            setActiveSettingsNavId(id);
        };

        return (
            <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                <SideNav
                    {...args}
                    header={
                        <tan3liLogo
                            inverted={args.mode === SideNavMode.Inverted}
                            variant={isExpanded ? tan3liLogoVariant.Full : tan3liLogoVariant.Symbol}
                        />
                    }
                    isExpanded={isExpanded}
                    items={setActiveItem(activeSideNavId, sideNavItems, handleSideNavPress)}
                    toggleCallback={setIsExpanded}
                />
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                    <SideNav
                        {...args}
                        aria-label="Settings navigation"
                        canShrink={false}
                        items={setActiveItem(activeSettingsNavId, settingsItems, handleSettingsNavPress)}
                        mode={SideNavMode.Default}
                    />
                    <div style={{display: 'flex', flexDirection: 'column', margin: '1rem', position: 'relative'}}>
                        <Heading level={1} size={Size.lg} style={{marginBottom: '1rem'}}>
                            Settings
                        </Heading>
                        <BodyText size={Size.md}>{`Active side navigation item: ${activeSideNavId}`}</BodyText>
                        <BodyText size={Size.md}>{`Active settings navigation item: ${activeSettingsNavId}`}</BodyText>
                    </div>
                </div>
            </div>
        );
    }
};

export const Badge: Story = {
    args: {
        'aria-label': 'Main navigation',
        mode: SideNavMode.Inverted
    },
    parameters: {
        docs: {
            description: {
                story: 'With badge property you can display badge element within the item.'
            }
        }
    },
    render(args) {
        const items: SideNavItem[] = useMemo(
            () =>
                sideNavItems.map((item: SideNavItem) => {
                    if (item.id === 'invoicing' && item.items) {
                        return {
                            ...item,
                            items: [
                                {
                                    ...item.items[0],
                                    badge: {
                                        ariaLabel: 'New content available',
                                        iconName: iconNames.StatusLightFilled,
                                        isVisible: true
                                    }
                                },
                                ...item.items.slice(1)
                            ]
                        };
                    }
                    if (item.id === 'timeExpense') {
                        return {
                            ...item,
                            badge: {
                                ariaLabel: 'New content available',
                                iconName: iconNames.StatusLightFilled,
                                isVisible: true
                            }
                        };
                    }

                    return item;
                }),
            []
        );
        const [isExpanded, setIsExpanded] = useState<boolean>(true);
        const [activeId, setActiveId] = useState<Key>(items[0].id);
        const handlePress = (id: Key) => {
            setActiveId(id);
        };

        return (
            <SideNav
                {...args}
                header={
                    <tan3liLogo
                        inverted={args.mode === SideNavMode.Inverted}
                        variant={isExpanded ? tan3liLogoVariant.Full : tan3liLogoVariant.Symbol}
                    />
                }
                items={setActiveItem(activeId, items, handlePress)}
                toggleCallback={setIsExpanded}
            />
        );
    }
};

export const InteractiveHeaderContentExample: Story = {
    args: {
        'aria-label': 'Main navigation',
        mode: SideNavMode.Inverted
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of handling interactive content in header.'
            }
        }
    },
    render(args) {
        const [isExpanded, setIsExpanded] = useState<boolean>(true);
        const [activeId, setActiveId] = useState<Key>(sideNavItems[0].id);
        const handlePress = (id: Key) => {
            setActiveId(id);
        };

        return (
            <SideNav
                {...args}
                header={
                    <div
                        className={classNames('sidenav-stories__header', {
                            'sidenav-stories__header--expanded': isExpanded
                        })}>
                        <TriggerElement elementType={HTMLElementType.A} onPress={() => setActiveId(sideNavItems[0].id)}>
                            <tan3liLogo
                                inverted={args.mode === SideNavMode.Inverted}
                                variant={isExpanded ? tan3liLogoVariant.Full : tan3liLogoVariant.Symbol}
                            />
                        </TriggerElement>
                        <TooltipTrigger>
                            <TriggerElement
                                aria-label="System status: Operational"
                                className={classNames('sidenav-stories__system-status-btn', {
                                    'sidenav-stories__system-status-btn--expanded': isExpanded
                                })}
                                elementType={HTMLElementType.A}
                                href="https://status.visma.com"
                                target="_blank">
                                <Icon
                                    className="sidenav-stories__system-status-icon"
                                    name={iconNames.CheckCircleFilled}
                                    size={IconSize.XS}
                                />
                            </TriggerElement>
                            <Tooltip
                                arrowBoundaryOffset={8}
                                offset={-6}
                                position={Position.Right}
                                type={TooltipType.Plain}>
                                Operational
                            </Tooltip>
                        </TooltipTrigger>
                    </div>
                }
                items={setActiveItem(activeId, sideNavItems, handlePress)}
                toggleCallback={setIsExpanded}
            />
        );
    }
};

export const ControlledExpandedKeys: Story = {
    args: {
        'aria-label': 'Settings navigation'
    },
    parameters: {
        docs: {
            description: {
                story: 'Expanded items can be controlled from the outside using expandedKeys and onExpandedKeysChange props.'
            }
        }
    },
    render(args) {
        const [activeId, setActiveId] = useState<Key>('identifierUsage');
        const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(
            new Set(['workTimeTravelExpensesProductRegistries', 'registrySettings'])
        );

        return (
            <SideNav
                {...args}
                canShrink={false}
                expandedKeys={expandedKeys}
                items={setActiveItem(activeId, settingsItems, (id: Key) => setActiveId(id))}
                onExpandedKeysChange={setExpandedKeys}
            />
        );
    }
};

export const ToggleCallback: Story = {
    args: {
        canShrink: true,
        items: sideNavItems,
        toggleCallback: fn()
    },
    parameters: {
        docs: {
            description: {
                story: 'Test toggleCallback.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);

        expect(canvas.getAllByRole('button')[0]).toHaveAttribute('aria-expanded', 'true');
        expect(canvas.getAllByRole('button').length).toBe(3); // Toggle button + 2 NavItems with sub levels

        await userEvent.click(canvas.getAllByRole('button')[0]);

        await waitFor(() => {
            expect(args.toggleCallback).toHaveBeenCalledWith(false);
            const buttons = canvas.getAllByRole('button');

            expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
            expect(buttons.length).toBe(10); // Toggle button + 9 IconButtons
        });
    }
};
