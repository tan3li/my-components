import {CalendarState} from 'react-stately';
import {CalendarDate, isSameDay, today} from '@internationalized/date';
import {ReactNode, useRef} from 'react';
import {useCalendarCell} from 'react-aria';
import {useLocales} from '../../../contexts/index.js';
import {DayOfMonth, DayOfMonthProps} from '../../datadisplay/index.js';

interface RenderContentProps {
    date: string;
    dayOfMonthProps: DayOfMonthProps;
}

interface CalendarCellRangeInfo {
    isEndOfRange?: boolean;
    isInRange: boolean;
    isStartOfRange?: boolean;
}

export interface CalendarCellProps {
    date: CalendarDate;
    isSelectedAsRelatedValue?: boolean;
    rangeInfo?: CalendarCellRangeInfo;
    renderContent?: (props: RenderContentProps) => ReactNode;
    state: CalendarState;
}

export function CalendarCell({date, isSelectedAsRelatedValue, rangeInfo, renderContent, state}: CalendarCellProps) {
    const ref = useRef(null);
    const {timeZone} = useLocales();
    const {
        cellProps,
        buttonProps,
        formattedDate,
        isSelected,
        isFocused,
        isDisabled,
        isOutsideVisibleRange,
        isUnavailable
    } = useCalendarCell({date}, state, ref);
    const isToday = isSameDay(date, today(timeZone));
    const dayOfMonthProps = {
        ...buttonProps,
        children: formattedDate,
        isDisabled: isDisabled || isOutsideVisibleRange,
        isFocused,
        isInteractive: true,
        isSelected: !!isSelectedAsRelatedValue || isSelected,
        isToday,
        isUnavailable,
        ref
    };
    const {isInRange, isStartOfRange, isEndOfRange} = rangeInfo ?? {};
    let content: ReactNode;

    if (renderContent) {
        content = renderContent({
            date: date.toString(),
            dayOfMonthProps
        });
    } else {
        content = <DayOfMonth {...dayOfMonthProps} />;
    }

    return (
        <td
            {...cellProps}
            className="calendar-grid__cell"
            data-in-range={!!isInRange || undefined}
            data-range-end={!!isEndOfRange || undefined}
            data-range-start={!!isStartOfRange || undefined}>
            <div className="calendar-grid__cell-content">{content}</div>
        </td>
    );
}
