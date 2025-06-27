import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
export var SelectedItemStyle;
(function (SelectedItemStyle) {
    SelectedItemStyle["tag"] = "tag";
    SelectedItemStyle["text"] = "text";
})(SelectedItemStyle || (SelectedItemStyle = {}));
export function MultiSelectChip(_a) {
    var children = _a.children, className = _a.className, _b = _a.displayStyle, displayStyle = _b === void 0 ? SelectedItemStyle.text : _b, props = __rest(_a, ["children", "className", "displayStyle"]);
    return (_jsx("span", __assign({}, props, { className: classNames("multiselect__chip multiselect__chip--".concat(displayStyle), className) }, { children: children })));
}
//# sourceMappingURL=multiselectchip.js.map