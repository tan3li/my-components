import './list.stories.scss';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {List} from './list.js';
import {ListItem, ListItemStyle} from './listitem.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {Heading, Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {coreTokens, lightTokens} from '@tan3li/d-tokens';
import {ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {LayoutGrid, LayoutGridColumnSpacing, LayoutGridItem} from '../../template/index.js';
import {ReactNode} from 'react';
import {day} from '../../../utils/day.js';
import {Badge, BadgeStyle, BadgeVariant} from '../../feedback/index.js';

const meta = {
    component: List,
    decorators: [
        (Story) => (
            <div style={{margin: 'auto', maxWidth: '700px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'padded',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/List'
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

interface DataItem {
    guid: string;
    title: string;
    description: string;
    type: string;
    notes: string;
    startDateTime: string;
    endDateTime: string;
    hoursLeft: number;
}

const data: DataItem[] = [
    {
        guid: '1',
        title: 'Item 1',
        description: 'Item 1 description',
        type: 'Entry',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        startDateTime: '2024-10-14T08:00:00+03:00',
        endDateTime: '2024-10-14T10:00:00+03:00',
        hoursLeft: 50
    },
    {
        guid: '2',
        title: 'Item 2',
        description: 'Item 2 description',
        type: 'Entry',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        startDateTime: '2024-10-14T08:00:00+03:00',
        endDateTime: '2024-10-14T10:00:00+03:00',
        hoursLeft: 50
    },
    {
        guid: '3',
        title: 'Item 3',
        description: 'Item 3 description',
        type: 'Entry',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        startDateTime: '2024-10-14T08:00:00+03:00',
        endDateTime: '2024-10-14T10:00:00+03:00',
        hoursLeft: 50
    }
];

function ExampleContent1({item, style}: {item: DataItem; style?: ListItemStyle}) {
    return (
        <div
            style={{
                display: 'flex',
                gap: 'var(--space-xxs)',
                padding: style === ListItemStyle.Plain ? 'var(--space-xxs) 0' : 0
            }}>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flex: '1 1 auto',
                    gap: 'var(--space-xxs)'
                }}>
                <Icon color={lightTokens.color.neutralIconWeak.value} name={iconNames.Schedule} size={IconSize.LG} />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Label size={Size.md}>
                        <strong>{item.title}</strong>
                    </Label>
                    <Label size={Size.sm} style={{color: 'var(--neutral-text-weak)'}}>
                        {item.description}
                    </Label>
                </div>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    gap: 'var(--space-xxs)'
                }}>
                <IconButton
                    aria-label="Delete"
                    iconName={iconNames.Delete}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Danger}
                />
                <IconButton
                    aria-label="Edit"
                    iconName={iconNames.Edit}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </div>
        </div>
    );
}

function ExampleContent2({item}: {item: DataItem}) {
    return (
        <LayoutGrid columnSpacing={LayoutGridColumnSpacing.Compact}>
            <LayoutGridItem size={{xs: 4, lg: 3}}>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        gap: 'var(--space-xxs)'
                    }}>
                    <Icon
                        color={lightTokens.color.neutralIconWeak.value}
                        name={iconNames.Schedule}
                        size={IconSize.LG}
                    />
                    <div className="list-stories__flex-col">
                        <Label size={Size.md}>
                            <strong>{item.title}</strong>
                        </Label>
                        <Label size={Size.sm} style={{color: 'var(--neutral-text-weak)'}}>
                            {item.type}
                        </Label>
                    </div>
                </div>
            </LayoutGridItem>
            <LayoutGridItem size={{xs: 4, lg: 3}}>
                <div className="list-stories__flex-col">
                    <Label size={Size.md}>
                        <strong>
                            {`${day.duration(day(item.endDateTime).diff(day(item.startDateTime))).format('HH:mm')} h`}
                        </strong>
                    </Label>
                    <Label size={Size.sm} style={{color: 'var(--neutral-text-weak)'}}>
                        {`${day(item.endDateTime).format('HH:mm')} - ${day(item.startDateTime).format('HH:mm')}`}
                    </Label>
                </div>
            </LayoutGridItem>
            <LayoutGridItem size={{xs: 4, lg: 3}}>
                <div className="list-stories__flex-col">
                    <Label size={Size.sm} style={{color: 'var(--neutral-text-weak)'}}>
                        {item.notes}
                    </Label>
                </div>
            </LayoutGridItem>
            <LayoutGridItem size={{xs: 4, lg: 3}}>
                <div className="list-stories__flex-col list-stories__flex-col--lg-right">
                    <Label size={Size.md}>
                        <strong>{`${item.hoursLeft} h`}</strong>
                    </Label>
                    <Label size={Size.sm} style={{color: 'var(--neutral-text-weak)'}}>
                        {'left on phase'}
                    </Label>
                </div>
            </LayoutGridItem>
        </LayoutGrid>
    );
}

