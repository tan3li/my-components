import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Group, LabelContext, Popover, Provider, TextContext } from 'react-aria-components';
import { useFocusRing, useTimeField } from 'react-aria';
import { classNames } from '../../../utils/classnames';
import { Size } from '../../../constants';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text';
import { Field } from '../common/field/field';
import { useDataState } from '../../../hooks/usedatastate';
import { getDateTimeValue } from './getdatetimevalue.js';
import { Icon, iconNames, IconSize } from '../../media';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon';
import { useLocales } from '../../../contexts';
import { useTimeFieldState } from 'react-stately';
import { TimeSegment } from './timesegment';
import { useResizeObserver } from '@react-aria/utils';
import { useSelect } from 'downshift';
import { TIME_ITEM_INTERVAL_MINUTES, useTimeItems } from './usetimeitems';
import { SelectOption } from '../select/selectoption';
import { CalendarDateTime, now, parseDateTime, Time, toCalendarDateTime, today } from '@internationalized/date';
import { safeCall } from '../../../utils/functionhelper';
import { MINUTES_IN_HOUR } from '../../../constants/time';
import { getIndexWithPropertyValue } from '../../../utils/collectionhelper';
import { VALUE } from '../../../constants/common';
import { useFieldHelpText } from '../../../hooks/usefieldhelptext.js';
import { ClearButton } from '../../action/index.js';
import { isUndefined } from '../../../utils/objecthelper.js';
import { useNonModalPopoverInModalFix } from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
function getNearestTimeItemValue(time) {
    var nearestIntervalMinute = Math.round(time.minute / TIME_ITEM_INTERVAL_MINUTES) * TIME_ITEM_INTERVAL_MINUTES;
    var hour = time.hour + (nearestIntervalMinute >= MINUTES_IN_HOUR ? 1 : 0);
    var minute = nearestIntervalMinute >= MINUTES_IN_HOUR ? 0 : nearestIntervalMinute;
    return new CalendarDateTime(time.year, time.month, time.day, hour, minute, 0).toString();
}
export function TimePicker(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, propsIsReadOnly = _a.isReadOnly, isSkeleton = _a.isSkeleton, label = _a.label, ref = _a.ref, relatedValue = _a.relatedValue, _b = _a.showClearButton, showClearButton = _b === void 0 ? true : _b, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, tooltipContent = _a.tooltipContent, value = _a.value, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isReadOnly", "isSkeleton", "label", "ref", "relatedValue", "showClearButton", "showHelpTextIcon", "size", "tooltipContent", "value"]);
    var _d = useLocales(), cultureLocale = _d.cultureLocale, timeZone = _d.timeZone;
    var isDisabled = props.isDisabled, isInvalid = props.isInvalid, isRequired = props.isRequired;
    var _e = useDataState(dataState, isInvalid, propsIsReadOnly), hasError = _e.hasError, isReadOnly = _e.isReadOnly, errorMessage = _e.errorMessage;
    var _f = useState(getDateTimeValue(value)), selectedValue = _f[0], setSelectedValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var inputRef = useRef(null);
    var groupRef = useRef(null);
    var presetMenuRef = useRef(null);
    var toggleBtnRef = useRef(null);
    var popoverRef = useRef(null);
    var firstSpinBtnRef = useRef(null);
    var translateCommon = useTranslateCommon();
    var onInnerChange = function (time) {
        var _a;
        var dateTime;
        if (time instanceof Time) {
            dateTime = toCalendarDateTime((_a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : getDateTimeValue(relatedValue)) !== null && _a !== void 0 ? _a : today(timeZone), time);
        }
        else {
            dateTime = time;
        }
        setSelectedValue(dateTime);
    };
    var onChange = function (dateTime) {
        var _a;
        if (!isUndefined(value) && (dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString()) === ((_a = getDateTimeValue(value)) === null || _a === void 0 ? void 0 : _a.toString())) {
            return;
        }
        safeCall(props.onChange, dateTime);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: dateTime ? dateTime.toString() : null }));
    };
    // Time field hooks
    var timeFieldHookProps = __assign(__assign({}, props), { label: label, onBlur: function () {
            onChange(selectedValue);
        }, onChange: onInnerChange, isInvalid: hasError, isReadOnly: isReadOnly, value: selectedValue });
    var state = useTimeFieldState(__assign(__assign({}, timeFieldHookProps), { locale: cultureLocale }));
    var _h = useTimeField(timeFieldHookProps, state, inputRef), fieldProps = _h.fieldProps, labelProps = _h.labelProps;
    var _j = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isInvalid: isInvalid
    }), fieldProps2 = _j.fieldProps, helpTextProps = _j.helpTextProps;
    // To match popover width to group element width.
    var _k = useState(null), groupWidth = _k[0], setGroupWidth = _k[1];
    var onResize = useCallback(function () {
        if (groupRef.current) {
            setGroupWidth("".concat(groupRef.current.offsetWidth, "px"));
        }
    }, []);
    useResizeObserver({
        ref: groupRef,
        onResize: onResize
    });
    // Preset dropdown
    var timeItems = useTimeItems(selectedValue, relatedValue);
    var selectedItem = useMemo(function () { return (selectedValue ? { value: selectedValue.toString() } : null); }, [selectedValue]);
    var defaultHighlightedIndex = getIndexWithPropertyValue(VALUE, getNearestTimeItemValue(selectedValue !== null && selectedValue !== void 0 ? selectedValue : now(timeZone)), timeItems);
    var _l = useSelect({
        defaultHighlightedIndex: defaultHighlightedIndex,
        isOpen: isOpen,
        items: timeItems,
        selectedItem: selectedItem,
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (isReadOnly) {
                return;
            }
            setIsOpen(newIsOpen);
        },
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem, type = _a.type;
            // Downshift triggers selection for highlighted item on click outside dropdown, we don't want this.
            if (newSelectedItem && type !== useSelect.stateChangeTypes.ToggleButtonBlur) {
                var dateTime = parseDateTime(newSelectedItem.value);
                onInnerChange(dateTime);
                onChange(dateTime);
            }
        }
    }), getItemProps = _l.getItemProps, getToggleButtonProps = _l.getToggleButtonProps, getMenuProps = _l.getMenuProps, highlightedIndex = _l.highlightedIndex;
    var toggleButtonFocusRing = useFocusRing({ within: true, isTextInput: false });
    var toggleBtnProps = getToggleButtonProps(__assign(__assign({}, toggleButtonFocusRing.focusProps), { disabled: !!isDisabled || isReadOnly, ref: toggleBtnRef }), { suppressRefError: true });
    var menuProps = getMenuProps({ ref: presetMenuRef }, { suppressRefError: true });
    useNonModalPopoverInModalFix(isOpen, toggleBtnRef, popoverRef);
    useEffect(function () {
        setSelectedValue(getDateTimeValue(value));
    }, [value]);
    useEffect(function () {
        if (isOpen) {
            var presetMenu = presetMenuRef.current;
            if (presetMenu) {
                var dataValue = getNearestTimeItemValue(selectedValue !== null && selectedValue !== void 0 ? selectedValue : now(timeZone));
                var selectedElement = presetMenu.querySelector(".select-option[data-value=\"".concat(dataValue, "\"]"));
                if (selectedElement instanceof HTMLElement) {
                    presetMenu.scrollTop = selectedElement.offsetTop - presetMenu.offsetHeight / 2;
                }
            }
        }
    }, [isOpen]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-timepicker", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, labelProps)],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: _jsxs("div", __assign({ className: classNames('timepicker', className), ref: ref }, { children: [_jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: _jsxs(Group, __assign({ className: "timepicker__controls timepicker__controls--".concat(size), isDisabled: isDisabled, isInvalid: hasError, ref: groupRef }, { children: [_jsx("div", __assign({}, fieldProps, fieldProps2, { className: "timepicker__input", ref: inputRef }, { children: state.segments.map(function (segment, i) { return (_jsx(TimeSegment, { className: size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS, ref: i === 0 ? firstSpinBtnRef : undefined, segment: segment, state: state }, i)); }) })), _jsxs("div", __assign({ className: "timepicker__buttons" }, { children: [showClearButton && !isDisabled && !isReadOnly && selectedValue && (_jsx(ClearButton, { className: "timepicker__clear-button", onPress: function () {
                                            var _a;
                                            setSelectedValue(null);
                                            onChange(null);
                                            (_a = firstSpinBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                        }, slot: null })), _jsx("button", __assign({}, toggleBtnProps, { "aria-label": translateCommon('toggleMenu'), className: "timepicker__button", "data-disabled": toggleBtnProps.disabled || undefined, "data-focus-visible": toggleButtonFocusRing.isFocusVisible || undefined, "data-focused": toggleButtonFocusRing.isFocused || undefined }, { children: _jsx(Icon, { name: iconNames.Schedule, size: IconSize.MD }) }))] }))] })) })), _jsx(Popover, __assign({ className: "timepicker__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom start", ref: popoverRef, style: groupWidth ? { width: groupWidth } : undefined, triggerRef: groupRef }, { children: _jsx("div", __assign({}, menuProps, { className: "timepicker__menu" }, { children: timeItems.map(function (item, index) {
                            var itemValue = item.value;
                            var isSelected = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) === itemValue;
                            return (_jsx(SelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === index, isSelected: isSelected, item: item, itemIndex: index, level: 0, size: size, useDataValue: true }, itemValue));
                        }) })) }))] })) })));
}
//# sourceMappingURL=timepicker.js.map