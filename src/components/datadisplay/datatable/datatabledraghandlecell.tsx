import {CellContext} from '@tanstack/table-core';
import {useSortable} from '@dnd-kit/sortable';
import {RefAttributes} from 'react';
import {DragHandle} from '../draghandle/draghandle.js';

export interface DataTableDragHandleCellProps<TData, TValue>
    extends CellContext<TData, TValue>,
        RefAttributes<HTMLButtonElement> {}

export function DataTableDragHandleCell<TData, TValue>({ref, row}: DataTableDragHandleCellProps<TData, TValue>) {
    const {attributes, listeners} = useSortable({
        id: row.id
    });

    return <DragHandle {...attributes} {...listeners} ref={ref} />;
}
