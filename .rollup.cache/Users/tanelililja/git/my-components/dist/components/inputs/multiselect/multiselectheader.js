import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
export function MultiSelectHeader(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected, props = __rest(_a, ["children", "className", "isDisabled", "isFocused", "isSelected"]);
    return (_jsx("div", __assign({}, props, { className: classNames('multiselect-header', className), "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-selected": !!isSelected || undefined }, { children: children })));
}
//# sourceMappingURL=multiselectheader.js.map