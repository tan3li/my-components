import { AriaRole, ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/index.js';
import { Size } from '../../../constants/index.js';
import { IconButtonProps } from '../../action/index.js';
export declare const enum TagStyle {
    Fill = "fill",
    Outline = "outline"
}
export interface TagProps extends RefAttributes<HTMLSpanElement> {
    /**
     * Tag content.
     */
    children: ReactNode;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Icon for the content.
     */
    iconName?: IconName;
    /**
     * Whether tag is disabled.
     */
    isDisabled?: boolean;
    /**
     * Content press callback. Makes the element interactive.
     */
    onPress?: () => void;
    /**
     * Remove callback. If given, remove button will be displayed with this handler attached to it.
     */
    onRemove?: () => void;
    /**
     * Props for remove button. If contains onPress, it will override given onRemove callback.
     */
    removeButtonProps?: Partial<IconButtonProps>;
    /**
     * The ARIA role of the element.
     */
    role?: AriaRole;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Style of the Tag.
     */
    style?: TagStyle;
    /**
     * The ARIA role of the trigger element.
     */
    triggerRole?: AriaRole;
}
export declare function Tag({ children, className, iconName, isDisabled, onPress, onRemove, ref, removeButtonProps, role, size, style, triggerRole }: TagProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tag.d.ts.map