import { HTMLAttributes, ReactNode, RefAttributes } from 'react';
export interface DayOfMonthProps extends RefAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
    /**
     * Custom content to display.
     */
    customContent?: ReactNode;
    /**
     * Whether to use completed style.
     */
    isCompleted?: boolean;
    /**
     * Whether to use disabled style.
     */
    isDisabled?: boolean;
    /**
     * Whether to display focus ring.
     */
    isFocused?: boolean;
    /**
     * Whether to interactive style on hover.
     */
    isInteractive?: boolean;
    /**
     * Whether to use selected style.
     */
    isSelected?: boolean;
    /**
     * Whether to use "today" style.
     */
    isToday?: boolean;
    /**
     * Whether to use "unavailable" style.
     */
    isUnavailable?: boolean;
}
export declare function DayOfMonth({ children, className, customContent, isCompleted, isDisabled, isFocused, isInteractive, isSelected, isToday, isUnavailable, ...props }: DayOfMonthProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=dayofmonth.d.ts.map