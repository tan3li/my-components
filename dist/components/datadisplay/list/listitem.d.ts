import { ReactNode, RefAttributes } from 'react';
export declare const enum ListItemStyle {
    Card = "card",
    Dash = "dash",
    Plain = "plain"
}
export interface ListItemProps extends RefAttributes<HTMLLIElement> {
    /**
     * Body content.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Footer content.
     */
    footer?: ReactNode;
    /**
     * Whether to separate body and footer with separator.
     */
    showFooterSeparator?: boolean;
    /**
     * Display style for the element.
     */
    style?: ListItemStyle;
}
export declare function ListItem({ children, className, footer, ref, showFooterSeparator, style }: ListItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=listitem.d.ts.map