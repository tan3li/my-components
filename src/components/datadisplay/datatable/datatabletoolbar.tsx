import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {ButtonContext, Provider} from 'react-aria-components';

export interface DataTableToolbarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Action buttons for selected items.
     */
    actions?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of selected rows/items.
     */
    selectedCount: number;
    /**
     * Minimum width reserved for the "<selectedCount> selected" text.
     */
    selectedTextMinWidth?: CSSProperties['minWidth'];
}

export function DataTableToolbar({
    actions,
    className,
    ref,
    selectedCount,
    selectedTextMinWidth
}: DataTableToolbarProps) {
    const translateCommon = useTranslateCommon();

    return (
        <div
            aria-label={translateCommon('actionsForSelectedRows')}
            className={classNames('data-table-toolbar', className)}
            ref={ref}
            role="toolbar">
            <Label
                className="data-table-toolbar__selected-text"
                size={Size.sm}
                style={{minWidth: selectedTextMinWidth}}>
                {`${selectedCount} ${translateCommon('selected').toLowerCase()}`}
            </Label>
            <Provider values={[[ButtonContext, {isDisabled: !selectedCount}]]}>{actions}</Provider>
        </div>
    );
}
