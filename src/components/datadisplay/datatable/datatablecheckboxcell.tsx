import {CellContext} from '@tanstack/table-core';
import {Checkbox, CheckboxCommonProps} from '../../inputs/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {ReactNode} from 'react';
import {toggleSelectedRow} from './toggleselectedrow.js';

export interface DataTableCheckboxCellProps<TData, TValue, P extends AnyObject>
    extends CellContext<TData, TValue>,
        CheckboxCommonProps<P> {
    label?: ReactNode;
}

export function DataTableCheckboxCell<TData, TValue, P extends AnyObject>({
    row,
    table,
    ...props
}: DataTableCheckboxCellProps<TData, TValue, P>) {
    const translateCommon = useTranslateCommon();
    const enableParentRowSelectionSync = table.options.meta?.enableParentRowSelectionSync;

    return (
        <Checkbox
            {...props}
            aria-label={props['aria-label'] ?? translateCommon('selectRow')}
            isDisabled={!row.getCanSelect()}
            isIndeterminate={enableParentRowSelectionSync ? row.getIsSomeSelected() : undefined}
            isSelected={row.getIsSelected()}
            onChange={(isSelected) => toggleSelectedRow(isSelected, row, table)}
        />
    );
}
