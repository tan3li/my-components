import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Toast, ToastVariant } from './toast.js';
import { useToaster } from 'react-hot-toast/headless';
import { ToastWrapper } from './toastwrapper.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { toastHandler } from './toasthandler.js';
var DEFAULT_TIMEOUT = 10000;
function addToast(children, variant, options) {
    var shouldCloseOnAction = options.shouldCloseOnAction, actionLabel = options.actionLabel, onAction = options.onAction, timeout = options.timeout;
    return toastHandler.add(function (t) { return (_jsx(Toast, { toast: __assign(__assign({}, t), { content: {
                actionLabel: actionLabel,
                children: children,
                onAction: onAction,
                shouldCloseOnAction: shouldCloseOnAction,
                variant: variant
            } }) })); }, { duration: timeout !== null && timeout !== void 0 ? timeout : DEFAULT_TIMEOUT });
}
export function closeToast(id) {
    toastHandler.dismiss(id);
}
export var ToastQueue = {
    neutral: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Neutral, options);
    },
    informative: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Informative, options);
    },
    success: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Success, options);
    },
    danger: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Danger, options);
    },
    warning: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Warning, options);
    },
    loading: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Loading, options);
    }
};
export function GlobalToastRegion(props) {
    var _a = useToaster(), handlers = _a.handlers, toasts = _a.toasts;
    return (_jsx("div", __assign({}, props, { className: "global-toast-region", onMouseEnter: handlers.startPause, onMouseLeave: handlers.endPause }, { children: toasts.map(function (t) {
            var offset = handlers.calculateOffset(t, {
                reverseOrder: true,
                gutter: 8,
                defaultPosition: 'bottom-center'
            });
            var id = t.id, message = t.message;
            return (_jsx(ToastWrapper, __assign({ id: id, isActive: t.visible, onHeightUpdate: handlers.updateHeight, style: {
                    transform: "translateY(".concat(offset * -1, "px)")
                } }, { children: isFunction(message) ? message(t) : message }), id));
        }) })));
}
//# sourceMappingURL=globaltoastregion.js.map