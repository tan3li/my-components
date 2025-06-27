import { Row, RowData, Table } from '@tanstack/react-table';
import { DataTableRowDragMode, DraggedRowData } from './types.js';
interface DataTableRowProps<TData> {
    draggedRowData?: DraggedRowData | null;
    isDraggable?: boolean;
    row: Row<TData>;
    rowDragMode?: DataTableRowDragMode;
    table: Table<TData>;
}
export declare function DataTableRow<TData extends RowData>({ draggedRowData, isDraggable, row, rowDragMode, table }: DataTableRowProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=datatablerow.d.ts.map