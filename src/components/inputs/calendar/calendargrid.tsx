import {ReactNode} from 'react';
import {AriaCalendarGridProps, DateValue, useCalendarGrid} from 'react-aria';
import {useLanguageDay} from '../../../hooks/uselanguageday.js';
import {useTranslateDatePeriod} from '../../../hooks/translations/usetranslatedateperiod.js';
import {CalendarState} from 'react-stately';
import {CalendarCell, CalendarCellProps} from './calendarcell.js';
import {CalendarHeaderCell} from './calendarheadercell.js';
import {classNames} from '../../../utils/classnames.js';
import {CalendarDate, isSameDay} from '@internationalized/date';
import {useCultureDay} from '../../../hooks/usecultureday.js';
import {getDateValue} from './getdatevalue';
import {CalendarWeekNumberCell} from './calendarweeknumbercell.js';

export interface CalendarGridProps extends AriaCalendarGridProps {
    highlightSelectedWeek?: boolean;
    relatedValue?: DateValue | string | null;
    renderCellContent?: CalendarCellProps['renderContent'];
    showWeekNumbers?: boolean;
    state: CalendarState;
}

const VISIBLE_WEEKS_IN_MONTH = 6;

export function CalendarGrid({
    highlightSelectedWeek,
    relatedValue,
    renderCellContent,
    showWeekNumbers,
    state,
    ...props
}: CalendarGridProps) {
    const {gridProps, headerProps} = useCalendarGrid(props, state);
    const languageDay = useLanguageDay();
    const cultureDay = useCultureDay();
    const translateDatePeriod = useTranslateDatePeriod();

    const renderHeaderCells = () => {
        const cells: ReactNode[] = [
            ...state.getDatesInWeek(0).map((date, i) => {
                const weekDay = languageDay(date?.toString()).format('dd');

                return <CalendarHeaderCell key={i}>{weekDay}</CalendarHeaderCell>;
            })
        ];

        if (showWeekNumbers) {
            cells.unshift(<CalendarHeaderCell aria-label={translateDatePeriod('weekShort')} key="week" />);
        }

        return cells;
    };

    const renderBodyCells = (weekDates: Array<CalendarDate | null>) => {
        const cells: ReactNode[] = [];

        weekDates.forEach((date, i) => {
            if (date) {
                if (i === 0 && showWeekNumbers) {
                    const weekNumber = cultureDay(date.toString()).week();

                    cells.push(<CalendarWeekNumberCell key="week">{weekNumber}</CalendarWeekNumberCell>);
                }

                const selectedValue = state.value;
                const relatedSelectedValue = relatedValue ? getDateValue(relatedValue) : null;
                const hasRange =
                    !!relatedSelectedValue && !!selectedValue && !isSameDay(selectedValue, relatedSelectedValue);
                const isInRange =
                    hasRange &&
                    cultureDay(date.toString()).isBetween(
                        relatedSelectedValue.toString(),
                        selectedValue.toString(),
                        'day',
                        '[]'
                    );
                const isSelectedAsRelatedValue = !!relatedSelectedValue && isSameDay(relatedSelectedValue, date);
                let isStartOfRange = false,
                    isEndOfRange = false;

                if (hasRange && isInRange) {
                    const startDateOfRange =
                        selectedValue?.compare(relatedSelectedValue) > 0 ? relatedSelectedValue : selectedValue;
                    const endDateOfRange = startDateOfRange === selectedValue ? relatedSelectedValue : selectedValue;

                    isStartOfRange = isSameDay(startDateOfRange, date);
                    isEndOfRange = !isStartOfRange && isSameDay(endDateOfRange, date);
                }

                cells.push(
                    <CalendarCell
                        date={date}
                        isSelectedAsRelatedValue={isSelectedAsRelatedValue}
                        key={i}
                        rangeInfo={{isInRange, isStartOfRange, isEndOfRange}}
                        renderContent={renderCellContent}
                        state={state}
                    />
                );
            } else {
                cells.push(<td className="calendar-grid__cell" key={i} />);
            }
        });

        return cells;
    };

    return (
        <table {...gridProps} className="calendar-grid">
            <thead {...headerProps} className="calendar-grid__header">
                <tr className="calendar-grid__header-row">{renderHeaderCells()}</tr>
            </thead>
            <tbody className="calendar-grid__body">
                {[...new Array(VISIBLE_WEEKS_IN_MONTH).keys()].map((weekIndex) => {
                    const weekDates = state.getDatesInWeek(weekIndex);
                    const firstDateOfWeek = weekDates[0]?.toString();
                    const selectedDate = state.value?.toString();
                    const isHighlighted =
                        highlightSelectedWeek &&
                        firstDateOfWeek &&
                        selectedDate &&
                        cultureDay(firstDateOfWeek).week() === cultureDay(selectedDate).week();

                    return (
                        <tr
                            className={classNames('calendar-grid__row', {
                                'calendar-grid__row--highlight': isHighlighted
                            })}
                            key={weekIndex}>
                            {renderBodyCells(weekDates)}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
