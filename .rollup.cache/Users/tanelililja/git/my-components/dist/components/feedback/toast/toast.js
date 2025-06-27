import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Button, ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { Spinner, SpinnerVariant } from '../spinner/spinner.js';
import { Size } from '../../../constants/size.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { ToastProgressBar } from './toastprogressbar.js';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { useToasterStore } from 'react-hot-toast/headless';
import { classNames } from '../../../utils/classnames.js';
import { toastHandler } from './toasthandler.js';
export var ToastVariant;
(function (ToastVariant) {
    ToastVariant["Neutral"] = "neutral";
    ToastVariant["Informative"] = "informative";
    ToastVariant["Success"] = "success";
    ToastVariant["Danger"] = "danger";
    ToastVariant["Warning"] = "warning";
    ToastVariant["Loading"] = "loading";
})(ToastVariant || (ToastVariant = {}));
function getPrefixIcon(variant) {
    switch (variant) {
        case ToastVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case ToastVariant.Informative:
            return iconNames.InfoFilled;
        case ToastVariant.Success:
            return iconNames.CheckCircleFilled;
        case ToastVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return null;
    }
}
export function Toast(_a) {
    var _b = _a.shouldAnimate, shouldAnimate = _b === void 0 ? true : _b, toast = _a.toast;
    var pausedAt = useToasterStore().pausedAt;
    var translateCommon = useTranslateCommon();
    var textId = useId();
    var id = toast.id, content = toast.content, duration = toast.duration, visible = toast.visible, height = toast.height;
    var actionLabel = content.actionLabel, children = content.children, onAction = content.onAction, shouldCloseOnAction = content.shouldCloseOnAction, variant = content.variant;
    var prefix, animationCssClass = shouldAnimate ? 'toast--hidden' : undefined;
    if (shouldAnimate && height) {
        animationCssClass = visible ? 'toast--entering' : 'toast--exiting';
    }
    if (variant === ToastVariant.Loading) {
        prefix = _jsx(Spinner, { size: Size.sm, variant: SpinnerVariant.None });
    }
    else {
        var iconName = getPrefixIcon(variant);
        if (iconName) {
            prefix = (_jsx("div", __assign({ className: "toast__icon-wrapper" }, { children: _jsx(Icon, { className: "toast__icon", name: iconName, size: IconSize.MD }) })));
        }
    }
    var onActionPress = function () {
        safeCall(onAction);
        if (shouldCloseOnAction) {
            toastHandler.dismiss(id);
        }
    };
    return (_jsxs("div", __assign({ "aria-labelledby": textId, "aria-modal": false, className: classNames("toast toast--".concat(variant), animationCssClass), role: "alertdialog", 
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex: 0 }, { children: [_jsxs("div", __assign({ "aria-atomic": true, className: "toast__body", role: "alert" }, { children: [prefix, _jsx("div", __assign({ className: "toast__text", id: textId }, { children: _jsx(BodyText, __assign({ size: Size.md }, { children: children })) })), actionLabel && (_jsx(Button, __assign({ className: "toast__action-button", inverted: true, onPress: onActionPress, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: actionLabel }))), _jsx(IconButton, { "aria-label": translateCommon('close'), className: "toast__close-button", iconName: iconNames.CloseFilled, inverted: true, onPress: function () {
                            toastHandler.dismiss(id);
                        }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })] })), duration && _jsx(ToastProgressBar, { isPaused: !!pausedAt, timeout: duration })] })));
}
//# sourceMappingURL=toast.js.map