import { Active, Over } from '@dnd-kit/core';
import { ExpandedState } from '@tanstack/react-table';
export declare const enum DataTableRowDragMode {
    Flat = "flat",
    Nested = "nested"
}
export declare const enum DropPosition {
    After = "after",
    Before = "before",
    Inside = "inside"
}
export interface DraggedRowData {
    active: Active;
    dropPosition?: DropPosition;
    expanded: ExpandedState;
    over?: Over | null;
}
//# sourceMappingURL=types.d.ts.map