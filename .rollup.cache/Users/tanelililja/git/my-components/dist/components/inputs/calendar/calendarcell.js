import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { isSameDay, today } from '@internationalized/date';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { useLocales } from '../../../contexts/index.js';
import { DayOfMonth } from '../../datadisplay/index.js';
export function CalendarCell(_a) {
    var date = _a.date, isSelectedAsRelatedValue = _a.isSelectedAsRelatedValue, rangeInfo = _a.rangeInfo, renderContent = _a.renderContent, state = _a.state;
    var ref = useRef(null);
    var timeZone = useLocales().timeZone;
    var _b = useCalendarCell({ date: date }, state, ref), cellProps = _b.cellProps, buttonProps = _b.buttonProps, formattedDate = _b.formattedDate, isSelected = _b.isSelected, isFocused = _b.isFocused, isDisabled = _b.isDisabled, isOutsideVisibleRange = _b.isOutsideVisibleRange, isUnavailable = _b.isUnavailable;
    var isToday = isSameDay(date, today(timeZone));
    var dayOfMonthProps = __assign(__assign({}, buttonProps), { children: formattedDate, isDisabled: isDisabled || isOutsideVisibleRange, isFocused: isFocused, isInteractive: true, isSelected: !!isSelectedAsRelatedValue || isSelected, isToday: isToday, isUnavailable: isUnavailable, ref: ref });
    var _c = rangeInfo !== null && rangeInfo !== void 0 ? rangeInfo : {}, isInRange = _c.isInRange, isStartOfRange = _c.isStartOfRange, isEndOfRange = _c.isEndOfRange;
    var content;
    if (renderContent) {
        content = renderContent({
            date: date.toString(),
            dayOfMonthProps: dayOfMonthProps
        });
    }
    else {
        content = _jsx(DayOfMonth, __assign({}, dayOfMonthProps));
    }
    return (_jsx("td", __assign({}, cellProps, { className: "calendar-grid__cell", "data-in-range": !!isInRange || undefined, "data-range-end": !!isEndOfRange || undefined, "data-range-start": !!isStartOfRange || undefined }, { children: _jsx("div", __assign({ className: "calendar-grid__cell-content" }, { children: content })) })));
}
//# sourceMappingURL=calendarcell.js.map