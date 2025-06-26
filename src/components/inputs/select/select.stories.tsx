import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Select} from './select.js';
import {SelectItem} from './selectitem.js';
import {DataState} from '../../../constants/datastate.js';
import {useMemo, useState} from 'react';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {iconNames} from '../../media/icon/icons.js';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {SpecialSelectItemKey} from './specialselectitemkey.js';
import {Size} from '../../../constants/index.js';
import {SelectOptionContent} from './selectoptioncontent.js';
import {Icon, IconSize} from '../../media/index.js';
import {Label} from '../../text/index.js';
import {InputChangeTriggerAction, SelectProps} from './selectprops.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {Avatar} from '../../navigation/index.js';
import {Badge, BadgeStyle, BadgeVariant} from '../../feedback/index.js';
import {SelectOptionsEmptyState} from './selectoptionsemptystate.js';

const meta = {
    args: {
        onOpenChange: undefined,
        onInputChange: undefined,
        onKeyDown: undefined,
        onSelectionChange: undefined,
        onFocusChange: undefined,
        onBottomLoaderVisible: undefined
    },
    component: Select,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', minWidth: '210px'}}>
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
    title: 'Components/Inputs/Select'
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
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
        ],
        label: 'Field label',
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Select component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = ['dataState', 'helpText', 'isDisabled', 'isReadOnly', 'isRequired', 'isSkeleton', 'label'];

export const Disabled: Story = {
    args: {
        helpText: 'Help text content',
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isDisabled']
        },
        docs: {
            description: {
                story: 'Disabled state can be set by passing isDisabled prop. Items can be disabled by providing disabledKeys.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Select {...args} isDisabled={true} label="Disabled" />
            <Select {...args} disabledKeys={['2']} label="Disabled option" />
        </div>
    )
};

export const ReadOnly: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: true,
        isRequired: false,
        label: 'Field label',
        items: [{value: '1', text: 'Option 1'}],
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isReadOnly']
        },
        docs: {
            description: {
                story: 'Read-only state can be set by passing isReadOnly prop.'
            }
        }
    }
};

export const Invalid: Story = {
    args: {
        dataState: new Map([[DataState.ERROR, 'There is something wrong here.']]),
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Error state can be set by passing isInvalid prop or dataState with ERROR.'
            }
        }
    }
};

export const Grouped: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
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
        ],
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
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
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
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
            <Select
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

export const Create: Story = {
    args: {
        allowCreate: true,
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Select value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'New item creation can be handled by setting allowCreate prop.'
            }
        }
    },
    render: (args) => {
        const [items, setItems] = useState<SelectItem[]>([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ]);
        const [selectedItem, setSelectedItem] = useState<{guid: string; name: string} | null>(null);

        const onChange = (obj) => {
            let item = obj;

            if (obj.value === SpecialSelectItemKey.CREATABLE) {
                const id = items.length + 1;

                item = {value: id.toString(), text: obj.text};

                setItems([...items, {value: id.toString(), text: obj.text}]);
            }

            setSelectedItem({
                guid: item.value,
                name: item.text
            });
        };

        return (
            <Select
                {...args}
                changeCallback={onChange}
                items={items}
                text={selectedItem?.name}
                value={selectedItem?.guid}
            />
        );
    }
};

export const NoSearch: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        isSearchable: false,
        items: [
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
        ],
        placeholder: 'Select value',
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Can be used without search when isSearchable prop is passed as false.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Select {...args} label="Default" value={undefined} />
            <Select {...args} isReadOnly={true} label="Read-only" />
            <Select {...args} isDisabled={true} label="Disabled" />
            <Select {...args} isInvalid={true} label="Error" />
        </div>
    )
};

export const LongText: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
            {value: '1', text: 'First very long option text which does not fit'},
            {value: '2', text: 'Second very long option text which does not fit'}
        ],
        text: 'First very long option text which does not fit',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Ellipsis will be shown when does not fit the box.'
            }
        }
    }
};

export const StartIcon: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        placeholder: 'Select value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Select can shown with or without start icon.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 200px)', columnGap: '3rem', rowGap: '1rem'}}>
            <Select {...args} label="Searchable" />
            <Select {...args} label="Searchable, Start Icon" startIconName={iconNames.Person} />
            <Select {...args} isSearchable={false} label="Non-searchable" />
            <Select
                {...args}
                isSearchable={false}
                label="Non-Searchable, Start Icon"
                startIconName={iconNames.Person}
            />
        </div>
    )
};

