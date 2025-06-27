import { TooltipProps as ReactAriaTooltipProps } from 'react-aria-components';
import { ElementType, ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/icon/icons.js';
import { Position } from '../../../constants/position.js';
export declare const enum TooltipType {
    Rich = "rich",
    Plain = "plain"
}
export interface TooltipProps extends ReactAriaTooltipProps, RefAttributes<HTMLDivElement> {
    /**
     * Content of the tooltip.
     */
    children: ReactNode | string;
    /**
     * Content wrapper element type.
     */
    elementType?: ElementType;
    /**
     * Header icon of the tooltip. Only shown for the rich tooltip type.
     */
    headerIconName?: IconName;
    /**
     * Header text of the tooltip. Only shown for the rich tooltip type.
     */
    headerText?: string;
    /**
     * Max width of the tooltip (px).
     */
    maxWidth?: number;
    /**
     * Position of the tooltip.
     */
    position?: Position;
    /**
     * Whether to show the arrow of the tooltip.
     */
    showArrow?: boolean;
    /**
     * Type of the tooltip.
     */
    type: TooltipType;
}
export declare function Tooltip({ children, className, elementType, headerIconName, headerText, maxWidth, position, showArrow, type, ...props }: TooltipProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tooltip.d.ts.map