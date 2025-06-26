import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Callout} from './callout.js';
import {iconNames} from '../../media/index.js';
import {useState} from 'react';
import CalloutDesignMdx from './calloutdesign.mdx';

const meta = {
    component: Callout,
    decorators: [
        (Story) => (
            <div style={{width: 405}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            design: CalloutDesignMdx
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Callout'
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

const exampleTitle = 'Hey, here is a tip for you!';
const exampleContent =
    'The cell requiring your immediate attention is highlighted with a distinctive striped border set against an orange background. This visual cue is designed to ensure that important information stands out, making it easier for you to identify areas that may need your focus or action.';

export const Playground: Story = {
    args: {
        children: exampleContent,
        iconName: iconNames.BookFilled,
        title: exampleTitle
    },
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            description: {
                story: 'Callout component, be my guest and play with it!'
            }
        }
    }
};

export const DefaultExpanded: Story = {
    args: {
        children: exampleContent,
        defaultExpanded: true,
        iconName: iconNames.BookFilled,
        title: exampleTitle
    },
    parameters: {
        docs: {
            description: {
                story: 'Callout default expanded state can be set with defaultExpanded prop.'
            }
        }
    }
};

export const ControlledExpanded: Story = {
    args: {
        children: exampleContent,
        iconName: iconNames.BookFilled,
        title: exampleTitle
    },
    parameters: {
        docs: {
            description: {
                story: 'Callout expanded state can be controlled from outside using isExpanded and onExpandedChange props.'
            }
        }
    },
    render: (args) => {
        const [isExpanded, setIsExpanded] = useState(true);

        return <Callout {...args} isExpanded={isExpanded} onExpandedChange={setIsExpanded} />;
    }
};
