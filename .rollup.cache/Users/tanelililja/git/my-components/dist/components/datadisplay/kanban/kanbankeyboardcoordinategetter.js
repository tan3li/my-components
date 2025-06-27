import { closestCorners, getFirstCollision } from '@dnd-kit/core';
import { KanbanElementType } from './types.js';
import { KeyboardEventKey } from '../../../constants/index.js';
import { arrayMove } from '@dnd-kit/sortable';
var COLUMN_OVERLAY_X_OFFSET = 12;
var COLUMN_OVERLAY_Y_OFFSET = 40;
var CARD_OVERLAY_X_OFFSET = 8;
var CARD_OVERLAY_Y_OFFSET = 8;
var eventKeys = [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.ArrowLeft,
    KeyboardEventKey.ArrowRight
];
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = -1] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
var kanbanCardKeyboardCoordinateGetter = function (event, args) {
    var _a, _b;
    var context = args.context;
    var active = context.active, collisionRect = context.collisionRect, droppableContainers = context.droppableContainers, droppableRects = context.droppableRects;
    if (!(active === null || active === void 0 ? void 0 : active.data.current) || !collisionRect) {
        return;
    }
    var filteredContainers = [];
    droppableContainers.getEnabled().forEach(function (entry) {
        if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
            return;
        }
        var rect = droppableRects.get(entry.id);
        if (!rect) {
            return;
        }
        var data = entry.data.current;
        if (data && data.type !== KanbanElementType.ColumnBody) {
            return;
        }
        switch (event.key) {
            case KeyboardEventKey.ArrowDown:
                if (collisionRect.top < rect.top) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowUp:
                if (collisionRect.top > rect.top + CARD_OVERLAY_Y_OFFSET) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowLeft:
                if (collisionRect.left >= rect.left + rect.width) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowRight:
                if (collisionRect.left + collisionRect.width <= rect.left) {
                    filteredContainers.push(entry);
                }
                break;
            default:
                break;
        }
    });
    var collisions = closestCorners({
        active: active,
        collisionRect: collisionRect,
        droppableRects: droppableRects,
        droppableContainers: filteredContainers,
        pointerCoordinates: null
    });
    var closestId = getFirstCollision(collisions, 'id');
    if (closestId !== null) {
        var newDroppable = droppableContainers.get(closestId);
        var newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
        var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
        if (newNode && newRect) {
            if (((_a = newDroppable.data.current) === null || _a === void 0 ? void 0 : _a.columnId) === ((_b = active.data.current) === null || _b === void 0 ? void 0 : _b.columnId)) {
                // Moving back to initial position...
                var initialRect = active.rect.current.initial;
                if (initialRect) {
                    return {
                        x: newRect.left + CARD_OVERLAY_X_OFFSET,
                        y: initialRect.top
                    };
                }
            }
            return {
                x: newRect.left + CARD_OVERLAY_X_OFFSET,
                y: newRect.top + CARD_OVERLAY_Y_OFFSET
            };
        }
    }
};
var kanbanColumnKeyboardCoordinateGetter = function (event, args) {
    var _a, _b, _c;
    var context = args.context;
    var active = context.active, over = context.over, droppableContainers = context.droppableContainers, collisionRect = context.collisionRect;
    if (!collisionRect || !(active === null || active === void 0 ? void 0 : active.data.current)) {
        return;
    }
    var activeId = active.id;
    var overId = ((_a = over === null || over === void 0 ? void 0 : over.id) !== null && _a !== void 0 ? _a : activeId);
    var items = active.data.current.sortable.items;
    var overIdx = items.indexOf(overId);
    var activeIdx = items.indexOf(activeId);
    var nextIdx = overIdx, direction = Direction.Right, nextId;
    switch (event.key) {
        case KeyboardEventKey.ArrowRight:
            nextIdx = Math.min(overIdx + 1, items.length - 1);
            break;
        case KeyboardEventKey.ArrowLeft:
            nextIdx = Math.max(0, overIdx - 1);
            direction = Direction.Left;
            break;
        default:
            break;
    }
    if (overIdx !== nextIdx) {
        nextId = items[nextIdx];
    }
    if (nextId) {
        var activeNode = (_b = droppableContainers.get(activeId)) === null || _b === void 0 ? void 0 : _b.node.current;
        var sortedItems = arrayMove(items, activeIdx, overIdx);
        var currentNodeIdAtNextIndex = sortedItems[nextIdx];
        var newNode = (_c = droppableContainers.get(currentNodeIdAtNextIndex)) === null || _c === void 0 ? void 0 : _c.node.current;
        if (newNode && activeNode) {
            var activeRect = activeNode.getBoundingClientRect();
            var newRect = newNode.getBoundingClientRect();
            var gapBetweenColumns = direction === Direction.Right ? newRect.left - activeRect.right : activeRect.left - newRect.right;
            return {
                x: activeRect.left + direction * (newRect.width + gapBetweenColumns) + COLUMN_OVERLAY_X_OFFSET,
                y: activeRect.top + COLUMN_OVERLAY_Y_OFFSET
            };
        }
    }
};
export var kanbanKeyboardCoordinateGetter = function (event, args) {
    var _a;
    event.preventDefault();
    var eventKey = event.key;
    var active = args.context.active;
    if (!eventKeys.includes(eventKey) || !active) {
        return;
    }
    var activeElementType = (_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type;
    if (activeElementType === KanbanElementType.Column) {
        return kanbanColumnKeyboardCoordinateGetter(event, args);
    }
    else if (activeElementType === KanbanElementType.Card) {
        return kanbanCardKeyboardCoordinateGetter(event, args);
    }
};
//# sourceMappingURL=kanbankeyboardcoordinategetter.js.map