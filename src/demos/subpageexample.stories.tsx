import {Meta, StoryObj} from '@storybook/react-webpack5';
import {
    Avatar,
    Badge,
    BadgeStyle,
    BadgeVariant,
    Button,
    ButtonStyle,
    ButtonVariant,
    Checkbox,
    ContentBlock,
    DatePicker,
    Divider,
    Heading,
    IconButton,
    iconNames,
    Label,
    LayoutGrid,
    LayoutGridColumnSpacing,
    LayoutGridItem,
    Menu,
    MultiSelect,
    PageHeader,
    PageLayout,
    SearchField,
    Select,
    SeveraLogo,
    SeveraLogoVariant,
    SideNav,
    SideNavMode,
    TextField,
    TopNav
} from '../components/index.js';
import {InputType, Orientation, Size} from '../constants/index.js';
import {coreTokens} from '@tan3li/d-tokens';
import {useMemo, useState} from 'react';

const meta: Meta = {
    parameters: {
        layout: 'fullscreen'
    },
    title: 'Demos/Subpage example'
};

export default meta;
type Story = StoryObj;

const LAYOUT_GRID_ITEM_SIZE = {xs: 4, sm: 8, lg: 6};

export const SubpageExample: Story = {
    name: 'Subpage example',
    render: () => {
        const data = useMemo(
            () => ({
                name: 'My project',
                number: '1001',
                manager: {
                    value: 'u1',
                    text: 'John Smith'
                },
                startDate: '2024-10-04',
                keywords: [
                    {value: 'kw1', text: 'Foo'},
                    {value: 'kw2', text: 'Bar'}
                ],
                isInternal: false
            }),
            []
        );
        const [savingFields, setSavingFields] = useState<Set<string>>(new Set());
        const updateSavingFields = (field: string, doRemove?: boolean) => {
            setSavingFields((currSavingFields) => {
                const newSavingFields = new Set(currSavingFields);

                if (doRemove) {
                    newSavingFields.delete(field);
                } else {
                    newSavingFields.add(field);
                }

                return newSavingFields;
            });
        };
        const onFieldChange = (obj: {field: string; value: any; [key: string]: any}) => {
            const {field, value} = obj;

            if (field === 'manager') {
                if (value === data[field].value) {
                    return;
                }

                data[field] = {value, text: obj.text};
            } else {
                if (value === data[field]) {
                    return;
                }

                data[field] = value;
            }

            updateSavingFields(field);
            setTimeout(() => {
                updateSavingFields(field, true);
            }, 1000);
        };

        return (
            <div style={{display: 'flex', backgroundColor: 'var(--neutral-background-container-strong)'}}>
                <SideNav
                    aria-label="Side navigation"
                    header={(isExpanded) => (
                        <SeveraLogo
                            inverted={true}
                            variant={isExpanded ? SeveraLogoVariant.Full : SeveraLogoVariant.Symbol}
                        />
                    )}
                    items={[
                        {
                            id: 'dashboard',
                            label: 'Dashboard',
                            icon: iconNames.House
                        },
                        {
                            id: 'customer',
                            label: 'Customer',
                            icon: iconNames.CorporateFare
                        },
                        {
                            id: 'projects',
                            label: 'Projects',
                            icon: iconNames.ViewTimeline,
                            isActive: true
                        }
                    ]}
                    mode={SideNavMode.Inverted}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1 1 auto',
                        height: '100vh',
                        overflow: 'hidden'
                    }}>
                    <TopNav
                        aria-label="Top navigation"
                        leftItems={[
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
                        ]}
                        rightItems={[
                            {
                                id: 'search',
                                children: <SearchField aria-label="Search" placeholder="Search" />,
                                style: {flex: '1 1 auto', maxWidth: '300px'}
                            },
                            {
                                id: 'add',
                                children: (
                                    <Menu
                                        items={[
                                            {id: '1', name: 'Project'},
                                            {id: '2', name: 'Customer'}
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
                            }
                        ]}
                        showLoadingIndicator={savingFields.size > 0}
                    />
                    <div style={{overflow: 'auto'}}>
                        <PageLayout>
                            <PageHeader
                                badge={
                                    <Badge
                                        iconName={iconNames.StatusLightFilled}
                                        role="status"
                                        style={BadgeStyle.Fill}
                                        variant={BadgeVariant.Informative}>
                                        In progress
                                    </Badge>
                                }
                                breadcrumbItems={[
                                    {id: 'home', label: 'Home'},
                                    {id: 'projects', label: 'Projects'},
                                    {id: '123', label: 'My project'}
                                ]}
                                buttons={[
                                    <Button
                                        key="invoice"
                                        startIconName={iconNames.Add}
                                        style={ButtonStyle.Outline}
                                        variant={ButtonVariant.Neutral}>
                                        Create Invoice
                                    </Button>,
                                    <Menu
                                        items={[
                                            {id: 'close', name: 'Close project'},
                                            {id: 'delete', name: 'Delete', props: {isDestructive: true}}
                                        ]}
                                        key="more"
                                        placement="bottom right">
                                        <IconButton
                                            aria-label="More actions"
                                            iconName={iconNames.MoreVert}
                                            style={ButtonStyle.Plain}
                                            variant={ButtonVariant.Neutral}
                                        />
                                    </Menu>
                                ]}
                                details={[
                                    <Label key="details" size={Size.md}>
                                        {'# 1001 ⋅ '}
                                        <strong>
                                            <u>Acme Oy</u>
                                        </strong>
                                        {' ⋅ Project manager: '}
                                    </Label>,
                                    <Avatar
                                        alt="John Smith"
                                        key="avatar"
                                        label={
                                            <strong style={{color: 'var(--nav-text-enabled-weak)'}}>John Smith</strong>
                                        }
                                        size={Size.sm}
                                        text="JS"
                                    />
                                ]}
                                iconName={iconNames.ViewTimeline}
                                level={2}
                                showBackButton={true}
                                title="My project"
                            />
                            <ContentBlock
                                title={
                                    <Heading level={2} size={Size.xxs}>
                                        Details
                                    </Heading>
                                }>
                                <LayoutGrid
                                    columnSpacing={LayoutGridColumnSpacing.Comfy}
                                    rowSpacing={coreTokens.dimension.spaceLg.value}>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <TextField
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'name'}}
                                            isReadOnly={savingFields.has('name')}
                                            label="Name"
                                            value={data.name}
                                        />
                                    </LayoutGridItem>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <TextField
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'number'}}
                                            isReadOnly={savingFields.has('number')}
                                            label="Number"
                                            type={InputType.number}
                                            value={data.number}
                                        />
                                    </LayoutGridItem>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <Select
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'manager'}}
                                            isReadOnly={savingFields.has('manager')}
                                            items={[
                                                {value: 'u1', text: 'John Smith'},
                                                {value: 'u2', text: 'Jane Doe'},
                                                {value: 'u3', text: 'Kevin Young'}
                                            ]}
                                            label="Manager"
                                            text={data.manager.text}
                                            value={data.manager.value}
                                        />
                                    </LayoutGridItem>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <DatePicker
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'startDate'}}
                                            isReadOnly={savingFields.has('startDate')}
                                            label="Start date"
                                            value={data.startDate}
                                        />
                                    </LayoutGridItem>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <MultiSelect
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'keywords'}}
                                            isReadOnly={savingFields.has('keywords')}
                                            items={[
                                                {value: 'kw1', text: 'Foo'},
                                                {value: 'kw2', text: 'Bar'},
                                                {value: 'kw3', text: 'Test'}
                                            ]}
                                            label="Keywords"
                                            placeholder="Select values"
                                            selectedItems={data.keywords}
                                        />
                                    </LayoutGridItem>
                                    <LayoutGridItem size={LAYOUT_GRID_ITEM_SIZE}>
                                        <Checkbox
                                            changeCallback={onFieldChange}
                                            changeParams={{field: 'isInternal'}}
                                            isReadOnly={savingFields.has('isInternal')}
                                            label="Internal"
                                            size={Size.md}
                                        />
                                    </LayoutGridItem>
                                </LayoutGrid>
                            </ContentBlock>
                        </PageLayout>
                    </div>
                </div>
            </div>
        );
    }
};
