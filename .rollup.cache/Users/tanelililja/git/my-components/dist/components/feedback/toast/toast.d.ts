import { ReactNode } from 'react';
import { Toast as RHTToastItem } from 'react-hot-toast/headless';
export declare const enum ToastVariant {
    Neutral = "neutral",
    Informative = "informative",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Loading = "loading"
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
export declare function Toast({ shouldAnimate, toast }: ToastProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=toast.d.ts.map