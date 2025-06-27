import { IconName } from '../../media/icon/icons.js';
import { AriaRole, ReactNode, RefAttributes } from 'react';
export declare const enum AlertBannerVariant {
    Neutral = "neutral",
    Informative = "informative",
    Success = "success",
    Danger = "danger",
    Warning = "warning"
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
export declare function AlertBanner({ className, children, iconName, isDismissible, ref, role, variant, ...props }: AlertBannerProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=alertbanner.d.ts.map