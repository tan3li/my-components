import {DraggedRowData} from './types.js';
import {flexRender, Row, RowData} from '@tanstack/react-table';
import {DataTableDisplayColumnID} from './datatabledisplaycolumnid.js';
import {DataTableCellContent} from './datatablecellcontent.js';
import {ReactNode} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface DataTableRowDragOverlayProps {
    draggedRowData: DraggedRowData;
}

export function DataTableRowDragOverlay<TData extends RowData>({draggedRowData}: DataTableRowDragOverlayProps) {
    const {active} = draggedRowData;
    const row = active.data.current?.row as Row<TData>;

    if (!row) {
        return null;
    }

    const cells = row.getVisibleCells();
    const cellsToRender: ReactNode[] = [];

    for (let i = 0, len = cells.length; i < len; i++) {
        const cell = cells[i];
        const column = cell.column;
        const context = cell.getContext();
        const columnDef = column.columnDef;
        const isDragHandle = column.id === DataTableDisplayColumnID.DragHandle;
        const isRowTitle = columnDef.meta?.isRowTitle;
        const {
            className: cellClassName,
            style: cellStyle,
            ...cellProps
        } = columnDef.meta?.getCellProps?.(context) ?? {};

        if (isDragHandle || isRowTitle) {
            const cellNode = (
                <td
                    className={classNames('data-table__cell', cellClassName)}
                    key={cell.id}
                    style={cellStyle}
                    {...cellProps}>
                    <DataTableCellContent alignment={columnDef.meta?.alignment}>
                        {flexRender(columnDef.cell, context)}
                    </DataTableCellContent>
                </td>
            );

            if (isDragHandle) {
                cellsToRender.unshift(cellNode);
            } else {
                cellsToRender.push(cellNode);
            }
        }

        if (cellsToRender.length === 2) {
            break;
        }
    }

    return (
        <table className="data-table__row-drag-overlay">
            <tbody>
                <tr className="data-table__row">{cellsToRender}</tr>
            </tbody>
        </table>
    );
}
