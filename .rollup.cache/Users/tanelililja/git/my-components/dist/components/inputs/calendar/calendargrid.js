import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCalendarGrid } from 'react-aria';
import { useLanguageDay } from '../../../hooks/uselanguageday.js';
import { useTranslateDatePeriod } from '../../../hooks/translations/usetranslatedateperiod.js';
import { CalendarCell } from './calendarcell.js';
import { CalendarHeaderCell } from './calendarheadercell.js';
import { classNames } from '../../../utils/classnames.js';
import { isSameDay } from '@internationalized/date';
import { useCultureDay } from '../../../hooks/usecultureday.js';
import { getDateValue } from './getdatevalue';
import { CalendarWeekNumberCell } from './calendarweeknumbercell.js';
var VISIBLE_WEEKS_IN_MONTH = 6;
export function CalendarGrid(_a) {
    var highlightSelectedWeek = _a.highlightSelectedWeek, relatedValue = _a.relatedValue, renderCellContent = _a.renderCellContent, showWeekNumbers = _a.showWeekNumbers, state = _a.state, props = __rest(_a, ["highlightSelectedWeek", "relatedValue", "renderCellContent", "showWeekNumbers", "state"]);
    var _b = useCalendarGrid(props, state), gridProps = _b.gridProps, headerProps = _b.headerProps;
    var languageDay = useLanguageDay();
    var cultureDay = useCultureDay();
    var translateDatePeriod = useTranslateDatePeriod();
    var renderHeaderCells = function () {
        var cells = __spreadArray([], state.getDatesInWeek(0).map(function (date, i) {
            var weekDay = languageDay(date === null || date === void 0 ? void 0 : date.toString()).format('dd');
            return _jsx(CalendarHeaderCell, { children: weekDay }, i);
        }), true);
        if (showWeekNumbers) {
            cells.unshift(_jsx(CalendarHeaderCell, { "aria-label": translateDatePeriod('weekShort') }, "week"));
        }
        return cells;
    };
    var renderBodyCells = function (weekDates) {
        var cells = [];
        weekDates.forEach(function (date, i) {
            if (date) {
                if (i === 0 && showWeekNumbers) {
                    var weekNumber = cultureDay(date.toString()).week();
                    cells.push(_jsx(CalendarWeekNumberCell, { children: weekNumber }, "week"));
                }
                var selectedValue = state.value;
                var relatedSelectedValue = relatedValue ? getDateValue(relatedValue) : null;
                var hasRange = !!relatedSelectedValue && !!selectedValue && !isSameDay(selectedValue, relatedSelectedValue);
                var isInRange = hasRange &&
                    cultureDay(date.toString()).isBetween(relatedSelectedValue.toString(), selectedValue.toString(), 'day', '[]');
                var isSelectedAsRelatedValue = !!relatedSelectedValue && isSameDay(relatedSelectedValue, date);
                var isStartOfRange = false, isEndOfRange = false;
                if (hasRange && isInRange) {
                    var startDateOfRange = (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.compare(relatedSelectedValue)) > 0 ? relatedSelectedValue : selectedValue;
                    var endDateOfRange = startDateOfRange === selectedValue ? relatedSelectedValue : selectedValue;
                    isStartOfRange = isSameDay(startDateOfRange, date);
                    isEndOfRange = !isStartOfRange && isSameDay(endDateOfRange, date);
                }
                cells.push(_jsx(CalendarCell, { date: date, isSelectedAsRelatedValue: isSelectedAsRelatedValue, rangeInfo: { isInRange: isInRange, isStartOfRange: isStartOfRange, isEndOfRange: isEndOfRange }, renderContent: renderCellContent, state: state }, i));
            }
            else {
                cells.push(_jsx("td", { className: "calendar-grid__cell" }, i));
            }
        });
        return cells;
    };
    return (_jsxs("table", __assign({}, gridProps, { className: "calendar-grid" }, { children: [_jsx("thead", __assign({}, headerProps, { className: "calendar-grid__header" }, { children: _jsx("tr", __assign({ className: "calendar-grid__header-row" }, { children: renderHeaderCells() })) })), _jsx("tbody", __assign({ className: "calendar-grid__body" }, { children: __spreadArray([], new Array(VISIBLE_WEEKS_IN_MONTH).keys(), true).map(function (weekIndex) {
                    var _a, _b;
                    var weekDates = state.getDatesInWeek(weekIndex);
                    var firstDateOfWeek = (_a = weekDates[0]) === null || _a === void 0 ? void 0 : _a.toString();
                    var selectedDate = (_b = state.value) === null || _b === void 0 ? void 0 : _b.toString();
                    var isHighlighted = highlightSelectedWeek &&
                        firstDateOfWeek &&
                        selectedDate &&
                        cultureDay(firstDateOfWeek).week() === cultureDay(selectedDate).week();
                    return (_jsx("tr", __assign({ className: classNames('calendar-grid__row', {
                            'calendar-grid__row--highlight': isHighlighted
                        }) }, { children: renderBodyCells(weekDates) }), weekIndex));
                }) }))] })));
}
//# sourceMappingURL=calendargrid.js.map