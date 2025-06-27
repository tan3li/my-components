import { CellContext } from '@tanstack/table-core';
import { CSSProperties, ReactNode, RefAttributes } from 'react';
export interface DataTableTextCellProps<TData> extends CellContext<TData, any>, RefAttributes<HTMLSpanElement> {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export declare function DataTableTextCell<TData>({ children, className, getValue, ref, style, table, row }: DataTableTextCellProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatabletextcell.d.ts.map