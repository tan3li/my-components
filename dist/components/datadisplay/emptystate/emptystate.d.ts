import { ButtonProps } from '../../action/button/button.js';
import { IconSize } from '../../media/icon/icon.js';
import { IconName } from '../../media/icon/icons.js';
import { RefAttributes } from 'react';
export declare const enum EmptyStateLayoutVariant {
    Centered = "centered",
    LeftAligned = "left-aligned",
    SideBySide = "side-by-side"
}
export interface EmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * Body text.
     */
    bodyText: string;
    /**
     * Props for the button.
     */
    buttonProps?: ButtonProps;
    /**
     * Additional class name to be applied to the EmptyState component.
     */
    className?: string;
    /**
     * Descriptive icon.
     */
    iconName?: IconName;
    /**
     * Size of the icon. Defaults to IconSize.XXL.
     */
    iconSize?: IconSize;
    /**
     * Layout of the EmptyState component. Defaults to EmptyStateLayoutVariant.SideBySide.
     */
    layout?: EmptyStateLayoutVariant;
    /**
     * Title text.
     */
    title: string;
}
export declare function EmptyState({ bodyText, buttonProps, className, iconName, iconSize, layout, ref, title }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=emptystate.d.ts.map