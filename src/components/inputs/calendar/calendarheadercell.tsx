import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {ReactNode} from 'react';

interface CalendarHeaderCellProps {
    ['aria-label']?: string;
    children?: ReactNode;
}

export function CalendarHeaderCell({'aria-label': ariaLabel, children}: CalendarHeaderCellProps) {
    return (
        <th aria-label={ariaLabel} className="calendar-grid__header-cell">
            {children && (
                <div className="calendar-grid__header-cell-content">
                    <Label size={Size.sm}>
                        <strong>{children}</strong>
                    </Label>
                </div>
            )}
        </th>
    );
}
