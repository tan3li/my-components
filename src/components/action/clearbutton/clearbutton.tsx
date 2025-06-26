import {Button, ButtonProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {iconNames} from '../../media/icon/icons.js';
import {Icon} from '../../media/icon/icon.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {RefAttributes} from 'react';

export interface ClearButtonProps extends ButtonProps, RefAttributes<HTMLButtonElement> {}

export function ClearButton({className, ...props}: ClearButtonProps) {
    const translateCommon = useTranslateCommon();

    return (
        <Button
            {...props}
            aria-label={props['aria-label'] ?? translateCommon('clear')}
            className={classNames('clear-button', className)}>
            <Icon className="clear-button__icon" name={iconNames.CancelFilled} />
        </Button>
    );
}
