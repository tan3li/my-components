import {Button, ButtonProps} from 'react-aria-components';
import {Label} from '../../text';
import {Size} from '../../../constants';
import {ReactNode} from 'react';
import {Icon, IconName} from '../../media';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback';

interface SegmentedControlItemProps extends ButtonProps {
    label?: ReactNode;
    startIconName?: IconName;
}

export function SegmentedControlItem({label, startIconName, ...props}: SegmentedControlItemProps) {
    const buttonElement = (
        <Button {...props} className="segmented-control-item">
            {startIconName && <Icon className="segmented-control-item__icon" name={startIconName} />}
            {label && (
                <Label className="segmented-control-item__label" size={Size.md}>
                    {label}
                </Label>
            )}
        </Button>
    );

    if (label) {
        return buttonElement;
    }

    return (
        <TooltipTrigger>
            {buttonElement}
            <Tooltip type={TooltipType.Plain}>{props['aria-label']}</Tooltip>
        </TooltipTrigger>
    );
}
