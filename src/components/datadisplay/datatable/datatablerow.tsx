import {flexRender, Row, RowData, Table} from '@tanstack/react-table';
import {classNames} from '../../../utils/classnames.js';
import {DataTableCellContent} from './datatablecellcontent.js';
import {useSortable} from '@dnd-kit/sortable';
import {CSSProperties} from 'react';
import {CSS} from '@dnd-kit/utilities';
import {getColumnPinningStyles} from './getcolumnpinningstyles.js';
import {DataTableRowDragMode, DraggedRowData} from './types.js';

interface DataTableRowProps<TData> {
    draggedRowData?: DraggedRowData | null;
    isDraggable?: boolean;
    row: Row<TData>;
    rowDragMode?: DataTableRowDragMode;
    table: Table<TData>;
}

function getRowDropCSSClass(rowId: string, draggedRowData?: DraggedRowData | null) {
    if (!draggedRowData) {
        return '';
    }

    const {active, over, dropPosition} = draggedRowData;
    const activeId = active.id;
    const overId = over?.id;

    if (dropPosition && overId && activeId !== overId && overId === rowId) {
        return `data-table__row--drop-${dropPosition}`;
    }

    return '';
}

export function DataTableRow<TData extends RowData>({
    draggedRowData,
    isDraggable,
    row,
    rowDragMode = DataTableRowDragMode.Flat,
    table
}: DataTableRowProps<TData>) {
    const rowId = row.id;
    const {transform, transition, setNodeRef, isDragging} = useSortable({
        id: rowId,
        data: {
            row
        }
    });
    const tableMeta = table.options.meta;
    const isSelected = row.getIsSelected();
    const isDisabled = tableMeta?.isRowDisabled?.(row);
    const rowProps = tableMeta?.getRowProps?.(row);
    const isGhost = isDragging && rowDragMode === DataTableRowDragMode.Nested;
    const rowDropCSSClass = getRowDropCSSClass(rowId, draggedRowData);
    let style: CSSProperties | undefined;

    if (isDraggable && rowDragMode === DataTableRowDragMode.Flat) {
        style = {
            transform: CSS.Translate.toString(transform),
            transition,
            zIndex: isDragging ? 1 : 0,
            position: 'relative'
        };
    }

    return (
        <tr
            {...rowProps}
            aria-disabled={isDisabled}
            aria-selected={isSelected}
            className={classNames('data-table__row', rowDropCSSClass, rowProps?.className, {
                'data-table__row--selected': isSelected,
                'data-table__row--disabled': isDisabled,
                'data-table__row--ghost': isGhost
            })}
            ref={setNodeRef}
            style={{...rowProps?.style, ...style}}>
            {row.getVisibleCells().map((cell) => {
                const columnDef = cell.column.columnDef;
                const context = cell.getContext();
                const {
                    colSpan,
                    className: cellClassName,
                    style: cellStyle,
                    ...cellProps
                } = columnDef.meta?.getCellProps?.(context) ?? {};

                if (colSpan === 0) {
                    return null;
                }

                return (
                    <td
                        className={classNames('data-table__cell', cellClassName)}
                        colSpan={colSpan}
                        key={cell.id}
                        style={{...getColumnPinningStyles(cell.column), ...cellStyle}}
                        {...cellProps}>
                        <DataTableCellContent alignment={columnDef.meta?.alignment}>
                            {flexRender(columnDef.cell, context)}
                        </DataTableCellContent>
                    </td>
                );
            })}
        </tr>
    );
}
