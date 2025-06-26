import {classNames} from '../../../utils/classnames.js';
import {AriaRole, ReactNode, RefAttributes} from 'react';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {IconName} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {isString} from '../../../utils/stringhelper.js';
import {isNumber} from '../../../utils/objecthelper.js';

export const enum BadgeStyle {
    Fill = 'fill',
    Outline = 'outline',
    Plain = 'plain'
}

export const enum BadgeVariant {
    Neutral = 'neutral',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Informative = 'informative'
}

export interface BadgeProps extends RefAttributes<HTMLDivElement> {
    /**
     * Aria label for screen readers.
     */
    ['aria-label']?: string;
    /**
     * Content of the badge.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Icon for badge.
     */
    iconName?: IconName;
    /**
     * Whether badge is disabled.
     */
    isDisabled?: boolean;
    /**
     * Aria role for the element.
     */
    role?: AriaRole;
    /**
     * Visual style for the badge.
     */
    style: BadgeStyle;
    /**
     * Variant of the badge.
     */
    variant: BadgeVariant;
}

function useIconLabel(variant: BadgeVariant) {
    const translateCommon = useTranslateCommon();

    switch (variant) {
        case BadgeVariant.Informative:
            return translateCommon('info');
        case BadgeVariant.Success:
            return translateCommon('success');
        case BadgeVariant.Danger:
            return translateCommon('danger');
        case BadgeVariant.Warning:
            return translateCommon('warning');
        default:
            return translateCommon('neutral');
    }
}

export function Badge({
    'aria-label': ariaLabel,
    children,
    className,
    iconName,
    isDisabled,
    ref,
    role,
    style,
    variant
}: BadgeProps) {
    const isStringOrNumberChild = isString(children) || isNumber(children);
    const iconLabel = useIconLabel(variant);

    return (
        <span
            aria-label={ariaLabel}
            className={classNames(`badge badge--${variant} ${style}-badge ${style}-badge--${variant}`, className, {
                'badge--disabled': isDisabled
            })}
            ref={ref}
            role={role}>
            {iconName && <Icon ariaLabel={iconLabel} className="badge__icon" name={iconName} size={IconSize.XS} />}
            <Label className="badge__label" size={Size.sm}>
                {isStringOrNumberChild ?
                    <strong>{children}</strong>
                :   children}
            </Label>
        </span>
    );
}
