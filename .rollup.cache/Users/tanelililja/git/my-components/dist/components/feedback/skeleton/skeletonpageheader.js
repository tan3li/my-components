import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
var LEVEL_1_ICON_SIZE = 32;
var LEVEL_2_ICON_SIZE = 24;
export function SkeletonPageHeader(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasBreadcrumbs = _a.hasBreadcrumbs, hasDetails = _a.hasDetails, hasIcon = _a.hasIcon, level = _a.level, ref = _a.ref;
    var iconSize = level > 1 ? LEVEL_2_ICON_SIZE : LEVEL_1_ICON_SIZE;
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-page-header', className), ref: ref }, { children: [hasBreadcrumbs && (_jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "30%" })), _jsxs("div", __assign({ className: "skeleton-page-header__title" }, { children: [hasIcon && (_jsx(Skeleton, { "aria-hidden": false, height: iconSize, shape: SkeletonShape.Rectangle, style: { flexShrink: 0 }, width: iconSize })), _jsx(SkeletonText, { "aria-hidden": false, size: level > 1 ? Size.sm : Size.md, type: SkeletonTextType.Heading, width: "35%" })] })), hasDetails && (_jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "30%" }))] }), "".concat(hasBreadcrumbs, "-").concat(hasDetails, "-").concat(hasIcon, "-").concat(level)));
}
//# sourceMappingURL=skeletonpageheader.js.map