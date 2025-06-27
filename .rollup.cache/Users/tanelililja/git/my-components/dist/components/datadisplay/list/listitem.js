import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Divider } from '../divider/index.js';
import { Size } from '../../../constants/index.js';
export var ListItemStyle;
(function (ListItemStyle) {
    ListItemStyle["Card"] = "card";
    ListItemStyle["Dash"] = "dash";
    ListItemStyle["Plain"] = "plain";
})(ListItemStyle || (ListItemStyle = {}));
export function ListItem(_a) {
    var children = _a.children, className = _a.className, footer = _a.footer, ref = _a.ref, showFooterSeparator = _a.showFooterSeparator, _b = _a.style, style = _b === void 0 ? ListItemStyle.Card : _b;
    return (_jsxs("li", __assign({ className: classNames("list-item list-item--".concat(style), className), ref: ref }, { children: [children, footer && (_jsxs(_Fragment, { children: [showFooterSeparator && _jsx(Divider, { className: "list-item__divider", size: Size.sm }), footer] }))] })));
}
//# sourceMappingURL=listitem.js.map