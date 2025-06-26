import {HTMLAttributes, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';

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

export function DayOfMonth({
    children,
    className,
    customContent,
    isCompleted,
    isDisabled,
    isFocused,
    isInteractive,
    isSelected,
    isToday,
    isUnavailable,
    ...props
}: DayOfMonthProps) {
    return (
        <div
            className={classNames('day-of-month', className)}
            data-completed={!!isCompleted || undefined}
            data-disabled={!!isDisabled || undefined}
            data-focused={!!isFocused || undefined}
            data-interactive={!!isInteractive || undefined}
            data-selected={!!isSelected || undefined}
            data-today={!!isToday || undefined}
            data-unavailable={!!isUnavailable || undefined}
            {...props}>
            {customContent}
            <Label size={Size.md}>{children}</Label>
        </div>
    );
}
