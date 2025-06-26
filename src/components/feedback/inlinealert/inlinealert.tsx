import {ReactNode, RefAttributes, useState} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {iconNames} from '../../media/icon/icons.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';

export const enum InlineAlertVariant {
    Neutral = 'neutral',
    Informative = 'informative',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning'
}

export interface InlineAlertProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for the action button.
     */
    actionLabel?: string;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Main text content
     */
    content: ReactNode;
    /**
     * Whether alert can be dismissed.
     */
    isDismissible?: boolean;
    /**
     * Callback for the action button.
     */
    onAction?: () => void;
    /**
     * Title text.
     */
    title?: string;
    /**
     * Variant of the alert.
     */
    variant?: InlineAlertVariant;
}

function getIconName(variant: InlineAlertVariant) {
    switch (variant) {
        case InlineAlertVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case InlineAlertVariant.Success:
            return iconNames.CheckCircleFilled;
        case InlineAlertVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return iconNames.InfoFilled;
    }
}

export function InlineAlert({
    actionLabel,
    className,
    content,
    isDismissible = true,
    onAction,
    ref,
    title,
    variant
}: InlineAlertProps) {
    const [isVisible, setIsVisible] = useState(true);
    const translateCommon = useTranslateCommon();

    if (!isVisible) {
        return null;
    }

    return (
        <div className={classNames(`inline-alert inline-alert--${variant}`, className)} ref={ref} role="alert">
            {variant && <Icon className="inline-alert__icon" name={getIconName(variant)} size={IconSize.MD} />}
            <div className="inline-alert__content">
                {title && (
                    <BodyText elementType={HTMLElementType.Div} size={Size.sm}>
                        <strong>{title}</strong>
                    </BodyText>
                )}
                <BodyText elementType={HTMLElementType.Div} size={Size.sm}>
                    {content}
                </BodyText>
            </div>
            {(!!actionLabel || isDismissible) && (
                <div className="inline-alert__actions">
                    {actionLabel && (
                        <Button
                            className="inline-alert__action-button"
                            onPress={onAction}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}>
                            {actionLabel}
                        </Button>
                    )}
                    {isDismissible && (
                        <IconButton
                            aria-label={translateCommon('close')}
                            className="inline-alert__close-button"
                            iconName={iconNames.CloseFilled}
                            onPress={() => setIsVisible(!isVisible)}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
