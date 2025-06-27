var _a;
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
var valueSize = (_a = {},
    _a[Size.sm] = Size.xs,
    _a[Size.md] = Size.sm,
    _a[Size.lg] = Size.md,
    _a);
export function SkeletonDataCard(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHeaderIcon = _a.hasHeaderIcon, hasHeaderText = _a.hasHeaderText, hasVisualization = _a.hasVisualization, minWidth = _a.minWidth, size = _a.size, style = _a.style, ref = _a.ref;
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton-data-card skeleton-data-card--".concat(style, " skeleton-data-card--").concat(size), className), ref: ref, style: { minWidth: minWidth } }, { children: [hasHeaderText && (_jsxs("div", __assign({ className: "skeleton-data-card__header" }, { children: [hasHeaderIcon && (_jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, style: { flexShrink: 0 }, width: 16 })), _jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "60%" })] }))), _jsxs("div", __assign({ className: "skeleton-data-card__body" }, { children: [_jsx(SkeletonText, { "aria-hidden": false, size: valueSize[size], type: SkeletonTextType.Title }), _jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "50%" })] })), hasVisualization && (_jsx(Skeleton, { "aria-hidden": false, height: 128, shape: SkeletonShape.Rectangle, width: "100%" }))] }), "".concat(hasHeaderText, "-").concat(hasHeaderIcon, "-").concat(hasVisualization)));
}
//# sourceMappingURL=skeletondatacard.js.map