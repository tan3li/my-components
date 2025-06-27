import { CSSProperties, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
export interface SkeletonCheckboxProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether to show skeleton for help text.
     */
    hasHelpText?: boolean;
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md;
    /**
     * CSS style for the element.
     */
    style?: CSSProperties;
}
export declare function SkeletonCheckbox({ 'aria-hidden': ariaHidden, className, hasHelpText, ref, size, style }: SkeletonCheckboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletoncheckbox.d.ts.map