export const Clear: Story = {
    args: {
        isClearable: true,
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        placeholder: 'Select value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Clear button is shown when isClearable is set.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 200px)', columnGap: '3rem', rowGap: '1rem'}}>
            <Select {...args} label="Searchable" text="Option 1" value="1" />
            <Select {...args} isSearchable={false} label="Non-searchable" text="Option 1" value="1" />
        </div>
    )
};

export const Plain: Story = {
    args: {
        'aria-label': 'Plain',
        isDisabled: false,
        isInvalid: false,
        isPlain: true,
        isReadOnly: false,
        isRequired: false,
        isSearchable: false,
        menuWidth: '200px',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        placeholder: 'Select value',
        startIconName: iconNames.Person
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Element is rendered with plain style when isPlain is set.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <Select {...args} />
            <Select {...args} dataState={new Map([[DataState.ERROR, 'There is something wrong here.']])} />
        </div>
    )
};

export const Sizes: Story = {
    args: {
        isClearable: true,
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        placeholder: 'Select value',
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Element can be rendered in different sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: '2rem'}}>
            <div>Searchable</div>
            <div>Non-searchable</div>
            <div>Plain</div>

            <Select {...args} isSearchable={true} label="Size md" size={Size.md} />
            <Select {...args} isSearchable={false} label="Size md" size={Size.md} />
            <Select {...args} isPlain={true} isSearchable={false} label="Size md" size={Size.md} />

            <Select {...args} isSearchable={true} label="Size sm" size={Size.sm} />
            <Select {...args} isSearchable={false} label="Size sm" size={Size.sm} />
            <Select {...args} isPlain={true} isSearchable={false} label="Size sm" size={Size.sm} />

            <Select {...args} isSearchable={true} label="Size xs" size={Size.xs} />
            <Select {...args} isSearchable={false} label="Size xs" size={Size.xs} />
            <Select {...args} isPlain={true} isSearchable={false} label="Size xs" size={Size.xs} />
        </div>
    )
};

export const OptionContent: Story = {
    args: {},
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Option content can be customized by using renderItemContent prop and SelectOptionContent component.'
            }
        }
    },
    render: (args) => {
        const commonArgs = args as SelectProps<AnyObject, SelectItem<string>>;

        return (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 250px)', gap: '1rem'}}>
                <Select
                    {...commonArgs}
                    disabledKeys={['2']}
                    items={[
                        {value: '1', text: 'John Doe', role: 'Software Developer'},
                        {value: '2', text: 'Arthur Rodriguez', role: 'UX Designer'},
                        {value: '3', text: 'Kevin Young', role: 'Project manager'}
                    ]}
                    label="Avatar"
                    renderItemContent={(props) => {
                        const {text, role} = props.item;
                        const initials = text
                            .split(' ')
                            .map((n) => n[0])
                            .join('');

                        return (
                            <SelectOptionContent
                                {...props}
                                bodyPrefix={
                                    <Avatar alt={text} isDisabled={props.isDisabled} size={Size.lg} text={initials} />
                                }
                                description={role}
                            />
                        );
                    }}
                    text="John Doe"
                    value="1"
                />
                <Select
                    {...commonArgs}
                    disabledKeys={['2']}
                    items={[
                        {value: '1', text: 'Design', code: '5'},
                        {value: '2', text: 'Development', code: '22'},
                        {value: '3', text: 'Sales', code: '123'}
                    ]}
                    label="Code"
                    renderItemContent={(props) => {
                        const {code} = props.item;

                        return <SelectOptionContent {...props} bodySuffix={<Label size={Size.md}>{code}</Label>} />;
                    }}
                    text="Design"
                    value="1"
                />
                <Select
                    {...commonArgs}
                    disabledKeys={['2']}
                    items={[
                        {value: '1', text: 'Design', code: '5'},
                        {value: '2', text: 'Development', code: '22'},
                        {value: '3', text: 'Sales', code: '123'}
                    ]}
                    label="Badge"
                    renderItemContent={(props) => {
                        const {code} = props.item;

                        return (
                            <SelectOptionContent
                                {...props}
                                bodySuffix={
                                    <Badge
                                        isDisabled={props.isDisabled}
                                        style={BadgeStyle.Outline}
                                        variant={BadgeVariant.Neutral}>
                                        {code}
                                    </Badge>
                                }
                            />
                        );
                    }}
                    text="Design"
                    value="1"
                />
                <Select
                    {...commonArgs}
                    disabledKeys={['2']}
                    items={[
                        {value: '1', text: 'Option 1'},
                        {value: '2', text: 'Option 2'},
                        {value: '3', text: 'Option 3'}
                    ]}
                    label="Everything everywhere all at once"
                    menuWidth={300}
                    renderItemContent={(props) => (
                        <SelectOptionContent
                            {...props}
                            bodyPrefix={<Icon name={iconNames.Lock} size={IconSize.MD} />}
                            bodySuffix={<Label size={Size.md}>Value</Label>}
                            description="Description here"
                            suffix={<Icon name={iconNames.Star} size={IconSize.MD} />}
                        />
                    )}
                    text="Option 1"
                    value="1"
                />
            </div>
        );
    }
};

