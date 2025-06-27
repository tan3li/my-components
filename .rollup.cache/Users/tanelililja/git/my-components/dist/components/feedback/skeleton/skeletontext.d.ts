import { Size } from '../../../constants/index.js';
import { SkeletonProps } from './skeleton.js';
import { RefAttributes } from 'react';
export declare const enum SkeletonTextType {
    Body = "body",
    Heading = "heading",
    Label = "label",
    Title = "title"
}
export interface SkeletonTextProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Size of text to mimic.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
    /**
     * Type of text to mimic.
     */
    type?: SkeletonTextType;
    /**
     * Width of the element.
     */
    width?: SkeletonProps['width'];
}
export declare function SkeletonText({ 'aria-hidden': ariaHidden, className, ref, size, type, width }: SkeletonTextProps): import("react/jsx-runtime").JSX.Element;
export interface SkeletonTextMultilineProps extends SkeletonTextProps {
    /**
     * Number of lines.
     */
    lineCount?: number;
}
export declare function SkeletonTextMultiline({ 'aria-hidden': ariaHidden, className, lineCount, ref, width, ...props }: SkeletonTextMultilineProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=skeletontext.d.ts.map