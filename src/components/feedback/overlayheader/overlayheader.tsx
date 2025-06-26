import {Heading} from '../../text/heading/heading.js';
import {Size} from '../../../constants/size.js';
import {ReactNode, RefAttributes} from 'react';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {classNames} from '../../../utils/classnames.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {LoadingIndicatorProgressBar} from '../progressbar/loadingindicatorprogressbar.js';

export const enum OverlayHeaderVariant {
    Neutral = 'neutral',
    Success = 'success',
    Danger = 'danger'
}

export interface OverlayHeaderProps extends RefAttributes<HTMLDivElement> {
    autoFocusClose?: boolean;
    children: ReactNode;
    className?: string;
    details?: ReactNode;
    iconName?: IconName;
    onClose: () => void;
    onExpand?: () => void;
    showLoadingIndicator?: boolean;
    variant?: OverlayHeaderVariant;
}

export function OverlayHeader({
    autoFocusClose = true,
    children,
    className,
    details,
    iconName,
    onClose,
    onExpand,
    ref,
    showLoadingIndicator,
    variant = OverlayHeaderVariant.Neutral
}: OverlayHeaderProps) {
    const translateCommon = useTranslateCommon();

    return (
        <div className={classNames(`overlay-header overlay-header--${variant}`, className)} ref={ref}>
            {iconName && (
                <div className="overlay-header__icon-area">
                    <Icon name={iconName} size={IconSize.MD} />
                </div>
            )}
            <div className="overlay-header__title">
                <Heading size={Size.xs} slot="title">
                    {children}
                </Heading>
                {details}
            </div>
            {onExpand && (
                <IconButton
                    aria-label={translateCommon('expand')}
                    iconName={iconNames.PanZoom}
                    onPress={onExpand}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            )}
            <IconButton
                aria-label={translateCommon('close')}
                autoFocus={autoFocusClose}
                iconName={iconNames.CloseFilled}
                onPress={onClose}
                style={ButtonStyle.Plain}
                variant={ButtonVariant.Neutral}
            />
            {showLoadingIndicator && <LoadingIndicatorProgressBar />}
        </div>
    );
}
