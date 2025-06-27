import { ReactNode, RefAttributes } from 'react';
export declare const enum InlineAlertVariant {
    Neutral = "neutral",
    Informative = "informative",
    Success = "success",
    Danger = "danger",
    Warning = "warning"
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
export declare function InlineAlert({ actionLabel, className, content, isDismissible, onAction, ref, title, variant }: InlineAlertProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=inlinealert.d.ts.map