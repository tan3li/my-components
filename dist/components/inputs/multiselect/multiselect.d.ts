import { SelectItemBase } from '../select/selectitem.js';
import { CSSProperties, KeyboardEvent, ReactNode, RefAttributes } from 'react';
import { TDataState } from '../../../constants/datastate.js';
import { Size } from '../../../constants/size.js';
import { SelectedItemStyle } from './multiselectchip.js';
import { TooltipContent } from '../../text/fieldlabel/fieldlabel.js';
import { InputChangeTriggerAction } from '../select/selectprops.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectOptionContentProps } from '../select/selectoptioncontentprops.js';
interface CreateOptions<T> {
    /**
     * Handler to get text node for creatable item.
     * Default text will be used if not provided.
     */
    getTextNode?: (text: string) => ReactNode;
    /**
     * Whether creatable item is visible when search text is not found from existing items or selectedItems.
     */
    isAllowed: boolean | ((text: string) => boolean);
    /**
     * Handler to call when creatable item is selected.
     */
    onCreate?: (item: T) => void;
}
export interface MultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if actual label is not provided.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & {
        value: TItem[];
    }) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Options for item creation.
     */
    createOptions?: CreateOptions<TItem>;
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
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether required indicator is visible.
     */
    isRequired?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
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
     * Label for the element.
     */
    label?: ReactNode;
    /**
     * Width for the menu.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called on keyboard event in menu toggler.
     */
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    /**
     * Handler that is called when menu open status changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placeholder for input field when there are no selected items and element does not have focus.
     */
    placeholder?: string;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Selected items can be display with tag or text style. If not given, text style is the default.
     */
    selectedItemStyle?: SelectedItemStyle;
    /**
     * List of selected items.
     */
    selectedItems?: TItem[];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
export declare function MultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ changeCallback, changeParams, className, createOptions, dataState, disabledKeys, expandedKeys, helpText, isLoading, isRequired, isSkeleton, itemClassName, items, label, menuWidth, onBottomLoaderVisible, onOpenChange, ref, renderItemContent, selectedItemStyle, showHelpTextIcon, size, tooltipContent, ...props }: MultiSelectProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=multiselect.d.ts.map