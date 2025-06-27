import { CellContext } from '@tanstack/table-core';
import { CheckboxCommonProps } from '../../inputs/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { ReactNode } from 'react';
export interface DataTableCheckboxCellProps<TData, TValue, P extends AnyObject> extends CellContext<TData, TValue>, CheckboxCommonProps<P> {
    label?: ReactNode;
}
export declare function DataTableCheckboxCell<TData, TValue, P extends AnyObject>({ row, table, ...props }: DataTableCheckboxCellProps<TData, TValue, P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatablecheckboxcell.d.ts.map