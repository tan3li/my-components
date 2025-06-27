import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, DateInput, DatePicker as ReactAriaDatePicker, DateSegment, Dialog, Group, Popover } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
import { Field } from '../common/field/field.js';
import { useEffect, useRef, useState } from 'react';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Calendar } from '../calendar/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { getDateValue } from '../calendar/getdatevalue.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { useLocales } from '../../../contexts/index.js';
import { I18nProvider } from 'react-aria';
import { getPlaceholder } from './getplaceholder.js';
import { ClearButton } from '../../action/index.js';
import { isUndefined } from '../../../utils/objecthelper.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function DatePicker(_a) {
    var _b, _c;
    var calendarProps = _a.calendarProps, changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, propsIsReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, maxValue = _a.maxValue, minValue = _a.minValue, relatedValue = _a.relatedValue, _d = _a.showClearButton, showClearButton = _d === void 0 ? true : _d, showHelpTextIcon = _a.showHelpTextIcon, _e = _a.size, size = _e === void 0 ? Size.md : _e, tooltipContent = _a.tooltipContent, value = _a.value, props = __rest(_a, ["calendarProps", "changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isReadOnly", "isRequired", "isSkeleton", "label", "maxValue", "minValue", "relatedValue", "showClearButton", "showHelpTextIcon", "size", "tooltipContent", "value"]);
    var isDisabled = props.isDisabled, isInvalid = props.isInvalid;
    var _f = useState(getDateValue(value)), selectedValue = _f[0], setSelectedValue = _f[1];
    var _g = useState(false), isCalendarOpen = _g[0], setIsCalendarOpen = _g[1];
    var _h = useDataState(dataState, isInvalid, propsIsReadOnly), hasError = _h.hasError, isReadOnly = _h.isReadOnly, errorMessage = _h.errorMessage;
    var translateCommon = useTranslateCommon();
    var _j = useLocales(), cultureLocale = _j.cultureLocale, languageLocale = _j.languageLocale;
    var firstSpinBtnRef = useRef(null);
    var onChange = function (date) {
        var _a;
        if (!isUndefined(value) && (date === null || date === void 0 ? void 0 : date.toString()) === ((_a = getDateValue(value)) === null || _a === void 0 ? void 0 : _a.toString())) {
            return;
        }
        safeCall(props.onChange, date);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: date ? date.toString() : null }));
    };
    useEffect(function () {
        setSelectedValue(getDateValue(value));
    }, [value]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-datepicker", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsxs(ReactAriaDatePicker, __assign({}, props, { className: classNames('datepicker', className), isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, maxValue: (_b = getDateValue(maxValue)) !== null && _b !== void 0 ? _b : undefined, minValue: (_c = getDateValue(minValue)) !== null && _c !== void 0 ? _c : undefined, onBlur: function () {
            onChange(selectedValue);
        }, onChange: function (date) {
            setSelectedValue(date);
            if (isCalendarOpen) {
                onChange(date);
            }
        }, onOpenChange: setIsCalendarOpen, value: selectedValue }, { children: [_jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: _jsxs(Group, __assign({ className: "datepicker__controls datepicker__controls--".concat(size) }, { children: [_jsx(I18nProvider, __assign({ locale: cultureLocale }, { children: _jsx(DateInput, __assign({ className: "datepicker__input" }, { children: function (segment) { return (
                                // Need to wrap DateSegment with div: https://github.com/adobe/react-spectrum/issues/3164
                                _jsx(I18nProvider, __assign({ locale: languageLocale }, { children: _jsx("div", __assign({ ref: function (node) {
                                            var _a;
                                            if (node && ((_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild) === node) {
                                                firstSpinBtnRef.current = node.firstChild;
                                            }
                                        } }, { children: _jsx(DateSegment, __assign({ className: "datepicker__segment ".concat(size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), segment: segment }, { children: segment.isPlaceholder ?
                                                getPlaceholder(segment.type, segment.text, languageLocale)
                                                : segment.text })) })) }))); } })) })), _jsxs("div", __assign({ className: "datepicker__buttons" }, { children: [showClearButton && !isDisabled && !isReadOnly && selectedValue && (_jsx(ClearButton, { className: "datepicker__clear-button", onPress: function () {
                                        var _a;
                                        setSelectedValue(null);
                                        onChange(null);
                                        (_a = firstSpinBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                    }, slot: null })), _jsx(Button, __assign({ "aria-label": translateCommon('toggleCalendar'), className: "datepicker__button" }, { children: _jsx(Icon, { name: iconNames.Calendar, size: IconSize.MD }) }))] }))] })) })), _jsx(Popover, __assign({ className: "datepicker__popover", placement: "bottom left" }, { children: _jsx(Dialog, __assign({ className: "datepicker__dialog" }, { children: _jsx(Calendar, __assign({}, calendarProps, { relatedValue: relatedValue })) })) }))] })));
}
//# sourceMappingURL=datepicker.js.map