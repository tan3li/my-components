import { RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
export interface SkeletonColorSwatchPickerProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of skeleton items to render.
     */
    itemCount: number;
    /**
     * Whether items are displayed in a grid or stack.
     */
    layout?: 'grid' | 'stack';
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
}
export declare function SkeletonColorSwatchPicker({ 'aria-hidden': ariaHidden, className, itemCount, layout, ref, size }: SkeletonColorSwatchPickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletoncolorswatchpicker.d.ts.map