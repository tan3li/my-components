import {isRowSelected, isSubRowSelected, Row, RowData, RowSelectionState, Table} from '@tanstack/react-table';
import {isUndefined} from '../../../utils/objecthelper.js';

function mutateRowIsSelected<TData extends RowData>(
    selectedRowIds: Record<string, boolean>,
    id: string,
    value: boolean,
    includeChildren: boolean,
    table: Table<TData>
) {
    const row = table.getRow(id, true);

    if (value) {
        if (!row.getCanMultiSelect()) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
        }
        if (row.getCanSelect()) {
            selectedRowIds[id] = true;
        }
    } else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete selectedRowIds[id];
    }

    if (includeChildren && row.subRows?.length && row.getCanSelectSubRows()) {
        row.subRows.forEach((subRow) => mutateRowIsSelected(selectedRowIds, subRow.id, value, includeChildren, table));
    }
}

function syncParentRowSelection<TData extends RowData>(
    row: Row<TData>,
    selection: RowSelectionState,
    table: Table<TData>
): RowSelectionState {
    const parentRow = row.getParentRow();

    if (!parentRow) {
        return selection;
    }

    const selected = isRowSelected(parentRow, selection);
    const isAllSubRowsSelected = isSubRowSelected(parentRow, selection, table) === 'all';

    if (isAllSubRowsSelected && !selected) {
        mutateRowIsSelected(selection, parentRow.id, true, false, table);
    } else if (!isAllSubRowsSelected && selected) {
        mutateRowIsSelected(selection, parentRow.id, false, false, table);
    }

    return syncParentRowSelection(parentRow, selection, table);
}

export function toggleSelectedRow<TData extends RowData>(value: boolean, row: Row<TData>, table: Table<TData>) {
    const canSelect = row.getCanSelect();

    if (!canSelect) {
        return;
    }

    if (!table.options.meta?.enableParentRowSelectionSync) {
        row.toggleSelected(value);

        return;
    }

    const isSelected = row.getIsSelected();

    table.setRowSelection((old) => {
        const val = isUndefined(value) ? !isSelected : value;

        if (canSelect && isSelected === val) {
            return old;
        }

        const selectedRowIds = {...old};

        mutateRowIsSelected(selectedRowIds, row.id, val, true, table);

        return syncParentRowSelection(row, selectedRowIds, table);
    });
}
