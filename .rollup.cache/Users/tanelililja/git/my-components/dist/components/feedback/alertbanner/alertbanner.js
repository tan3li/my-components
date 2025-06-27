import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { iconNames } from '../../media/icon/icons.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Size } from '../../../constants/size.js';
import { useState } from 'react';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { safeCall } from '../../../utils/functionhelper.js';
export var AlertBannerVariant;
(function (AlertBannerVariant) {
    AlertBannerVariant["Neutral"] = "neutral";
    AlertBannerVariant["Informative"] = "informative";
    AlertBannerVariant["Success"] = "success";
    AlertBannerVariant["Danger"] = "danger";
    AlertBannerVariant["Warning"] = "warning";
})(AlertBannerVariant || (AlertBannerVariant = {}));
export function AlertBanner(_a) {
    var className = _a.className, children = _a.children, iconName = _a.iconName, isDismissible = _a.isDismissible, ref = _a.ref, _b = _a.role, role = _b === void 0 ? 'status' : _b, variant = _a.variant, props = __rest(_a, ["className", "children", "iconName", "isDismissible", "ref", "role", "variant"]);
    var _c = useState(true), isVisible = _c[0], setIsVisible = _c[1];
    var translateCommon = useTranslateCommon();
    var onDismiss = function () {
        setIsVisible(false);
        safeCall(props.onDismiss);
    };
    if (!isVisible) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames("alert-banner alert-banner--".concat(variant), className, {
            'alert-banner--dismissible': isDismissible
        }), ref: ref, role: role }, { children: [iconName && _jsx(Icon, { className: "alert-banner__icon", name: iconName, size: IconSize.MD }), _jsx(BodyText, __assign({ className: "alert-banner__content", size: Size.md }, { children: children })), isDismissible && (_jsx(IconButton, { "aria-label": translateCommon('closeNotification'), className: "alert-banner__close-button", iconName: iconNames.CloseFilled, inverted: variant !== AlertBannerVariant.Warning, onPress: onDismiss, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }))] })));
}
//# sourceMappingURL=alertbanner.js.map