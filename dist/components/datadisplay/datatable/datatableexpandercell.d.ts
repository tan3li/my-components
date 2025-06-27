import { CellContext } from '@tanstack/table-core';
import { ReactNode, RefAttributes } from 'react';
export interface DataTableExpanderCellProps<TData, TValue> extends CellContext<TData, TValue>, RefAttributes<HTMLDivElement> {
    prefix?: ReactNode;
    suffix?: ReactNode;
    useIndentation?: boolean;
}
export declare function DataTableExpanderCell<TData, TValue>({ prefix, ref, row, suffix, table, useIndentation }: DataTableExpanderCellProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatableexpandercell.d.ts.map