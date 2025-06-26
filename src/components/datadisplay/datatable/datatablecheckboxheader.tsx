import {HeaderContext} from '@tanstack/table-core';
import {Checkbox, CheckboxCommonProps} from '../../inputs/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {ReactNode} from 'react';

export interface DataTableCheckboxHeaderProps<TData, TValue, T extends AnyObject>
    extends HeaderContext<TData, TValue>,
        CheckboxCommonProps<T> {
    label?: ReactNode;
}

export function DataTableCheckboxHeader<TData, TValue, T extends AnyObject>({
    table,
    ...props
}: DataTableCheckboxHeaderProps<TData, TValue, T>) {
    const translateCommon = useTranslateCommon();

    return (
        <Checkbox
            {...props}
            aria-label={props['aria-label'] ?? translateCommon('selectAllRows')}
            isIndeterminate={table.getIsSomeRowsSelected()}
            isSelected={table.getIsAllRowsSelected()}
            onChange={(val) => table.toggleAllRowsSelected(val)}
        />
    );
}
