import { ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { IconName } from '../../media/icon/icons.js';
import { RefAttributes } from 'react';
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
export declare function OverlayFooter({ className, closeCallback, destructiveAction, primaryAction, ref, secondaryAction }: OverlayFooterProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=overlayfooter.d.ts.map