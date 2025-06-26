import type {ClientRect} from '@dnd-kit/core';

interface SortingParams {
    activeNodeRect: ClientRect | null;
    activeIndex: number;
    index: number;
    rects: ClientRect[];
    overIndex: number;
}

const defaultScale = {
    scaleX: 1,
    scaleY: 1
};

function calculateItemGap(rects: ClientRect[], index: number, activeIndex: number) {
    const currentRect = rects[index];

    if (!currentRect) {
        return 0;
    }

    if (activeIndex < index) {
        const prevRect = rects[index - 1];

        return prevRect ? currentRect.top - (prevRect.top + prevRect.height) : 0;
    }

    const nextRect = rects[index + 1];

    return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
}

function getParentBoundaryIndex<TModel extends {level: number}>(
    rows: TModel[],
    startIndex: number,
    searchForward: boolean
): number {
    let boundaryIdx = startIndex;

    while (rows[boundaryIdx]?.level !== 0) {
        boundaryIdx += searchForward ? 1 : -1;
    }

    return boundaryIdx;
}

function isOverIdxInsideGroup<TModel extends {level: number}>(
    {activeIndex, index, overIndex}: SortingParams,
    rows: TModel[]
): boolean {
    const currentRowLevel = rows[index].level;
    const isParentRow = currentRowLevel === 0 && rows[index + 1]?.level === 1;
    const isChildRow = currentRowLevel === 1;
    let isInsideGroup = false;

    if (isChildRow || (activeIndex < index && isParentRow)) {
        const lastChildIdx = getParentBoundaryIndex(rows, isChildRow ? index : index + 1, true);
        const overItemParentIdx = getParentBoundaryIndex(rows, isParentRow ? index : index - 1, false);

        isInsideGroup =
            (overIndex > activeIndex && overItemParentIdx <= overIndex && overIndex <= lastChildIdx - 1) ||
            (overIndex < activeIndex && overItemParentIdx + 1 <= overIndex && overIndex <= lastChildIdx);
    }

    return isInsideGroup;
}

function isValidDropzoneIndex<TModel extends {level: number}>(sortingParams: SortingParams, rows: TModel[]): boolean {
    const {activeIndex, index, overIndex} = sortingParams;
    const goingUp = activeIndex > overIndex;
    const goingDown = activeIndex < overIndex;
    const overItem = rows[overIndex];
    const overItemLevel = overItem.level;
    const isAboveParent = overItemLevel === 0 && index <= overIndex;
    const nextRow = rows[overIndex + 1];
    const prevRow = rows[overIndex - 1];
    const nextOrPrevRowIsChild =
        (nextRow && nextRow.level !== 0 && goingDown) || (prevRow && prevRow.level !== 0 && goingUp);
    const isBetweenParentAndChildren = overItemLevel === 0 && index === overIndex && nextOrPrevRowIsChild;
    const isBelowLastChildInGroup = overItemLevel === 1 && (!nextRow || nextRow.level === 0);
    const isBetweenStandaloneParents = overItemLevel === 0 && index !== activeIndex;
    const isBetweenChildren = overItemLevel === 1 && nextOrPrevRowIsChild;

    // Define valid drop zones
    return (
        !isOverIdxInsideGroup(sortingParams, rows) ||
        ((isAboveParent || isBelowLastChildInGroup || isBetweenStandaloneParents) &&
            !isBetweenChildren &&
            !isBetweenParentAndChildren)
    );
}

export function customSortingStrategyForDraggingOnlyParentRows<TData extends {level: number}>(
    sortingParams: SortingParams,
    rows: TData[]
): {
    scaleX: number;
    scaleY: number;
    x: number;
    y: number;
} | null {
    const {activeIndex, activeNodeRect: fallbackActiveRect, index, overIndex, rects} = sortingParams;

    const activeNodeRect = rects[activeIndex] ?? fallbackActiveRect;

    if (!activeNodeRect) {
        return null;
    }

    const activeItem = rows[activeIndex];

    // Ensure only level 0 (parent) items are draggable
    if (activeItem.level !== 0) {
        return {x: 0, y: 0, ...defaultScale};
    }

    const isValidDropZone = isValidDropzoneIndex(sortingParams, rows);

    if (index === activeIndex) {
        const overRect = rects[overIndex];

        if (!overRect) {
            return null;
        }

        const yTransform =
            index < overIndex ?
                overRect.top + overRect.height - (activeNodeRect.top + activeNodeRect.height)
            :   overRect.top - activeNodeRect.top;

        return {x: 0, y: yTransform, ...defaultScale};
    }

    const itemGap = calculateItemGap(rects, index, activeIndex);

    if (index > activeIndex && index <= overIndex && isValidDropZone) {
        return {
            x: 0,
            y: -activeNodeRect.height - itemGap,
            ...defaultScale
        };
    }

    if (index < activeIndex && index >= overIndex && isValidDropZone) {
        return {
            x: 0,
            y: activeNodeRect.height + itemGap,
            ...defaultScale
        };
    }

    return {x: 0, y: 0, ...defaultScale};
}
