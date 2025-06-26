import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {ReactNode} from 'react';

interface CalendarWeekNumberCellProps {
    children: ReactNode;
}

export function CalendarWeekNumberCell({children}: CalendarWeekNumberCellProps) {
    return (
        <td className="calendar-grid__week-nr-cell">
            <div className="calendar-grid__week-nr-cell-content">
                <Label size={Size.sm}>
                    <strong>{children}</strong>
                </Label>
            </div>
        </td>
    );
}
