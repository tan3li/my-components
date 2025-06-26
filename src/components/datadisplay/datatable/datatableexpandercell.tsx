import {CellContext} from '@tanstack/table-core';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {Pressable} from '@react-aria/interactions';
import {ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Spinner, SpinnerVariant} from '../../feedback/index.js';
import {Size} from '../../../constants/index.js';

export interface DataTableExpanderCellProps<TData, TValue>
    extends CellContext<TData, TValue>,
        RefAttributes<HTMLDivElement> {
    prefix?: ReactNode;
    suffix?: ReactNode;
    useIndentation?: boolean;
}

const INDENT_SIZE_REM = 0.75;

export function DataTableExpanderCell<TData, TValue>({
    prefix,
    ref,
    row,
    suffix,
    table,
    useIndentation = true
}: DataTableExpanderCellProps<TData, TValue>) {
    const canExpand = row.getCanExpand();
    const style = useIndentation ? {paddingLeft: `${row.depth * INDENT_SIZE_REM}rem`} : undefined;
    const isExpanded = row.getIsExpanded();
    const isLoading = table.options.meta?.isRowLoading?.(row);
    const translateCommon = useTranslateCommon();

    return (
        <div className="data-table__indent-wrapper" ref={ref} style={style}>
            {prefix}
            <Pressable onPress={!isLoading && canExpand ? row.getToggleExpandedHandler() : undefined}>
                <div
                    aria-expanded={isExpanded}
                    aria-label={translateCommon(isExpanded ? 'collapse' : 'expand')}
                    className={classNames('data-table__expander', {
                        'data-table__expander--hidden': !canExpand,
                        'data-table__expander--loading': isLoading
                    })}
                    role="button"
                    tabIndex={canExpand ? 0 : -1}>
                    {isLoading ?
                        <Spinner size={Size.md} variant={SpinnerVariant.Neutral} />
                    :   <Icon name={isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight} size={IconSize.LG} />}
                </div>
            </Pressable>
            {suffix}
        </div>
    );
}
