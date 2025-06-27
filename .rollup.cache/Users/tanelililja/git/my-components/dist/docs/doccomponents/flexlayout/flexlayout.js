import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import './flexlayout.scss';
export function FlexLayout(_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, gap = _a.gap;
    return (_jsx("div", __assign({ className: "flex-layout", style: { flexDirection: direction, gap: gap } }, { children: children })));
}
//# sourceMappingURL=flexlayout.js.map