import {Icon} from '../../media/icon/icon.js';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface SelectOptionsEmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Name of decorative icon.
     */
    iconName?: IconName;
    /**
     * Text for the element.
     */
    text?: string;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
}

export function SelectOptionsEmptyState({
    className,
    iconName = iconNames.VisibilityOff,
    ref,
    size,
    text
}: SelectOptionsEmptyStateProps) {
    const translateCommon = useTranslateCommon();

    return (
        <div className={classNames('select-options-empty-state', className)} ref={ref} role="presentation">
            <Icon className="select-options-empty-state__icon" name={iconName} />
            <Label size={size === Size.xs ? Size.md : Size.lg}>{text ?? translateCommon('noResultsFound')}</Label>
        </div>
    );
}
