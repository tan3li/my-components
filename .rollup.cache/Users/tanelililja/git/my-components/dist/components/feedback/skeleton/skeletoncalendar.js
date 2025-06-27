import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
export function SkeletonCalendar(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref;
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-calendar', className), ref: ref }, { children: [_jsx("div", __assign({ className: "skeleton-calendar__header" }, { children: _jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "50%" }) })), _jsxs("div", __assign({ className: "skeleton-calendar__body" }, { children: [_jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label }), Array.from({ length: 5 }, function (_x, i) { return (_jsx("div", __assign({ className: "skeleton-calendar__grid-row" }, { children: Array.from({ length: 7 }, function (_y, j) { return (_jsx(Skeleton, { "aria-hidden": false, height: 32, shape: SkeletonShape.Rectangle, width: 32 }, j)); }) }), i)); })] }))] })));
}
//# sourceMappingURL=skeletoncalendar.js.map