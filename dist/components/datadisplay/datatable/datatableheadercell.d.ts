import { Header } from '@tanstack/table-core';
import { RowData } from '@tanstack/react-table';
import { HTMLAttributes, RefAttributes } from 'react';
export interface DataTableHeaderCellProps<TData> extends HTMLAttributes<HTMLTableCellElement>, RefAttributes<HTMLTableCellElement> {
    header: Header<TData, unknown>;
    rowSpan?: number;
    showContent?: boolean;
}
export declare function DataTableHeaderCell<TData extends RowData>({ className, header, rowSpan, showContent, ...props }: DataTableHeaderCellProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatableheadercell.d.ts.map