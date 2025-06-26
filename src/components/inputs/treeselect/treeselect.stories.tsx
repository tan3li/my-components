import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {TreeSelect} from './treeselect.js';
import {ReactNode, useState} from 'react';
import {iconNames} from '../../media/icon/icons.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {expect, fn, spyOn, userEvent, waitFor, within} from 'storybook/test';
import {Key} from 'react-aria-components';
import {Icon, IconSize} from '../../media/index.js';
import {CTRL_MODIFIER_KEY, KeyboardEventKey} from '../../../constants/index.js';
import {InputChangeTriggerAction, SelectItem, SelectOptionContent} from '../select/index.js';
import {expandAll} from './expandall.js';
import {filterItems} from '../select/filteritems.js';
import {useFilter} from 'react-aria';

const meta = {
    args: {
        onOpenChange: undefined,
        onKeyDown: undefined,
        onBottomLoaderVisible: undefined,
        onExpandedChange: undefined,
        onFocusChange: undefined,
        onInputChange: undefined,
        onLoadChildren: undefined,
        onSelectionChange: undefined
    },
    component: TreeSelect,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', width: '300px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.select__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/TreeSelect'
} satisfies Meta<typeof TreeSelect>;

export default meta;
type Story = StoryObj<typeof TreeSelect>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        placeholder: 'Select value',
        text: 'Item 1-1-1',
        value: '1-1-1'
    },
    parameters: {
        docs: {
            description: {
                story: 'TreeSelect component, be my guest and play with it!'
            }
        }
    }
};

export const ReadOnlyItem: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ],
                isReadOnly: true
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        placeholder: 'Select value',
        renderItemContent: (props) => (
            <SelectOptionContent
                {...props}
                labelSuffix={
                    props.item.isReadOnly ? <Icon name={iconNames.LockFilled} size={IconSize.XS} /> : undefined
                }
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Read-only item can be toggled but not selected.'
            }
        }
    }
};

export const DefaultExpandedItems: Story = {
    args: {
        defaultExpandedKeys: new Set(['1', '1-1']),
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Items can be expanded by default with defaultExpandedKeys prop.'
            }
        }
    }
};

export const ControlledExpandedItems: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Expanded items can be controlled with expandedKeys prop.'
            }
        }
    },
    render: (args) => {
        const [items] = useState<SelectItem[]>([
            {
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ]);
        const [filteredItems, setFilteredItems] = useState<SelectItem[] | null>(null);
        const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set());
        const localFilter = useFilter({sensitivity: 'base'});

        const onInputChange = (text: string, inputChangeTrigger: InputChangeTriggerAction) => {
            const newFilteredItems = text ? filterItems(items, text, localFilter) : null;

            setFilteredItems(newFilteredItems);

            if (inputChangeTrigger === InputChangeTriggerAction.Input) {
                setExpandedKeys(newFilteredItems ? expandAll(newFilteredItems, new Set()) : new Set());
            }
        };

        return (
            <TreeSelect
                {...args}
                expandedKeys={expandedKeys}
                items={filteredItems ?? items}
                onExpandedChange={setExpandedKeys}
                onInputChange={onInputChange}
            />
        );
    }
};

export const Favorites: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Favorite-feature can be implemented with renderItemContent and onKeyDown props.'
            }
        }
    },
    render: (args) => {
        const [items, setItems] = useState<SelectItem[]>([
            {
                value: 'favs',
                text: 'Favorites',
                items: [
                    {
                        isFavorite: false,
                        value: 's1',
                        text: 'Separated item 1'
                    },
                    {
                        isFavorite: false,
                        hasSeparator: true,
                        value: 's2',
                        text: 'Separated item 2'
                    }
                ]
            },
            {
                isFavorite: false,
                isReadOnly: true,
                value: '1',
                text: 'Item 1',
                children: [
                    {
                        value: '1-1',
                        text: 'Item 1-1',
                        children: [{value: '1-1-1', text: 'Item 1-1-1', isFavorite: false}],
                        isFavorite: false
                    },
                    {value: '1-2', text: 'Item 1-2', isFavorite: false}
                ]
            },
            {
                isFavorite: false,
                value: '2',
                text: 'Item 2'
            },
            {
                isFavorite: false,
                value: '3',
                text: 'Item 3'
            }
        ]);

        const updateItem = (itemArr: SelectItem[], key: Key) => {
            for (let i = 0, len = itemArr.length; i < len; i++) {
                const item = itemArr[i];
                const {children, value} = item;
                const subItems = item.items;

                if (value === key) {
                    item.isFavorite = !item.isFavorite;

                    return true;
                }

                if ((subItems && updateItem(subItems, key)) || (children && updateItem(children, key))) {
                    return true;
                }
            }

            return false;
        };

        const onToggleFavorite = (item: SelectItem) => {
            const newItems = items.slice();

            if (updateItem(newItems, item.value)) {
                setItems(newItems);
            }
        };

        return (
            <TreeSelect
                {...args}
                items={items}
                onKeyDown={(e, highlightedItem) => {
                    if (e.key === KeyboardEventKey.l && e[CTRL_MODIFIER_KEY] && highlightedItem) {
                        e.preventDefault();
                        onToggleFavorite(highlightedItem);

                        return false;
                    }

                    return true;
                }}
                renderItemContent={(props) => {
                    const item = props.item;
                    const {isReadOnly, isFavorite} = item;
                    let suffix: ReactNode;

                    if (!isReadOnly) {
                        suffix = (
                            // Select option content should not be keyboard-focusable.
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                            <div
                                aria-label="Toggle favorite"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleFavorite(item);
                                }}
                                role="button"
                                style={{display: 'inline-flex'}}>
                                <Icon name={isFavorite ? iconNames.StarFilled : iconNames.Star} size={IconSize.MD} />
                            </div>
                        );
                    }

                    return (
                        <SelectOptionContent
                            {...props}
                            labelSuffix={
                                props.item.isReadOnly ?
                                    <Icon name={iconNames.LockFilled} size={IconSize.XS} />
                                :   undefined
                            }
                            suffix={suffix}
                        />
                    );
                }}
            />
        );
    }
};

