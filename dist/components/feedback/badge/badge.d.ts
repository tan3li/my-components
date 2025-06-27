import { AriaRole, ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/icon/icons.js';
export declare const enum BadgeStyle {
    Fill = "fill",
    Outline = "outline",
    Plain = "plain"
}
export declare const enum BadgeVariant {
    Neutral = "neutral",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Informative = "informative"
}
export interface BadgeProps extends RefAttributes<HTMLDivElement> {
    /**
     * Aria label for screen readers.
     */
    ['aria-label']?: string;
    /**
     * Content of the badge.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Icon for badge.
     */
    iconName?: IconName;
    /**
     * Whether badge is disabled.
     */
    isDisabled?: boolean;
    /**
     * Aria role for the element.
     */
    role?: AriaRole;
    /**
     * Visual style for the badge.
     */
    style: BadgeStyle;
    /**
     * Variant of the badge.
     */
    variant: BadgeVariant;
}
export declare function Badge({ 'aria-label': ariaLabel, children, className, iconName, isDisabled, ref, role, style, variant }: BadgeProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=badge.d.ts.map