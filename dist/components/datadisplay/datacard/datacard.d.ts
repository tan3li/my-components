import { Size } from '../../../constants/index.js';
import { CSSProperties, ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/index.js';
import { BadgeProps } from '../../feedback/index.js';
import { DataCardAction, DataCardAlert, DataCardStyle } from './types.js';
export interface DataCardProps extends RefAttributes<HTMLDivElement> {
    /**
     * CTA for the element. Action element can be the whole card (Self) or Button.
     * Note: Self-option is applied only when Card-style is used.
     */
    action?: DataCardAction;
    /**
     * Options for alert icon to show after value.
     */
    alert?: DataCardAlert;
    /**
     * Props for Badge element displayed in the header area.
     */
    badgeProps?: BadgeProps;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Description text for the value.
     */
    description: string;
    /**
     * Header icon name.
     */
    headerIconName?: IconName;
    /**
     * Header text.
     */
    headerText?: string;
    /**
     * Whether element is disabled. Given actions will be disabled if set.
     */
    isDisabled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
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
    /**
     * Main display value.
     */
    value: string | number;
    /**
     * Slot to provide data visualization.
     */
    visualization?: ReactNode;
}
export declare function DataCard({ action, alert, badgeProps, className, description, headerIconName, headerText, isDisabled, isSkeleton, minWidth, ref, size, style, value, visualization }: DataCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datacard.d.ts.map