export const ActionItem: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                action: {
                    callback: emptyFn,
                    iconName: iconNames.AddCircleFilled
                },
                value: 'a1',
                text: 'Action'
            },
            {
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Item can be set as custom action with action prop.'
            }
        }
    }
};

export const LongText: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                value: '1',
                text: 'Figma ipsum component variant main layer. Image bullet pencil group figma layout create overflow pen.',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Long item text is truncated to 2 lines.'
            }
        }
    }
};

export const LoadChildren: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        docs: {
            description: {
                story: 'Children can loaded asynchronously.'
            }
        }
    },
    render: (args) => {
        const [items, setItems] = useState<SelectItem[]>([
            {
                value: '1',
                text: 'Item 1',
                children: []
            },
            {
                value: '2',
                text: 'Item 2'
            },
            {
                value: '3',
                text: 'Item 3'
            }
        ]);
        const maxExpandableLevel = 1;

        const updateItem = (itemArr: SelectItem[], key: Key, level: number) => {
            for (let i = 0, len = itemArr.length; i < len; i++) {
                const item = itemArr[i];
                const {children, value} = item;
                const subItems = item.items;

                if (value === key) {
                    let prefix = '1',
                        idx = 1;

                    for (let j = 0; j < level; j++) {
                        prefix += '-1';
                    }

                    item.children = [
                        {
                            value: `${prefix}-${idx}`,
                            text: `Item ${prefix}-${idx++}`,
                            children: level >= maxExpandableLevel ? undefined : []
                        },
                        {
                            value: `${prefix}-${idx}`,
                            text: `Item ${prefix}-${idx++}`
                        },
                        {
                            value: `${prefix}-${idx}`,
                            text: `Item ${prefix}-${idx++}`
                        }
                    ];

                    return true;
                }

                if (
                    (subItems && updateItem(subItems, key, level + 1)) ||
                    (children && updateItem(children, key, level + 1))
                ) {
                    return true;
                }
            }

            return false;
        };

        const onLoadChildren = (item: SelectItem) =>
            new Promise<void>((resolve) => {
                setTimeout(() => {
                    const newItems = items.slice();

                    if (updateItem(newItems, item.value, 0)) {
                        setItems(newItems);
                    }
                    resolve();
                }, 300);
            });

        return <TreeSelect {...args} items={items} onLoadChildren={onLoadChildren} />;
    }
};

const testObj = {
    onToggleFavorite: emptyFn
};