export const OptionTooltip: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
            {
                value: '1',
                text: 'Option 1',
                description: 'Some description',
                tooltip: {
                    content: 'Tooltip'
                }
            },
            {
                value: '2',
                text: 'Option 2 label which is shown in tooltip because it does not fit to 2 lines',
                description: 'Option 2 description'
            },
            {
                value: '3',
                text: 'Option 3',
                description: 'Option 2 description which is shown in tooltip because it does not fit to 2 lines'
            },
            {
                value: '4',
                text: 'Option 4 label which is shown in tooltip because it does not fit to 2 lines',
                description: 'Option 4 description which is shown in tooltip because it does not fit to 2 lines'
            },
            {
                value: '5',
                text: 'Option 5 label which is shown in tooltip because it does not fit to 2 lines',
                description: 'Option 5 description which is shown in tooltip because it does not fit to 2 lines',
                tooltip: {
                    content: 'Option 5 tooltip'
                }
            }
        ],
        placeholder: 'Select value',
        renderItemContent: (props) => <SelectOptionContent {...props} description={props.item.description} />
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Set tooltip property for item to display tooltip. Tooltip is also displayed if label or description text is truncated. If item has tooltip and truncated text, both are shown in combined tooltip.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        isSkeleton: true,
        label: 'Field label',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        text: 'Option 1',
        value: '1'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Select can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const InputAndSearchHybrid: Story = {
    args: {
        helpText: 'Help text content',
        isClearable: true,
        label: 'Field label',
        preserveInputValue: true,
        renderItemsEmptyState: (props) => (
            <SelectOptionsEmptyState
                {...props}
                iconName={iconNames.InfoFilled}
                key="empty"
                text="Type to search or enter a custom value"
            />
        )
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Select can work as input field and searchable combobox at the same time with preserveInputValue prop. Empty state can be customized using renderItemsEmptyState prop. If needed, open state can be controlled with isOpen and onOpenChange props.'
            }
        }
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        const items = useMemo<SelectItem[]>(
            () => Array.from({length: 3}, (_, i) => ({value: i.toString(), text: `Option ${i + 1}`})),
            []
        );
        const [filteredItems, setFilteredItems] = useState<SelectItem[]>([]);
        const [selectedItem, setSelectedItem] = useState<{guid: string | null; name: string} | null>(null);

        const onInputChange = (text: string, inputChangeTrigger: InputChangeTriggerAction) => {
            setFilteredItems(text ? items.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())) : []);

            if (inputChangeTrigger === InputChangeTriggerAction.Input) {
                setSelectedItem({guid: 'custom', name: text});
            }
        };

        const onChange = ({value, text}) => {
            setSelectedItem({guid: value, name: text ?? ''});
        };

        return (
            <Select
                {...args}
                changeCallback={onChange}
                isOpen={isOpen}
                items={filteredItems}
                onInputChange={onInputChange}
                onOpenChange={setIsOpen}
                placeholder="Value"
                text={selectedItem?.name}
                value={selectedItem?.guid}
            />
        );
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        label: 'Field label'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
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

        let popover = canvasElement.parentNode?.querySelector('.select__popover'),
            options = popover?.querySelectorAll('.select-option') ?? [];

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

        const input = canvasElement.querySelector('.select__input')!;

        await userEvent.clear(input);
        await userEvent.type(input, '2');

        popover = canvasElement.parentNode?.querySelector('.select__popover');
        options = popover?.querySelectorAll('.select-option') ?? [];

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
