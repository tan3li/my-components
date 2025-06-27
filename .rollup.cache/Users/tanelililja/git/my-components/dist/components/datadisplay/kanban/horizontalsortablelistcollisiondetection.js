import sortBy from 'lodash.sortby';
var collision = function (droppableContainer) {
    var _a;
    return ({
        id: (_a = droppableContainer === null || droppableContainer === void 0 ? void 0 : droppableContainer.id) !== null && _a !== void 0 ? _a : '',
        value: droppableContainer
    });
};
var HALF = 0.5;
var leftmostDroppableContainerMajorityCovered = function (_a) {
    var droppableContainers = _a.droppableContainers, collisionRect = _a.collisionRect;
    var ascendingDroppableContainers = sortBy(droppableContainers, function (c) { var _a; return (_a = c === null || c === void 0 ? void 0 : c.rect.current) === null || _a === void 0 ? void 0 : _a.left; });
    for (var _i = 0, ascendingDroppableContainers_1 = ascendingDroppableContainers; _i < ascendingDroppableContainers_1.length; _i++) {
        var droppableContainer = ascendingDroppableContainers_1[_i];
        var droppableRect = droppableContainer.rect.current;
        if (droppableRect) {
            var coveredPercentage = (droppableRect.left + droppableRect.width - collisionRect.left) / droppableRect.width;
            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }
    return [collision(ascendingDroppableContainers[0])];
};
var rightmostDroppableContainerMajorityCovered = function (_a) {
    var droppableContainers = _a.droppableContainers, collisionRect = _a.collisionRect;
    var descendingDroppableContainers = sortBy(droppableContainers, function (c) { var _a; return (_a = c === null || c === void 0 ? void 0 : c.rect.current) === null || _a === void 0 ? void 0 : _a.left; }).reverse();
    for (var _i = 0, descendingDroppableContainers_1 = descendingDroppableContainers; _i < descendingDroppableContainers_1.length; _i++) {
        var droppableContainer = descendingDroppableContainers_1[_i];
        var droppableRect = droppableContainer.rect.current;
        if (droppableRect) {
            var coveredPercentage = (collisionRect.right - droppableRect.left) / droppableRect.width;
            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }
    return [collision(descendingDroppableContainers[0])];
};
export var horizontalSortableListCollisionDetection = function (args) {
    var _a, _b, _c;
    if (args.collisionRect.left < ((_c = (_b = (_a = args.active.rect.current) === null || _a === void 0 ? void 0 : _a.initial) === null || _b === void 0 ? void 0 : _b.left) !== null && _c !== void 0 ? _c : 0)) {
        return leftmostDroppableContainerMajorityCovered(args);
    }
    return rightmostDroppableContainerMajorityCovered(args);
};
//# sourceMappingURL=horizontalsortablelistcollisiondetection.js.map