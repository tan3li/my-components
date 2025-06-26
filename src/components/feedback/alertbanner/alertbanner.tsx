import {classNames} from '../../../utils/classnames.js';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';
import {AriaRole, ReactNode, RefAttributes, useState} from 'react';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {safeCall} from '../../../utils/functionhelper.js';

export const enum AlertBannerVariant {
    Neutral = 'neutral',
    Informative = 'informative',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning'
}

export interface AlertBannerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Content of the alert.
     */
    children: ReactNode;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Icon for the alert.
     */
    iconName?: IconName;
    /**
     * Whether alert can be dismissed.
     */
    isDismissible?: boolean;
    /**
     * Handler called when alert is dismissed.
     */
    onDismiss?: () => void;
    /**
     * Aria role for the element.
     */
    role?: AriaRole;
    /**
     * Variant of the alert.
     */
    variant: AlertBannerVariant;
}

export function AlertBanner({
    className,
    children,
    iconName,
    isDismissible,
    ref,
    role = 'status',
    variant,
    ...props
}: AlertBannerProps) {
    const [isVisible, setIsVisible] = useState(true);
    const translateCommon = useTranslateCommon();

    const onDismiss = () => {
        setIsVisible(false);
        safeCall(props.onDismiss);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={classNames(`alert-banner alert-banner--${variant}`, className, {
                'alert-banner--dismissible': isDismissible
            })}
            ref={ref}
            role={role}>
            {iconName && <Icon className="alert-banner__icon" name={iconName} size={IconSize.MD} />}
            <BodyText className="alert-banner__content" size={Size.md}>
                {children}
            </BodyText>
            {isDismissible && (
                <IconButton
                    aria-label={translateCommon('closeNotification')}
                    className="alert-banner__close-button"
                    iconName={iconNames.CloseFilled}
                    inverted={variant !== AlertBannerVariant.Warning}
                    onPress={onDismiss}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            )}
        </div>
    );
}
