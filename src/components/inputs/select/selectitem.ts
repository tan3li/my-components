import {Key} from 'react-aria-components';
import {ReactNode} from 'react';

export interface SelectItemBase<TItem> {
    /**
     * When provided, item is considered an action which calls the callback on click.
     */
    action?: {
        callback: () => void;
        [key: string]: any;
    };
    /**
     * When provided, item is considered as parent item which has the given children.
     * Should be used for hierarchical lists.
     * Should not be provided at the same time with items property.
     */
    children?: TItem[];
    /**
     * Show separator after item.
     */
    hasSeparator?: boolean;
    /**
     * When provided, item is considered as a group header which has given items under it.
     * Should be used for grouped lists.
     * Should not be provided at the same time with children property.
     */
    items?: TItem[];
    /**
     * When provided, item can be navigated to but cannot be selected.
     */
    isReadOnly?: boolean;
    /**
     * Item's textual value.
     */
    text: string;
    /**
     * Tooltip for item. Shown on hover and keyboard highlight.
     */
    tooltip?: {
        content: ReactNode;
    };
    /**
     * Item's unique identifier.
     */
    value: Key;
    [key: string]: any;
}

export interface SelectItem<TValue extends Key = Key> extends SelectItemBase<SelectItem<TValue>> {
    value: TValue;
}
