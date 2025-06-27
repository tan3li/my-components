import { ReactNode, RefAttributes } from 'react';
export interface ToastOptions {
    actionLabel?: string;
    onAction?: () => void;
    shouldCloseOnAction?: boolean;
    timeout?: number;
}
export declare function closeToast(id: string): void;
export declare const ToastQueue: {
    neutral(children: ReactNode, options?: ToastOptions): string;
    informative(children: ReactNode, options?: ToastOptions): string;
    success(children: ReactNode, options?: ToastOptions): string;
    danger(children: ReactNode, options?: ToastOptions): string;
    warning(children: ReactNode, options?: ToastOptions): string;
    loading(children: ReactNode, options?: ToastOptions): string;
};
export interface GlobalToastRegionProps extends RefAttributes<HTMLDivElement> {
    /**
     * Defines a string value that labels the current element.
     */
    'aria-label'?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     */
    'aria-labelledby'?: string;
    /**
     * Identifies the element (or elements) that describes the object.
     */
    'aria-describedby'?: string;
    /**
     * Identifies the element (or elements) that provide a detailed, extended description for the object.
     */
    'aria-details'?: string;
}
export declare function GlobalToastRegion(props: GlobalToastRegionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=globaltoastregion.d.ts.map