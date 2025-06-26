import {classNames} from '../../../utils/classnames.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {iconNames} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';

interface StepIndicatorProps {
    isActive?: boolean;
    isCompleted?: boolean;
    isDisabled?: boolean;
    text: string | number;
}

export function StepIndicator({isActive, isCompleted, isDisabled, text}: StepIndicatorProps) {
    return (
        <div
            className={classNames('step-indicator', {
                'step-indicator--completed': isCompleted,
                'step-indicator--active': isActive,
                'step-indicator--disabled': isDisabled
            })}>
            {isCompleted ?
                <Icon name={iconNames.CheckFilled} size={IconSize.SM} />
            :   <Label size={Size.sm}>
                    <strong>{text}</strong>
                </Label>
            }
        </div>
    );
}
