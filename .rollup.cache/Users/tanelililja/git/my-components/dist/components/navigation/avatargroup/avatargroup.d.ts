import { ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
export declare const enum AvatarGroupLayout {
    Grid = "grid",
    Stack = "stack"
}
export interface AvatarGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Avatar element or list of Avatar elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Avatars can be displayed with stack or grid layout.
     */
    layout?: AvatarGroupLayout;
    /**
     * Max visible avatar count. Applied only for the grid layout.
     */
    maxVisibleCount?: number;
    /**
     * Size of the avatars.
     */
    size?: Size.sm | Size.md | Size.lg;
}
export declare function AvatarGroup({ children: propsChildren, className, layout, maxVisibleCount, ref, size }: AvatarGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=avatargroup.d.ts.map