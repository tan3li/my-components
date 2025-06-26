import {Meta, StoryObj} from '@storybook/react-webpack5';
import {TagGroup} from './taggroup.js';
import {Tag, TagStyle} from '../tag/tag.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {Size} from '../../../constants/index.js';
import {useMemo, useState} from 'react';
import {MultiSelect} from '../../inputs/index.js';

const meta = {
    args: {
        maxVisibleRows: 4,
        style: TagStyle.Fill
    },
    component: TagGroup,
    decorators: [
        (Story) => (
            <div style={{width: 456}}>
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
    title: 'Components/Navigation/TagGroup'
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof TagGroup>;

interface TagItem {
    id: string;
    text: string;
}

const exampleTagItems: TagItem[] = [
    {id: '1', text: 'Adventure'},
    {id: '2', text: 'Technology'},
    {id: '3', text: 'Travel'},
    {id: '4', text: 'Health'},
    {id: '5', text: 'Education'},
    {id: '6', text: 'PSA'},
    {id: '7', text: 'Food'},
    {id: '8', text: 'Lifestyle'},
    {id: '9', text: 'Gaming'},
    {id: '10', text: 'Fashion'},
    {id: '11', text: 'Nature'},
    {id: '12', text: 'Science'},
    {id: '13', text: 'Music'},
    {id: '14', text: 'Art'},
    {id: '15', text: 'Fitness'},
    {id: '16', text: 'Finance'},
    {id: '17', text: 'Culture'},
    {id: '18', text: 'Photography'},
    {id: '19', text: 'History'},
    {id: '20', text: 'Sports'},
    {id: '21', text: 'Community'},
    {id: '22', text: 'Innovation'},
    {id: '23', text: 'Wellness'},
    {id: '24', text: 'Collaboration'},
    {id: '25', text: 'Creativity'}
];

function getTagElements(tagItems: TagItem[]) {
    return tagItems.map((item) => {
        const {id, text} = item;

        return (
            <Tag key={id} onRemove={emptyFn}>
                {text}
            </Tag>
        );
    });
}

export const Playground: Story = {
    args: {
        children: getTagElements(exampleTagItems),
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'TagGroup component, be my guest and play with it!'
            }
        }
    }
};

export const Sizes: Story = {
    args: {
        children: getTagElements(exampleTagItems)
    },
    parameters: {
        docs: {
            description: {
                story: 'TagGroup comes in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <TagGroup {...args} size={Size.md} />
            <TagGroup {...args} size={Size.sm} />
            <TagGroup {...args} size={Size.xs} />
        </div>
    )
};

export const ExampleWithMultiSelect: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Example with MultiSelect'
            }
        }
    },
    render: (args) => {
        const items = useMemo(() => exampleTagItems.map(({id, text}) => ({value: id, text})), []);
        const [selectedItems, setSelectedItems] = useState(items.slice(0, 20));

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)'}}>
                <MultiSelect
                    changeCallback={(obj) => {
                        setSelectedItems(obj.value);
                    }}
                    helpText="Help text content"
                    items={items}
                    label="Keywords"
                    placeholder="Select keywords"
                    selectedItems={selectedItems}
                />
                <TagGroup {...args}>
                    {selectedItems.map(({value, text}) => (
                        <Tag
                            key={value}
                            onRemove={() => setSelectedItems(selectedItems.filter((item) => item.value !== value))}>
                            {text}
                        </Tag>
                    ))}
                </TagGroup>
            </div>
        );
    }
};
