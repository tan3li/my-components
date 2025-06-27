import { ReactNode, RefAttributes } from 'react';
import { TagProps } from '../tag/index.js';
export interface TagGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Tag element or list of Tag elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Maximum number of visible tag rows when in collapsed state.
     */
    maxVisibleRows?: number;
    /**
     * Size of the tags.
     */
    size?: TagProps['size'];
    /**
     * Style of the tags.
     */
    style?: TagProps['style'];
}
export declare function TagGroup({ children: propsChildren, className, maxVisibleRows, ref, size, style }: TagGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=taggroup.d.ts.map