function ExampleFooter() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 'var(--space-xxs)'
            }}>
            <Badge style={BadgeStyle.Fill} variant={BadgeVariant.Success}>
                Approved
            </Badge>
            <Badge style={BadgeStyle.Fill} variant={BadgeVariant.Neutral}>
                Invoiced
            </Badge>
        </div>
    );
}

function Box({children}: {children: ReactNode}) {
    return <div className="list-stories__box">{children}</div>;
}

export const Playground: Story = {
    args: {
        spacing: coreTokens.dimension.spaceSm.value,
        style: ListItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'List component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <List {...args} data={data} idAccessor="guid">
            {(item) => <ExampleContent1 item={item} style={args.style} />}
        </List>
    )
};

export const StaticList: Story = {
    args: {
        spacing: coreTokens.dimension.spaceSm.value,
        style: ListItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Static list can be used for simple use cases.'
            }
        }
    },
    render: (args) => (
        <List {...args}>
            <ListItem>
                <ExampleContent2 item={data[0]} />
            </ListItem>
            <ListItem>
                <ExampleContent2 item={data[1]} />
            </ListItem>
            <ListItem>
                <ExampleContent2 item={data[2]} />
            </ListItem>
        </List>
    )
};

export const Style: Story = {
    args: {
        idAccessor: 'guid',
        style: ListItemStyle.Plain
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        docs: {
            description: {
                story: 'List items have 3 different display styles. Spacing between items can be adjusted with spacing prop.'
            }
        }
    },
    render: (args) => (
        <>
            <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                Card (default spacing: space-sm)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Card}>
                {(item) => (
                    <ListItem className="my-list-item">
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                Plain (default spacing: 0)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Plain}>
                {(item) => (
                    <ListItem className="my-list-item">
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                Dash (default spacing: space-sm)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Dash}>
                {(item) => (
                    <ListItem className="my-list-item">
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>
        </>
    )
};

export const Responsiveness: Story = {
    args: {
        spacing: coreTokens.dimension.spaceSm.value,
        style: ListItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'LayoutGrid or flexbox styling can be used to make item content responsive.'
            }
        }
    },
    render: (args) => (
        <div>
            <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                3 children
            </Heading>
            <List {...args}>
                <ListItem>
                    <LayoutGrid
                        columnSpacing={LayoutGridColumnSpacing.Compact}
                        rowSpacing={coreTokens.dimension.spaceXs.value}>
                        <LayoutGridItem size={4}>
                            <Box>1</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={4}>
                            <Box>2</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, sm: 8, lg: 4}}>
                            <Box>3</Box>
                        </LayoutGridItem>
                    </LayoutGrid>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                4 children
            </Heading>
            <List {...args}>
                <ListItem>
                    <LayoutGrid
                        columnSpacing={LayoutGridColumnSpacing.Compact}
                        rowSpacing={coreTokens.dimension.spaceXs.value}>
                        <LayoutGridItem size={{xs: 4, lg: 3}}>
                            <Box>1</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 3}}>
                            <Box>2</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 3}}>
                            <Box>3</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 3}}>
                            <Box>4</Box>
                        </LayoutGridItem>
                    </LayoutGrid>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                5 children
            </Heading>
            <List {...args}>
                <ListItem>
                    <div className="list-stories__flex-boxes">
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                        <Box>4</Box>
                        <Box>5</Box>
                    </div>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                6 children
            </Heading>
            <List {...args}>
                <ListItem>
                    <LayoutGrid
                        columnSpacing={LayoutGridColumnSpacing.Compact}
                        rowSpacing={coreTokens.dimension.spaceXs.value}>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>1</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>2</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>3</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>4</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>5</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 2}}>
                            <Box>6</Box>
                        </LayoutGridItem>
                    </LayoutGrid>
                </ListItem>
            </List>
        </div>
    )
};

