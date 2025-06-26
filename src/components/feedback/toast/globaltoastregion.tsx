import {Toast, ToastVariant} from './toast.js';
import {ReactNode, RefAttributes} from 'react';
import {useToaster} from 'react-hot-toast/headless';
import {ToastWrapper} from './toastwrapper.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {toastHandler} from './toasthandler.js';

export interface ToastOptions {
    actionLabel?: string;
    onAction?: () => void;
    shouldCloseOnAction?: boolean;
    timeout?: number;
}

const DEFAULT_TIMEOUT = 10000;

function addToast(children: ReactNode, variant: ToastVariant, options: ToastOptions) {
    const {shouldCloseOnAction, actionLabel, onAction, timeout} = options;

    return toastHandler.add(
        (t) => (
            <Toast
                toast={{
                    ...t,
                    content: {
                        actionLabel,
                        children,
                        onAction,
                        shouldCloseOnAction,
                        variant
                    }
                }}
            />
        ),
        {duration: timeout ?? DEFAULT_TIMEOUT}
    );
}

export function closeToast(id: string) {
    toastHandler.dismiss(id);
}

export const ToastQueue = {
    neutral(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Neutral, options);
    },
    informative(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Informative, options);
    },
    success(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Success, options);
    },
    danger(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Danger, options);
    },
    warning(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Warning, options);
    },
    loading(children: ReactNode, options: ToastOptions = {}): string {
        return addToast(children, ToastVariant.Loading, options);
    }
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

export function GlobalToastRegion(props: GlobalToastRegionProps) {
    const {handlers, toasts} = useToaster();

    return (
        <div
            {...props}
            className="global-toast-region"
            onMouseEnter={handlers.startPause}
            onMouseLeave={handlers.endPause}>
            {toasts.map((t) => {
                const offset = handlers.calculateOffset(t, {
                    reverseOrder: true,
                    gutter: 8,
                    defaultPosition: 'bottom-center'
                });
                const {id, message} = t;

                return (
                    <ToastWrapper
                        id={id}
                        isActive={t.visible}
                        key={id}
                        onHeightUpdate={handlers.updateHeight}
                        style={{
                            transform: `translateY(${offset * -1}px)`
                        }}>
                        {isFunction(message) ? message(t) : message}
                    </ToastWrapper>
                );
            })}
        </div>
    );
}
