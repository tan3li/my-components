import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Collapsible} from './collapsible.js';
import {BodyText} from '../../text/index.js';
import {Alignment, Size} from '../../../constants/index.js';
import {CollapsibleItemStyle} from './collapsibleitem.js';
import {useState} from 'react';
import {Key} from 'react-aria-components';
import {expect, userEvent, within} from 'storybook/test';

const meta = {
    args: {
        onExpandedChange: undefined
    },
    component: Collapsible,
    decorators: [
        (Story) => (
            <div style={{width: '430px'}}>
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
    title: 'Components/Data Display/Collapsible'
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const Playground: Story = {
    args: {
        arrowPlacement: Alignment.start,
        items: [
            {
                id: '1',
                title: 'Collapsible',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            }
        ],
        style: CollapsibleItemStyle.Plain
    },
    parameters: {
        docs: {
            description: {
                story: 'Collapsible component, be my guest and play with it!'
            }
        }
    }
};

export const Plain: Story = {
    args: {
        arrowPlacement: Alignment.start,
        defaultExpandedKeys: ['2', '4'],
        disabledKeys: ['3', '4'],
        items: [
            {
                id: '1',
                title: 'Default closed',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '2',
                title: 'Default open',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '3',
                title: 'Disabled closed',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '4',
                title: 'Disabled open',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            }
        ],
        style: CollapsibleItemStyle.Plain
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        docs: {
            description: {
                story: 'Plain variation of the Collapsible.'
            }
        }
    }
};

export const Card: Story = {
    args: {
        arrowPlacement: Alignment.start,
        defaultExpandedKeys: ['2', '4'],
        disabledKeys: ['3', '4'],
        items: [
            {
                id: '1',
                title: 'Default closed',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '2',
                title: 'Default open',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '3',
                title: 'Disabled closed',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '4',
                title: 'Disabled open',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            }
        ],
        style: CollapsibleItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Card variation of the Collapsible.'
            }
        }
    }
};

export const ArrowPlacement: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Header arrow can be placed in start or end.'
            }
        }
    },
    render: () => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <Collapsible
                arrowPlacement={Alignment.start}
                items={[
                    {
                        id: '1',
                        title: 'Arrow start',
                        children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
                    }
                ]}
                style={CollapsibleItemStyle.Plain}
            />
            <Collapsible
                arrowPlacement={Alignment.start}
                items={[
                    {
                        id: '1',
                        title: 'Arrow start',
                        children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
                    }
                ]}
                style={CollapsibleItemStyle.Card}
            />
            <Collapsible
                arrowPlacement={Alignment.end}
                items={[
                    {
                        id: '1',
                        title: 'Arrow end',
                        children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
                    }
                ]}
                style={CollapsibleItemStyle.Plain}
            />
            <Collapsible
                arrowPlacement={Alignment.end}
                items={[
                    {
                        id: '1',
                        title: 'Arrow end',
                        children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
                    }
                ]}
                style={CollapsibleItemStyle.Card}
            />
        </div>
    )
};

export const Tooltip: Story = {
    args: {
        arrowPlacement: Alignment.start,
        items: [
            {
                id: '1',
                title: 'Collapsible',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>,
                tooltipContent: 'Tooltip'
            }
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Tooltip can be given for collapsible items.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <Collapsible {...args} style={CollapsibleItemStyle.Plain} />
            <Collapsible {...args} style={CollapsibleItemStyle.Card} />
        </div>
    )
};

export const ControlledState: Story = {
    args: {
        arrowPlacement: Alignment.start,
        items: [
            {
                id: '1',
                title: 'Collapsible 1',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '2',
                title: 'Collapsible 2',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            },
            {
                id: '3',
                title: 'Collapsible 3',
                children: <BodyText size={Size.md}>{loremIpsum}</BodyText>
            }
        ],
        style: CollapsibleItemStyle.Plain
    },
    parameters: {
        docs: {
            description: {
                story: 'Controlled state or allowsMultipleExpanded can be used to create one expanded at a time behavior.'
            }
        }
    },
    render: (args) => {
        const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set());

        return (
            <Collapsible
                {...args}
                allowsMultipleExpanded={false}
                expandedKeys={expandedKeys}
                onExpandedChange={(keys) => {
                    expandedKeys.forEach((key) => keys.delete(key));
                    setExpandedKeys(keys);
                }}
            />
        );
    }
};

export const InteractionTest: Story = {
    args: {
        arrowPlacement: Alignment.start,
        items: [
            {
                id: '1',
                title: 'Collapsible',
                children: (
                    <BodyText className="test-content" size={Size.md}>
                        {loremIpsum}
                    </BodyText>
                )
            }
        ],
        style: CollapsibleItemStyle.Plain
    },
    parameters: {
        docs: {
            description: {
                story: 'Interaction test for expanding and collapsing.'
            }
        }
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const btn = canvas.getByRole('button');

        await expect(canvasElement.querySelector('.test-content')).toBeNull();

        await userEvent.click(btn);
        await expect(canvasElement.querySelector('.test-content')?.textContent).toBe(loremIpsum);

        await userEvent.click(btn);
        await expect(canvasElement.querySelector('.test-content')?.textContent).toBe(loremIpsum);
    }
};
