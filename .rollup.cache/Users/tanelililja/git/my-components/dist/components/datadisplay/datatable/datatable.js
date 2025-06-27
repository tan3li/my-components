import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createColumnHelper, flexRender, getCoreRowModel, getExpandedRowModel, getGroupedRowModel, useReactTable } from '@tanstack/react-table';
import { Size } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Label } from '../../text/index.js';
import { DataTableCellContent } from './datatablecellcontent.js';
import { isString } from '../../../utils/stringhelper.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { getIndexOfChangedColumnSort } from './getindexofchangedcolumnsort.js';
import { Pagination } from '../../navigation/index.js';
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DataTableRow } from './datatablerow.js';
import { DataTableHeaderCell } from './datatableheadercell.js';
import { DataTableDisplayColumnID } from './datatabledisplaycolumnid.js';
import { DataTableRowDragMode, DropPosition } from './types.js';
import { throttle } from '../../../utils/debounce.js';
import { ColumnConfigurator } from '../columnconfigurator/columnconfigurator.js';
import { Button, ButtonStyle, ButtonVariant, IconButton } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { iconNames } from '../../media/index.js';
import { useTranslateRowDragAndDrop } from '../../../hooks/translations/usetranslaterowdraganddrop.js';
import { SkeletonDataTable } from '../../feedback/skeleton/skeletondatatable.js';
import { createPortal } from 'react-dom';
import { isObject } from '../../../utils/objecthelper.js';
import { DataTableRowDragOverlay } from './datatablerowdragoverlay.js';
import { nestedDataTableKeyboardCoordinateGetter } from './nestedatatablekeyboardcoordinategetter.js';
function detectTableFeatures(table) {
    var allColumns = table.getAllFlatColumns();
    var features = {
        hasFooter: false,
        hasDraggableRows: false
    };
    for (var i = 0, len = allColumns.length; i < len; i++) {
        var col = allColumns[i];
        if (col.columnDef.footer) {
            features.hasFooter = true;
        }
        if (col.id === DataTableDisplayColumnID.DragHandle) {
            features.hasDraggableRows = true;
        }
    }
    return features;
}
function getRowTitle(rowId, table, getFn) {
    return getFn ? getFn(table.getRow(rowId).original) : rowId;
}
function getColumnTitle(columnId, table) {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = table.getColumn(columnId)) === null || _a === void 0 ? void 0 : _a.columnDef) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : columnId;
}
var SYNC_SCROLL_DELAY_MS = 15;
// eslint-disable-next-line max-statements
export function DataTable(_a) {
    var bottomPaginationProps = _a.bottomPaginationProps, className = _a.className, columnConfiguratorOptions = _a.columnConfiguratorOptions, initialColumnOrder = _a.columnOrder, initialColumnPinning = _a.columnPinning, columns = _a.columns, initialColumnVisibility = _a.columnVisibility, data = _a.data, enableParentRowSelectionSync = _a.enableParentRowSelectionSync, _b = _a.enableRowSelection, enableRowSelection = _b === void 0 ? true : _b, initialExpanded = _a.expanded, getRowCanExpand = _a.getRowCanExpand, getRowId = _a.getRowId, getRowProps = _a.getRowProps, getRowTitleFn = _a.getRowTitle, getSubRows = _a.getSubRows, initialGrouping = _a.grouping, isRowDisabled = _a.isRowDisabled, isRowLoading = _a.isRowLoading, isSkeleton = _a.isSkeleton, onColumnOrderChange = _a.onColumnOrderChange, onColumnVisibilityChange = _a.onColumnVisibilityChange, onExpandedChange = _a.onExpandedChange, onDataEdit = _a.onDataEdit, onPaginationChange = _a.onPaginationChange, onRowSelectionChange = _a.onRowSelectionChange, onSortingChange = _a.onSortingChange, pageSizes = _a.pageSizes, initialPagination = _a.pagination, initialRowSelection = _a.rowSelection, ref = _a.ref, reorderableColumns = _a.reorderableColumns, _c = _a.rowDragMode, rowDragMode = _c === void 0 ? DataTableRowDragMode.Flat : _c, skeletonProps = _a.skeletonProps, initialSorting = _a.sorting, sortingColumnSelectionPriority = _a.sortingColumnSelectionPriority, sortingStrategy = _a.sortingStrategy, topPaginationProps = _a.topPaginationProps, totalRowCount = _a.totalRowCount, wrapperClassName = _a.wrapperClassName, props = __rest(_a, ["bottomPaginationProps", "className", "columnConfiguratorOptions", "columnOrder", "columnPinning", "columns", "columnVisibility", "data", "enableParentRowSelectionSync", "enableRowSelection", "expanded", "getRowCanExpand", "getRowId", "getRowProps", "getRowTitle", "getSubRows", "grouping", "isRowDisabled", "isRowLoading", "isSkeleton", "onColumnOrderChange", "onColumnVisibilityChange", "onExpandedChange", "onDataEdit", "onPaginationChange", "onRowSelectionChange", "onSortingChange", "pageSizes", "pagination", "rowSelection", "ref", "reorderableColumns", "rowDragMode", "skeletonProps", "sorting", "sortingColumnSelectionPriority", "sortingStrategy", "topPaginationProps", "totalRowCount", "wrapperClassName"]);
    var _d = useState(initialSorting !== null && initialSorting !== void 0 ? initialSorting : []), sorting = _d[0], setSorting = _d[1];
    var _e = useState(initialRowSelection !== null && initialRowSelection !== void 0 ? initialRowSelection : {}), rowSelection = _e[0], setRowSelection = _e[1];
    var _f = useState(initialPagination !== null && initialPagination !== void 0 ? initialPagination : { pageIndex: 0, pageSize: 0 }), pagination = _f[0], setPagination = _f[1];
    var _g = useState(initialExpanded !== null && initialExpanded !== void 0 ? initialExpanded : {}), expanded = _g[0], setExpanded = _g[1];
    var grouping = useMemo(function () { return initialGrouping !== null && initialGrouping !== void 0 ? initialGrouping : []; }, [initialGrouping]);
    var columnPinning = useMemo(function () { return initialColumnPinning !== null && initialColumnPinning !== void 0 ? initialColumnPinning : {}; }, [initialColumnPinning]);
    var _h = useState(initialColumnOrder !== null && initialColumnOrder !== void 0 ? initialColumnOrder : []), columnOrder = _h[0], setColumnOrder = _h[1];
    var _j = useState(initialColumnVisibility !== null && initialColumnVisibility !== void 0 ? initialColumnVisibility : {}), columnVisibility = _j[0], setColumnVisibility = _j[1];
    var _k = useState(null), draggedRowData = _k[0], setDraggedRowData = _k[1];
    var rowDropPositionRef = useRef(null);
    var a11yContainerRef = useRef(null);
    var stickyContainerRef = useRef(null);
    var scrollableContainerRef = useRef(null);
    var translateCommon = useTranslateCommon();
    var translateRowDragAndDrop = useTranslateRowDragAndDrop();
    var table = useReactTable({
        autoResetExpanded: false,
        columns: columns,
        data: data,
        enableRowSelection: function (row) {
            return !((isFunction(enableRowSelection) ? !enableRowSelection(row) : !enableRowSelection) ||
                (isFunction(isRowDisabled) && isRowDisabled(row)));
        },
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getRowCanExpand: getRowCanExpand,
        getRowId: getRowId,
        getSubRows: getSubRows,
        isMultiSortEvent: function () { return true; },
        manualPagination: true,
        manualSorting: true,
        rowCount: totalRowCount,
        state: {
            columnOrder: columnOrder,
            columnPinning: columnPinning,
            columnVisibility: columnVisibility,
            expanded: expanded,
            grouping: grouping,
            pagination: pagination,
            rowSelection: rowSelection,
            sorting: sorting
        },
        onColumnOrderChange: function (updaterOrValue) {
            var newColumnOrder = isFunction(updaterOrValue) ? updaterOrValue(columnOrder) : updaterOrValue;
            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        },
        onColumnVisibilityChange: function (updaterOrValue) {
            var newColumnVisibility = isFunction(updaterOrValue) ? updaterOrValue(columnVisibility) : updaterOrValue;
            setColumnVisibility(newColumnVisibility);
            safeCall(onColumnVisibilityChange, newColumnVisibility);
        },
        onExpandedChange: function (updaterOrValue) {
            var newExpanded = isFunction(updaterOrValue) ? updaterOrValue(expanded) : updaterOrValue;
            setExpanded(newExpanded);
            safeCall(onExpandedChange, newExpanded);
        },
        onPaginationChange: function (updaterOrValue) {
            var newPagination = isFunction(updaterOrValue) ? updaterOrValue(pagination) : updaterOrValue;
            setPagination(newPagination);
            safeCall(onPaginationChange, newPagination);
        },
        onRowSelectionChange: function (updaterOrValue) {
            var newRowSelection = isFunction(updaterOrValue) ? updaterOrValue(rowSelection) : updaterOrValue;
            setRowSelection(newRowSelection);
            safeCall(onRowSelectionChange, newRowSelection);
        },
        onSortingChange: function (updaterOrValue) {
            var newSorting = isFunction(updaterOrValue) ? updaterOrValue(sorting) : updaterOrValue;
            var idx = getIndexOfChangedColumnSort(newSorting, sorting);
            if (idx !== -1 && sortingColumnSelectionPriority) {
                newSorting[sortingColumnSelectionPriority === 'Last' ? 'unshift' : 'push'](newSorting.splice(idx, 1)[0]);
            }
            setSorting(newSorting);
            safeCall(onSortingChange, newSorting);
        },
        meta: {
            enableParentRowSelectionSync: enableParentRowSelectionSync,
            getRowProps: getRowProps,
            isRowDisabled: isRowDisabled,
            isRowLoading: isRowLoading,
            onDataEdit: onDataEdit
        }
    });
    var _l = detectTableFeatures(table), hasFooter = _l.hasFooter, hasDraggableRows = _l.hasDraggableRows;
    var showPagination = !!initialPagination;
    var _m = table.getState().pagination, pageIndex = _m.pageIndex, pageSize = _m.pageSize;
    var rowIds = [];
    var columnConfiguratorColumns = useMemo(function () {
        if (reorderableColumns) {
            return columnOrder.map(function (id) {
                var isDragHandleColumn = id === DataTableDisplayColumnID.DragHandle;
                return {
                    id: id,
                    name: getColumnTitle(id, table),
                    isHidden: isDragHandleColumn,
                    isSelectable: !isDragHandleColumn
                };
            });
        }
        return [];
    }, [columnOrder, reorderableColumns]);
    var hasNestedRowDrag = rowDragMode === DataTableRowDragMode.Nested;
    var onRowDragCancel = function () {
        var _a;
        if (draggedRowData) {
            setDraggedRowData(null);
            setExpanded((_a = draggedRowData.expanded) !== null && _a !== void 0 ? _a : {});
        }
    };
    var onRowDragEnd = function (event) {
        var _a, _b, _c;
        if (hasNestedRowDrag) {
            var _d = draggedRowData !== null && draggedRowData !== void 0 ? draggedRowData : {}, active = _d.active, over = _d.over, dropPosition = _d.dropPosition, expandedState = _d.expanded;
            if (active && over && dropPosition) {
                var activeId = active.id;
                var overId = over.id;
                var activeRow = table.getRow(activeId);
                var overRow = table.getRow(overId);
                var oldParentId = activeRow.parentId;
                var oldIndex = activeRow.index;
                var overIndex = overRow.index;
                var newIndex = void 0, newParentId = void 0;
                if (dropPosition === DropPosition.Before) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex - (newParentId === oldParentId && overIndex > oldIndex ? 1 : 0);
                }
                else if (dropPosition === DropPosition.After) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex + (newParentId === oldParentId && overIndex > oldIndex ? 0 : 1);
                }
                else if (activeId === overId) {
                    newParentId = oldParentId;
                    newIndex = oldIndex;
                }
                else {
                    newParentId = activeId === overId ? oldParentId : overId;
                    newIndex = (_b = (_a = overRow.subRows) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                }
                (_c = props.onRowDragEnd) === null || _c === void 0 ? void 0 : _c.call(props, {
                    rowId: activeId,
                    newIndex: newIndex,
                    oldIndex: oldIndex,
                    newParentId: newParentId,
                    oldParentId: oldParentId
                });
            }
            setDraggedRowData(null);
            setExpanded(expandedState !== null && expandedState !== void 0 ? expandedState : {});
        }
        else {
            var active = event.active, over = event.over;
            var activeId = active === null || active === void 0 ? void 0 : active.id;
            var overId = over === null || over === void 0 ? void 0 : over.id;
            if (activeId && overId && rowIds.includes(activeId)) {
                safeCall(props.onRowDragEnd, {
                    rowId: activeId,
                    oldIndex: rowIds.indexOf(activeId),
                    newIndex: rowIds.indexOf(overId)
                });
            }
        }
    };
    var onRowDragMove = function (event) {
        var _a, _b;
        var active = event.active, over = event.over;
        var activeTop = (_a = active.rect.current.translated) === null || _a === void 0 ? void 0 : _a.top;
        if (draggedRowData && activeTop !== undefined && over) {
            var _c = over.rect, overTop = _c.top, overHeight = _c.height;
            var heightPercentage = 0.25;
            var afterThreshold = overTop + overHeight * heightPercentage;
            var beforeThreshold = overTop - overHeight * heightPercentage;
            var dropPosition = DropPosition.Inside;
            if (activeTop < beforeThreshold) {
                dropPosition = DropPosition.Before;
            }
            else if (activeTop > afterThreshold) {
                dropPosition = DropPosition.After;
            }
            if (over.id !== ((_b = draggedRowData.over) === null || _b === void 0 ? void 0 : _b.id) || dropPosition !== draggedRowData.dropPosition) {
                setDraggedRowData(__assign(__assign({}, draggedRowData), { active: active, dropPosition: dropPosition, over: over }));
                // Setting state is async so it's not immediately readable in dnd a11y announcements.
                // Thus, we set it to ref for quick access.
                rowDropPositionRef.current = dropPosition;
            }
        }
    };
    var onRowDragOver = function (event) {
        // We need to handle drag over events for keyboard because onDragMove is triggered only once after key press and
        // at that point event.over has not updated yet.
        if (event.activatorEvent instanceof KeyboardEvent) {
            onRowDragMove(event);
        }
    };
    var onRowDragStart = function (event) {
        var _a;
        var _b;
        (_b = props.onRowDragStart) === null || _b === void 0 ? void 0 : _b.call(props, event);
        if (hasNestedRowDrag) {
            var active = event.active;
            var activeId = active.id;
            var isExpanded = isObject(expanded) ? expanded[activeId] : expanded;
            setDraggedRowData({ active: active, expanded: expanded });
            if (isExpanded) {
                setExpanded(__assign(__assign({}, (isObject(expanded) ? expanded : (table.getRowModel().rows.reduce(function (currentValue, row) {
                    if (row.subRows) {
                        currentValue[row.id] = true;
                    }
                    return currentValue;
                }, {})))), (_a = {}, _a[activeId] = false, _a)));
            }
        }
    };
    var onPageIndexChange = function (newPageIndex) {
        table.setPageIndex(newPageIndex);
    };
    var onPageSizeChange = function (newPageSize) {
        table.setPageSize(newPageSize);
    };
    var syncScroll = useCallback(throttle(function () {
        var scrollContainer = scrollableContainerRef.current;
        var stickyContainer = stickyContainerRef.current;
        if (scrollContainer && stickyContainer) {
            stickyContainer.scrollLeft = scrollContainer.scrollLeft;
        }
    }, SYNC_SCROLL_DELAY_MS), []);
    var rowDragSensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: hasNestedRowDrag ? nestedDataTableKeyboardCoordinateGetter : sortableKeyboardCoordinates
    }));
    useEffect(function () {
        setExpanded(initialExpanded !== null && initialExpanded !== void 0 ? initialExpanded : {});
    }, [initialExpanded]);
    useEffect(function () {
        setPagination(initialPagination !== null && initialPagination !== void 0 ? initialPagination : { pageIndex: 0, pageSize: 0 });
    }, [initialPagination]);
    useEffect(function () {
        setRowSelection(initialRowSelection !== null && initialRowSelection !== void 0 ? initialRowSelection : {});
    }, [initialRowSelection]);
    useEffect(function () {
        setSorting(initialSorting !== null && initialSorting !== void 0 ? initialSorting : []);
    }, [initialSorting]);
    useEffect(function () {
        setColumnOrder(initialColumnOrder !== null && initialColumnOrder !== void 0 ? initialColumnOrder : []);
    }, [initialColumnOrder]);
    if (isSkeleton) {
        return _jsx(SkeletonDataTable, __assign({}, skeletonProps));
    }
    var visitedHeaderPlaceholderColumns = new Set();
    var headerRows = table.getHeaderGroups().map(function (headerGroup, idx, headerGroups) { return (_jsx("tr", __assign({ className: classNames('data-table__header-row', {
            'data-table__header-row--first': idx === 0,
            'data-table__header-row--last': idx === headerGroups.length - 1
        }) }, { children: headerGroup.headers.map(function (header) {
            var _a;
            var column = header.column, id = header.id, isPlaceholder = header.isPlaceholder;
            var useHeaderRowSpan = (_a = column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.useHeaderRowSpan;
            var showContent, rowSpan;
            if (isPlaceholder) {
                visitedHeaderPlaceholderColumns.add(column.id);
                if (useHeaderRowSpan) {
                    rowSpan = header.getLeafHeaders().length;
                }
                showContent = true;
            }
            else {
                showContent = !visitedHeaderPlaceholderColumns.has(column.id);
                if (useHeaderRowSpan && !showContent) {
                    return null;
                }
            }
            return _jsx(DataTableHeaderCell, { header: header, rowSpan: rowSpan, showContent: showContent }, id);
        }) }), headerGroup.id)); });
    var bodyRows = table.getRowModel().rows.map(function (row) {
        var rowId = row.id;
        rowIds.push(rowId);
        return (_jsx(DataTableRow, { draggedRowData: draggedRowData, isDraggable: hasDraggableRows, row: row, rowDragMode: rowDragMode, table: table }, rowId));
    });
    var footerRows = hasFooter ?
        table.getFooterGroups().map(function (footerGroup) { return (_jsx("tr", __assign({ className: "data-table__footer-row" }, { children: footerGroup.headers.map(function (header) {
                var _a;
                var content = header.isPlaceholder ? null : (flexRender(header.column.columnDef.footer, header.getContext()));
                if (isString(content)) {
                    content = (_jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: content }) })));
                }
                return (_jsx("td", __assign({ className: "data-table__footer-cell" }, { children: _jsx(DataTableCellContent, __assign({ alignment: (_a = header.column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.alignment }, { children: content })) }), header.id));
            }) }), footerGroup.id)); })
        : null;
    var renderTable = function (hasRowDrag) { return (_jsxs("table", __assign({ className: classNames('data-table', className) }, { children: [_jsx("thead", __assign({ className: "data-table__header" }, { children: headerRows })), _jsx("tbody", __assign({ className: "data-table__body" }, { children: hasRowDrag ?
                    _jsxs(DndContext, __assign({ accessibility: {
                            container: a11yContainerRef.current,
                            screenReaderInstructions: {
                                draggable: translateRowDragAndDrop('instructions')
                            },
                            announcements: {
                                onDragStart: function (_a) {
                                    var active = _a.active;
                                    return translateRowDragAndDrop('onDragStart', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragMove: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    if (hasNestedRowDrag && over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        var dragOverMsg = translateRowDragAndDrop('onDragOver', keys);
                                        var dropPos = rowDropPositionRef.current;
                                        if (dropPos === DropPosition.Before) {
                                            return translateRowDragAndDrop('onDragOverBefore', keys);
                                        }
                                        else if (dropPos === DropPosition.After) {
                                            return translateRowDragAndDrop('onDragOverAfter', keys);
                                        }
                                        return dragOverMsg;
                                    }
                                    return '';
                                },
                                onDragOver: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    if (over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        var dragOverMsg = translateRowDragAndDrop('onDragOver', keys);
                                        if (hasNestedRowDrag) {
                                            var dropPos = rowDropPositionRef.current;
                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragOverBefore', keys);
                                            }
                                            else if (dropPos === DropPosition.After) {
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
                                onDragEnd: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    var dropPos = rowDropPositionRef.current;
                                    rowDropPositionRef.current = null;
                                    if (over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        if (hasNestedRowDrag) {
                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragEndBefore', keys);
                                            }
                                            else if (dropPos === DropPosition.After) {
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
                                onDragCancel: function (_a) {
                                    var active = _a.active;
                                    rowDropPositionRef.current = null;
                                    return translateRowDragAndDrop('onDragCancel', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                }
                            }
                        }, collisionDetection: closestCenter, modifiers: hasNestedRowDrag ? undefined : [restrictToParentElement], onDragCancel: onRowDragCancel, onDragEnd: onRowDragEnd, onDragMove: hasNestedRowDrag ? onRowDragMove : undefined, onDragOver: hasNestedRowDrag ? onRowDragOver : undefined, onDragStart: onRowDragStart, sensors: rowDragSensors }, { children: [_jsx(SortableContext, __assign({ items: rowIds, strategy: sortingStrategy !== null && sortingStrategy !== void 0 ? sortingStrategy : verticalListSortingStrategy }, { children: bodyRows })), hasNestedRowDrag &&
                                createPortal(_jsx(DragOverlay, { children: draggedRowData && _jsx(DataTableRowDragOverlay, { draggedRowData: draggedRowData }) }), document.body)] }))
                    : bodyRows })), footerRows && _jsx("tfoot", __assign({ className: "data-table__footer" }, { children: footerRows }))] }))); };
    var renderBefore = function () {
        var customContent = safeCall(props.renderBefore);
        var pager, columnConfigurator;
        if (showPagination) {
            pager = (_jsx(Pagination, __assign({}, topPaginationProps, { className: "data-table__top-pagination", isMinimized: true, onPageIndexChange: onPageIndexChange, onPageSizeChange: onPageSizeChange, pageIndex: pageIndex, pageSize: pageSize, pageSizes: pageSizes, totalRowCount: totalRowCount })));
        }
        if (reorderableColumns) {
            var _a = columnConfiguratorOptions !== null && columnConfiguratorOptions !== void 0 ? columnConfiguratorOptions : {}, isMinimized = _a.isMinimized, configuratorProps = __rest(_a, ["isMinimized"]);
            columnConfigurator = (_jsx(ColumnConfigurator, __assign({ columnOrder: columnOrder, columnVisibility: columnVisibility, columns: columnConfiguratorColumns, onColumnOrderChange: function (colOrder) {
                    table.setColumnOrder(function () { return colOrder; });
                }, onColumnVisibilityChange: function (colVisibility) {
                    table.setColumnVisibility(function () { return colVisibility; });
                } }, configuratorProps, { children: isMinimized ?
                    _jsx(IconButton, { "aria-label": translateCommon('customizeColumns'), iconName: iconNames.ViewKanban, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral })
                    : _jsx(Button, __assign({ size: Size.md, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('customizeColumns') })) })));
        }
        if (pager || columnConfigurator || customContent) {
            return (_jsxs("div", __assign({ className: "data-table-before" }, { children: [customContent, _jsxs("div", __assign({ className: "data-table-before__right" }, { children: [pager, columnConfigurator] }))] })));
        }
        return null;
    };
    return (_jsxs("div", __assign({ className: classNames('data-table-wrapper', wrapperClassName), ref: ref }, { children: [_jsx("div", { className: "data-table-a11y-container", ref: a11yContainerRef }), renderBefore(), _jsx("div", __assign({ className: "data-table-sticky-container", ref: stickyContainerRef }, { children: renderTable() })), _jsx("div", __assign({ className: "data-table-scrollable-container", onScroll: syncScroll, ref: scrollableContainerRef, tabIndex: -1 }, { children: renderTable(hasDraggableRows) })), showPagination && (_jsx(Pagination, __assign({}, bottomPaginationProps, { className: "data-table__bottom-pagination", onPageIndexChange: onPageIndexChange, onPageSizeChange: onPageSizeChange, pageIndex: pageIndex, pageSize: pageSize, pageSizes: pageSizes, totalRowCount: totalRowCount })))] })));
}
export { createColumnHelper as createDataTableColumnHelper };
//# sourceMappingURL=datatable.js.map