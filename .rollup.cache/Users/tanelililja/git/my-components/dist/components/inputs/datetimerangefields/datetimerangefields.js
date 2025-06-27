import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { DatePicker } from '../datepicker';
import { Size } from '../../../constants';
import { useEffect, useState } from 'react';
import { TimePicker } from '../timepicker';
import { getDateTimeRangeValue } from './getdatetimerangevalue';
import { isSameDay, toCalendarDate, toCalendarDateTime, toTime } from '@internationalized/date';
import { classNames } from '../../../utils/classnames';
import { safeCall } from '../../../utils/functionhelper';
import { useTranslateValidation } from '../../../hooks/translations/usetranslatevalidation';
export var DateTimeFieldType;
(function (DateTimeFieldType) {
    DateTimeFieldType[DateTimeFieldType["EndDate"] = 0] = "EndDate";
    DateTimeFieldType[DateTimeFieldType["EndTime"] = 1] = "EndTime";
    DateTimeFieldType[DateTimeFieldType["StartDate"] = 2] = "StartDate";
    DateTimeFieldType[DateTimeFieldType["StartTime"] = 3] = "StartTime";
})(DateTimeFieldType || (DateTimeFieldType = {}));
function useDateTimeValidation(value) {
    var translateValidation = useTranslateValidation();
    var _a = value !== null && value !== void 0 ? value : {}, start = _a.start, end = _a.end;
    var field = DateTimeFieldType.EndDate, isInvalid = false, errorMessage = '';
    if (start && end && end.compare(start) < 0) {
        isInvalid = true;
        errorMessage = translateValidation('endAfterStart');
        if (isSameDay(start, end)) {
            field = DateTimeFieldType.EndTime;
        }
    }
    return {
        errorMessage: errorMessage,
        field: field,
        isInvalid: isInvalid
    };
}
// eslint-disable-next-line complexity
export function DateTimeRangeFields(_a) {
    var className = _a.className, changeCallback = _a.changeCallback, changeParams = _a.changeParams, fields = _a.fields, ref = _a.ref, _b = _a.size, size = _b === void 0 ? Size.md : _b, value = _a.value, props = __rest(_a, ["className", "changeCallback", "changeParams", "fields", "ref", "size", "value"]);
    var _c = useState(getDateTimeRangeValue(value)), selectedValue = _c[0], setSelectedValue = _c[1];
    var dateTimeValidation = useDateTimeValidation(selectedValue);
    var hasTimesOnly = fields.filter(function (_a) {
        var type = _a.type;
        return type === DateTimeFieldType.EndDate || type === DateTimeFieldType.StartDate;
    }).length ===
        0;
    var onChange = function (newValue) {
        var _a, _b, _c, _d;
        var newValueToSet = newValue.start === null && newValue.end === null ? null : newValue;
        setSelectedValue(newValueToSet);
        safeCall(props.onChange, newValueToSet);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newValueToSet ?
                {
                    start: (_b = (_a = newValueToSet.start) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null,
                    end: (_d = (_c = newValueToSet.end) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : null
                }
                : null }));
    };
    var onStartDateChange = function (date) {
        var _a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}, start = _a.start, end = _a.end;
        var endTime = end ? toTime(end) : undefined;
        var newStart = date ? toCalendarDateTime(date, start ? toTime(start) : endTime) : null;
        var newEnd = end !== null && end !== void 0 ? end : null;
        // If end is before selected start date, change it to same.
        if (newStart && end && end.compare(newStart) < 0) {
            newEnd = newStart.copy();
        }
        onChange({
            start: newStart,
            end: newEnd
        });
    };
    var onEndDateChange = function (date) {
        var _a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}, start = _a.start, end = _a.end;
        var startTime = start ? toTime(start) : undefined;
        var newEnd = date ? toCalendarDateTime(date, end ? toTime(end) : startTime) : null;
        var newStart = start !== null && start !== void 0 ? start : null;
        // If start is after selected end date, change it to same.
        if (newEnd && start && start.compare(newEnd) > 0) {
            newStart = newEnd.copy();
        }
        onChange({
            start: newStart,
            end: newEnd
        });
    };
    var onStartTimeChange = function (dateTime) {
        var end = (selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}).end;
        var newEnd = end !== null && end !== void 0 ? end : null;
        // If end is before selected start date, change it to same.
        if (dateTime && end && end.compare(dateTime) < 0) {
            newEnd = dateTime.copy();
        }
        onChange({
            start: dateTime,
            end: newEnd
        });
    };
    var onEndTimeChange = function (dateTime) {
        var start = (selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}).start;
        var newStart = start !== null && start !== void 0 ? start : null;
        // If start is after selected end date, change it to same.
        if (dateTime && start && start.compare(dateTime) > 0) {
            newStart = dateTime.copy();
        }
        onChange({
            start: newStart,
            end: dateTime
        });
    };
    useEffect(function () {
        setSelectedValue(getDateTimeRangeValue(value));
    }, [value]);
    var pickerRows = [];
    for (var i = 0, len = fields.length; i < len; i++) {
        var _d = fields[i], type = _d.type, fieldProps = __rest(_d, ["type"]);
        var pickers = pickerRows[pickerRows.length - 1], isInvalid = void 0, errorMessage = void 0;
        if (dateTimeValidation.field === type) {
            isInvalid = dateTimeValidation.isInvalid;
            errorMessage = dateTimeValidation.errorMessage;
        }
        if (!pickers || pickers.length === 2) {
            pickers = [];
            pickerRows.push(pickers);
        }
        if (type === DateTimeFieldType.StartDate || type === DateTimeFieldType.EndDate) {
            var isStart = type === DateTimeFieldType.StartDate;
            var dateTime = isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end;
            pickers.push(_createElement(DatePicker, __assign({}, fieldProps, { helpText: errorMessage, isInvalid: isInvalid, key: type, onChange: isStart ? onStartDateChange : onEndDateChange, relatedValue: isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start, size: size, value: dateTime ? toCalendarDate(dateTime).toString() : null })));
        }
        else if (type === DateTimeFieldType.StartTime || type === DateTimeFieldType.EndTime) {
            var isStart = type === DateTimeFieldType.StartTime;
            var dateTime = isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end;
            var relatedValue = void 0;
            if (!isStart &&
                (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start) &&
                (!dateTime || hasTimesOnly || isSameDay(selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start, dateTime))) {
                relatedValue = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start;
            }
            pickers.push(_createElement(TimePicker, __assign({}, fieldProps, { helpText: errorMessage, isInvalid: isInvalid, key: type, onChange: isStart ? onStartTimeChange : onEndTimeChange, relatedValue: relatedValue, size: size, value: dateTime ? dateTime.toString() : null })));
        }
    }
    return (_jsx("div", __assign({ className: classNames('datetime-range-fields', className), ref: ref }, { children: pickerRows.map(function (pickers, i) { return (_jsx("div", __assign({ className: "datetime-range-fields__row" }, { children: pickers }), i)); }) })));
}
//# sourceMappingURL=datetimerangefields.js.map