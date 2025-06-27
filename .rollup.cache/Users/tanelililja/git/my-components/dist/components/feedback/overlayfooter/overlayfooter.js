import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { Button, ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { Size } from '../../../constants/size.js';
import { safeCall } from '../../../utils/functionhelper.js';
export function OverlayFooter(_a) {
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, closeCallback = _a.closeCallback, destructiveAction = _a.destructiveAction, primaryAction = _a.primaryAction, ref = _a.ref, secondaryAction = _a.secondaryAction;
    var destructiveButton;
    if (destructiveAction) {
        if (destructiveAction.iconName) {
            destructiveButton = (_jsx(IconButton, { "aria-label": destructiveAction.label, autoFocus: destructiveAction.autoFocus, iconName: destructiveAction.iconName, isDisabled: destructiveAction.isDisabled, isLoading: destructiveAction.isLoading, onPress: function () { return safeCall(destructiveAction === null || destructiveAction === void 0 ? void 0 : destructiveAction.onPress, closeCallback); }, size: Size.lg, style: ButtonStyle.Plain, variant: (_b = destructiveAction.variant) !== null && _b !== void 0 ? _b : ButtonVariant.Danger }));
        }
        else {
            destructiveButton = (_jsx(Button, __assign({ autoFocus: destructiveAction.autoFocus, isDisabled: destructiveAction.isDisabled, isLoading: destructiveAction.isLoading, onPress: function () { return safeCall(destructiveAction === null || destructiveAction === void 0 ? void 0 : destructiveAction.onPress, closeCallback); }, size: Size.lg, style: ButtonStyle.Plain, variant: (_c = destructiveAction.variant) !== null && _c !== void 0 ? _c : ButtonVariant.Danger }, { children: destructiveAction.label })));
        }
    }
    return (_jsxs("div", __assign({ className: classNames('overlay-footer', className), ref: ref }, { children: [destructiveButton, _jsxs("div", __assign({ className: "overlay-footer__actions" }, { children: [secondaryAction && (_jsx(Button, __assign({ autoFocus: secondaryAction.autoFocus, isDisabled: secondaryAction.isDisabled, isLoading: secondaryAction.isLoading, onPress: function () { return safeCall(secondaryAction === null || secondaryAction === void 0 ? void 0 : secondaryAction.onPress, closeCallback); }, size: Size.lg, style: (_d = secondaryAction.style) !== null && _d !== void 0 ? _d : ButtonStyle.Outline, variant: (_e = secondaryAction.variant) !== null && _e !== void 0 ? _e : ButtonVariant.Neutral }, { children: secondaryAction.label }))), primaryAction && (_jsx(Button, __assign({ autoFocus: primaryAction.autoFocus, isDisabled: primaryAction.isDisabled, isLoading: primaryAction.isLoading, onPress: function () { return safeCall(primaryAction === null || primaryAction === void 0 ? void 0 : primaryAction.onPress, closeCallback); }, size: Size.lg, style: (_f = primaryAction.style) !== null && _f !== void 0 ? _f : ButtonStyle.Fill, variant: (_g = primaryAction.variant) !== null && _g !== void 0 ? _g : ButtonVariant.Accent }, { children: primaryAction.label })))] }))] })));
}
//# sourceMappingURL=overlayfooter.js.map