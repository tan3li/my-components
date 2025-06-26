import {Meta, StoryObj} from '@storybook/react-webpack5';
import {InlineAlert, InlineAlertVariant} from './inlinealert.js';
import {emptyFn} from '../../../utils/functionhelper.js';

const meta = {
    component: InlineAlert,
    decorators: [
        (Story) => (
            <div style={{minWidth: '405px'}}>
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
    title: 'Components/Feedback/InlineAlert'
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Playground: Story = {
    args: {
        actionLabel: 'Action',
        isDismissible: true,
        onAction: emptyFn,
        content: 'Your message here.',
        title: 'Alert title',
        variant: InlineAlertVariant.Neutral
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'InlineAlert component, be my guest and play with it!'
            }
        }
    }
};

export const Variants: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Different variants of the InlineAlert.'
            }
        }
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <InlineAlert content="This is neutral alert." title="Neutral alert" variant={InlineAlertVariant.Neutral} />
            <InlineAlert
                content="This is informative alert."
                title="Informative alert"
                variant={InlineAlertVariant.Informative}
            />
            <InlineAlert content="This is success alert." title="Success alert" variant={InlineAlertVariant.Success} />
            <InlineAlert content="This is danger alert." title="Danger alert" variant={InlineAlertVariant.Danger} />
            <InlineAlert content="This is warning alert." title="Warning alert" variant={InlineAlertVariant.Warning} />
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
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <InlineAlert
                content="You can dismiss me."
                title="Dismissible alert"
                variant={InlineAlertVariant.Informative}
            />
            <InlineAlert
                content="You cannot dismiss me."
                isDismissible={false}
                title="Non-dismissible alert"
                variant={InlineAlertVariant.Danger}
            />
        </div>
    )
};

export const LongContent: Story = {
    args: {
        actionLabel: 'Action',
        isDismissible: true,
        onAction: emptyFn,
        content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        title: 'This is an example of a very long Alert Title that spans into two lines, making this InlineAlert looking ugly as hell',
        variant: InlineAlertVariant.Neutral
    },
    decorators: [
        (Story) => (
            <div style={{width: '600px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'An example of long title and content.'
            }
        }
    }
};
