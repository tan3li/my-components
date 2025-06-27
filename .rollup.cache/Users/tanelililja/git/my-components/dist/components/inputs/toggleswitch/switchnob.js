import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Size } from '../../../constants/size.js';
var SM_SIZE = 8;
var MD_SIZE = 12;
export function SwitchNob(_a) {
    var className = _a.className, size = _a.size;
    var iconSize = size === Size.sm ? SM_SIZE : MD_SIZE;
    return (_jsx("svg", __assign({ "aria-hidden": true, className: className, fill: "none", height: iconSize, viewBox: "0 0 ".concat(iconSize, " ").concat(iconSize), width: iconSize }, { children: _jsx("circle", { cx: iconSize / 2, cy: iconSize / 2, fill: "currentColor", r: iconSize / 2 }) })));
}
//# sourceMappingURL=switchnob.js.map