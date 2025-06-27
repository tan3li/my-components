import { CSSProperties, ReactNode, RefAttributes } from 'react';
export interface TopNavItem {
    ariaHidden?: boolean;
    id: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface TopNavProps extends RefAttributes<HTMLElement> {
    /**
     * Defines a string value that labels the nav element.
     */
    ['aria-label']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Content on the left side of the top navigation.
     */
    leftItems: TopNavItem[];
    /**
     * Content on the right side of the top navigation.
     */
    rightItems: TopNavItem[];
    /**
     * Whether to show loading indicator.
     */
    showLoadingIndicator?: boolean;
}
export declare function TopNav({ 'aria-label': ariaLabel, className, leftItems, rightItems, ref, showLoadingIndicator }: TopNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=topnav.d.ts.map