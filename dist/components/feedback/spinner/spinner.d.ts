import { Size } from '../../../constants/size.js';
import { ReactNode, RefAttributes } from 'react';
import { Position } from '../../../constants/index.js';
import { LabelProps } from '../../text/index.js';
export declare const enum SpinnerVariant {
    Neutral = "neutral",
    Accent = "accent",
    None = "none"
}
export interface SpinnerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if you don't want to have visible label.
     */
    ['aria-label']?: string;
    /**
     * Id of the label element which labels the spinner.
     */
    ['aria-labelledby']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Label for the element.
     */
    label?: ReactNode;
    /**
     * Position of the label.
     */
    labelPosition?: Position.Bottom | Position.Right;
    /**
     * Custom size for label. Use only if you need to override default sizing logic.
     */
    labelSize?: LabelProps['size'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg | Size.xl;
    /**
     * Spinner color variant.
     * If variant = SpinnerVariant.None, color will be inherited from nearest element where color is set.
     */
    variant?: SpinnerVariant;
}
export declare function Spinner({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, className, label, labelPosition, labelSize, ref, size, variant }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=spinner.d.ts.map