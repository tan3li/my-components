import {classNames} from '../../../utils/classnames.js';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {Button, ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {IconName} from '../../media/icon/icons.js';
import {Size} from '../../../constants/size.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {ReactNode, RefAttributes} from 'react';

export interface OverlayFooterAction {
    autoFocus?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    label: string;
    onPress: (closeCallback: () => void) => void;
    style?: ButtonStyle;
    variant?: ButtonVariant;
}

export interface OverlayFooterIconAction extends OverlayFooterAction {
    iconName?: IconName;
}

export interface OverlayFooterProps extends RefAttributes<HTMLDivElement> {
    className?: string;
    closeCallback: () => void;
    destructiveAction?: OverlayFooterIconAction;
    primaryAction?: OverlayFooterAction;
    secondaryAction?: OverlayFooterAction;
}

export function OverlayFooter({
    className,
    closeCallback,
    destructiveAction,
    primaryAction,
    ref,
    secondaryAction
}: OverlayFooterProps) {
    let destructiveButton: ReactNode | undefined;

    if (destructiveAction) {
        if (destructiveAction.iconName) {
            destructiveButton = (
                <IconButton
                    aria-label={destructiveAction.label}
                    autoFocus={destructiveAction.autoFocus}
                    iconName={destructiveAction.iconName}
                    isDisabled={destructiveAction.isDisabled}
                    isLoading={destructiveAction.isLoading}
                    onPress={() => safeCall(destructiveAction?.onPress, closeCallback)}
                    size={Size.lg}
                    style={ButtonStyle.Plain}
                    variant={destructiveAction.variant ?? ButtonVariant.Danger}
                />
            );
        } else {
            destructiveButton = (
                <Button
                    autoFocus={destructiveAction.autoFocus}
                    isDisabled={destructiveAction.isDisabled}
                    isLoading={destructiveAction.isLoading}
                    onPress={() => safeCall(destructiveAction?.onPress, closeCallback)}
                    size={Size.lg}
                    style={ButtonStyle.Plain}
                    variant={destructiveAction.variant ?? ButtonVariant.Danger}>
                    {destructiveAction.label}
                </Button>
            );
        }
    }

    return (
        <div className={classNames('overlay-footer', className)} ref={ref}>
            {destructiveButton}
            <div className="overlay-footer__actions">
                {secondaryAction && (
                    <Button
                        autoFocus={secondaryAction.autoFocus}
                        isDisabled={secondaryAction.isDisabled}
                        isLoading={secondaryAction.isLoading}
                        onPress={() => safeCall(secondaryAction?.onPress, closeCallback)}
                        size={Size.lg}
                        style={secondaryAction.style ?? ButtonStyle.Outline}
                        variant={secondaryAction.variant ?? ButtonVariant.Neutral}>
                        {secondaryAction.label}
                    </Button>
                )}
                {primaryAction && (
                    <Button
                        autoFocus={primaryAction.autoFocus}
                        isDisabled={primaryAction.isDisabled}
                        isLoading={primaryAction.isLoading}
                        onPress={() => safeCall(primaryAction?.onPress, closeCallback)}
                        size={Size.lg}
                        style={primaryAction.style ?? ButtonStyle.Fill}
                        variant={primaryAction.variant ?? ButtonVariant.Accent}>
                        {primaryAction.label}
                    </Button>
                )}
            </div>
        </div>
    );
}
