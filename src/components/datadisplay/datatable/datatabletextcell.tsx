import {CellContext} from '@tanstack/table-core';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';
import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface DataTableTextCellProps<TData> extends CellContext<TData, any>, RefAttributes<HTMLSpanElement> {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export function DataTableTextCell<TData>({
    children,
    className,
    getValue,
    ref,
    style,
    table,
    row
}: DataTableTextCellProps<TData>) {
    return (
        <Label
            className={classNames('data-table__text-cell', className, {
                'data-table__text-cell--disabled': table.options.meta?.isRowDisabled?.(row)
            })}
            ref={ref}
            size={Size.md}
            style={style}>
            {children ?? getValue()}
        </Label>
    );
}
