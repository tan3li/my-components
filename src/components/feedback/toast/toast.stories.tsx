import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Toast, ToastVariant} from './toast.js';
import {GlobalToastRegion, ToastQueue} from './globaltoastregion.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';

const meta = {
    component: Toast,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Toast'
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Playground: Story = {
    args: {
        shouldAnimate: false,
        // @ts-expect-error TS2740
        toast: {
            content: {
                actionLabel: 'Action',
                onAction: emptyFn,
                children: 'Type your message here.',
                variant: ToastVariant.Informative
            },
            id: 'key'
        }
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'Toast component, be my guest and play with it!'
            }
        }
    }
};

export const Variants: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Different variants of the Toast.'
            }
        }
    },
    render: () => {
        const actionOptions = {
            actionLabel: 'Action',
            onAction: emptyFn,
            shouldCloseOnAction: true
        };
        const longText =
            "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.";
        const withLink = (children) => (
            <>
                {children}{' '}
                <Button inverted={true} size={Size.lg} style={ButtonStyle.Link} variant={ButtonVariant.Neutral}>
                    Link
                </Button>
            </>
        );

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <BodyText size={Size.md}>Click buttons to show toasts.</BodyText>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}}>
                    <Button
                        onPress={() => ToastQueue.neutral('Neutral Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Neutral
                    </Button>
                    <Button
                        onPress={() => ToastQueue.neutral(withLink('Neutral Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Neutral + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.neutral(withLink('Neutral Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Neutral + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.informative('Informative Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        Informative
                    </Button>
                    <Button
                        onPress={() => ToastQueue.informative(withLink('Informative Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        Informative + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.informative(withLink('Informative Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        Informative + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.success('Success Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Success}>
                        Success
                    </Button>
                    <Button
                        onPress={() => ToastQueue.success(withLink('Success Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Success}>
                        Success + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.success(withLink('Success Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Success}>
                        Success + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.danger('Danger Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Danger
                    </Button>
                    <Button
                        onPress={() => ToastQueue.danger(withLink('Danger Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Danger + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.danger(withLink('Danger Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Danger + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.warning('Warning Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Warning
                    </Button>
                    <Button
                        onPress={() => ToastQueue.warning(withLink('Warning Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Warning + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.warning(withLink('Warning Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Danger}>
                        Warning + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.loading('Loading Toast')}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Loading
                    </Button>
                    <Button
                        onPress={() => ToastQueue.loading(withLink('Loading Toast'))}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Loading + Link
                    </Button>
                    <Button
                        onPress={() => ToastQueue.loading(withLink('Loading Toast'), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}>
                        Loading + Link + Action
                    </Button>
                    <Button
                        onPress={() => ToastQueue.informative(withLink(longText), actionOptions)}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Accent}>
                        Multiline
                    </Button>
                    <GlobalToastRegion />
                </div>
            </div>
        );
    }
};
