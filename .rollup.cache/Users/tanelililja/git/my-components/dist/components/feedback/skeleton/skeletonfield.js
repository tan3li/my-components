var _a;
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Size } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
var defaultInputRectHeightForSize = (_a = {},
    _a[Size.xs] = 28,
    _a[Size.sm] = 32,
    _a[Size.md] = 40,
    _a[Size.lg] = 40,
    _a);
export function SkeletonField(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHelpText = _a.hasHelpText, hasLabel = _a.hasLabel, inputRectHeight = _a.inputRectHeight, ref = _a.ref, size = _a.size, style = _a.style;
    var labelSize = Size.md;
    if (size === Size.xs) {
        labelSize = Size.sm;
    }
    else if (size === Size.lg) {
        labelSize = Size.lg;
    }
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-field', className), ref: ref, style: style }, { children: [hasLabel && (_jsx(SkeletonText, { "aria-hidden": false, size: labelSize, type: SkeletonTextType.Label, width: "50%" })), _jsx(Skeleton, { "aria-hidden": false, height: inputRectHeight !== null && inputRectHeight !== void 0 ? inputRectHeight : defaultInputRectHeightForSize[size], shape: SkeletonShape.Rectangle }), hasHelpText && (_jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label, width: "25%" }))] }), "".concat(hasLabel, "-").concat(hasHelpText)));
}
//# sourceMappingURL=skeletonfield.js.map