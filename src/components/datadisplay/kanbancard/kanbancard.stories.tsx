import {Meta, StoryObj} from '@storybook/react-webpack5';
import {KANBAN_CARD_HOVER_BUTTON_CSS_CLASS, KanbanCard} from './kanbancard.js';
import {Button, ButtonStyle, ButtonVariant, IconButton, Menu, MenuItem} from '../../action/index.js';
import {Avatar, Link} from '../../navigation/index.js';
import {Size} from '../../../constants/index.js';
import {DueDateButton, DueDateButtonVariant} from '../../action/duedatebutton/duedatebutton.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {KanbanCardFooterAlertLevel} from './kanbancardfooter.js';
import {List, ListItem, ListItemStyle} from '../list/index.js';
import {lightTokens} from '@visma-severa/severa-design-tokens';
import {Label} from '../../text/index.js';
import {Divider} from '../divider/index.js';

const meta = {
    args: {},
    component: KanbanCard,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/KanbanCard'
} satisfies Meta<typeof KanbanCard>;

export default meta;
type Story = StoryObj<typeof KanbanCard>;

const menuItems: MenuItem[] = [
    {id: 'edit', name: 'Edit'},
    {id: 'delete', name: 'Delete', props: {isDestructive: true}}
];

export const Playground: Story = {
    args: {
        bodyContent: (
            <>
                <Link size={Size.md}>Customer name</Link>
                <Link size={Size.md}>Project name</Link>
            </>
        ),
        columnId: 'col1',
        data: {
            id: 'card1'
        },
        detailsContent: (
            <>
                <Avatar alt="John Smith" isInteractive={true} size={Size.sm} text="JS" />
                <DueDateButton date="2025-04-18" tooltipContent="Due later" variant={DueDateButtonVariant.Neutral} />
                <TooltipTrigger>
                    <IconButton
                        aria-label="Description"
                        iconName={iconNames.Notepad}
                        size={Size.sm}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}
                    />
                    <Tooltip type={TooltipType.Plain}>Has a description</Tooltip>
                </TooltipTrigger>
            </>
        ),
        footerProps: {
            alertLevel: KanbanCardFooterAlertLevel.Warning,
            children: (
                <Button
                    size={Size.sm}
                    startIconName={iconNames.Add}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Accent}>
                    Create activity
                </Button>
            ),
            title: '0 planned activities'
        },
        menuProps: {
            items: menuItems
        },
        subTitle: 'Subtitle',
        title: 'Title'
    },
    decorators: [
        (Story) => (
            <div style={{width: 240}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'KanbanCard component, be my guest and play with it!'
            }
        }
    }
};

export const HeaderExamples: Story = {
    args: {
        columnId: 'col1',
        data: {
            id: 'card1'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Header menu can be adjusted with menuProps. Extra actions can be displayed using headerContent prop.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '240px 240px', gap: '2rem'}}>
            <KanbanCard {...args} title="Card without menu" />
            <KanbanCard
                {...args}
                menuProps={{
                    isDisabled: true,
                    items: menuItems
                }}
                title="Card with disabled menu"
            />
            <KanbanCard
                {...args}
                headerContent={
                    <IconButton
                        aria-label="Mark as complete"
                        iconName={iconNames.Check}
                        size={Size.sm}
                        style={ButtonStyle.Outline}
                        variant={ButtonVariant.Neutral}
                    />
                }
                menuProps={{
                    items: menuItems
                }}
                title="Card with extra action"
            />
            <KanbanCard
                {...args}
                headerContent={
                    <Button
                        className={KANBAN_CARD_HOVER_BUTTON_CSS_CLASS}
                        size={Size.sm}
                        startIconName={iconNames.DockToLeft}
                        style={ButtonStyle.Outline}
                        variant={ButtonVariant.Neutral}>
                        Open
                    </Button>
                }
                menuProps={{
                    items: menuItems
                }}
                title="Card with hover action"
            />
        </div>
    )
};

export const BodyExamples: Story = {
    args: {
        columnId: 'col1',
        data: {
            id: 'card1'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Render content for card using bodyContent and detailsContent props.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '240px 240px', gap: '2rem'}}>
            <KanbanCard {...args} title="Card with very long title that will wrap into multiple lines" />
            <KanbanCard {...args} subTitle="15 000,00 €" title="Card with subtitle" />
            <KanbanCard
                {...args}
                bodyContent={
                    <>
                        <Link size={Size.md}>Long customer name will look like this</Link>
                        <Link size={Size.md}>Long project name will look like this</Link>
                    </>
                }
                title="Card with truncated links"
            />
            <KanbanCard
                {...args}
                detailsContent={
                    <>
                        <Avatar alt="John Smith" isInteractive={true} size={Size.sm} text="JS" />
                        <DueDateButton
                            date="2025-04-18"
                            tooltipContent="Due soon"
                            variant={DueDateButtonVariant.Warning}
                        />
                        <TooltipTrigger>
                            <IconButton
                                aria-label="Description"
                                iconName={iconNames.Notepad}
                                size={Size.sm}
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}
                            />
                            <Tooltip type={TooltipType.Plain}>Has a description</Tooltip>
                        </TooltipTrigger>
                    </>
                }
                title="Card with details"
            />
        </div>
    )
};

const enum ExampleActivityType {
    CalendarEntry,
    SalesEvent,
    Task
}

interface ExampleActivity {
    id: string;
    title: string;
    eventDate: string;
    duration: number;
    isOverdue?: boolean;
    type: ExampleActivityType;
    customerName?: string;
    projectName?: string;
}