export const Footer: Story = {
    args: {
        idAccessor: 'guid',
        showItemFooterSeparator: false
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        docs: {
            description: {
                story: 'Display footer for list items by using the footer prop.'
            }
        }
    },
    render: (args) => (
        <>
            <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                Card (default spacing: space-sm)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Card}>
                {(item) => (
                    <ListItem className="my-list-item" footer={<ExampleFooter />}>
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                Plain (default spacing: 0)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Plain}>
                {(item) => (
                    <ListItem className="my-list-item" footer={<ExampleFooter />}>
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                Dash (default spacing: space-sm)
            </Heading>
            <List {...args} data={data} style={ListItemStyle.Dash}>
                {(item) => (
                    <ListItem className="my-list-item" footer={<ExampleFooter />}>
                        <ExampleContent1 item={item} style={args.style} />
                    </ListItem>
                )}
            </List>
        </>
    )
};

export const FooterResponsiveness: Story = {
    args: {
        showItemFooterSeparator: true,
        spacing: coreTokens.dimension.spaceMd.value,
        style: ListItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'LayoutGrid or flexbox styling can be used to make footer content responsive.'
            }
        }
    },
    render: (args) => (
        <div>
            <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                3 children
            </Heading>
            <List {...args}>
                <ListItem
                    footer={
                        <LayoutGrid
                            columnSpacing={LayoutGridColumnSpacing.Compact}
                            rowSpacing={coreTokens.dimension.spaceXs.value}>
                            <LayoutGridItem size={4}>
                                <Box>F1</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={4}>
                                <Box>F2</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, sm: 8, lg: 4}}>
                                <Box>F3</Box>
                            </LayoutGridItem>
                        </LayoutGrid>
                    }>
                    <Box>B1</Box>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                4 children
            </Heading>
            <List {...args}>
                <ListItem
                    footer={
                        <LayoutGrid
                            columnSpacing={LayoutGridColumnSpacing.Compact}
                            rowSpacing={coreTokens.dimension.spaceXs.value}>
                            <LayoutGridItem size={{xs: 4, lg: 3}}>
                                <Box>F1</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 3}}>
                                <Box>F2</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 3}}>
                                <Box>F3</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 3}}>
                                <Box>F4</Box>
                            </LayoutGridItem>
                        </LayoutGrid>
                    }>
                    <Box>B1</Box>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                5 children
            </Heading>
            <List {...args}>
                <ListItem
                    footer={
                        <div className="list-stories__flex-boxes">
                            <Box>F1</Box>
                            <Box>F2</Box>
                            <Box>F3</Box>
                            <Box>F4</Box>
                            <Box>F5</Box>
                        </div>
                    }>
                    <Box>B1</Box>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                6 children
            </Heading>
            <List {...args}>
                <ListItem
                    footer={
                        <LayoutGrid
                            columnSpacing={LayoutGridColumnSpacing.Compact}
                            rowSpacing={coreTokens.dimension.spaceXs.value}>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F1</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F2</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F3</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F4</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F5</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 2}}>
                                <Box>F6</Box>
                            </LayoutGridItem>
                        </LayoutGrid>
                    }>
                    <Box>B1</Box>
                </ListItem>
            </List>

            <Heading level={3} size={Size.xs} style={{marginTop: '2rem', marginBottom: '1rem'}}>
                More examples
            </Heading>
            <List {...args}>
                <ListItem
                    footer={
                        <LayoutGrid
                            columnSpacing={LayoutGridColumnSpacing.Compact}
                            rowSpacing={coreTokens.dimension.spaceXs.value}>
                            <LayoutGridItem size={{xs: 4, lg: 6}}>
                                <Box>F1</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, lg: 6}}>
                                <Box>F2</Box>
                            </LayoutGridItem>
                        </LayoutGrid>
                    }>
                    <LayoutGrid
                        columnSpacing={LayoutGridColumnSpacing.Compact}
                        rowSpacing={coreTokens.dimension.spaceXs.value}>
                        <LayoutGridItem size={{xs: 4, lg: 6}}>
                            <Box>B1</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 6}}>
                            <Box>B2</Box>
                        </LayoutGridItem>
                    </LayoutGrid>
                </ListItem>
                <ListItem
                    footer={
                        <div className="list-stories__flex-boxes">
                            <Box>F1</Box>
                            <Box>F2</Box>
                            <Box>F3</Box>
                            <Box>F4</Box>
                            <Box>F5</Box>
                        </div>
                    }>
                    <LayoutGrid
                        columnSpacing={LayoutGridColumnSpacing.Compact}
                        rowSpacing={coreTokens.dimension.spaceXs.value}>
                        <LayoutGridItem size={{xs: 4, lg: 6}}>
                            <Box>B1</Box>
                        </LayoutGridItem>
                        <LayoutGridItem size={{xs: 4, lg: 6}}>
                            <Box>B2</Box>
                        </LayoutGridItem>
                    </LayoutGrid>
                </ListItem>
                <ListItem
                    footer={
                        <LayoutGrid
                            columnSpacing={LayoutGridColumnSpacing.Compact}
                            rowSpacing={coreTokens.dimension.spaceXs.value}>
                            <LayoutGridItem size={4}>
                                <Box>F1</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={4}>
                                <Box>F2</Box>
                            </LayoutGridItem>
                            <LayoutGridItem size={{xs: 4, sm: 8, lg: 4}}>
                                <Box>F3</Box>
                            </LayoutGridItem>
                        </LayoutGrid>
                    }>
                    <div className="list-stories__flex-boxes">
                        <Box>B1</Box>
                        <Box>B2</Box>
                        <Box>B3</Box>
                        <Box>B4</Box>
                        <Box>B5</Box>
                    </div>
                </ListItem>
            </List>
        </div>
    )
};
