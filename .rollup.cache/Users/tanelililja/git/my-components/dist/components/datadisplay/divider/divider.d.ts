import { Size } from '../../../constants/size.js';
import { Orientation } from '../../../constants/orientation.js';
import { Alignment } from '../../../constants/alignment.js';
import { CSSProperties, RefAttributes } from 'react';
export interface DividerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the Divider text label
     */
    alignment?: Alignment;
    /**
     * Additional class names to be applied to the Divider
     */
    className?: string;
    /**
     * Orientation of the Divider
     */
    orientation?: Orientation;
    /**
     * Size of the Divider
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to be displayed in the Divider. If not given, displays only divider line.
     */
    text?: string;
}
export declare function Divider({ alignment, className, orientation, ref, size, style, text }: DividerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=divider.d.ts.map