const exampleActivityIconName = {
    [ExampleActivityType.CalendarEntry]: iconNames.CalendarToday,
    [ExampleActivityType.SalesEvent]: iconNames.Call,
    [ExampleActivityType.Task]: iconNames.FormatListBullets
};

function ExampleList({data}: {data: ExampleActivity[]}) {
    return (
        <List data={data} idAccessor="id" style={ListItemStyle.Plain}>
            {(item) => (
                <ListItem>
                    <div
                        style={{
                            alignItems: 'flex-start',
                            display: 'flex',
                            gap: 'var(--space-xs)',
                            padding: 'var(--space-xs) 0'
                        }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flex: '1 1 auto',
                                gap: 'var(--space-xxs)'
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-xxs)',
                                    flex: 1
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 24,
                                        height: 24,
                                        background: 'var(--neutral-button-background-primary-enabled)',
                                        borderRadius: 'var(--radius-md)'
                                    }}>
                                    <Icon
                                        color={lightTokens.color.neutralIconStrong.value}
                                        name={exampleActivityIconName[item.type]}
                                        size={IconSize.SM}
                                    />
                                </div>
                                <Label size={Size.md}>
                                    <strong>{item.title}</strong>
                                </Label>
                                <div style={{display: 'flex', gap: 'var(--space-xs)', alignItems: 'center'}}>
                                    <Avatar alt="John Smith" isInteractive={true} size={Size.sm} text="JS" />
                                    <DueDateButton
                                        date={item.eventDate}
                                        tooltipContent={item.isOverdue ? 'Overdue' : 'Due later'}
                                        variant={
                                            item.isOverdue ? DueDateButtonVariant.Danger : DueDateButtonVariant.Neutral
                                        }
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: 'var(--space-xxs) var(--space-xs)',
                                            gap: 'var(--space-xxs)',
                                            color: 'var(--neutral-button-text-primary-enabled)'
                                        }}>
                                        <Icon name={iconNames.Schedule} size={IconSize.SM} />
                                        <Label size={Size.sm}>
                                            <strong>{`${item.duration} h`}</strong>
                                        </Label>
                                    </div>
                                </div>
                                {item.customerName && <Link size={Size.md}>{item.customerName}</Link>}
                                {item.projectName && <Link size={Size.md}>{item.projectName}</Link>}
                            </div>
                        </div>
                        <Menu items={menuItems} placement="bottom right">
                            <IconButton
                                aria-label="Actions"
                                iconName={iconNames.MoreVert}
                                size={Size.sm}
                                style={ButtonStyle.Outline}
                                variant={ButtonVariant.Neutral}
                            />
                        </Menu>
                    </div>
                    {item !== data[data.length - 1] && (
                        <Divider size={Size.sm} style={{position: 'absolute', bottom: 0}} />
                    )}
                </ListItem>
            )}
        </List>
    );
}

export const FooterExamples: Story = {
    args: {
        columnId: 'col1',
        data: {
            id: 'card1'
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Footer can be adjusted with footerProps.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '240px 240px', gap: '2rem'}}>
            <KanbanCard
                {...args}
                footerProps={{
                    children: (
                        <ExampleList
                            data={[
                                {
                                    id: '1',
                                    title: 'Content creation',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    customerName: 'Acme Industries',
                                    projectName: 'Marketing campaign',
                                    type: ExampleActivityType.Task
                                },
                                {
                                    id: '2',
                                    title: 'Call customer',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    customerName: 'Acme Industries',
                                    type: ExampleActivityType.SalesEvent
                                },
                                {
                                    id: '3',
                                    title: 'Sprint planning',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    type: ExampleActivityType.CalendarEntry
                                }
                            ]}
                        />
                    ),
                    title: '3 planned activities'
                }}
                title="Card with footer"
            />
            <KanbanCard
                {...args}
                footerProps={{
                    alertLevel: KanbanCardFooterAlertLevel.Warning,
                    children: (
                        <Button
                            size={Size.sm}
                            startIconName={iconNames.Add}
                            style={ButtonStyle.Fill}
                            variant={ButtonVariant.Accent}>
                            Create activity
                        </Button>
                    ),
                    title: '0 planned activities'
                }}
                title="Card with warning footer"
            />
            <KanbanCard
                {...args}
                footerProps={{
                    alertLevel: KanbanCardFooterAlertLevel.Success,
                    children: (
                        <ExampleList
                            data={[
                                {
                                    id: '1',
                                    title: 'Content creation',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    customerName: 'Acme Industries',
                                    projectName: 'Marketing campaign',
                                    type: ExampleActivityType.Task
                                },
                                {
                                    id: '2',
                                    title: 'Call customer',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    customerName: 'Acme Industries',
                                    type: ExampleActivityType.SalesEvent
                                },
                                {
                                    id: '3',
                                    title: 'Sprint planning',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    type: ExampleActivityType.CalendarEntry
                                }
                            ]}
                        />
                    ),
                    title: '3 planned activities'
                }}
                title="Card with success footer"
            />
            <KanbanCard
                {...args}
                footerProps={{
                    alertLevel: KanbanCardFooterAlertLevel.Danger,
                    children: (
                        <ExampleList
                            data={[
                                {
                                    id: '1',
                                    title: 'Content creation',
                                    eventDate: '2025-04-18',
                                    duration: 1,
                                    customerName: 'Acme Industries',
                                    projectName: 'Marketing campaign',
                                    type: ExampleActivityType.Task,
                                    isOverdue: true
                                }
                            ]}
                        />
                    ),
                    title: '1 overdue activities'
                }}
                title="Card with danger footer"
            />
        </div>
    )
};
