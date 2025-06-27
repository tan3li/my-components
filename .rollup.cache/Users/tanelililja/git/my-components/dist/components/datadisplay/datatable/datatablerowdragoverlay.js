import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { flexRender } from '@tanstack/react-table';
import { DataTableDisplayColumnID } from './datatabledisplaycolumnid.js';
import { DataTableCellContent } from './datatablecellcontent.js';
import { classNames } from '../../../utils/classnames.js';
export function DataTableRowDragOverlay(_a) {
    var _b, _c, _d, _e, _f, _g;
    var draggedRowData = _a.draggedRowData;
    var active = draggedRowData.active;
    var row = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.row;
    if (!row) {
        return null;
    }
    var cells = row.getVisibleCells();
    var cellsToRender = [];
    for (var i = 0, len = cells.length; i < len; i++) {
        var cell = cells[i];
        var column = cell.column;
        var context = cell.getContext();
        var columnDef = column.columnDef;
        var isDragHandle = column.id === DataTableDisplayColumnID.DragHandle;
        var isRowTitle = (_c = columnDef.meta) === null || _c === void 0 ? void 0 : _c.isRowTitle;
        var _h = (_f = (_e = (_d = columnDef.meta) === null || _d === void 0 ? void 0 : _d.getCellProps) === null || _e === void 0 ? void 0 : _e.call(_d, context)) !== null && _f !== void 0 ? _f : {}, cellClassName = _h.className, cellStyle = _h.style, cellProps = __rest(_h, ["className", "style"]);
        if (isDragHandle || isRowTitle) {
            var cellNode = (_jsx("td", __assign({ className: classNames('data-table__cell', cellClassName), style: cellStyle }, cellProps, { children: _jsx(DataTableCellContent, __assign({ alignment: (_g = columnDef.meta) === null || _g === void 0 ? void 0 : _g.alignment }, { children: flexRender(columnDef.cell, context) })) }), cell.id));
            if (isDragHandle) {
                cellsToRender.unshift(cellNode);
            }
            else {
                cellsToRender.push(cellNode);
            }
        }
        if (cellsToRender.length === 2) {
            break;
        }
    }
    return (_jsx("table", __assign({ className: "data-table__row-drag-overlay" }, { children: _jsx("tbody", { children: _jsx("tr", __assign({ className: "data-table__row" }, { children: cellsToRender })) }) })));
}
//# sourceMappingURL=datatablerowdragoverlay.js.map