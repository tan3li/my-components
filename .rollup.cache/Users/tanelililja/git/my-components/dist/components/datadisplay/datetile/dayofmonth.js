import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
export function DayOfMonth(_a) {
    var children = _a.children, className = _a.className, customContent = _a.customContent, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isInteractive = _a.isInteractive, isSelected = _a.isSelected, isToday = _a.isToday, isUnavailable = _a.isUnavailable, props = __rest(_a, ["children", "className", "customContent", "isCompleted", "isDisabled", "isFocused", "isInteractive", "isSelected", "isToday", "isUnavailable"]);
    return (_jsxs("div", __assign({ className: classNames('day-of-month', className), "data-completed": !!isCompleted || undefined, "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-interactive": !!isInteractive || undefined, "data-selected": !!isSelected || undefined, "data-today": !!isToday || undefined, "data-unavailable": !!isUnavailable || undefined }, props, { children: [customContent, _jsx(Label, __assign({ size: Size.md }, { children: children }))] })));
}
//# sourceMappingURL=dayofmonth.js.map