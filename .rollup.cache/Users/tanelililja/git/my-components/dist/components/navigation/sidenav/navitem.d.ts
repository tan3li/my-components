import { SideNavItem } from './sidenavitem.js';
export declare const enum NavItemType {
    Main = "main",
    Indented = "indented",
    GroupHeading = "group-heading"
}
interface NavItemProps {
    /**
     * Unique id for DOM element.
     */
    domId?: string;
    /**
     * Whether the item is using inverted colors.
     */
    inverted?: boolean;
    /**
     * Whether the item is active.
     */
    isActive?: boolean;
    /**
     * Whether the item is expanded.
     */
    isExpanded?: boolean;
    /**
     * Item property object.
     */
    item: SideNavItem;
    /**
     * The indentation level of the item.
     */
    level?: number;
    /**
     * Whether to show placeholder for expander when expander is not visible.
     */
    showExpanderPlaceholder?: boolean;
    /**
     * The type of the item.
     */
    type?: NavItemType;
}
export declare function NavItem({ domId, inverted, isActive, isExpanded, item, level, showExpanderPlaceholder, type }: NavItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=navitem.d.ts.map