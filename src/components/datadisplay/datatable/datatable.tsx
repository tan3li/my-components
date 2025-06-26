import {
    ColumnDef,
    ColumnOrderState,
    ColumnPinningState,
    createColumnHelper,
    ExpandedState,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getGroupedRowModel,
    GroupingState,
    PaginationState,
    Row,
    RowData,
    RowSelectionState,
    SortingState,
    Table,
    useReactTable,
    VisibilityState
} from '@tanstack/react-table';
import {Alignment, Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Label} from '../../text/index.js';
import {DataTableCellContent} from './datatablecellcontent.js';
import {isString} from '../../../utils/stringhelper.js';
import {
    ComponentPropsWithoutRef,
    CSSProperties,
    ReactNode,
    RefAttributes,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {getIndexOfChangedColumnSort} from './getindexofchangedcolumnsort.js';
import {Pagination, PaginationProps} from '../../navigation/index.js';
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragMoveEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {restrictToParentElement} from '@dnd-kit/modifiers';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    SortingStrategy,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import {DataTableRow} from './datatablerow.js';
import {DataTableHeaderCell} from './datatableheadercell.js';
import {DataTableDisplayColumnID} from './datatabledisplaycolumnid.js';
import {CellContext} from '@tanstack/table-core';
import {DataTableRowDragMode, DraggedRowData, DropPosition} from './types.js';
import {throttle} from '../../../utils/debounce.js';
import {ColumnConfigurator, ColumnConfiguratorProps} from '../columnconfigurator/columnconfigurator.js';
import {ColumnConfiguratorItem} from '../columnconfigurator/columnitem.js';
import {Button, ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {iconNames} from '../../media/index.js';
import {useTranslateRowDragAndDrop} from '../../../hooks/translations/usetranslaterowdraganddrop.js';
import {SkeletonDataTable, SkeletonDataTableProps} from '../../feedback/skeleton/skeletondatatable.js';
import {createPortal} from 'react-dom';
import {isObject} from '../../../utils/objecthelper.js';
import {DataTableRowDragOverlay} from './datatablerowdragoverlay.js';
import {nestedDataTableKeyboardCoordinateGetter} from './nestedatatablekeyboardcoordinategetter.js';

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

function detectTableFeatures<TData>(table: Table<TData>) {
    const allColumns = table.getAllFlatColumns();
    const features = {
        hasFooter: false,
        hasDraggableRows: false
    };

    for (let i = 0, len = allColumns.length; i < len; i++) {
        const col = allColumns[i];

        if (col.columnDef.footer) {
            features.hasFooter = true;
        }
        if (col.id === DataTableDisplayColumnID.DragHandle) {
            features.hasDraggableRows = true;
        }
    }

    return features;
}

function getRowTitle<TData extends RowData>(
    rowId: UniqueIdentifier,
    table: Table<TData>,
    getFn?: (originalRow: TData) => string
) {
    return getFn ? getFn(table.getRow(rowId as string).original) : (rowId as string);
}

function getColumnTitle<TData extends RowData>(columnId: UniqueIdentifier, table: Table<TData>) {
    return table.getColumn(columnId as string)?.columnDef?.meta?.title ?? (columnId as string);
}

const SYNC_SCROLL_DELAY_MS = 15;

// eslint-disable-next-line max-statements
export function DataTable<TData extends RowData>({
    bottomPaginationProps,
    className,
    columnConfiguratorOptions,
    columnOrder: initialColumnOrder,
    columnPinning: initialColumnPinning,
    columns,
    columnVisibility: initialColumnVisibility,
    data,
    enableParentRowSelectionSync,
    enableRowSelection = true,
    expanded: initialExpanded,
    getRowCanExpand,
    getRowId,
    getRowProps,
    getRowTitle: getRowTitleFn,
    getSubRows,
    grouping: initialGrouping,
    isRowDisabled,
    isRowLoading,
    isSkeleton,
    onColumnOrderChange,
    onColumnVisibilityChange,
    onExpandedChange,
    onDataEdit,
    onPaginationChange,
    onRowSelectionChange,
    onSortingChange,
    pageSizes,
    pagination: initialPagination,
    rowSelection: initialRowSelection,
    ref,
    reorderableColumns,
    rowDragMode = DataTableRowDragMode.Flat,
    skeletonProps,
    sorting: initialSorting,
    sortingColumnSelectionPriority,
    sortingStrategy,
    topPaginationProps,
    totalRowCount,
    wrapperClassName,
    ...props
}: DataTableProps<TData>) {
    const [sorting, setSorting] = useState<SortingState>(initialSorting ?? []);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(initialRowSelection ?? {});
    const [pagination, setPagination] = useState<PaginationState>(initialPagination ?? {pageIndex: 0, pageSize: 0});
    const [expanded, setExpanded] = useState<ExpandedState>(initialExpanded ?? {});
    const grouping = useMemo(() => initialGrouping ?? [], [initialGrouping]);
    const columnPinning = useMemo(() => initialColumnPinning ?? {}, [initialColumnPinning]);
    const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumnOrder ?? []);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialColumnVisibility ?? {});
    const [draggedRowData, setDraggedRowData] = useState<DraggedRowData | null>(null);
    const rowDropPositionRef = useRef<DropPosition | null>(null);
    const a11yContainerRef = useRef<HTMLDivElement>(null);
    const stickyContainerRef = useRef<HTMLDivElement>(null);
    const scrollableContainerRef = useRef<HTMLDivElement>(null);
    const translateCommon = useTranslateCommon();
    const translateRowDragAndDrop = useTranslateRowDragAndDrop();

    const table = useReactTable<TData>({
        autoResetExpanded: false,
        columns,
        data,
        enableRowSelection: (row) =>
            !(
                (isFunction(enableRowSelection) ? !enableRowSelection(row) : !enableRowSelection) ||
                (isFunction(isRowDisabled) && isRowDisabled(row))
            ),
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getRowCanExpand,
        getRowId,
        getSubRows,
        isMultiSortEvent: () => true,
        manualPagination: true,
        manualSorting: true,
        rowCount: totalRowCount,
        state: {
            columnOrder,
            columnPinning,
            columnVisibility,
            expanded,
            grouping,
            pagination,
            rowSelection,
            sorting
        },
        onColumnOrderChange: (updaterOrValue) => {
            const newColumnOrder = isFunction(updaterOrValue) ? updaterOrValue(columnOrder) : updaterOrValue;

            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        },
        onColumnVisibilityChange: (updaterOrValue) => {
            const newColumnVisibility = isFunction(updaterOrValue) ? updaterOrValue(columnVisibility) : updaterOrValue;

            setColumnVisibility(newColumnVisibility);
            safeCall(onColumnVisibilityChange, newColumnVisibility);
        },
        onExpandedChange: (updaterOrValue) => {
            const newExpanded = isFunction(updaterOrValue) ? updaterOrValue(expanded) : updaterOrValue;

            setExpanded(newExpanded);
            safeCall(onExpandedChange, newExpanded);
        },
        onPaginationChange: (updaterOrValue) => {
            const newPagination = isFunction(updaterOrValue) ? updaterOrValue(pagination) : updaterOrValue;

            setPagination(newPagination);
            safeCall(onPaginationChange, newPagination);
        },
        onRowSelectionChange: (updaterOrValue) => {
            const newRowSelection = isFunction(updaterOrValue) ? updaterOrValue(rowSelection) : updaterOrValue;

            setRowSelection(newRowSelection);
            safeCall(onRowSelectionChange, newRowSelection);
        },
        onSortingChange: (updaterOrValue) => {
            const newSorting = isFunction(updaterOrValue) ? updaterOrValue(sorting) : updaterOrValue;
            const idx = getIndexOfChangedColumnSort(newSorting, sorting);

            if (idx !== -1 && sortingColumnSelectionPriority) {
                newSorting[sortingColumnSelectionPriority === 'Last' ? 'unshift' : 'push'](
                    newSorting.splice(idx, 1)[0]
                );
            }

            setSorting(newSorting);
            safeCall(onSortingChange, newSorting);
        },
        meta: {
            enableParentRowSelectionSync,
            getRowProps,
            isRowDisabled,
            isRowLoading,
            onDataEdit
        }
    });
    const {hasFooter, hasDraggableRows} = detectTableFeatures(table);
    const showPagination = !!initialPagination;
    const {pageIndex, pageSize} = table.getState().pagination;
    const rowIds: string[] = [];
    const columnConfiguratorColumns: ColumnConfiguratorItem[] = useMemo(() => {
        if (reorderableColumns) {
            return columnOrder.map((id) => {
                const isDragHandleColumn = id === DataTableDisplayColumnID.DragHandle;

                return {
                    id,
                    name: getColumnTitle(id, table),
                    isHidden: isDragHandleColumn,
                    isSelectable: !isDragHandleColumn
                };
            });
        }

        return [];
    }, [columnOrder, reorderableColumns]);
    const hasNestedRowDrag = rowDragMode === DataTableRowDragMode.Nested;

    const onRowDragCancel = () => {
        if (draggedRowData) {
            setDraggedRowData(null);
            setExpanded(draggedRowData.expanded ?? {});
        }
    };

    const onRowDragEnd = (event: DragEndEvent) => {
        if (hasNestedRowDrag) {
            const {active, over, dropPosition, expanded: expandedState} = draggedRowData ?? {};

            if (active && over && dropPosition) {
                const activeId = active.id as string;
                const overId = over.id as string;
                const activeRow = table.getRow(activeId);
                const overRow = table.getRow(overId);
                const oldParentId = activeRow.parentId;
                const oldIndex = activeRow.index;
                const overIndex = overRow.index;
                let newIndex: number, newParentId: string | undefined;

                if (dropPosition === DropPosition.Before) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex - (newParentId === oldParentId && overIndex > oldIndex ? 1 : 0);
                } else if (dropPosition === DropPosition.After) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex + (newParentId === oldParentId && overIndex > oldIndex ? 0 : 1);
                } else if (activeId === overId) {
                    newParentId = oldParentId;
                    newIndex = oldIndex;
                } else {
                    newParentId = activeId === overId ? oldParentId : overId;
                    newIndex = overRow.subRows?.length ?? 0;
                }

                props.onRowDragEnd?.({
                    rowId: activeId,
                    newIndex,
                    oldIndex,
                    newParentId,
                    oldParentId
                });
            }

            setDraggedRowData(null);
            setExpanded(expandedState ?? {});
        } else {
            const {active, over} = event;
            const activeId = active?.id as string;
            const overId = over?.id as string;

            if (activeId && overId && rowIds.includes(activeId)) {
                safeCall(props.onRowDragEnd, {
                    rowId: activeId,
                    oldIndex: rowIds.indexOf(activeId),
                    newIndex: rowIds.indexOf(overId)
                });
            }
        }
    };

    const onRowDragMove = (event: DragMoveEvent) => {
        const {active, over} = event;
        const activeTop = active.rect.current.translated?.top;

        if (draggedRowData && activeTop !== undefined && over) {
            const {top: overTop, height: overHeight} = over.rect;
            const heightPercentage = 0.25;
            const afterThreshold = overTop + overHeight * heightPercentage;
            const beforeThreshold = overTop - overHeight * heightPercentage;
            let dropPosition: DropPosition = DropPosition.Inside;

            if (activeTop < beforeThreshold) {
                dropPosition = DropPosition.Before;
            } else if (activeTop > afterThreshold) {
                dropPosition = DropPosition.After;
            }

            if (over.id !== draggedRowData.over?.id || dropPosition !== draggedRowData.dropPosition) {
                setDraggedRowData({
                    ...draggedRowData,
                    active,
                    dropPosition,
                    over
                });

                // Setting state is async so it's not immediately readable in dnd a11y announcements.
                // Thus, we set it to ref for quick access.
                rowDropPositionRef.current = dropPosition;
            }
        }
    };

    const onRowDragOver = (event: DragMoveEvent) => {
        // We need to handle drag over events for keyboard because onDragMove is triggered only once after key press and
        // at that point event.over has not updated yet.
        if (event.activatorEvent instanceof KeyboardEvent) {
            onRowDragMove(event);
        }
    };

    const onRowDragStart = (event: DragStartEvent) => {
        props.onRowDragStart?.(event);

        if (hasNestedRowDrag) {
            const active = event.active;
            const activeId = active.id;
            const isExpanded = isObject(expanded) ? expanded[activeId] : expanded;

            setDraggedRowData({active, expanded});

            if (isExpanded) {
                setExpanded({
                    ...(isObject(expanded) ? expanded : (
                        table.getRowModel().rows.reduce((currentValue, row) => {
                            if (row.subRows) {
                                currentValue[row.id] = true;
                            }

                            return currentValue;
                        }, {})
                    )),
                    [activeId]: false
                });
            }
        }
    };

    const onPageIndexChange = (newPageIndex: number) => {
        table.setPageIndex(newPageIndex);
    };

    const onPageSizeChange = (newPageSize: number) => {
        table.setPageSize(newPageSize);
    };

    const syncScroll = useCallback(
        throttle(() => {
            const scrollContainer = scrollableContainerRef.current;
            const stickyContainer = stickyContainerRef.current;

            if (scrollContainer && stickyContainer) {
                stickyContainer.scrollLeft = scrollContainer.scrollLeft;
            }
        }, SYNC_SCROLL_DELAY_MS),
        []
    );

    const rowDragSensors = useSensors(
        useSensor(MouseSensor, {}),
        useSensor(TouchSensor, {}),
        useSensor(KeyboardSensor, {
            coordinateGetter: hasNestedRowDrag ? nestedDataTableKeyboardCoordinateGetter : sortableKeyboardCoordinates
        })
    );

    useEffect(() => {
        setExpanded(initialExpanded ?? {});
    }, [initialExpanded]);

    useEffect(() => {
        setPagination(initialPagination ?? {pageIndex: 0, pageSize: 0});
    }, [initialPagination]);

    useEffect(() => {
        setRowSelection(initialRowSelection ?? {});
    }, [initialRowSelection]);

    useEffect(() => {
        setSorting(initialSorting ?? []);
    }, [initialSorting]);

    useEffect(() => {
        setColumnOrder(initialColumnOrder ?? []);
    }, [initialColumnOrder]);

    if (isSkeleton) {
        return <SkeletonDataTable {...skeletonProps} />;
    }

    const visitedHeaderPlaceholderColumns = new Set();
    const headerRows = table.getHeaderGroups().map((headerGroup, idx, headerGroups) => (
        <tr
            className={classNames('data-table__header-row', {
                'data-table__header-row--first': idx === 0,
                'data-table__header-row--last': idx === headerGroups.length - 1
            })}
            key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
                const {column, id, isPlaceholder} = header;
                const useHeaderRowSpan = column.columnDef.meta?.useHeaderRowSpan;
                let showContent: boolean, rowSpan: number | undefined;

                if (isPlaceholder) {
                    visitedHeaderPlaceholderColumns.add(column.id);
                    if (useHeaderRowSpan) {
                        rowSpan = header.getLeafHeaders().length;
                    }
                    showContent = true;
                } else {
                    showContent = !visitedHeaderPlaceholderColumns.has(column.id);

                    if (useHeaderRowSpan && !showContent) {
                        return null;
                    }
                }

                return <DataTableHeaderCell header={header} key={id} rowSpan={rowSpan} showContent={showContent} />;
            })}
        </tr>
    ));

    const bodyRows = table.getRowModel().rows.map((row) => {
        const rowId = row.id;

        rowIds.push(rowId);

        return (
            <DataTableRow
                draggedRowData={draggedRowData}
                isDraggable={hasDraggableRows}
                key={rowId}
                row={row}
                rowDragMode={rowDragMode}
                table={table}
            />
        );
    });

    const footerRows =
        hasFooter ?
            table.getFooterGroups().map((footerGroup) => (
                <tr className="data-table__footer-row" key={footerGroup.id}>
                    {footerGroup.headers.map((header) => {
                        let content =
                            header.isPlaceholder ? null : (
                                flexRender(header.column.columnDef.footer, header.getContext())
                            );

                        if (isString(content)) {
                            content = (
                                <Label size={Size.sm}>
                                    <strong>{content}</strong>
                                </Label>
                            );
                        }

                        return (
                            <td className="data-table__footer-cell" key={header.id}>
                                <DataTableCellContent alignment={header.column.columnDef.meta?.alignment}>
                                    {content}
                                </DataTableCellContent>
                            </td>
                        );
                    })}
                </tr>
            ))
        :   null;

    const renderTable = (hasRowDrag?: boolean) => (
        <table className={classNames('data-table', className)}>
            <thead className="data-table__header">{headerRows}</thead>
            <tbody className="data-table__body">
                {hasRowDrag ?
                    <DndContext
                        accessibility={{
                            container: a11yContainerRef.current!,
                            screenReaderInstructions: {
                                draggable: translateRowDragAndDrop('instructions')
                            },
                            announcements: {
                                onDragStart({active}) {
                                    return translateRowDragAndDrop('onDragStart', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragMove({active, over}) {
                                    if (hasNestedRowDrag && over) {
                                        const keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        const dragOverMsg = translateRowDragAndDrop('onDragOver', keys);
                                        const dropPos = rowDropPositionRef.current;

                                        if (dropPos === DropPosition.Before) {
                                            return translateRowDragAndDrop('onDragOverBefore', keys);
                                        } else if (dropPos === DropPosition.After) {
                                            return translateRowDragAndDrop('onDragOverAfter', keys);
                                        }

                                        return dragOverMsg;
                                    }

                                    return '';
                                },
                                onDragOver({active, over}) {
                                    if (over) {
                                        const keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        const dragOverMsg = translateRowDragAndDrop('onDragOver', keys);

                                        if (hasNestedRowDrag) {
                                            const dropPos = rowDropPositionRef.current;

                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragOverBefore', keys);
                                            } else if (dropPos === DropPosition.After) {
                                                return translateRowDragAndDrop('onDragOverAfter', keys);
                                            }

                                            return dragOverMsg;
                                        }

                                        return dragOverMsg;
                                    }

                                    return translateRowDragAndDrop('onDragOverEnd', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragEnd({active, over}) {
                                    const dropPos = rowDropPositionRef.current;

                                    rowDropPositionRef.current = null;

                                    if (over) {
                                        const keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };

                                        if (hasNestedRowDrag) {
                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragEndBefore', keys);
                                            } else if (dropPos === DropPosition.After) {
                                                return translateRowDragAndDrop('onDragEndAfter', keys);
                                            }

                                            return translateRowDragAndDrop('onDragEndInside', keys);
                                        }

                                        return translateRowDragAndDrop('onDragEndOver', keys);
                                    }

                                    return translateRowDragAndDrop('onDragEnd', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragCancel({active}) {
                                    rowDropPositionRef.current = null;

                                    return translateRowDragAndDrop('onDragCancel', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                }
                            }
                        }}
                        collisionDetection={closestCenter}
                        modifiers={hasNestedRowDrag ? undefined : [restrictToParentElement]}
                        onDragCancel={onRowDragCancel}
                        onDragEnd={onRowDragEnd}
                        onDragMove={hasNestedRowDrag ? onRowDragMove : undefined}
                        onDragOver={hasNestedRowDrag ? onRowDragOver : undefined}
                        onDragStart={onRowDragStart}
                        sensors={rowDragSensors}>
                        <SortableContext items={rowIds} strategy={sortingStrategy ?? verticalListSortingStrategy}>
                            {bodyRows}
                        </SortableContext>
                        {hasNestedRowDrag &&
                            createPortal(
                                <DragOverlay>
                                    {draggedRowData && <DataTableRowDragOverlay draggedRowData={draggedRowData} />}
                                </DragOverlay>,
                                document.body
                            )}
                    </DndContext>
                :   bodyRows}
            </tbody>
            {footerRows && <tfoot className="data-table__footer">{footerRows}</tfoot>}
        </table>
    );

    const renderBefore = () => {
        const customContent = safeCall(props.renderBefore);
        let pager: ReactNode, columnConfigurator: ReactNode;

        if (showPagination) {
            pager = (
                <Pagination
                    {...topPaginationProps}
                    className="data-table__top-pagination"
                    isMinimized={true}
                    onPageIndexChange={onPageIndexChange}
                    onPageSizeChange={onPageSizeChange}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    pageSizes={pageSizes}
                    totalRowCount={totalRowCount}
                />
            );
        }

        if (reorderableColumns) {
            const {isMinimized, ...configuratorProps} = columnConfiguratorOptions ?? {};

            columnConfigurator = (
                <ColumnConfigurator
                    columnOrder={columnOrder}
                    columnVisibility={columnVisibility}
                    columns={columnConfiguratorColumns}
                    onColumnOrderChange={(colOrder) => {
                        table.setColumnOrder(() => colOrder);
                    }}
                    onColumnVisibilityChange={(colVisibility) => {
                        table.setColumnVisibility(() => colVisibility);
                    }}
                    {...configuratorProps}>
                    {isMinimized ?
                        <IconButton
                            aria-label={translateCommon('customizeColumns')}
                            iconName={iconNames.ViewKanban}
                            style={ButtonStyle.Outline}
                            variant={ButtonVariant.Neutral}
                        />
                    :   <Button size={Size.md} style={ButtonStyle.Outline} variant={ButtonVariant.Neutral}>
                            {translateCommon('customizeColumns')}
                        </Button>
                    }
                </ColumnConfigurator>
            );
        }

        if (pager || columnConfigurator || customContent) {
            return (
                <div className="data-table-before">
                    {customContent}
                    <div className="data-table-before__right">
                        {pager}
                        {columnConfigurator}
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={classNames('data-table-wrapper', wrapperClassName)} ref={ref}>
            <div className="data-table-a11y-container" ref={a11yContainerRef} />
            {renderBefore()}
            <div className="data-table-sticky-container" ref={stickyContainerRef}>
                {renderTable()}
            </div>
            <div
                className="data-table-scrollable-container"
                onScroll={syncScroll}
                ref={scrollableContainerRef}
                tabIndex={-1}>
                {renderTable(hasDraggableRows)}
            </div>
            {showPagination && (
                <Pagination
                    {...bottomPaginationProps}
                    className="data-table__bottom-pagination"
                    onPageIndexChange={onPageIndexChange}
                    onPageSizeChange={onPageSizeChange}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    pageSizes={pageSizes}
                    totalRowCount={totalRowCount}
                />
            )}
        </div>
    );
}

export type {
    SortingState as DataTableSortingState,
    RowSelectionState as DataTableRowSelectionState,
    PaginationState as DataTablePaginationState,
    ColumnOrderState as DataTableColumnOrderState,
    VisibilityState as DataTableColumnVisibilityState,
    ColumnPinningState as DataTableColumnPinningState,
    ExpandedState as DataTableExpandedState,
    GroupingState as DataTableGroupingState,
    CellContext as DataTableCellContext
};

export {createColumnHelper as createDataTableColumnHelper};
