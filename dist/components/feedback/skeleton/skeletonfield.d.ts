import { CSSProperties, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
export interface SkeletonFieldProps extends RefAttributes<HTMLDivElement> {
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
     * Whether to show skeleton for label text.
     */
    hasLabel?: boolean;
    /**
     * Custom height for the "input" rectangle element. Determined by size prop when not set.
     */
    inputRectHeight?: CSSProperties['height'];
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md | Size.lg;
    /**
     * CSS style for the element.
     */
    style?: CSSProperties;
}
export declare function SkeletonField({ 'aria-hidden': ariaHidden, className, hasHelpText, hasLabel, inputRectHeight, ref, size, style }: SkeletonFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletonfield.d.ts.map