import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
export function SkeletonCheckbox(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHelpText = _a.hasHelpText, ref = _a.ref, size = _a.size, style = _a.style;
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-checkbox', className), ref: ref, style: style }, { children: [_jsx(SkeletonText, { "aria-hidden": false, size: size === Size.md ? Size.lg : Size.md, type: SkeletonTextType.Label }), hasHelpText && (_jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label, width: "25%" }))] }), "".concat(hasHelpText)));
}
//# sourceMappingURL=skeletoncheckbox.js.map