import { Renderable, Toast, ToastOptions as RHTToastOptions, ValueOrFunction } from 'react-hot-toast/headless';
interface ToastParams {
    message: ValueOrFunction<Renderable, Toast>;
    options: RHTToastOptions;
}
declare class ToastHandler {
    private readonly _maxVisibleCount;
    private _toastQueue;
    private _visibleToastIds;
    private _lastId;
    constructor();
    add(message: ToastParams['message'], opts?: ToastParams['options']): string;
    dismiss(toastId: string): void;
}
export declare const toastHandler: ToastHandler;
export {};
//# sourceMappingURL=toasthandler.d.ts.map