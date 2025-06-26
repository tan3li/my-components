import {Meta, StoryObj} from '@storybook/react-webpack5';
import {FilterSelect} from './filterselect.js';
import {Size} from '../../../constants/index.js';
import {useState} from 'react';
import {SelectItem} from '../select/index.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {iconNames} from '../../media/index.js';
import {Label} from '../../text/index.js';

const meta = {
    args: {
        onBottomLoaderVisible: undefined,
        onInputChange: undefined
    },
    component: FilterSelect,
    parameters: {
        layout: 'padded',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/FilterSelect'
} satisfies Meta<typeof FilterSelect>;

export default meta;
type Story = StoryObj<typeof FilterSelect>;

const dummyItems = [
    {value: '1', text: 'Option 1'},
    {value: '2', text: 'Option 2'},
    {value: '3', text: 'Option 3'},
    {value: '4', text: 'Option 4'},
    {value: '5', text: 'Option 5'},
    {value: '6', text: 'Option 6'},
    {value: '7', text: 'Option 7'},
    {value: '8', text: 'Option 8'},
    {value: '9', text: 'Option 9'},
    {value: '10', text: 'Option 10'}
];
const dummyGroupedItems = [
    {
        value: 'g1',
        text: 'Group 1',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ]
    },
    {
        value: 'g2',
        text: 'Group 2',
        items: [
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'}
        ]
    }
];

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        items: dummyItems,
        label: 'Filter label',
        startIconName: iconNames.Placeholder,
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'FilterSelect component, be my guest and play with it!'
            }
        }
    }
};

export const Sizes: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        items: dummyItems,
        startIconName: iconNames.Placeholder
    },
    parameters: {
        docs: {
            description: {
                story: 'Element comes in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <FilterSelect {...args} label="Filter xs" size={Size.xs} />
            <FilterSelect
                {...args}
                label="Filter xs"
                size={Size.xs}
                text={dummyItems[0].text}
                value={dummyItems[0].value}
            />

            <FilterSelect {...args} label="Filter sm" size={Size.sm} />
            <FilterSelect
                {...args}
                label="Filter sm"
                size={Size.sm}
                text={dummyItems[0].text}
                value={dummyItems[0].value}
            />

            <FilterSelect {...args} label="Filter md" size={Size.md} />
            <FilterSelect
                {...args}
                label="Filter md"
                size={Size.md}
                text={dummyItems[0].text}
                value={dummyItems[0].value}
            />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: true,
        items: dummyItems.slice(0, 3),
        size: Size.md,
        startIconName: iconNames.Placeholder
    },
    parameters: {
        docs: {
            description: {
                story: 'Element can be disabled with isDisabled prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <FilterSelect {...args} label="Disabled filter" />
            <FilterSelect {...args} label="Disabled filter" text={dummyItems[0].text} value={dummyItems[0].value} />
            <FilterSelect {...args} disabledKeys={['2']} isDisabled={false} label="Disabled option" />
        </div>
    )
};

export const Grouped: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        items: dummyGroupedItems,
        label: 'Filter with grouped options',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Options can be grouped by using children property for items.'
            }
        }
    }
};

export const AsyncLoading: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        label: 'Filter label',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Lazy loading can be handled with isLoading and onBottomLoaderVisible props.'
            }
        }
    },
    render: (args) => {
        const [items, setItems] = useState<SelectItem[]>([]);
        const [isLoading, setIsLoading] = useState(false);
        const [filteredItems, setFilteredItems] = useState<SelectItem[] | null>(null);
        const [selectedItem, setSelectedItem] = useState<{guid: string; name: string} | null>(null);

        const setData = () => {
            const newItems: SelectItem[] = [];

            for (let i = items.length; i < items.length + 10; i++) {
                newItems.push({value: i.toString(), text: `Option ${i + 1}`});
            }

            setItems([...items, ...newItems]);
            setIsLoading(false);
        };

        const onBottomLoaderVisible = () => {
            if (isLoading || filteredItems || items.length >= 20) {
                return;
            }

            setIsLoading(true);
            setTimeout(setData, 1000);
        };

        const onInputChange = (text: string) => {
            setFilteredItems(text ? items.filter((item) => item.text.includes(text)) : null);
        };
        const onChange = (obj) => {
            setSelectedItem({guid: obj.value, name: obj.text});
        };

        return (
            <FilterSelect
                {...args}
                changeCallback={onChange}
                isLoading={isLoading}
                items={filteredItems ?? items}
                onBottomLoaderVisible={onBottomLoaderVisible}
                onInputChange={onInputChange}
                text={selectedItem?.name}
                value={selectedItem?.guid}
            />
        );
    }
};

export const Truncation: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'This is very long option text which does not fit very well'},
            {value: '3', text: 'Option 3'}
        ],
        label: 'Filter label',
        size: Size.md,
        text: 'This is very long option text which does not fit very well',
        value: '2'
    },
    parameters: {
        docs: {
            description: {
                story: 'Toggle button text will truncate when it does not fit available space.'
            }
        }
    },
    render: (args) => (
        <div style={{border: '1px solid black', width: '300px', padding: '1rem'}}>
            <FilterSelect {...args} />
        </div>
    )
};

export const Unclearable: Story = {
    args: {
        isClearable: false,
        isDisabled: false,
        items: dummyItems,
        label: 'Filter label',
        size: Size.md,
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Clearing can be disallowed by setting isClearable = false.'
            }
        }
    }
};

export const Unselectable: Story = {
    args: {
        isDisabled: false,
        isSelectable: false,
        items: dummyItems,
        size: Size.xs,
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Selection can be disallowed by setting isSelectable = false.'
            }
        }
    },
    render: (args) => {
        const [visibleFilters, setVisibleFilters] = useState({1: true, 2: true, 3: true});

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Label size={Size.md}>Active filters</Label>
                <div style={{display: 'flex', gap: '1rem'}}>
                    {Object.keys(visibleFilters).map((id) => {
                        if (visibleFilters[id]) {
                            return (
                                <FilterSelect
                                    {...args}
                                    changeCallback={() => setVisibleFilters({...visibleFilters, [id]: false})}
                                    key={id}
                                    label={`Filter ${id}`}
                                />
                            );
                        }

                        return null;
                    })}
                </div>
            </div>
        );
    }
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        isSkeleton: true,
        items: dummyItems,
        label: 'Filter label',
        startIconName: iconNames.Placeholder,
        size: Size.md
    },
    decorators: [
        (Story) => (
            <div style={{maxWidth: 300}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'FilterSelect can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const InteractionTest: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        label: 'Filter label'
    },
    parameters: {
        docs: {
            description: {
                story: 'Test changeCallback with changeParams.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown and select first item
        await userEvent.click(expandBtn);

        let options = canvasElement.parentNode?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                text: 'Option 1',
                value: '1'
            })
        );

        // Open dropdown, search for "2" and select first item
        await userEvent.click(expandBtn);
        await userEvent.keyboard('2');

        options = canvasElement.parentNode?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                text: 'Option 2',
                value: '2'
            })
        );
    }
};