export const ClickInteractionTest: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                isFavorite: false,
                value: '1',
                text: 'Item 1',
                children: [
                    {
                        value: '1-1',
                        text: 'Item 1-1',
                        children: [{value: '1-1-1', text: 'Item 1-1-1', isFavorite: false}],
                        isFavorite: false
                    },
                    {value: '1-2', text: 'Item 1-2', isFavorite: false}
                ]
            },
            {
                isFavorite: false,
                value: '2',
                text: 'Item 2'
            },
            {
                isFavorite: false,
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        onKeyDown: (e, highlightedItem) => {
            if (e.key === KeyboardEventKey.l && e[CTRL_MODIFIER_KEY] && highlightedItem) {
                e.preventDefault();
                testObj.onToggleFavorite(highlightedItem);

                return false;
            }

            return true;
        },
        placeholder: 'Select value',
        renderItemContent: (props) => (
            <SelectOptionContent
                {...props}
                suffix={
                    // Select option content should not be keyboard-focusable.
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                    <div
                        aria-label="Toggle favorite"
                        className="favorite-toggler"
                        onClick={(e) => {
                            e.stopPropagation();
                            testObj.onToggleFavorite(props.item);
                        }}
                        role="button"
                        style={{display: 'inline-flex'}}>
                        <Icon name={props.item.isFavorite ? iconNames.StarFilled : iconNames.Star} size={IconSize.MD} />
                    </div>
                }
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Interaction test for functionality.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        spyOn(testObj, 'onToggleFavorite');

        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown
        await userEvent.click(expandBtn);

        const popover = canvasElement.parentNode?.querySelector('.select__popover');
        let options = popover?.querySelectorAll('.select-option') ?? [];

        await expect(options.length).toBe(3);

        // Expand first item
        await userEvent.click(options[0].querySelector('.select-option-content__expander')!);
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(5);

        // Expand first item's first item
        await userEvent.click(options[1].querySelector('.select-option-content__expander')!);
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(6);

        // Collapse first item's first item
        await userEvent.click(options[1].querySelector('.select-option-content__expander')!);
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(5);

        // Collapse first item
        await userEvent.click(options[0].querySelector('.select-option-content__expander')!);
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(3);

        // Set first item as favorite
        await userEvent.click(options[0].querySelector('.favorite-toggler')!);
        await waitFor(() => expect(testObj.onToggleFavorite).toHaveBeenCalledTimes(1));

        // Select first item
        await userEvent.click(options[0]);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                isFavorite: false,
                value: '1',
                text: 'Item 1',
                children: [
                    {
                        value: '1-1',
                        text: 'Item 1-1',
                        children: [{value: '1-1-1', text: 'Item 1-1-1', isFavorite: false}],
                        isFavorite: false
                    },
                    {value: '1-2', text: 'Item 1-2', isFavorite: false}
                ]
            })
        );
    }
};

export const KeyboardInteractionTest: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {
                isFavorite: false,
                value: '1',
                text: 'Item 1',
                children: [
                    {value: '1-1', text: 'Item 1-1', children: [{value: '1-1-1', text: 'Item 1-1-1'}]},
                    {value: '1-2', text: 'Item 1-2'}
                ]
            },
            {
                isFavorite: false,
                value: '2',
                text: 'Item 2'
            },
            {
                isFavorite: false,
                value: '3',
                text: 'Item 3'
            }
        ],
        label: 'Field label',
        onKeyDown: (e, highlightedItem) => {
            if (e.key === KeyboardEventKey.l && e[CTRL_MODIFIER_KEY] && highlightedItem) {
                e.preventDefault();
                testObj.onToggleFavorite(highlightedItem);

                return false;
            }

            return true;
        },
        placeholder: 'Select value',
        renderItemContent: (props) => (
            <SelectOptionContent
                {...props}
                suffix={
                    // Select option content should not be keyboard-focusable.
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                    <div
                        aria-label="Toggle favorite"
                        className="favorite-toggler"
                        onClick={(e) => {
                            e.stopPropagation();
                            testObj.onToggleFavorite(props.item);
                        }}
                        role="button"
                        style={{display: 'inline-flex'}}>
                        <Icon name={props.item.isFavorite ? iconNames.StarFilled : iconNames.Star} size={IconSize.MD} />
                    </div>
                }
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Interaction test for functionality.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        spyOn(testObj, 'onToggleFavorite');

        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown
        await userEvent.click(expandBtn);

        const popover = canvasElement.parentNode?.querySelector('.select__popover');
        let options = popover?.querySelectorAll('.select-option') ?? [];

        await expect(options.length).toBe(3);

        // Expand first item
        await userEvent.keyboard('{ArrowDown}{ArrowRight}');
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(5);

        // Expand first item's first item
        await userEvent.keyboard('{ArrowDown}{ArrowRight}');
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(6);

        // Collapse first item's first item
        await userEvent.keyboard('{ArrowLeft}');
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(5);

        // Collapse first item
        await userEvent.keyboard('{ArrowUp}{ArrowLeft}');
        options = popover?.querySelectorAll('.select-option') ?? [];
        await expect(options.length).toBe(3);

        // Set first item as favorite
        await userEvent.keyboard('{Control>}l{/Control}');
        await waitFor(() => expect(testObj.onToggleFavorite).toHaveBeenCalledTimes(1));

        // Search
        await userEvent.keyboard('2');
        await expect(options.length).toBe(3);

        // Select second item
        await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '1-2',
                text: 'Item 1-2'
            })
        );
    }
};
