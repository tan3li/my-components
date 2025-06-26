import {Meta, StoryObj} from '@storybook/react-webpack5';
import {AlertBanner, AlertBannerVariant} from './alertbanner.js';
import {iconNames} from '../../media/icon/icons.js';
import {Size} from '../../../constants/size.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';

const meta = {
    component: AlertBanner,
    decorators: [
        (Story) => (
            <div style={{width: '600px'}}>
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
    title: 'Components/Feedback/AlertBanner'
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Playground: Story = {
    args: {
        iconName: iconNames.InfoFilled,
        isDismissible: true,
        variant: AlertBannerVariant.Neutral
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'AlertBanner component, be my guest and play with it!'
            }
        }
    },
    render: ({variant, ...args}) => (
        <AlertBanner {...args} variant={variant}>
            {'Alert message '}
            <Button
                inverted={variant !== AlertBannerVariant.Warning}
                size={Size.lg}
                style={ButtonStyle.Link}
                variant={ButtonVariant.Neutral}>
                Link
            </Button>
        </AlertBanner>
    )
};

export const Variants: Story = {
    args: {
        isDismissible: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Different variants of AlertBanner.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <AlertBanner {...args} iconName={iconNames.InfoFilled} variant={AlertBannerVariant.Neutral}>
                Neutral message
            </AlertBanner>
            <AlertBanner {...args} iconName={iconNames.NotificationsFilled} variant={AlertBannerVariant.Informative}>
                Informative message
            </AlertBanner>
            <AlertBanner {...args} iconName={iconNames.OnlineFilled} variant={AlertBannerVariant.Success}>
                Success message
            </AlertBanner>
            <AlertBanner {...args} iconName={iconNames.WifiOffFilled} variant={AlertBannerVariant.Danger}>
                Danger message
            </AlertBanner>
            <AlertBanner {...args} iconName={iconNames.WarningFilled} variant={AlertBannerVariant.Warning}>
                Warning message
            </AlertBanner>
        </div>
    )
};

export const Dismissal: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Dismissal can be controlled with isDismissible prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <AlertBanner
                {...args}
                iconName={iconNames.InfoFilled}
                isDismissible={true}
                variant={AlertBannerVariant.Neutral}>
                Dismissible alert
            </AlertBanner>
            <AlertBanner
                {...args}
                iconName={iconNames.EmergencyHomeFilled}
                isDismissible={false}
                variant={AlertBannerVariant.Danger}>
                Non-dismissible alert
            </AlertBanner>
        </div>
    )
};
