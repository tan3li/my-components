import { CellContext } from '@tanstack/table-core';
import { InlineSelectProps, SelectItemBase } from '../../inputs/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
export interface DataTableSelectCellProps<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>> extends CellContext<TData, TValue>, InlineSelectProps<P, TItem> {
}
export declare function DataTableSelectCell<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>>({ column, row, table, ...props }: DataTableSelectCellProps<TData, TValue, P, TItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatableselectcell.d.ts.map