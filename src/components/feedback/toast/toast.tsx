import {ReactNode, useId} from 'react';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {iconNames} from '../../media/icon/icons.js';
import {Spinner, SpinnerVariant} from '../spinner/spinner.js';
import {Size} from '../../../constants/size.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {ToastProgressBar} from './toastprogressbar.js';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Toast as RHTToastItem, useToasterStore} from 'react-hot-toast/headless';
import {classNames} from '../../../utils/classnames.js';
import {toastHandler} from './toasthandler.js';

export const enum ToastVariant {
    Neutral = 'neutral',
    Informative = 'informative',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Loading = 'loading'
}

export interface ToastContentProps {
    actionLabel?: string;
    children: ReactNode;
    onAction?: () => void;
    shouldCloseOnAction?: boolean;
    variant: ToastVariant;
}

export interface ToastItem extends RHTToastItem {
    content: ToastContentProps;
}

export interface ToastProps {
    shouldAnimate?: boolean;
    toast: ToastItem;
}

function getPrefixIcon(variant: ToastVariant) {
    switch (variant) {
        case ToastVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case ToastVariant.Informative:
            return iconNames.InfoFilled;
        case ToastVariant.Success:
            return iconNames.CheckCircleFilled;
        case ToastVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return null;
    }
}

export function Toast({shouldAnimate = true, toast}: ToastProps) {
    const {pausedAt} = useToasterStore();
    const translateCommon = useTranslateCommon();
    const textId = useId();
    const {id, content, duration, visible, height} = toast;
    const {actionLabel, children, onAction, shouldCloseOnAction, variant} = content;
    let prefix: ReactNode,
        animationCssClass = shouldAnimate ? 'toast--hidden' : undefined;

    if (shouldAnimate && height) {
        animationCssClass = visible ? 'toast--entering' : 'toast--exiting';
    }

    if (variant === ToastVariant.Loading) {
        prefix = <Spinner size={Size.sm} variant={SpinnerVariant.None} />;
    } else {
        const iconName = getPrefixIcon(variant);

        if (iconName) {
            prefix = (
                <div className="toast__icon-wrapper">
                    <Icon className="toast__icon" name={iconName} size={IconSize.MD} />
                </div>
            );
        }
    }

    const onActionPress = () => {
        safeCall(onAction);

        if (shouldCloseOnAction) {
            toastHandler.dismiss(id);
        }
    };

    return (
        <div
            aria-labelledby={textId}
            aria-modal={false}
            className={classNames(`toast toast--${variant}`, animationCssClass)}
            role="alertdialog"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}>
            <div aria-atomic={true} className="toast__body" role="alert">
                {prefix}
                <div className="toast__text" id={textId}>
                    <BodyText size={Size.md}>{children}</BodyText>
                </div>
                {actionLabel && (
                    <Button
                        className="toast__action-button"
                        inverted={true}
                        onPress={onActionPress}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}>
                        {actionLabel}
                    </Button>
                )}
                <IconButton
                    aria-label={translateCommon('close')}
                    className="toast__close-button"
                    iconName={iconNames.CloseFilled}
                    inverted={true}
                    onPress={() => {
                        toastHandler.dismiss(id);
                    }}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </div>
            {duration && <ToastProgressBar isPaused={!!pausedAt} timeout={duration} />}
        </div>
    );
}
