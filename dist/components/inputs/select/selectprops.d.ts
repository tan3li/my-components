import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectItemBase } from './selectitem.js';
import { TDataState } from '../../../constants/datastate.js';
import { CSSProperties, KeyboardEvent, ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
import { IconName } from '../../media/index.js';
import { TooltipContent } from '../../text/index.js';
import { SelectOptionContentProps } from './selectoptioncontentprops.js';
import { SelectOptionsEmptyStateProps } from './selectoptionsemptystate.js';
export declare const enum InputChangeTriggerAction {
    Focus = "focus",
    Input = "input"
}
export type SelectChangeItem<T> = {
    [K in keyof T]: K extends 'value' ? T[K] | null : K extends 'text' ? T[K] | undefined : T[K];
};
export interface SelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Whether to show creatable option when searched option is not found.
     */
    allowCreate?: boolean;
    /**
     * Label for screen readers if actual label is not provided.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & SelectChangeItem<TItem>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether field is in error state.
     */
    isInvalid?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether popover is open.
     */
    isOpen?: boolean;
    /**
     * Display element with borderless style. isSearchable must be false for this to take effect.
     */
    isPlain?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether required indicator is visible.
     */
    isRequired?: boolean;
    /**
     * Whether options are searchable or not. True by default.
     */
    isSearchable?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label of the field.
     */
    label?: ReactNode;
    /**
     * Width for the popover.
     * If not given, width will be calculated automatically based on trigger width.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when focus changes.
     */
    onFocusChange?: (isFocused: boolean) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called on keyboard event in menu toggler.
     * Return value indicates whether handling flow should continue.
     */
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    /**
     * Handler that is called when popover open state changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Handler that is called when selection changes.
     */
    onSelectionChange?: (value: TItem['value'] | null) => void;
    /**
     * Placeholder to show when there is no selected value.
     */
    placeholder?: string;
    /**
     * Whether to preserve input value on focus out of the field.
     */
    preserveInputValue?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Whether to show search icon when isSearchable = true. Defaults to true.
     */
    showSearchIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of the field.
     */
    startIconName?: IconName;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Custom renderer for items empty state.
     */
    renderItemsEmptyState?: (props: SelectOptionsEmptyStateProps) => ReactNode;
    /**
     * Custom renderer to display content at the start of the field.
     */
    renderStartContent?: (selectedItem: TItem | null) => ReactNode;
    /**
     * Text to show when popover is closed and isSearchable.
     */
    text?: string;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Selected value/key.
     */
    value?: TItem['value'] | null;
}
//# sourceMappingURL=selectprops.d.ts.map