import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { isString } from '../../../utils/stringhelper.js';
import { isNumber } from '../../../utils/objecthelper.js';
export var BadgeStyle;
(function (BadgeStyle) {
    BadgeStyle["Fill"] = "fill";
    BadgeStyle["Outline"] = "outline";
    BadgeStyle["Plain"] = "plain";
})(BadgeStyle || (BadgeStyle = {}));
export var BadgeVariant;
(function (BadgeVariant) {
    BadgeVariant["Neutral"] = "neutral";
    BadgeVariant["Success"] = "success";
    BadgeVariant["Danger"] = "danger";
    BadgeVariant["Warning"] = "warning";
    BadgeVariant["Informative"] = "informative";
})(BadgeVariant || (BadgeVariant = {}));
function useIconLabel(variant) {
    var translateCommon = useTranslateCommon();
    switch (variant) {
        case BadgeVariant.Informative:
            return translateCommon('info');
        case BadgeVariant.Success:
            return translateCommon('success');
        case BadgeVariant.Danger:
            return translateCommon('danger');
        case BadgeVariant.Warning:
            return translateCommon('warning');
        default:
            return translateCommon('neutral');
    }
}
export function Badge(_a) {
    var ariaLabel = _a["aria-label"], children = _a.children, className = _a.className, iconName = _a.iconName, isDisabled = _a.isDisabled, ref = _a.ref, role = _a.role, style = _a.style, variant = _a.variant;
    var isStringOrNumberChild = isString(children) || isNumber(children);
    var iconLabel = useIconLabel(variant);
    return (_jsxs("span", __assign({ "aria-label": ariaLabel, className: classNames("badge badge--".concat(variant, " ").concat(style, "-badge ").concat(style, "-badge--").concat(variant), className, {
            'badge--disabled': isDisabled
        }), ref: ref, role: role }, { children: [iconName && _jsx(Icon, { ariaLabel: iconLabel, className: "badge__icon", name: iconName, size: IconSize.XS }), _jsx(Label, __assign({ className: "badge__label", size: Size.sm }, { children: isStringOrNumberChild ?
                    _jsx("strong", { children: children })
                    : children }))] })));
}
//# sourceMappingURL=badge.js.map