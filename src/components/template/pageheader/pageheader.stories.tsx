import {Meta, StoryObj} from '@storybook/react-webpack5';
import {PageHeader} from './pageheader.js';
import {iconNames} from '../../media/index.js';
import {Button, ButtonStyle, ButtonVariant, IconButton, Menu} from '../../action/index.js';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';
import {Avatar} from '../../navigation/index.js';
import {Badge, BadgeStyle, BadgeVariant} from '../../feedback/index.js';

const meta = {
    component: PageHeader,
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Template/PageHeader'
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Level1Example: Story = {
    args: {
        buttons: [
            <Button
                key="invoice"
                startIconName={iconNames.Add}
                style={ButtonStyle.Outline}
                variant={ButtonVariant.Neutral}>
                Create Invoice
            </Button>
        ],
        iconName: iconNames.ViewTimeline,
        level: 1,
        title: 'Projects'
    },
    parameters: {
        docs: {
            description: {
                story: 'Level 1 example.'
            }
        }
    }
};

export const Level2Example: Story = {
    args: {
        badge: (
            <Badge
                iconName={iconNames.StatusLightFilled}
                role="status"
                style={BadgeStyle.Fill}
                variant={BadgeVariant.Informative}>
                In progress
            </Badge>
        ),
        breadcrumbItems: [
            {id: 'home', label: 'Home'},
            {id: 'projects', label: 'Projects'},
            {id: '123', label: 'My project'}
        ],
        buttons: [
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
                key="more">
                <IconButton
                    aria-label="More actions"
                    iconName={iconNames.MoreVert}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </Menu>
        ],
        details: [
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
                label={<strong style={{color: 'var(--nav-text-enabled-weak)'}}>John Smith</strong>}
                size={Size.sm}
                text="JS"
            />
        ],
        iconName: iconNames.ViewTimeline,
        level: 2,
        showBackButton: true,
        title: 'My project'
    },
    parameters: {
        docs: {
            description: {
                story: 'Level 2 example.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        badge: (
            <Badge
                iconName={iconNames.StatusLightFilled}
                role="status"
                style={BadgeStyle.Fill}
                variant={BadgeVariant.Informative}>
                In progress
            </Badge>
        ),
        breadcrumbItems: [
            {id: 'home', label: 'Home'},
            {id: 'projects', label: 'Projects'},
            {id: '123', label: 'My project'}
        ],
        buttons: [
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
                key="more">
                <IconButton
                    aria-label="More actions"
                    iconName={iconNames.MoreVert}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </Menu>
        ],
        details: [
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
                label={<strong style={{color: 'var(--nav-text-enabled-weak)'}}>John Smith</strong>}
                size={Size.sm}
                text="JS"
            />
        ],
        iconName: iconNames.ViewTimeline,
        isSkeleton: true,
        level: 2,
        title: 'My project'
    },
    parameters: {
        docs: {
            description: {
                story: 'PageHeader can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};
