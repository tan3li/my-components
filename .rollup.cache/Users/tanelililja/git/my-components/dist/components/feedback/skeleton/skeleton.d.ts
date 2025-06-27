import { CSSProperties, RefAttributes } from 'react';
export declare const enum SkeletonShape {
    Circle = "circle",
    Rectangle = "rectangle"
}
export interface SkeletonProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Height of the element.
     */
    height?: CSSProperties['height'];
    /**
     * Unique id for the element.
     */
    id?: string;
    /**
     * Shape of the element.
     */
    shape?: SkeletonShape;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Width of the element.
     */
    width?: CSSProperties['width'];
}
export declare function Skeleton({ 'aria-hidden': ariaHidden, className, height, shape, style, width, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeleton.d.ts.map