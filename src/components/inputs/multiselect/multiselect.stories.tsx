import {Meta, StoryObj} from '@storybook/react-webpack5';
import {MultiSelect, MultiSelectProps} from './multiselect.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {SelectedItemStyle} from './multiselectchip.js';
import {CSSProperties, useState} from 'react';
import {SelectItem} from '../select/selectitem.js';
import {DataState} from '../../../constants/datastate.js';
import {Size} from '../../../constants/index.js';
import {SelectOptionContent} from '../select/index.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {Avatar} from '../../navigation/index.js';
import {Label} from '../../text/index.js';
import {Badge, BadgeStyle, BadgeVariant} from '../../feedback/index.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';

const meta = {
    args: {
        onBottomLoaderVisible: undefined,
        onKeyDown: undefined,
        onInputChange: undefined,
        onOpenChange: undefined
    },
    component: MultiSelect,
    decorators: [
        (Story, context) => {
            const style: CSSProperties = {
                padding: 5
            };
            const useMinWidth = context.name === 'Option Content';

            if (useMinWidth) {
                style.minWidth = 310;
            } else {
                style.width = 310;
            }

            return (
                <div style={style}>
                    <Story />
                </div>
            );
        }
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/MultiSelect'
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Playground: Story = {
    args: {
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
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Select values',
        selectedItems: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ],
        selectedItemStyle: SelectedItemStyle.text
    },
    parameters: {
        docs: {
            description: {
                story: 'MultiSelect component, be my guest and play with it!'
            }
        }
    }
};

export const TagStyle: Story = {
    args: {
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
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Select values',
        selectedItems: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ],
        selectedItemStyle: SelectedItemStyle.tag
    },
    parameters: {
        docs: {
            description: {
                story: 'Selected items can be displayed with tag style.'
            }
        }
    }
};

export const Disabled: Story = {
    args: {
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'},
            {value: '5', text: 'Option 5'},
            {value: '6', text: 'Option 6'}
        ],
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Select values',
        selectedItems: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'}
        ],
        selectedItemStyle: SelectedItemStyle.text
    },
    parameters: {
        controls: {
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
            <MultiSelect {...args} isDisabled={true} label="Disabled" />
            <MultiSelect {...args} disabledKeys={['5']} label="Disabled option" />
        </div>
    )
};

export const ReadOnly: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: true,
        isRequired: false,
        label: 'Field label',
        items: [{value: '1', text: 'Option 1'}],
        selectedItems: [{value: '1', text: 'Option 1'}]
    },
    parameters: {
        controls: {
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
        selectedItems: [{value: '1', text: 'Option 1'}]
    },
    parameters: {
        docs: {
            description: {
                story: 'Error state can be set by passing dataState with ERROR.'
            }
        }
    }
};

export const Grouped: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
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
        placeholder: 'Select values'
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
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Select values',
        selectedItemStyle: SelectedItemStyle.text
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

        return (
            <MultiSelect
                {...args}
                isLoading={isLoading}
                items={filteredItems ?? items}
                onBottomLoaderVisible={onBottomLoaderVisible}
                onInputChange={onInputChange}
            />
        );
    }
};

export const Sizes: Story = {
    args: {
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ],
        selectedItems: [{value: '1', text: 'Option 1'}]
    },
    parameters: {
        docs: {
            description: {
                story: 'Element can be displayed in 3 sizes.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <MultiSelect {...args} label="Size md" size={Size.md} />
            <MultiSelect {...args} label="Size sm" size={Size.sm} />
            <MultiSelect {...args} label="Size xs" size={Size.xs} />
        </div>
    )
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const Create: Story = {
    args: {
        createOptions: {
            getTextNode: (text) => (
                <>
                    Use &quot;<strong>{text}</strong>&quot;
                </>
            ),
            isAllowed: (text) => emailRegex.test(text)
        },
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        items: [
            {value: '1', text: 'John Doe'},
            {value: '2', text: 'Jane Doe'},
            {value: '3', text: 'Kevin Young'}
        ],
        label: 'Send to',
        placeholder: 'Select users or add emails',
        selectedItemStyle: SelectedItemStyle.tag
    },
    parameters: {
        docs: {
            description: {
                story: 'New item creation can be handled by setting createOptions prop.'
            }
        }
    }
};

export const OptionContent: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Option content can be customized by using renderItemContent prop and SelectOptionContent component.'
            }
        }
    },
    render: (args) => {
        const commonArgs = args as MultiSelectProps<AnyObject, SelectItem<string>>;

        return (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 250px)', gap: '1rem'}}>
                <MultiSelect
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
                    selectedItems={[{value: '1', text: 'John Doe', role: 'Software Developer'}]}
                />
                <MultiSelect
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
                    selectedItems={[{value: '1', text: 'Design', code: '5'}]}
                />
                <MultiSelect
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
                    selectedItems={[{value: '1', text: 'Design', code: '5'}]}
                />
                <MultiSelect
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
                    selectedItems={[{value: '1', text: 'Option 1'}]}
                />
            </div>
        );
    }
};

export const OptionTooltip: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
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
        placeholder: 'Select values',
        renderItemContent: (props) => <SelectOptionContent {...props} description={props.item.description} />
    },
    parameters: {
        docs: {
            description: {
                story: 'Set tooltip property for item to display tooltip. Tooltip is also displayed if label or description text is truncated. If item has tooltip and truncated text, both are shown in combined tooltip.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
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
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Select values',
        selectedItems: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'}
        ],
        selectedItemStyle: SelectedItemStyle.text
    },
    parameters: {
        docs: {
            description: {
                story: 'MultiSelect can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        helpText: 'Help text content',
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        items: [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ]
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

        let popover = canvasElement.parentNode?.querySelector('.multiselect__popover'),
            options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);
        await userEvent.click(expandBtn);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: [{value: '1', text: 'Option 1'}]
            })
        );

        // Open dropdown, search for "2" and select first item
        await userEvent.click(expandBtn);

        const input = canvasElement.querySelector('.multiselect__input')!;

        await userEvent.type(input, '2');

        popover = canvasElement.parentNode?.querySelector('.multiselect__popover');
        options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);
        await userEvent.click(expandBtn);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: [
                    {value: '1', text: 'Option 1'},
                    {value: '2', text: 'Option 2'}
                ]
            })
        );
    }
};
