var _a;
import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
import { Size } from '../../../constants/index.js';
var rectWidthForSize = (_a = {},
    _a[Size.xs] = 28,
    _a[Size.sm] = 32,
    _a[Size.md] = 40,
    _a);
export function SkeletonColorSwatchPicker(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, itemCount = _a.itemCount, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, ref = _a.ref, size = _a.size;
    var rectWidth = rectWidthForSize[size];
    return (_jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-color-swatch-picker', className), "data-layout": layout, ref: ref }, { children: Array.from({ length: itemCount }, function (_, i) { return (_jsx(Skeleton, { "aria-hidden": false, height: rectWidth, shape: SkeletonShape.Rectangle, width: rectWidth }, i)); }) })));
}
//# sourceMappingURL=skeletoncolorswatchpicker.js.map