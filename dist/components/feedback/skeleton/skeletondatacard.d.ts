import { CSSProperties, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
import { DataCardStyle } from '../../datadisplay/index.js';
export interface SkeletonDataCardProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether has header icon. Affects only when hasHeaderText = true.
     */
    hasHeaderIcon?: boolean;
    /**
     * Whether has header text.
     */
    hasHeaderText?: boolean;
    /**
     * Whether has visualization.
     */
    hasVisualization?: boolean;
    /**
     * Minimum width for the card.
     */
    minWidth?: CSSProperties['minWidth'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * Display style of the element.
     */
    style: DataCardStyle;
}
export declare function SkeletonDataCard({ 'aria-hidden': ariaHidden, className, hasHeaderIcon, hasHeaderText, hasVisualization, minWidth, size, style, ref }: SkeletonDataCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletondatacard.d.ts.map