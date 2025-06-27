import { ReactNode, RefAttributes } from 'react';
import { ListItemStyle } from './listitem.js';
export interface ListProps<TData extends object> extends RefAttributes<HTMLUListElement> {
    /**
     * The contents of the list.
     * For static lists, use ListItem component.
     * For dynamic lists, provide render function which renders item content or ListItem for each data item.
     */
    children: ReactNode | ((item: TData) => ReactNode);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Data for dynamic list.
     */
    data?: TData[];
    /**
     * Accessor to get unique identifier for dynamic list item.
     * Can be either item id property name or method which returns id value for item.
     */
    idAccessor?: string | ((item: TData) => string | number);
    /**
     * Whether to separate list item body and footer with separator.
     */
    showItemFooterSeparator?: boolean;
    /**
     * Spacing between rows. Should be provided using design tokens.
     * Defaults to 0 with Plain-style and space-sm with other styles.
     */
    spacing?: string;
    /**
     * Display style for the list items.
     */
    style?: ListItemStyle;
}
export declare function List<TData extends object>({ children, className, data, idAccessor, ref, showItemFooterSeparator, spacing, style }: ListProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=list.d.ts.map