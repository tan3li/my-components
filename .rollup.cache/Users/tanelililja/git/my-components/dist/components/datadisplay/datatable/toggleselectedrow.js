import { __assign } from "tslib";
import { isRowSelected, isSubRowSelected } from '@tanstack/react-table';
import { isUndefined } from '../../../utils/objecthelper.js';
function mutateRowIsSelected(selectedRowIds, id, value, includeChildren, table) {
    var _a;
    var row = table.getRow(id, true);
    if (value) {
        if (!row.getCanMultiSelect()) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            Object.keys(selectedRowIds).forEach(function (key) { return delete selectedRowIds[key]; });
        }
        if (row.getCanSelect()) {
            selectedRowIds[id] = true;
        }
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete selectedRowIds[id];
    }
    if (includeChildren && ((_a = row.subRows) === null || _a === void 0 ? void 0 : _a.length) && row.getCanSelectSubRows()) {
        row.subRows.forEach(function (subRow) { return mutateRowIsSelected(selectedRowIds, subRow.id, value, includeChildren, table); });
    }
}
function syncParentRowSelection(row, selection, table) {
    var parentRow = row.getParentRow();
    if (!parentRow) {
        return selection;
    }
    var selected = isRowSelected(parentRow, selection);
    var isAllSubRowsSelected = isSubRowSelected(parentRow, selection, table) === 'all';
    if (isAllSubRowsSelected && !selected) {
        mutateRowIsSelected(selection, parentRow.id, true, false, table);
    }
    else if (!isAllSubRowsSelected && selected) {
        mutateRowIsSelected(selection, parentRow.id, false, false, table);
    }
    return syncParentRowSelection(parentRow, selection, table);
}
export function toggleSelectedRow(value, row, table) {
    var _a;
    var canSelect = row.getCanSelect();
    if (!canSelect) {
        return;
    }
    if (!((_a = table.options.meta) === null || _a === void 0 ? void 0 : _a.enableParentRowSelectionSync)) {
        row.toggleSelected(value);
        return;
    }
    var isSelected = row.getIsSelected();
    table.setRowSelection(function (old) {
        var val = isUndefined(value) ? !isSelected : value;
        if (canSelect && isSelected === val) {
            return old;
        }
        var selectedRowIds = __assign({}, old);
        mutateRowIsSelected(selectedRowIds, row.id, val, true, table);
        return syncParentRowSelection(row, selectedRowIds, table);
    });
}
//# sourceMappingURL=toggleselectedrow.js.map