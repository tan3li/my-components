import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CalendarGrid } from './calendargrid.js';
import { useCalendar } from 'react-aria';
import { useLocales } from '../../../contexts/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Button, ButtonStyle, ButtonVariant, IconButton } from '../../action/index.js';
import { useTranslateDatePeriod } from '../../../hooks/translations/usetranslatedateperiod.js';
import { iconNames } from '../../media/index.js';
import { Size } from '../../../constants/index.js';
import { useCalendarState } from 'react-stately';
import { CalendarDate, createCalendar, today } from '@internationalized/date';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { useEffect, useMemo, useState } from 'react';
import { Select } from '../select/index.js';
import { Divider } from '../../datadisplay/index.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { useLanguageDay } from '../../../hooks/uselanguageday.js';
import { CalendarContext, useContextProps } from 'react-aria-components';
import { getDateValue } from './getdatevalue.js';
import { SkeletonCalendar } from '../../feedback/skeleton/skeletoncalendar.js';
var PAST_YEAR_ITEM_COUNT = 5;
var FUTURE_YEAR_ITEM_COUNT = 5;
function isInvalidDate(date, minValue, maxValue) {
    return !!(minValue && date.compare(minValue) < 0) || !!(maxValue && date.compare(maxValue) > 0);
}
export function Calendar(_a) {
    var _b, _c;
    var className = _a.className, footer = _a.footer, highlightSelectedWeek = _a.highlightSelectedWeek, isSkeleton = _a.isSkeleton, propsMaxValue = _a.maxValue, propsMinValue = _a.minValue, propsOnFocusChange = _a.onFocusChange, ref = _a.ref, relatedValue = _a.relatedValue, renderCellContent = _a.renderCellContent, _d = _a.showWeekNumbers, showWeekNumbers = _d === void 0 ? true : _d, yearSelectionRange = _a.yearSelectionRange, props = __rest(_a, ["className", "footer", "highlightSelectedWeek", "isSkeleton", "maxValue", "minValue", "onFocusChange", "ref", "relatedValue", "renderCellContent", "showWeekNumbers", "yearSelectionRange"]);
    var isDisabled = props.isDisabled, isReadOnly = props.isReadOnly;
    var _e = useLocales(), cultureLocale = _e.cultureLocale, languageLocale = _e.languageLocale, timeZone = _e.timeZone;
    var languageDay = useLanguageDay();
    var translateDatePeriod = useTranslateDatePeriod();
    var translateCommon = useTranslateCommon();
    var _f = useContextProps(__assign(__assign({}, props), { maxValue: (_b = getDateValue(propsMaxValue)) !== null && _b !== void 0 ? _b : undefined, minValue: (_c = getDateValue(propsMinValue)) !== null && _c !== void 0 ? _c : undefined }), ref !== null && ref !== void 0 ? ref : null, CalendarContext), contextProps = _f[0], refObj = _f[1];
    var onChange = contextProps.onChange, minValue = contextProps.minValue, maxValue = contextProps.maxValue, value = contextProps.value;
    var _g = useState(getDateValue(value)), selectedDate = _g[0], setSelectedDate = _g[1];
    var _h = useState(selectedDate !== null && selectedDate !== void 0 ? selectedDate : today(timeZone)), focusedDate = _h[0], setFocusedDate = _h[1];
    var onFocusChange = function (date) {
        if (date.compare(focusedDate) !== 0) {
            setFocusedDate(date);
            propsOnFocusChange === null || propsOnFocusChange === void 0 ? void 0 : propsOnFocusChange(date);
        }
    };
    var derivedProps = __assign(__assign({}, contextProps), { focusedValue: focusedDate, isDateUnavailable: function (date) { var _a; return isInvalidDate(date, minValue, maxValue) || !!((_a = contextProps.isDateUnavailable) === null || _a === void 0 ? void 0 : _a.call(contextProps, date)); }, maxValue: undefined, minValue: undefined, onChange: function (date) {
            setSelectedDate(date);
            safeCall(onChange, date);
        }, onFocusChange: onFocusChange, value: selectedDate });
    var state = useCalendarState(__assign(__assign({}, derivedProps), { locale: cultureLocale, createCalendar: createCalendar }));
    var _j = useCalendar(derivedProps, state), calendarProps = _j.calendarProps, prevButtonProps = _j.prevButtonProps, nextButtonProps = _j.nextButtonProps;
    var monthItems = useMemo(function () {
        return languageDay()
            .localeData()
            .months()
            .map(function (month, i) { return ({ value: i + 1, text: month }); });
    }, [languageLocale]);
    var yearItems = useMemo(function () {
        var startYear, endYear;
        if (yearSelectionRange) {
            startYear = yearSelectionRange.start;
            endYear = yearSelectionRange.end;
        }
        else {
            var currentYear = today(timeZone).year;
            startYear = currentYear - PAST_YEAR_ITEM_COUNT;
            endYear = currentYear + FUTURE_YEAR_ITEM_COUNT;
        }
        var arr = [];
        for (var year = startYear; year <= endYear; year++) {
            arr.push({ value: year, text: year.toString() });
        }
        return arr;
    }, [timeZone, yearSelectionRange === null || yearSelectionRange === void 0 ? void 0 : yearSelectionRange.start, yearSelectionRange === null || yearSelectionRange === void 0 ? void 0 : yearSelectionRange.end]);
    useEffect(function () {
        setSelectedDate(getDateValue(value));
    }, [value]);
    if (isSkeleton) {
        return _jsx(SkeletonCalendar, {});
    }
    return (_jsxs("div", __assign({}, calendarProps, { className: classNames('calendar', className), ref: refObj }, { children: [_jsxs("div", __assign({ className: "calendar-header" }, { children: [_jsxs("div", __assign({ className: "calendar-header__start" }, { children: [_jsx(IconButton, __assign({}, prevButtonProps, { "aria-label": translateDatePeriod('previousMonth'), iconName: iconNames.ChevronLeft, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), _jsx(IconButton, __assign({}, nextButtonProps, { "aria-label": translateDatePeriod('nextMonth'), iconName: iconNames.ChevronRight, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), _jsx(Select, { "aria-label": translateDatePeriod('month'), isDisabled: isDisabled, isPlain: true, isReadOnly: isReadOnly, isSearchable: false, items: monthItems, menuWidth: "150px", onSelectionChange: function (month) {
                                    onFocusChange(new CalendarDate(focusedDate.year, month, focusedDate.day));
                                }, size: Size.xs, text: monthItems[focusedDate.month - 1].text, value: focusedDate.month }), _jsx(Select, { "aria-label": translateDatePeriod('year'), isDisabled: isDisabled, isPlain: true, isReadOnly: isReadOnly, isSearchable: false, items: yearItems, menuWidth: "100px", onSelectionChange: function (year) {
                                    onFocusChange(new CalendarDate(year, focusedDate.month, focusedDate.day));
                                }, size: Size.xs, text: focusedDate.year.toString(), value: focusedDate.year })] })), _jsx("div", __assign({ className: "calendar-header__end" }, { children: _jsx(Button, __assign({ isDisabled: !!isDisabled || !!isReadOnly, onPress: function () {
                                onFocusChange(today(timeZone));
                            }, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('today') })) }))] })), _jsx(Divider, { size: Size.sm }), _jsx(CalendarGrid, { highlightSelectedWeek: highlightSelectedWeek, relatedValue: relatedValue, renderCellContent: renderCellContent, showWeekNumbers: showWeekNumbers, state: state }), footer && (_jsxs(_Fragment, { children: [_jsx(Divider, { size: Size.sm }), _jsx("div", __assign({ className: "calendar-footer" }, { children: footer }))] }))] })));
}
//# sourceMappingURL=calendar.js.map