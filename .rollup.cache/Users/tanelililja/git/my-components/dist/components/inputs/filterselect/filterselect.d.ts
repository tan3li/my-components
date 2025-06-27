import { CSSProperties, ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { InputChangeTriggerAction, SelectChangeItem, SelectItemBase } from '../select/index.js';
import { IconName } from '../../media/index.js';
import { SelectOptionContentProps } from '../select/selectoptioncontentprops.js';
export interface FilterSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
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
     * CSS class name for the element.
     */
    className?: string;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared. True by default.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether menu can be opened for selection.
     */
    isSelectable?: boolean;
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
    label: string;
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
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Placeholder to show in search field.
     */
    searchPlaceholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
    /**
     * Text to show when popover is closed and isSearchable.
     */
    text?: string;
    /**
     * Selected value/key.
     */
    value?: TItem['value'] | null;
}
export declare function FilterSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ changeCallback, changeParams, className, disabledKeys, expandedKeys, helpText, isClearable, isDisabled, isLoading, isSelectable, isSkeleton, itemClassName, items, label, menuWidth, onBottomLoaderVisible, onInputChange: propsOnInputChange, ref, renderItemContent, searchPlaceholder, showHelpTextIcon, size, startIconName, text, value }: FilterSelectProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=filterselect.d.ts.map