import type { ClientRect } from '@dnd-kit/core';
interface SortingParams {
    activeNodeRect: ClientRect | null;
    activeIndex: number;
    index: number;
    rects: ClientRect[];
    overIndex: number;
}
export declare function customSortingStrategyForDraggingOnlyParentRows<TData extends {
    level: number;
}>(sortingParams: SortingParams, rows: TData[]): {
    scaleX: number;
    scaleY: number;
    x: number;
    y: number;
} | null;
export {};
//# sourceMappingURL=customsortinstrategyfordraggingonlyparentrows.d.ts.map