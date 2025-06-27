import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
export var SkeletonShape;
(function (SkeletonShape) {
    SkeletonShape["Circle"] = "circle";
    SkeletonShape["Rectangle"] = "rectangle";
})(SkeletonShape || (SkeletonShape = {}));
export function Skeleton(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, height = _a.height, _b = _a.shape, shape = _b === void 0 ? SkeletonShape.Rectangle : _b, style = _a.style, width = _a.width, props = __rest(_a, ['aria-hidden', "className", "height", "shape", "style", "width"]);
    return (_jsx("div", __assign({}, props, { "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton skeleton--".concat(shape), className), style: __assign(__assign({}, style), { height: height, width: width }) })));
}
//# sourceMappingURL=skeleton.js.map