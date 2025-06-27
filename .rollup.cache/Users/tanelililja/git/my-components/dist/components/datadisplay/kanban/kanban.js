import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { closestCorners, DndContext, DragOverlay, KeyboardSensor, MeasuringStrategy, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { KanbanColumnHeightMode, KanbanElementType } from './types.js';
import { KanbanColumn } from './kanbancolumn.js';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utils/classnames.js';
import { Button, ButtonStyle, ButtonVariant, IconButton } from '../../action/index.js';
import { iconNames } from '../../media/index.js';
import { kanbanKeyboardCoordinateGetter } from './kanbankeyboardcoordinategetter.js';
import { useTranslateKanbanDragAndDrop } from '../../../hooks/translations/usetranslatekanbandraganddrop.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { horizontalSortableListCollisionDetection } from './horizontalsortablelistcollisiondetection.js';
export function Kanban(_a) {
    var addCardOptions = _a.addCardOptions, addColumnOptions = _a.addColumnOptions, ariaLabel = _a["aria-label"], cardNameAccessor = _a.cardNameAccessor, className = _a.className, propsCollapsedColumnKeys = _a.collapsedColumnKeys, _b = _a.columnHeightMode, columnHeightMode = _b === void 0 ? KanbanColumnHeightMode.Full : _b, columnWidth = _a.columnWidth, data = _a.data, enableColumnReordering = _a.enableColumnReordering, height = _a.height, onCardDragEnd = _a.onCardDragEnd, onColumnDragEnd = _a.onColumnDragEnd, propsOnColumnCollapsedChange = _a.onColumnCollapsedChange, onColumnMenuAction = _a.onColumnMenuAction, onColumnMenuSelectionChange = _a.onColumnMenuSelectionChange, onShowMoreCards = _a.onShowMoreCards, ref = _a.ref, renderAfterColumns = _a.renderAfterColumns, renderCard = _a.renderCard;
    var _c = useState(propsCollapsedColumnKeys !== null && propsCollapsedColumnKeys !== void 0 ? propsCollapsedColumnKeys : new Set()), collapsedColumnKeys = _c[0], setCollapsedColumnKeys = _c[1];
    var columnIds = useMemo(function () { return data.map(function (col) { return col.id; }); }, [data]);
    var _d = useState(null), activeColumnDragData = _d[0], setActiveColumnDragData = _d[1];
    var _e = useState(null), activeCardDragData = _e[0], setActiveCardDragData = _e[1];
    var translateKanbanDragAndDrop = useTranslateKanbanDragAndDrop();
    var isFirstAnnouncementRef = useRef(true);
    var sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: kanbanKeyboardCoordinateGetter
    }));
    var onDragStart = function (event) {
        var eventData = event.active.data.current;
        if ((eventData === null || eventData === void 0 ? void 0 : eventData.type) === KanbanElementType.Column) {
            setActiveColumnDragData(eventData);
        }
        if ((eventData === null || eventData === void 0 ? void 0 : eventData.type) === KanbanElementType.Card) {
            setActiveCardDragData(eventData);
        }
    };
    var onDragEnd = function (event) {
        var _a;
        var active = event.active, over = event.over;
        var activeId = active.id;
        var overId = over === null || over === void 0 ? void 0 : over.id;
        if (activeColumnDragData) {
            setActiveColumnDragData(null);
            if (activeId && overId) {
                onColumnDragEnd === null || onColumnDragEnd === void 0 ? void 0 : onColumnDragEnd({
                    columnId: activeId,
                    oldIndex: columnIds.indexOf(activeId),
                    newIndex: columnIds.indexOf(overId)
                });
            }
        }
        if (activeCardDragData) {
            var columnId = activeCardDragData.columnId;
            var _b = (_a = over === null || over === void 0 ? void 0 : over.data.current) !== null && _a !== void 0 ? _a : {}, overColId = _b.columnId, overElementType = _b.type;
            setActiveCardDragData(null);
            if (overElementType === KanbanElementType.ColumnBody && activeId && overColId) {
                onCardDragEnd === null || onCardDragEnd === void 0 ? void 0 : onCardDragEnd({
                    cardId: activeId,
                    oldColumnId: columnId,
                    oldColumnIndex: columnIds.indexOf(columnId),
                    newColumnId: overColId,
                    newColumnIndex: columnIds.indexOf(overColId)
                });
            }
        }
        isFirstAnnouncementRef.current = true;
    };
    var onDragCancel = function () {
        setActiveCardDragData(null);
        setActiveColumnDragData(null);
        isFirstAnnouncementRef.current = true;
    };
    var onColumnCollapsedChange = function (_a) {
        var id = _a.id, isCollapsed = _a.isCollapsed;
        var newCollapsedKeys = new Set(collapsedColumnKeys);
        if (isCollapsed) {
            newCollapsedKeys.add(id);
        }
        else {
            newCollapsedKeys.delete(id);
        }
        setCollapsedColumnKeys(newCollapsedKeys);
        propsOnColumnCollapsedChange === null || propsOnColumnCollapsedChange === void 0 ? void 0 : propsOnColumnCollapsedChange(newCollapsedKeys);
    };
    useEffect(function () {
        if (propsCollapsedColumnKeys !== undefined) {
            setCollapsedColumnKeys(propsCollapsedColumnKeys);
        }
    }, [propsCollapsedColumnKeys]);
    return (_jsxs(DndContext, __assign({ accessibility: {
            screenReaderInstructions: {
                draggable: translateKanbanDragAndDrop('instructions')
            },
            announcements: {
                onDragStart: function (_a) {
                    var _b, _c, _d;
                    var active = _a.active;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (type === KanbanElementType.Column) {
                        var column = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        return translateKanbanDragAndDrop('onColumnDragStart', {
                            title: column.title
                        });
                    }
                    if (type === KanbanElementType.Card) {
                        var card = (_d = active.data.current) === null || _d === void 0 ? void 0 : _d.card;
                        return translateKanbanDragAndDrop('onCardDragStart', {
                            title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                        });
                    }
                },
                onDragOver: function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var active = _a.active, over = _a.over;
                    // Workaround for dnd-kit skipping the start announcement: https://github.com/clauderic/dnd-kit/issues/424
                    if (isFirstAnnouncementRef.current) {
                        isFirstAnnouncementRef.current = false;
                        return;
                    }
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (over && type === KanbanElementType.Column) {
                        var activeColumn = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        var overColumn = (_d = over.data.current) === null || _d === void 0 ? void 0 : _d.column;
                        return translateKanbanDragAndDrop('onColumnDragOver', {
                            activeTitle: activeColumn.title,
                            overTitle: overColumn.title
                        });
                    }
                    if (over && ((_e = over.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.ColumnBody) {
                        var activeCard = (_f = active.data.current) === null || _f === void 0 ? void 0 : _f.card;
                        var overColumnBody = (_g = over.data.current) === null || _g === void 0 ? void 0 : _g.column;
                        return translateKanbanDragAndDrop('onCardDragOver', {
                            activeTitle: activeCard[isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor],
                            overTitle: overColumnBody.title
                        });
                    }
                },
                onDragEnd: function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var active = _a.active, over = _a.over;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (over && type === KanbanElementType.Column) {
                        var activeColumn = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        var overColumn = (_d = over.data.current) === null || _d === void 0 ? void 0 : _d.column;
                        return translateKanbanDragAndDrop('onColumnDragEndOver', {
                            activeTitle: activeColumn.title,
                            overTitle: overColumn.title
                        });
                    }
                    if (over && ((_e = over.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.ColumnBody) {
                        var activeCard = (_f = active.data.current) === null || _f === void 0 ? void 0 : _f.card;
                        var overColumnBody = (_g = over.data.current) === null || _g === void 0 ? void 0 : _g.column;
                        return translateKanbanDragAndDrop('onCardDragEndOver', {
                            activeTitle: activeCard[isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor],
                            overTitle: overColumnBody.title
                        });
                    }
                },
                onDragCancel: function (_a) {
                    var _b, _c, _d;
                    var active = _a.active;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (type === KanbanElementType.Column) {
                        var column = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        return translateKanbanDragAndDrop('onColumnDragCancel', {
                            title: column.title
                        });
                    }
                    if (type === KanbanElementType.Card) {
                        var card = (_d = active.data.current) === null || _d === void 0 ? void 0 : _d.card;
                        return translateKanbanDragAndDrop('onCardDragCancel', {
                            title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                        });
                    }
                }
            }
        }, collisionDetection: activeColumnDragData ? horizontalSortableListCollisionDetection : closestCorners, measuring: {
            droppable: {
                strategy: MeasuringStrategy.Always
            }
        }, onDragCancel: onDragCancel, onDragEnd: onDragEnd, onDragStart: onDragStart, sensors: sensors }, { children: [_jsxs("div", __assign({ "aria-label": ariaLabel, className: classNames('kanban', className), ref: ref, role: "region", style: {
                    alignItems: columnHeightMode === KanbanColumnHeightMode.Auto ? 'flex-start' : undefined,
                    height: height
                } }, { children: [_jsx(SortableContext, __assign({ items: columnIds, strategy: horizontalListSortingStrategy }, { children: data.map(function (col) { return (_jsx(KanbanColumn, { addCardOptions: addCardOptions, data: col, isCollapsed: collapsedColumnKeys.has(col.id), isDraggable: enableColumnReordering, onCollapsedChange: onColumnCollapsedChange, onMenuAction: onColumnMenuAction, onMenuSelectionChange: onColumnMenuSelectionChange, onShowMoreCards: onShowMoreCards, renderCard: renderCard, width: columnWidth }, col.id)); }) })), renderAfterColumns === null || renderAfterColumns === void 0 ? void 0 : renderAfterColumns({ isDraggingColumn: !!activeColumnDragData }), addColumnOptions && (
                    // Button will handle the press events and focus.
                    // eslint-disable-next-line
                    _jsx("li", __assign({ className: "kanban__new-column", onClick: addColumnOptions.onAdd }, { children: addColumnOptions.showIconOnly ?
                            _jsx(IconButton, { "aria-label": addColumnOptions.label, iconName: iconNames.Add, onPress: addColumnOptions.onAdd, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })
                            : _jsx(Button, __assign({ onPress: addColumnOptions.onAdd, startIconName: iconNames.Add, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: addColumnOptions.label })) })))] })), createPortal(_jsxs(DragOverlay, { children: [activeColumnDragData && (_jsx(KanbanColumn, { addCardOptions: addCardOptions, data: activeColumnDragData.column, isCollapsed: collapsedColumnKeys === null || collapsedColumnKeys === void 0 ? void 0 : collapsedColumnKeys.has(activeColumnDragData.column.id), isDraggable: true, isOverlay: true, renderCard: renderCard })), activeCardDragData &&
                        renderCard({
                            columnId: activeCardDragData.columnId,
                            data: activeCardDragData.card,
                            isOverlay: true
                        })] }), document.body)] })));
}
//# sourceMappingURL=kanban.js.map