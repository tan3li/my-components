import {CellContext} from '@tanstack/table-core';
import {InlineSelect, InlineSelectProps, SelectItemBase} from '../../inputs/index.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';

export interface DataTableSelectCellProps<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends CellContext<TData, TValue>,
        InlineSelectProps<P, TItem> {}

export function DataTableSelectCell<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    column,
    row,
    table,
    ...props
}: DataTableSelectCellProps<TData, TValue, P, TItem>) {
    return (
        <InlineSelect
            {...props}
            changeCallback={(args) => table.options.meta?.onDataEdit?.(row.index, column.id, args)}
            isDisabled={props.isDisabled ?? table.options.meta?.isRowDisabled?.(row)}
        />
    );
}
