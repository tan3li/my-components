import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Skeleton } from './skeleton.js';
export var SkeletonTextType;
(function (SkeletonTextType) {
    SkeletonTextType["Body"] = "body";
    SkeletonTextType["Heading"] = "heading";
    SkeletonTextType["Label"] = "label";
    SkeletonTextType["Title"] = "title";
})(SkeletonTextType || (SkeletonTextType = {}));
export function SkeletonText(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref, size = _a.size, _b = _a.type, type = _b === void 0 ? SkeletonTextType.Body : _b, width = _a.width;
    return (_jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton-text skeleton-text--".concat(type, "-").concat(size), className), ref: ref, style: { width: width } }, { children: _jsx(Skeleton, { "aria-hidden": false }) })));
}
export function SkeletonTextMultiline(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, _b = _a.lineCount, lineCount = _b === void 0 ? 2 : _b, ref = _a.ref, width = _a.width, props = __rest(_a, ['aria-hidden', "className", "lineCount", "ref", "width"]);
    if (lineCount <= 0) {
        return null;
    }
    if (lineCount < 2) {
        return _jsx(SkeletonText, __assign({}, props, { "aria-hidden": ariaHidden, className: className, ref: ref, width: width }));
    }
    return (_jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-text-multiline', className), ref: ref }, { children: Array.from({ length: lineCount }, function (_, i) { return (_jsx(SkeletonText, __assign({ "aria-hidden": false }, props, { width: i === lineCount - 1 ? '60%' : width }), i)); }) })));
}
//# sourceMappingURL=skeletontext.js.map