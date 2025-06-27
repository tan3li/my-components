import { CellContext } from '@tanstack/table-core';
import { InlineTextFieldProps } from '../../inputs/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
export interface DataTableTextFieldCellProps<TData, TValue, P extends AnyObject> extends CellContext<TData, TValue>, InlineTextFieldProps<P> {
}
export declare function DataTableTextFieldCell<TData, TValue extends string | number, P extends AnyObject>({ column, getValue, row, table, ...props }: DataTableTextFieldCellProps<TData, TValue, P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatabletextfieldcell.d.ts.map