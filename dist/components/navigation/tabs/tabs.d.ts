import { TabsProps as ReactAriaTabsProps } from 'react-aria-components';
import { ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/icon/icons.js';
import { Orientation } from '../../../constants/orientation.js';
import { Alignment } from '../../../constants/alignment.js';
export interface PanelItem {
    content: ReactNode;
    id: string;
}
export interface TabItem {
    badgeText?: string;
    iconName?: IconName;
    id: string;
    isDisabled?: boolean;
    name: string;
}
export declare const enum TabsType {
    Card = "card",
    Underline = "underline"
}
export interface TabsProps extends ReactAriaTabsProps, RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the tabs.
     */
    alignment?: Exclude<Alignment, 'end'>;
    /**
     * Orientation of the tabs. Vertical can only be used with underline.
     */
    orientation?: Orientation;
    /**
     * List of panel items.
     */
    panelItems: PanelItem[];
    /**
     * List of Tab items.
     */
    tabItems: TabItem[];
    /**
     * Type of the tabs
     */
    type?: TabsType;
}
export declare function Tabs({ alignment, orientation, panelItems, tabItems, type, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tabs.d.ts.map