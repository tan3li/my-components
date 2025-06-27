import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { flexRender } from '@tanstack/react-table';
import { classNames } from '../../../utils/classnames.js';
import { DataTableCellContent } from './datatablecellcontent.js';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getColumnPinningStyles } from './getcolumnpinningstyles.js';
import { DataTableRowDragMode } from './types.js';
function getRowDropCSSClass(rowId, draggedRowData) {
    if (!draggedRowData) {
        return '';
    }
    var active = draggedRowData.active, over = draggedRowData.over, dropPosition = draggedRowData.dropPosition;
    var activeId = active.id;
    var overId = over === null || over === void 0 ? void 0 : over.id;
    if (dropPosition && overId && activeId !== overId && overId === rowId) {
        return "data-table__row--drop-".concat(dropPosition);
    }
    return '';
}
export function DataTableRow(_a) {
    var _b, _c;
    var draggedRowData = _a.draggedRowData, isDraggable = _a.isDraggable, row = _a.row, _d = _a.rowDragMode, rowDragMode = _d === void 0 ? DataTableRowDragMode.Flat : _d, table = _a.table;
    var rowId = row.id;
    var _e = useSortable({
        id: rowId,
        data: {
            row: row
        }
    }), transform = _e.transform, transition = _e.transition, setNodeRef = _e.setNodeRef, isDragging = _e.isDragging;
    var tableMeta = table.options.meta;
    var isSelected = row.getIsSelected();
    var isDisabled = (_b = tableMeta === null || tableMeta === void 0 ? void 0 : tableMeta.isRowDisabled) === null || _b === void 0 ? void 0 : _b.call(tableMeta, row);
    var rowProps = (_c = tableMeta === null || tableMeta === void 0 ? void 0 : tableMeta.getRowProps) === null || _c === void 0 ? void 0 : _c.call(tableMeta, row);
    var isGhost = isDragging && rowDragMode === DataTableRowDragMode.Nested;
    var rowDropCSSClass = getRowDropCSSClass(rowId, draggedRowData);
    var style;
    if (isDraggable && rowDragMode === DataTableRowDragMode.Flat) {
        style = {
            transform: CSS.Translate.toString(transform),
            transition: transition,
            zIndex: isDragging ? 1 : 0,
            position: 'relative'
        };
    }
    return (_jsx("tr", __assign({}, rowProps, { "aria-disabled": isDisabled, "aria-selected": isSelected, className: classNames('data-table__row', rowDropCSSClass, rowProps === null || rowProps === void 0 ? void 0 : rowProps.className, {
            'data-table__row--selected': isSelected,
            'data-table__row--disabled': isDisabled,
            'data-table__row--ghost': isGhost
        }), ref: setNodeRef, style: __assign(__assign({}, rowProps === null || rowProps === void 0 ? void 0 : rowProps.style), style) }, { children: row.getVisibleCells().map(function (cell) {
            var _a, _b, _c, _d;
            var columnDef = cell.column.columnDef;
            var context = cell.getContext();
            var _e = (_c = (_b = (_a = columnDef.meta) === null || _a === void 0 ? void 0 : _a.getCellProps) === null || _b === void 0 ? void 0 : _b.call(_a, context)) !== null && _c !== void 0 ? _c : {}, colSpan = _e.colSpan, cellClassName = _e.className, cellStyle = _e.style, cellProps = __rest(_e, ["colSpan", "className", "style"]);
            if (colSpan === 0) {
                return null;
            }
            return (_jsx("td", __assign({ className: classNames('data-table__cell', cellClassName), colSpan: colSpan, style: __assign(__assign({}, getColumnPinningStyles(cell.column)), cellStyle) }, cellProps, { children: _jsx(DataTableCellContent, __assign({ alignment: (_d = columnDef.meta) === null || _d === void 0 ? void 0 : _d.alignment }, { children: flexRender(columnDef.cell, context) })) }), cell.id));
        }) })));
}
//# sourceMappingURL=datatablerow.js.map