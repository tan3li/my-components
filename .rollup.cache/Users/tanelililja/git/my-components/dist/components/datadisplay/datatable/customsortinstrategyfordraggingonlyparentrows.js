import { __assign } from "tslib";
var defaultScale = {
    scaleX: 1,
    scaleY: 1
};
function calculateItemGap(rects, index, activeIndex) {
    var currentRect = rects[index];
    if (!currentRect) {
        return 0;
    }
    if (activeIndex < index) {
        var prevRect = rects[index - 1];
        return prevRect ? currentRect.top - (prevRect.top + prevRect.height) : 0;
    }
    var nextRect = rects[index + 1];
    return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
}
function getParentBoundaryIndex(rows, startIndex, searchForward) {
    var _a;
    var boundaryIdx = startIndex;
    while (((_a = rows[boundaryIdx]) === null || _a === void 0 ? void 0 : _a.level) !== 0) {
        boundaryIdx += searchForward ? 1 : -1;
    }
    return boundaryIdx;
}
function isOverIdxInsideGroup(_a, rows) {
    var _b;
    var activeIndex = _a.activeIndex, index = _a.index, overIndex = _a.overIndex;
    var currentRowLevel = rows[index].level;
    var isParentRow = currentRowLevel === 0 && ((_b = rows[index + 1]) === null || _b === void 0 ? void 0 : _b.level) === 1;
    var isChildRow = currentRowLevel === 1;
    var isInsideGroup = false;
    if (isChildRow || (activeIndex < index && isParentRow)) {
        var lastChildIdx = getParentBoundaryIndex(rows, isChildRow ? index : index + 1, true);
        var overItemParentIdx = getParentBoundaryIndex(rows, isParentRow ? index : index - 1, false);
        isInsideGroup =
            (overIndex > activeIndex && overItemParentIdx <= overIndex && overIndex <= lastChildIdx - 1) ||
                (overIndex < activeIndex && overItemParentIdx + 1 <= overIndex && overIndex <= lastChildIdx);
    }
    return isInsideGroup;
}
function isValidDropzoneIndex(sortingParams, rows) {
    var activeIndex = sortingParams.activeIndex, index = sortingParams.index, overIndex = sortingParams.overIndex;
    var goingUp = activeIndex > overIndex;
    var goingDown = activeIndex < overIndex;
    var overItem = rows[overIndex];
    var overItemLevel = overItem.level;
    var isAboveParent = overItemLevel === 0 && index <= overIndex;
    var nextRow = rows[overIndex + 1];
    var prevRow = rows[overIndex - 1];
    var nextOrPrevRowIsChild = (nextRow && nextRow.level !== 0 && goingDown) || (prevRow && prevRow.level !== 0 && goingUp);
    var isBetweenParentAndChildren = overItemLevel === 0 && index === overIndex && nextOrPrevRowIsChild;
    var isBelowLastChildInGroup = overItemLevel === 1 && (!nextRow || nextRow.level === 0);
    var isBetweenStandaloneParents = overItemLevel === 0 && index !== activeIndex;
    var isBetweenChildren = overItemLevel === 1 && nextOrPrevRowIsChild;
    // Define valid drop zones
    return (!isOverIdxInsideGroup(sortingParams, rows) ||
        ((isAboveParent || isBelowLastChildInGroup || isBetweenStandaloneParents) &&
            !isBetweenChildren &&
            !isBetweenParentAndChildren));
}
export function customSortingStrategyForDraggingOnlyParentRows(sortingParams, rows) {
    var _a;
    var activeIndex = sortingParams.activeIndex, fallbackActiveRect = sortingParams.activeNodeRect, index = sortingParams.index, overIndex = sortingParams.overIndex, rects = sortingParams.rects;
    var activeNodeRect = (_a = rects[activeIndex]) !== null && _a !== void 0 ? _a : fallbackActiveRect;
    if (!activeNodeRect) {
        return null;
    }
    var activeItem = rows[activeIndex];
    // Ensure only level 0 (parent) items are draggable
    if (activeItem.level !== 0) {
        return __assign({ x: 0, y: 0 }, defaultScale);
    }
    var isValidDropZone = isValidDropzoneIndex(sortingParams, rows);
    if (index === activeIndex) {
        var overRect = rects[overIndex];
        if (!overRect) {
            return null;
        }
        var yTransform = index < overIndex ?
            overRect.top + overRect.height - (activeNodeRect.top + activeNodeRect.height)
            : overRect.top - activeNodeRect.top;
        return __assign({ x: 0, y: yTransform }, defaultScale);
    }
    var itemGap = calculateItemGap(rects, index, activeIndex);
    if (index > activeIndex && index <= overIndex && isValidDropZone) {
        return __assign({ x: 0, y: -activeNodeRect.height - itemGap }, defaultScale);
    }
    if (index < activeIndex && index >= overIndex && isValidDropZone) {
        return __assign({ x: 0, y: activeNodeRect.height + itemGap }, defaultScale);
    }
    return __assign({ x: 0, y: 0 }, defaultScale);
}
//# sourceMappingURL=customsortinstrategyfordraggingonlyparentrows.js.map