import {Icon, iconNames, IconSize} from '../../media/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {ButtonHTMLAttributes, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface DragHandleProps extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

export function DragHandle({'aria-label': ariaLabel, className, ...props}: DragHandleProps) {
    const translateCommon = useTranslateCommon();

    return (
        <button
            {...props}
            aria-label={ariaLabel ?? translateCommon('move')}
            className={classNames('drag-handle', className)}>
            <Icon name={iconNames.DragIndicator} size={IconSize.LG} />
        </button>
    );
}
