import { ColumnDef, ColumnOrderState, ColumnPinningState, createColumnHelper, ExpandedState, GroupingState, PaginationState, Row, RowData, RowSelectionState, SortingState, VisibilityState } from '@tanstack/react-table';
import { Alignment } from '../../../constants/index.js';
import { ComponentPropsWithoutRef, CSSProperties, ReactNode, RefAttributes } from 'react';
import { PaginationProps } from '../../navigation/index.js';
import { DragStartEvent } from '@dnd-kit/core';
import { SortingStrategy } from '@dnd-kit/sortable';
import { CellContext } from '@tanstack/table-core';
import { DataTableRowDragMode } from './types.js';
import { ColumnConfiguratorProps } from '../columnconfigurator/columnconfigurator.js';
import { SkeletonDataTableProps } from '../../feedback/skeleton/skeletondatatable.js';
interface ColumnPinningOptions {
    isSticky?: boolean;
    offset?: number;
}
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /**
         * Alignment of the content within column cells.
         */
        alignment?: Alignment;
        /**
         * Options for column pinning for left and right side.
         * isSticky = whether column will stick to given side
         * offset = distance of the sticking column from given side
         */
        columnPinningOptions?: {
            left?: ColumnPinningOptions;
            right?: ColumnPinningOptions;
        };
        /**
         * Whether to align the header text with body cell TextField text.
         */
        isEditable?: boolean;
        /**
         * Whether column is the "title" for the row.
         * Set this for 1 column when using nested rowDragMode to get the correct title for the drag overlay.
         */
        isRowTitle?: boolean;
        /**
         * Provide additional props for cell element.
         */
        getCellProps?: (context: CellContext<TData, TValue>) => ComponentPropsWithoutRef<'td'>;
        /**
         * CSS styles for column header.
         */
        headerStyle?: CSSProperties;
        /**
         * Column title as text. Required when using column drag and drop.
         */
        title?: string;
        /**
         * Whether column header should row-span to eliminate empty cells when using grouped columns.
         */
        useHeaderRowSpan?: boolean;
    }
    interface TableMeta<TData extends RowData> {
        enableParentRowSelectionSync?: boolean;
        getRowProps?: (row: Row<TData>) => ComponentPropsWithoutRef<'tr'>;
        isRowDisabled?: (row: Row<TData>) => boolean;
        isRowLoading?: (row: Row<TData>) => boolean;
        onDataEdit?: (rowIndex: number, columnId: string, value: any) => void;
    }
}
export interface DataTableColumnConfiguratorOptions extends Partial<Omit<ColumnConfiguratorProps, 'children'>> {
    /**
     * Whether to use icon-button as column configurator button. By default, normal button is used.
     */
    isMinimized?: boolean;
}
export type DataTablePaginationProps = Pick<PaginationProps, 'itemsPerPageOptions' | 'showPagesFirst'>;
export interface DataTableProps<TData extends RowData> extends RefAttributes<HTMLDivElement> {
    /**
     * Props for bottom pagination.
     */
    bottomPaginationProps?: DataTablePaginationProps;
    /**
     * The CSS className for the table element.
     */
    className?: string;
    /**
     * Options for column configurator.
     */
    columnConfiguratorOptions?: DataTableColumnConfiguratorOptions;
    /**
     * Order of the columns.
     */
    columnOrder?: ColumnOrderState;
    /**
     * Pinned columns.
     */
    columnPinning?: ColumnPinningState;
    /**
     * Column definitions for the table.
     */
    columns: Array<ColumnDef<TData, any>>;
    /**
     * Visible columns.
     */
    columnVisibility?: VisibilityState;
    /**
     * Data for the table.
     */
    data: TData[];
    /**
     * Whether to select/unselect parent row when its sub-rows are selected/unselected.
     */
    enableParentRowSelectionSync?: boolean;
    /**
     * Whether row(s) can be selected. Can be defined as boolean or callback function.
     */
    enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
    /**
     * Current expanded rows state.
     */
    expanded?: ExpandedState;
    /**
     * Callback for checking whether row is expandable.
     */
    getRowCanExpand?: (row: Row<TData>) => boolean;
    /**
     * Callback for getting unique id for row. If not provided, indexes are used.
     */
    getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
    /**
     * Callback for getting props for table row.
     */
    getRowProps?: (row: Row<TData>) => ComponentPropsWithoutRef<'tr'>;
    /**
     * Callback for getting title for the row. This is mainly needed for screen reader announcements in drag and drop.
     */
    getRowTitle?: (originalRow: TData) => string;
    /**
     * Callback for getting sub rows for expandable row.
     */
    getSubRows?: (originalRow: TData, index: number) => undefined | TData[];
    /**
     * Row grouping state.
     */
    grouping?: GroupingState;
    /**
     * Callback which determines whether row is disabled.
     */
    isRowDisabled?: (row: Row<TData>) => boolean;
    /**
     * Callback which determines whether row is loading.
     */
    isRowLoading?: (row: Row<TData>) => boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Callback for the column order change.
     */
    onColumnOrderChange?: (columnOrder: ColumnOrderState) => void;
    /**
     * Callback for the column visibility change.
     */
    onColumnVisibilityChange?: (columnVisibility: VisibilityState) => void;
    /**
     * Callback for the pagination change.
     */
    onExpandedChange?: (expanded: ExpandedState) => void;
    /**
     * Callback for data editing.
     */
    onDataEdit?: (rowIndex: number, columnId: string, value: any) => void;
    /**
     * Callback for the pagination change.
     */
    onPaginationChange?: (pagination: PaginationState) => void;
    /**
     * Callback for the row drag ending.
     */
    onRowDragEnd?: (params: {
        rowId: string;
        oldIndex: number;
        newIndex: number;
        oldParentId?: string;
        newParentId?: string;
    }) => void;
    /**
     * Callback for the row drag starting.
     */
    onRowDragStart?: (event: DragStartEvent) => void;
    /**
     * Callback for the row selection change.
     */
    onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
    /**
     * Callback for the column sorting change.
     */
    onSortingChange?: (sorting: SortingState) => void;
    /**
     * Selectable page sizes for pagination.
     */
    pageSizes?: number[];
    /**
     * Current pagination state.
     */
    pagination?: PaginationState;
    /**
     * Content to render before the table. Aligned with top pager.
     */
    renderBefore?: () => ReactNode;
    /**
     * Whether columns can be re-ordered by drag and dropping.
     * Make sure columns have unique ids when using this prop for drag and drop to work correctly.
     */
    reorderableColumns?: boolean;
    /**
     * Determines how row drag and drop is handled.
     */
    rowDragMode?: DataTableRowDragMode;
    /**
     * Current row selection state.
     */
    rowSelection?: RowSelectionState;
    /**
     * Props for skeleton.
     */
    skeletonProps?: Partial<SkeletonDataTableProps>;
    /**
     * Current column sorting state.
     */
    sorting?: SortingState;
    /**
     * Determines the order of sorts in sorting array when adding new or toggling existing sorts.
     * "First" means first selected columns get the priority => sorts are added to end of the array.
     * "Last" means last selected columns get the priority => sorts are added to start of the array.
     * If not set, order is always the selection order.
     */
    sortingColumnSelectionPriority?: 'First' | 'Last';
    /**
     * Custom sorting strategy for the table rows.
     */
    sortingStrategy?: SortingStrategy;
    /**
     * Props for top pagination.
     */
    topPaginationProps?: DataTablePaginationProps;
    /**
     * Total number of rows. Needed for pagination.
     */
    totalRowCount?: number;
    /**
     * The CSS className for the root/wrapper element.
     */
    wrapperClassName?: string;
}
export declare function DataTable<TData extends RowData>({ bottomPaginationProps, className, columnConfiguratorOptions, columnOrder: initialColumnOrder, columnPinning: initialColumnPinning, columns, columnVisibility: initialColumnVisibility, data, enableParentRowSelectionSync, enableRowSelection, expanded: initialExpanded, getRowCanExpand, getRowId, getRowProps, getRowTitle: getRowTitleFn, getSubRows, grouping: initialGrouping, isRowDisabled, isRowLoading, isSkeleton, onColumnOrderChange, onColumnVisibilityChange, onExpandedChange, onDataEdit, onPaginationChange, onRowSelectionChange, onSortingChange, pageSizes, pagination: initialPagination, rowSelection: initialRowSelection, ref, reorderableColumns, rowDragMode, skeletonProps, sorting: initialSorting, sortingColumnSelectionPriority, sortingStrategy, topPaginationProps, totalRowCount, wrapperClassName, ...props }: DataTableProps<TData>): import("react/jsx-runtime").JSX.Element;
export type { SortingState as DataTableSortingState, RowSelectionState as DataTableRowSelectionState, PaginationState as DataTablePaginationState, ColumnOrderState as DataTableColumnOrderState, VisibilityState as DataTableColumnVisibilityState, ColumnPinningState as DataTableColumnPinningState, ExpandedState as DataTableExpandedState, GroupingState as DataTableGroupingState, CellContext as DataTableCellContext };
export { createColumnHelper as createDataTableColumnHelper };
//# sourceMappingURL=datatable.d.ts.map