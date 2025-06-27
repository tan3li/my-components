import { ReactNode, RefAttributes } from 'react';
import { Key } from 'react-aria-components';
import { SideNavItem } from './sidenavitem.js';
export declare const enum SideNavMode {
    Default = "default",
    Inverted = "inverted"
}
export interface SideNavProps extends RefAttributes<HTMLDivElement> {
    ['aria-label']: string;
    /**
     * Whether the side nav can be collapsed. Items should have icon when this is set to true.
     */
    canShrink?: boolean;
    /**
     * Set of expanded item keys.
     */
    expandedKeys?: Set<Key>;
    /**
     * The header of the side nav.
     */
    header?: ReactNode | ((isExpanded: boolean) => ReactNode);
    /**
     * Whether the side nav is expanded.
     */
    isExpanded?: boolean;
    /**
     * The items to display in the side nav.
     */
    items: SideNavItem[];
    /**
     * The mode of the side nav.
     */
    mode?: SideNavMode;
    /**
     * Handler that is called when items are expanded or collapsed.
     */
    onExpandedKeysChange?: (keys: Set<Key>) => void;
    /**
     * Callback that is called when the side nav is toggled.
     */
    toggleCallback?: (isExpanded: boolean) => void;
}
export declare function SideNav({ canShrink, expandedKeys: propsExpandedKeys, header, isExpanded, items, mode, onExpandedKeysChange, ref, toggleCallback, ...props }: SideNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=sidenav.d.ts.map