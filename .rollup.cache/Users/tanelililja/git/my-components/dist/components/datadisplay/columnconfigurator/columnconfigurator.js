import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DialogTrigger, Popover } from '../../action/popover/index.js';
import { Header } from 'react-aria-components';
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { closestCenter, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { safeCall } from '../../../utils/functionhelper.js';
import { ColumnItem } from './columnitem.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { isUndefined } from '../../../utils/objecthelper.js';
import { useTranslateRowDragAndDrop } from '../../../hooks/translations/usetranslaterowdraganddrop.js';
import { useTranslateColumnDragAndDrop } from '../../../hooks/translations/usetranslatecolumndraganddrop.js';
import { Drawer } from '../../feedback/index.js';
import { SearchField } from '../../inputs/index.js';
import { debounce } from '../../../utils/debounce.js';
import { useFilter } from 'react-aria';
import { EmptyState } from '../emptystate/index.js';
import { announce } from '@react-aria/live-announcer';
export var ColumnConfiguratorVariant;
(function (ColumnConfiguratorVariant) {
    ColumnConfiguratorVariant["Basic"] = "basic";
    ColumnConfiguratorVariant["Extended"] = "extended";
})(ColumnConfiguratorVariant || (ColumnConfiguratorVariant = {}));
function isColumnSelected(id, columnVisibility) {
    var visibility = columnVisibility[id];
    return isUndefined(visibility) ? true : visibility;
}
var SEARCH_DELAY = 300;
export function ColumnConfigurator(_a) {
    var actions = _a.actions, columns = _a.columns, propsColumnOrder = _a.columnOrder, propsColumnVisibility = _a.columnVisibility, children = _a.children, onColumnOrderChange = _a.onColumnOrderChange, onColumnVisibilityChange = _a.onColumnVisibilityChange, _b = _a.variant, variant = _b === void 0 ? ColumnConfiguratorVariant.Basic : _b;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(function () { return propsColumnOrder !== null && propsColumnOrder !== void 0 ? propsColumnOrder : columns.map(function (col) { return col.id; }); }), columnOrder = _d[0], setColumnOrder = _d[1];
    var _e = useState(propsColumnVisibility !== null && propsColumnVisibility !== void 0 ? propsColumnVisibility : {}), columnVisibility = _e[0], setColumnVisibility = _e[1];
    var columnsById = useMemo(function () {
        return columns.reduce(function (map, col) {
            map[col.id] = col;
            return map;
        }, {});
    }, [columns]);
    var selectedCount = useMemo(function () { return columnOrder.reduce(function (count, id) { return count + (isColumnSelected(id, columnVisibility) ? 1 : 0); }, 0); }, [columnVisibility, columnOrder]);
    var hiddenCount = useMemo(function () { return columns.reduce(function (count, col) { return count + (col.isHidden ? 1 : 0); }, 0); }, [columns]);
    var _f = useState(''), searchText = _f[0], setSearchText = _f[1];
    var filter = useFilter({ sensitivity: 'base' });
    var translateCommon = useTranslateCommon();
    var translateRowDragAndDrop = useTranslateRowDragAndDrop();
    var translateColumnDragAndDrop = useTranslateColumnDragAndDrop();
    var onDragEnd = function (event) {
        var active = event.active, over = event.over;
        var activeId = active === null || active === void 0 ? void 0 : active.id;
        var overId = over === null || over === void 0 ? void 0 : over.id;
        if (activeId && overId && activeId !== overId) {
            var oldIndex = columnOrder.indexOf(activeId);
            var newIndex = columnOrder.indexOf(overId);
            var newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex);
            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        }
    };
    var onSearch = useCallback(debounce(setSearchText, SEARCH_DELAY), []);
    var sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    var filteredColumnOrder = useMemo(function () {
        return columnOrder.filter(function (id) {
            var item = columnsById[id];
            return !item.isHidden && (!searchText || filter.contains(item.name, searchText));
        });
    }, [columnOrder, filter, searchText]);
    var filteredColumnCount = filteredColumnOrder.length;
    var renderItems = function () {
        var columnItems = filteredColumnOrder.map(function (id) {
            var item = columnsById[id];
            return (_jsx(ColumnItem, { isDraggable: !searchText, isSelected: isColumnSelected(id, columnVisibility), item: item, onSelectedChange: function (isSelected) {
                    var _a;
                    var newColumnVisibility = __assign(__assign({}, columnVisibility), (_a = {}, _a[id] = isSelected, _a));
                    setColumnVisibility(newColumnVisibility);
                    safeCall(onColumnVisibilityChange, newColumnVisibility);
                } }, id));
        });
        if (columnItems.length === 0) {
            return (_jsx(EmptyState, { bodyText: translateCommon('noColumnsFoundInfo'), title: translateCommon('noColumnsFound') }));
        }
        return (_jsx(DndContext, __assign({ accessibility: {
                announcements: {
                    onDragStart: function (_a) {
                        var active = _a.active;
                        return translateColumnDragAndDrop('onDragStart', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragOver: function (_a) {
                        var active = _a.active, over = _a.over;
                        if (over) {
                            return translateColumnDragAndDrop('onDragOver', {
                                activeTitle: columnsById[active.id].name,
                                overTitle: columnsById[over.id].name
                            });
                        }
                        return translateColumnDragAndDrop('onDragOverEnd', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragEnd: function (_a) {
                        var active = _a.active, over = _a.over;
                        if (over) {
                            return translateColumnDragAndDrop('onDragEndOver', {
                                activeTitle: columnsById[active.id].name,
                                overTitle: columnsById[over.id].name
                            });
                        }
                        return translateColumnDragAndDrop('onDragEnd', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragCancel: function (_a) {
                        var active = _a.active;
                        return translateColumnDragAndDrop('onDragCancel', {
                            title: columnsById[active.id].name
                        });
                    }
                },
                screenReaderInstructions: {
                    draggable: translateRowDragAndDrop('instructions')
                }
            }, collisionDetection: closestCenter, modifiers: [restrictToParentElement, restrictToVerticalAxis], onDragEnd: onDragEnd, sensors: sensors }, { children: _jsx(SortableContext, __assign({ items: columnOrder, strategy: verticalListSortingStrategy }, { children: columnItems })) })));
    };
    useEffect(function () {
        setColumnOrder(propsColumnOrder !== null && propsColumnOrder !== void 0 ? propsColumnOrder : columns.map(function (col) { return col.id; }));
    }, [propsColumnOrder]);
    useEffect(function () {
        setColumnVisibility(propsColumnVisibility !== null && propsColumnVisibility !== void 0 ? propsColumnVisibility : {});
    }, [propsColumnVisibility]);
    useEffect(function () {
        if (isOpen) {
            announce(translateCommon('columnsAvailable', { count: filteredColumnCount }));
        }
    }, [isOpen, filteredColumnCount]);
    var visibilityStatusText = "".concat(translateCommon('showColumns'), " (").concat(selectedCount - hiddenCount, "/").concat(columnOrder.length - hiddenCount, ")");
    var overlay;
    if (variant === ColumnConfiguratorVariant.Extended) {
        overlay = (_jsxs(Drawer, __assign({}, actions, { className: "column-configurator-drawer", headerDetails: _jsx(Label, __assign({ size: Size.md }, { children: visibilityStatusText })), title: translateCommon('customizeColumns') }, { children: [_jsx(SearchField, { "aria-label": translateCommon('searchColumnTitle'), autoFocus: true, onChange: onSearch, placeholder: translateCommon('searchColumnTitle'), size: Size.sm }), _jsx("div", __assign({ className: "column-configurator-drawer__items" }, { children: renderItems() }))] })));
    }
    else {
        overlay = (_jsx(Popover, __assign({ className: "column-configurator-popover", maxHeight: 280, padding: 0, placement: "bottom left" }, { children: _jsxs("div", __assign({ className: "column-configurator-dialog-content" }, { children: [_jsx(Header, __assign({ className: "column-configurator-dialog__header" }, { children: _jsx(Label, __assign({ size: Size.md }, { children: _jsx("strong", { children: visibilityStatusText }) })) })), _jsx("div", __assign({ className: "column-configurator-dialog__body" }, { children: renderItems() }))] })) })));
    }
    return (_jsxs(DialogTrigger, __assign({ onOpenChange: setIsOpen }, { children: [children, overlay] })));
}
//# sourceMappingURL=columnconfigurator.js.map