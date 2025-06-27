import { Key, MenuProps as ReactAriaMenuProps } from 'react-aria-components';
import { MenuOptionProps } from './menuoption.js';
import { ReactNode, RefAttributes } from 'react';
import { Placement } from 'react-aria';
import { ButtonRole } from '../button/index.js';
export declare const enum SubmenuBehavior {
    Separate = "separate",
    InPlace = "in-place"
}
export declare const enum SelectionMode {
    Single = "single",
    Multiple = "multiple"
}
export interface MenuItem {
    id: Key;
    name: string;
    props?: MenuOptionProps;
    children?: MenuItem[];
    hasSeparator?: boolean;
    isSubmenuTrigger?: boolean;
    submenuBehavior?: SubmenuBehavior;
    selectionMode?: SelectionMode;
}
export interface MenuFooterItem {
    id: Key;
    name: string;
    onPress?: () => void;
    role?: ButtonRole;
}
export interface MenuProps<T> extends Omit<ReactAriaMenuProps<T>, 'children' | 'items'>, RefAttributes<HTMLDivElement> {
    /**
     * Menu trigger element.
     */
    children: ReactNode;
    /**
     * Header content.
     */
    header?: ReactNode;
    /**
     * List of footer items.
     */
    footerItems?: MenuFooterItem[];
    /**
     * List of menu items.
     */
    items: MenuItem[];
    /**
     * Minimum width for the menu in pixels.
     */
    minWidth?: number;
    /**
     * Handler that is called when open state changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placement of the menu in relation to its trigger element.
     */
    placement?: Placement;
}
export declare function Menu<T extends MenuItem>({ className, children, footerItems, header, minWidth, onOpenChange: propsOnOpenChange, placement, ref, ...props }: MenuProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=menu.d.ts.map