import { ReactNode, RefAttributes } from 'react';
import { BreakpointValues } from './breakpointvalues.js';
export declare const LayoutGridItemPresetSize: {
    Full: {
        xs: number;
        sm: number;
        lg: number;
    };
    Half: {
        xs: number;
        sm: number;
        lg: number;
    };
};
export interface LayoutGridItemProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid item.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * How many units does the item take space in a grid.
     * Can be provided as single value or per breakpoint.
     */
    size: number | BreakpointValues<number>;
    /**
     * From which column item starts in a grid.
     * Can be provided as single value or per breakpoint.
     */
    start?: number | BreakpointValues<number>;
}
export declare function LayoutGridItem({ children, className, ref, size, start }: LayoutGridItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=layoutgriditem.d.ts.map