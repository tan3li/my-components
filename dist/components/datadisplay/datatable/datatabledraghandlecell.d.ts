import { CellContext } from '@tanstack/table-core';
import { RefAttributes } from 'react';
export interface DataTableDragHandleCellProps<TData, TValue> extends CellContext<TData, TValue>, RefAttributes<HTMLButtonElement> {
}
export declare function DataTableDragHandleCell<TData, TValue>({ ref, row }: DataTableDragHandleCellProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatabledraghandlecell.d.ts.map