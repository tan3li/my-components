import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { SkeletonText, SkeletonTextType } from './skeletontext.js';
import { Size } from '../../../constants/index.js';
import { Skeleton, SkeletonShape } from './skeleton.js';
var DEFAULT_COLUMN_COUNT = 5;
var DEFAULT_ROW_COUNT = 5;
export function SkeletonDataTable(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, _b = _a.columnCount, columnCount = _b === void 0 ? DEFAULT_COLUMN_COUNT : _b, hasRowSelection = _a.hasRowSelection, ref = _a.ref, _c = _a.rowCount, rowCount = _c === void 0 ? DEFAULT_ROW_COUNT : _c;
    var templateRows = "repeat(".concat(rowCount, ", auto)");
    var templateCols = hasRowSelection ? "auto repeat(".concat(columnCount - 1, ", 1fr)") : "repeat(".concat(columnCount, ", 1fr)");
    return (_jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-data-table', className), ref: ref, style: { gridTemplate: "".concat(templateRows, " / ").concat(templateCols) } }, { children: [Array.from({ length: columnCount }, function (_, colIdx) { return (_jsx("div", __assign({ className: "skeleton-data-table__th" }, { children: colIdx === 0 && hasRowSelection ?
                    _jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, width: 16 })
                    : _jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label }) }), "th".concat(colIdx))); }), Array.from({ length: rowCount }, function (_x, rowIdx) {
                return Array.from({ length: columnCount }, function (_y, colIdx) { return (_jsx("div", __assign({ className: "skeleton-data-table__td" }, { children: colIdx === 0 && hasRowSelection ?
                        _jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, width: 16 })
                        : _jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label }) }), "td".concat(rowIdx, "-").concat(colIdx))); });
            })] }), "".concat(rowCount, "-").concat(columnCount, "-").concat(hasRowSelection)));
}
//# sourceMappingURL=skeletondatatable.js.map