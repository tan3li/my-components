import {
    Renderable,
    Toast,
    toast as rhtToast,
    ToastOptions as RHTToastOptions,
    ValueOrFunction
} from 'react-hot-toast/headless';

interface ToastParams {
    message: ValueOrFunction<Renderable, Toast>;
    options: RHTToastOptions;
}

const rhtToastDismiss = rhtToast.dismiss;

// This is layer on top of React Hot Toast which adds queueing feature for toasts.
class ToastHandler {
    private readonly _maxVisibleCount: number;
    private _toastQueue: ToastParams[];
    private _visibleToastIds: Set<string>;
    private _lastId: number;

    constructor() {
        this._maxVisibleCount = 7;
        this._toastQueue = [];
        this._visibleToastIds = new Set();
        this._lastId = 0;

        this.add = this.add.bind(this);
        this.dismiss = this.dismiss.bind(this);
    }

    public add(message: ToastParams['message'], opts?: ToastParams['options']): string {
        const id = (++this._lastId).toString();

        if (this._visibleToastIds.size >= this._maxVisibleCount) {
            this._toastQueue.push({
                message,
                options: {...opts, id}
            });
        } else {
            rhtToast(message, {...opts, id});
            this._visibleToastIds.add(id);
        }

        return id;
    }

    public dismiss(toastId: string) {
        rhtToastDismiss(toastId);
        this._visibleToastIds.delete(toastId);

        if (this._toastQueue.length > 0 && this._visibleToastIds.size < this._maxVisibleCount) {
            const {message, options} = this._toastQueue.shift()!;

            this.add(message, options);
        }
    }
}

export const toastHandler = new ToastHandler();

rhtToast.dismiss = toastHandler.dismiss;
