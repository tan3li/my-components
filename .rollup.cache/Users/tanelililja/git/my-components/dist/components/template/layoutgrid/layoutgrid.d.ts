import { ReactNode, RefAttributes } from 'react';
import { BreakpointValues } from './breakpointvalues.js';
export declare const enum LayoutGridColumnSpacing {
    Default = "var(--space-md)",
    Compact = "var(--space-xs)",
    Comfy = "var(--space-xl)",
    None = "var(--space-none)"
}
export interface LayoutGridProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Spacing between columns. Can be provided as single value or per breakpoint.
     */
    columnSpacing?: LayoutGridColumnSpacing | BreakpointValues<LayoutGridColumnSpacing>;
    /**
     * Spacing between row. Can be provided as single value or per breakpoint.
     */
    rowSpacing?: string | BreakpointValues<string>;
}
export declare function LayoutGrid({ children, className, columnSpacing, ref, rowSpacing }: LayoutGridProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=layoutgrid.d.ts.map