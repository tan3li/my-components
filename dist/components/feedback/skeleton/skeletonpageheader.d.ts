import { RefAttributes } from 'react';
export interface SkeletonPageHeaderProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether has breadcrumbs.
     */
    hasBreadcrumbs?: boolean;
    /**
     * Whether has details.
     */
    hasDetails?: boolean;
    /**
     * Whether has icon.
     */
    hasIcon?: boolean;
    /**
     * Heading level.
     */
    level: number;
}
export declare function SkeletonPageHeader({ 'aria-hidden': ariaHidden, className, hasBreadcrumbs, hasDetails, hasIcon, level, ref }: SkeletonPageHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletonpageheader.d.ts.map