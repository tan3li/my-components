import {classNames} from '../../../utils/classnames.js';
import {DataTableCellContent} from './datatablecellcontent.js';
import {Header} from '@tanstack/table-core';
import {flexRender, RowData} from '@tanstack/react-table';
import {HTMLAttributes, ReactNode, RefAttributes} from 'react';
import {isString} from '../../../utils/stringhelper.js';
import {Label} from '../../text/index.js';
import {Alignment, KeyboardEventKey, Size, SortDirection} from '../../../constants/index.js';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {getColumnPinningStyles} from './getcolumnpinningstyles.js';

export interface DataTableHeaderCellProps<TData>
    extends HTMLAttributes<HTMLTableCellElement>,
        RefAttributes<HTMLTableCellElement> {
    header: Header<TData, unknown>;
    rowSpan?: number;
    showContent?: boolean;
}

export function DataTableHeaderCell<TData extends RowData>({
    className,
    header,
    rowSpan,
    showContent = true,
    ...props
}: DataTableHeaderCellProps<TData>) {
    const {column, colSpan} = header;
    const isSortable = showContent && column.getCanSort();
    const {alignment = Alignment.start, isEditable, headerStyle} = column.columnDef.meta ?? {};
    const sortHandler = isSortable ? column.getToggleSortingHandler() : undefined;
    let content = showContent ? flexRender(column.columnDef.header, header.getContext()) : null,
        sortIcon: ReactNode = null;

    if (isString(content)) {
        content = (
            <Label size={Size.sm}>
                <strong>{content}</strong>
            </Label>
        );
    }

    if (isSortable) {
        const sortDirection = column.getIsSorted();
        let iconName: IconName;

        switch (sortDirection) {
            case SortDirection.Ascending:
                iconName = iconNames.ArrowUpward;
                break;
            case SortDirection.Descending:
                iconName = iconNames.ArrowDownward;
                break;
            default:
                iconName = iconNames.UnfoldMore;
                break;
        }

        sortIcon = <Icon className="data-table__sort-icon" name={iconName} size={IconSize.MD} />;
    }

    return (
        <th
            {...props}
            className={classNames('data-table__header-cell', className, {
                'data-table__header-cell--sortable': isSortable,
                [`data-table__header-cell--editable-${alignment}`]: isEditable
            })}
            colSpan={colSpan}
            onClick={sortHandler}
            onKeyDown={
                sortHandler ?
                    (e) => {
                        const key = e.key;

                        if (key === KeyboardEventKey.Enter || key === KeyboardEventKey.Space) {
                            sortHandler(e);
                        }
                    }
                :   undefined
            }
            role="columnheader"
            rowSpan={rowSpan}
            scope="col"
            style={{...getColumnPinningStyles(header.column), ...headerStyle}}
            tabIndex={isSortable ? 0 : undefined}>
            <DataTableCellContent alignment={alignment}>
                {content}
                {sortIcon}
            </DataTableCellContent>
        </th>
    );
}
