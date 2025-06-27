import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { icons } from './icons.js';
export var IconSize;
(function (IconSize) {
    IconSize[IconSize["XS"] = 12] = "XS";
    IconSize[IconSize["SM"] = 16] = "SM";
    IconSize[IconSize["MD"] = 20] = "MD";
    IconSize[IconSize["LG"] = 24] = "LG";
    IconSize[IconSize["XL"] = 32] = "XL";
    IconSize[IconSize["XXL"] = 48] = "XXL";
})(IconSize || (IconSize = {}));
export function Icon(_a) {
    var ariaHidden = _a.ariaHidden, ariaLabel = _a.ariaLabel, className = _a.className, color = _a.color, name = _a.name, ref = _a.ref, size = _a.size;
    var SvgIcon = icons[name];
    return (_jsx(SvgIcon, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, className: classNames('icon', className), color: color, height: size, ref: ref, width: size }));
}
//# sourceMappingURL=icon.js.map