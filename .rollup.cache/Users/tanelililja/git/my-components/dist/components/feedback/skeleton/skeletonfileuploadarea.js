import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
export function SkeletonFileUploadArea(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref;
    return (_jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-file-upload-area', className), ref: ref }, { children: _jsxs("div", __assign({ className: "skeleton-file-upload-area__inner" }, { children: [_jsx(Skeleton, { "aria-hidden": false, height: 48, shape: SkeletonShape.Circle, width: 48 }), _jsxs("div", __assign({ className: "skeleton-file-upload-area__texts" }, { children: [_jsx(SkeletonText, { "aria-hidden": false, size: Size.lg, type: SkeletonTextType.Label }), _jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Body, width: "50%" })] }))] })) })));
}
//# sourceMappingURL=skeletonfileuploadarea.js.map