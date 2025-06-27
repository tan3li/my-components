import { closestCorners, getFirstCollision } from '@dnd-kit/core';
import { KeyboardEventKey } from '../../../constants/index.js';
var eventKeys = [KeyboardEventKey.ArrowDown, KeyboardEventKey.ArrowUp];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = -1] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
var X_OFFSET = 30;
export var nestedDataTableKeyboardCoordinateGetter = function (event, args) {
    event.preventDefault();
    var eventKey = event.key;
    var _a = args.context, active = _a.active, collisionRect = _a.collisionRect, droppableContainers = _a.droppableContainers, droppableRects = _a.droppableRects;
    if (!eventKeys.includes(eventKey) || !active || !collisionRect) {
        return;
    }
    var filteredContainers = [];
    var activeId = active.id;
    var heightPercentage = 0.25;
    var direction;
    droppableContainers.getEnabled().forEach(function (entry) {
        if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
            return;
        }
        var entryId = entry.id;
        var rect = droppableRects.get(entryId);
        if (!rect) {
            return;
        }
        switch (eventKey) {
            case KeyboardEventKey.ArrowDown:
                if (entryId !== activeId && collisionRect.top < rect.top + rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction.Down;
                break;
            case KeyboardEventKey.ArrowUp:
                if (entryId !== activeId && collisionRect.top > rect.top - rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction.Up;
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
        var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
        if (newRect && direction) {
            var activeTop = collisionRect.top;
            var newRectTop = newRect.top, newRectHeight = newRect.height;
            var afterThreshold = newRectTop + newRectHeight * heightPercentage;
            var beforeThreshold = newRectTop - newRectHeight * heightPercentage;
            var y = void 0;
            if (direction === Direction.Up) {
                if (activeTop > afterThreshold + 1) {
                    y = afterThreshold + 1;
                }
                else if (activeTop > newRectTop) {
                    y = newRectTop;
                }
                else {
                    y = beforeThreshold - 1;
                }
            }
            else if (direction === Direction.Down) {
                if (activeTop < beforeThreshold - 1) {
                    y = beforeThreshold - 1;
                }
                else if (activeTop < newRectTop) {
                    y = newRectTop;
                }
                else {
                    y = afterThreshold + 1;
                }
            }
            if (y !== undefined) {
                return {
                    x: newRect.left + X_OFFSET,
                    y: y
                };
            }
        }
    }
};
//# sourceMappingURL=nestedatatablekeyboardcoordinategetter.js.map