import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Size } from '../../../constants/size.js';
import { Button, ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
export var InlineAlertVariant;
(function (InlineAlertVariant) {
    InlineAlertVariant["Neutral"] = "neutral";
    InlineAlertVariant["Informative"] = "informative";
    InlineAlertVariant["Success"] = "success";
    InlineAlertVariant["Danger"] = "danger";
    InlineAlertVariant["Warning"] = "warning";
})(InlineAlertVariant || (InlineAlertVariant = {}));
function getIconName(variant) {
    switch (variant) {
        case InlineAlertVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case InlineAlertVariant.Success:
            return iconNames.CheckCircleFilled;
        case InlineAlertVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return iconNames.InfoFilled;
    }
}
export function InlineAlert(_a) {
    var actionLabel = _a.actionLabel, className = _a.className, content = _a.content, _b = _a.isDismissible, isDismissible = _b === void 0 ? true : _b, onAction = _a.onAction, ref = _a.ref, title = _a.title, variant = _a.variant;
    var _c = useState(true), isVisible = _c[0], setIsVisible = _c[1];
    var translateCommon = useTranslateCommon();
    if (!isVisible) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames("inline-alert inline-alert--".concat(variant), className), ref: ref, role: "alert" }, { children: [variant && _jsx(Icon, { className: "inline-alert__icon", name: getIconName(variant), size: IconSize.MD }), _jsxs("div", __assign({ className: "inline-alert__content" }, { children: [title && (_jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: _jsx("strong", { children: title }) }))), _jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: content }))] })), (!!actionLabel || isDismissible) && (_jsxs("div", __assign({ className: "inline-alert__actions" }, { children: [actionLabel && (_jsx(Button, __assign({ className: "inline-alert__action-button", onPress: onAction, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: actionLabel }))), isDismissible && (_jsx(IconButton, { "aria-label": translateCommon('close'), className: "inline-alert__close-button", iconName: iconNames.CloseFilled, onPress: function () { return setIsVisible(!isVisible); }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }))] })))] })));
}
//# sourceMappingURL=inlinealert.js.map