import { IconName } from '../../media/index.js';
import { CSSProperties, ReactNode, RefAttributes } from 'react';
import { BreadcrumbItem } from '../../navigation/index.js';
export interface PageHeaderProps extends RefAttributes<HTMLDivElement> {
    /**
     * Badge element to display next to the title.
     */
    badge?: ReactNode;
    /**
     * Array of button elements to display next to the title.
     */
    buttons?: ReactNode[];
    /**
     * Breadcrumb items to show above title.
     * Last/current item will be hidden as title prop is interpreted as a replacement for it.
     */
    breadcrumbItems?: BreadcrumbItem[];
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Array of detail elements to display below title.
     */
    details?: ReactNode[];
    /**
     * Icon name for the title.
     */
    iconName?: IconName;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Level of the header. Affects the size of the icon and title text.
     */
    level: number;
    /**
     * Handler that is called when Back-button is pressed.
     */
    onBackPress?: () => void;
    /**
     * Whether Back-button should be visible.
     */
    showBackButton?: boolean;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Title text.
     */
    title: string;
}
export declare function PageHeader({ badge, buttons, breadcrumbItems, className, details, iconName, isSkeleton, level, onBackPress, ref, showBackButton, style, title }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pageheader.d.ts.map