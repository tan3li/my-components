import {Label as ReactAriaLabel, LabelProps as ReactAriaLabelProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {RequiredIndicator} from '../../feedback/requiredindicator/requiredindicator.js';
import {iconNames} from '../../media/icon/icons.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {Label} from '../label/label.js';
import {ReactNode} from 'react';
import {TooltipTrigger} from '../../feedback/tooltip/tooltiptrigger.js';
import {Tooltip, TooltipProps, TooltipType} from '../../feedback/tooltip/tooltip.js';
import {TriggerElement} from '../../action/triggerelement/triggerelement.js';

export interface TooltipContent {
    headerIconName?: TooltipProps['headerIconName'];
    headerText?: TooltipProps['headerText'];
    content: TooltipProps['children'];
}

export interface FieldLabelProps extends ReactAriaLabelProps {
    isDisabled?: boolean;
    isRequired?: boolean;
    size?: Size.sm | Size.md | Size.lg;
    suffix?: ReactNode;
    tooltipContent?: TooltipContent;
}

export function FieldLabel({
    children,
    className,
    isDisabled,
    isRequired,
    size = Size.md,
    suffix,
    tooltipContent,
    ...props
}: FieldLabelProps) {
    const {content: ttContent, ...ttProps} = tooltipContent ?? {};
    let iconSize = IconSize.XS;

    if (size === Size.md) {
        iconSize = IconSize.SM;
    }

    return (
        <ReactAriaLabel
            {...props}
            className={classNames('field-label', className, {
                'field-label--disabled': isDisabled
            })}>
            {isRequired && <RequiredIndicator />}
            <Label size={size}>
                <strong>{children}</strong>
            </Label>
            {ttContent && (
                <TooltipTrigger>
                    <TriggerElement>
                        <Icon className="field-label__icon" name={iconNames.Help} size={iconSize} />
                    </TriggerElement>
                    <Tooltip {...ttProps} type={TooltipType.Rich}>
                        {ttContent}
                    </Tooltip>
                </TooltipTrigger>
            )}
            {suffix}
        </ReactAriaLabel>
    );
}
