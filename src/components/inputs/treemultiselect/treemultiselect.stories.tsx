import {Meta, StoryObj} from '@storybook/react-webpack5';
import {TreeMultiSelect} from './treemultiselect.js';
import {SelectedItemStyle} from '../multiselect/multiselectchip.js';
import {expect, fn, spyOn, userEvent, waitFor, within} from 'storybook/test';
import {emptyFn} from '../../../utils/functionhelper.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {CTRL_MODIFIER_KEY, KeyboardEventKey} from '../../../constants/index.js';
import {SelectOptionContent} from '../select/index.js';

const meta = {
    args: {
        onBottomLoaderVisible: undefined,
        onExpandedChange: undefined,
        onInputChange: undefined,
        onLoadChildren: undefined,
        onOpenChange: undefined,
        onKeyDown: undefined
    },
    component: TreeMultiSelect,
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
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/TreeMultiSelect'
} satisfies Meta<typeof TreeMultiSelect>;

export default meta;
type Story = StoryObj<typeof TreeMultiSelect>;

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
        selectedItemStyle: SelectedItemStyle.text
    },
    parameters: {
        docs: {
            description: {
                story: 'TreeSelect component, be my guest and play with it!'
            }
        }
    }
};

const testObj = {
    onToggleFavorite: emptyFn
};

export const ClickExpandInteractionTest: Story = {
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
    play: async ({canvasElement}) => {
        spyOn(testObj, 'onToggleFavorite');

        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown
        await userEvent.click(expandBtn);

        const popover = canvasElement.parentNode?.querySelector('.multiselect__popover');
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

        // Close dropdown
        await userEvent.click(expandBtn);
    }
};

export const KeyboardExpandInteractionTest: Story = {
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
    play: async ({canvasElement}) => {
        spyOn(testObj, 'onToggleFavorite');

        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown
        await userEvent.click(expandBtn);

        const popover = canvasElement.parentNode?.querySelector('.multiselect__popover');
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

        // Close dropdown
        await userEvent.click(expandBtn);
    }
};

export const SelectionInteractionTest: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
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
                story: 'Interaction test for functionality.'
            }
        }
    },
    // eslint-disable-next-line max-statements
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown
        await userEvent.click(expandBtn);

        const popover = canvasElement.parentNode?.querySelector('.multiselect__popover');
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

        // Select first item --> should select all its children
        await userEvent.click(options[0]);
        await expect(options[0].hasAttribute('data-selected'), 'Item 1').toBeTruthy();
        await expect(options[1].hasAttribute('data-selected'), 'Item 1-1').toBeTruthy();
        await expect(options[2].hasAttribute('data-selected'), 'Item 1-1-1').toBeTruthy();
        await expect(options[3].hasAttribute('data-selected'), 'Item 1-2').toBeTruthy();
        await expect(options[4].hasAttribute('data-selected'), 'Item 2').toBeFalsy();
        await expect(options[5].hasAttribute('data-selected'), 'Item 3').toBeFalsy();

        // Unselect first item --> children remain selected
        await userEvent.click(options[0]);
        await expect(options[0].hasAttribute('data-selected'), 'Item 1').toBeFalsy();
        await expect(options[1].hasAttribute('data-selected'), 'Item 1-1').toBeTruthy();
        await expect(options[2].hasAttribute('data-selected'), 'Item 1-1-1').toBeTruthy();
        await expect(options[3].hasAttribute('data-selected'), 'Item 1-2').toBeTruthy();
        await expect(options[4].hasAttribute('data-selected'), 'Item 2').toBeFalsy();
        await expect(options[5].hasAttribute('data-selected'), 'Item 3').toBeFalsy();

        // Unselect third item --> parent remains selected
        await userEvent.click(options[2]);
        await expect(options[0].hasAttribute('data-selected'), 'Item 1').toBeFalsy();
        await expect(options[1].hasAttribute('data-selected'), 'Item 1-1').toBeTruthy();
        await expect(options[2].hasAttribute('data-selected'), 'Item 1-1-1').toBeFalsy();
        await expect(options[3].hasAttribute('data-selected'), 'Item 1-2').toBeTruthy();
        await expect(options[4].hasAttribute('data-selected'), 'Item 2').toBeFalsy();
        await expect(options[5].hasAttribute('data-selected'), 'Item 3').toBeFalsy();

        // Unselect second item
        await userEvent.click(options[1]);
        await expect(options[0].hasAttribute('data-selected'), 'Item 1').toBeFalsy();
        await expect(options[1].hasAttribute('data-selected'), 'Item 1-1').toBeFalsy();
        await expect(options[2].hasAttribute('data-selected'), 'Item 1-1-1').toBeFalsy();
        await expect(options[3].hasAttribute('data-selected'), 'Item 1-2').toBeTruthy();
        await expect(options[4].hasAttribute('data-selected'), 'Item 2').toBeFalsy();
        await expect(options[5].hasAttribute('data-selected'), 'Item 3').toBeFalsy();

        // Select third item --> parent remains unselected
        await userEvent.click(options[2]);
        await expect(options[0].hasAttribute('data-selected'), 'Item 1').toBeFalsy();
        await expect(options[1].hasAttribute('data-selected'), 'Item 1-1').toBeFalsy();
        await expect(options[2].hasAttribute('data-selected'), 'Item 1-1-1').toBeTruthy();
        await expect(options[3].hasAttribute('data-selected'), 'Item 1-2').toBeTruthy();
        await expect(options[4].hasAttribute('data-selected'), 'Item 2').toBeFalsy();
        await expect(options[5].hasAttribute('data-selected'), 'Item 3').toBeFalsy();

        // Close dropdown
        await userEvent.click(expandBtn);
    }
};
