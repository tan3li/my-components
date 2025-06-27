import { ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/icon/icons.js';
export declare const enum OverlayHeaderVariant {
    Neutral = "neutral",
    Success = "success",
    Danger = "danger"
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
export declare function OverlayHeader({ autoFocusClose, children, className, details, iconName, onClose, onExpand, ref, showLoadingIndicator, variant }: OverlayHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=overlayheader.d.ts.map