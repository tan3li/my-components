import {CellContext} from '@tanstack/table-core';
import {InlineTextField, InlineTextFieldProps} from '../../inputs/index.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';

export interface DataTableTextFieldCellProps<TData, TValue, P extends AnyObject>
    extends CellContext<TData, TValue>,
        InlineTextFieldProps<P> {}

export function DataTableTextFieldCell<TData, TValue extends string | number, P extends AnyObject>({
    column,
    getValue,
    row,
    table,
    ...props
}: DataTableTextFieldCellProps<TData, TValue, P>) {
    return (
        <InlineTextField
            {...props}
            changeCallback={(args) => table.options.meta?.onDataEdit?.(row.index, column.id, args)}
            isDisabled={props.isDisabled ?? table.options.meta?.isRowDisabled?.(row)}
            value={getValue().toString()}
        />
    );
}
