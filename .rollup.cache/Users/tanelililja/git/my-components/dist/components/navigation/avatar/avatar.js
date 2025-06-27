var _a, _b, _c;
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { Label } from '../../text/index.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { TriggerElement } from '../../action/index.js';
import { FocusRing } from 'react-aria';
import { Icon, iconNames, IconSize } from '../../media/index.js';
var labelSize = (_a = {},
    _a[Size.xs] = Size.sm,
    _a[Size.sm] = Size.md,
    _a[Size.md] = Size.lg,
    _a[Size.lg] = Size.lg,
    _a);
var descriptionSize = (_b = {},
    _b[Size.xs] = Size.xs,
    _b[Size.sm] = Size.xs,
    _b[Size.md] = Size.sm,
    _b[Size.lg] = Size.sm,
    _b);
var iconSize = (_c = {},
    _c[Size.xs] = IconSize.XS,
    _c[Size.sm] = IconSize.SM,
    _c[Size.md] = IconSize.MD,
    _c[Size.lg] = IconSize.LG,
    _c);
export function Avatar(props) {
    var alt = props.alt, className = props.className, description = props.description, _a = props.iconName, iconName = _a === void 0 ? iconNames.GhostFilled : _a, isDisabled = props.isDisabled, isInteractive = props.isInteractive, label = props.label, labelMaxWidth = props.labelMaxWidth, onPress = props.onPress, ref = props.ref, _b = props.size, size = _b === void 0 ? Size.md : _b, src = props.src, style = props.style, text = props.text;
    var hasImage = !!src;
    var image;
    if (hasImage) {
        image = _jsx("img", { alt: alt, className: "avatar__image", src: src, title: alt });
    }
    else if (text) {
        image = (_jsx("span", __assign({ className: "avatar__image", title: alt }, { children: text })));
    }
    else {
        image = (_jsx("span", __assign({ className: "avatar__image", title: alt }, { children: _jsx(Icon, { className: "avatar__icon", name: iconName, size: iconSize[size] }) })));
    }
    if (isInteractive && !isDisabled) {
        image = (_jsxs(TooltipTrigger, { children: [_jsx(FocusRing, __assign({ focusRingClass: "avatar__trigger-element--focused" }, { children: _jsxs(TriggerElement, __assign({ className: "avatar__trigger-element", onPress: onPress, role: onPress ? 'button' : undefined }, { children: [image, _jsx("span", { className: "avatar__scrim" })] })) })), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: alt }))] }));
    }
    return (_jsxs("div", __assign({ className: classNames("avatar avatar--".concat(size), className, {
            'avatar--disabled': isDisabled,
            'avatar--interactive': isInteractive,
            'avatar--pressable': !!onPress
        }), ref: ref, style: style }, { children: [image, (!!label || !!description) && (_jsxs("div", __assign({ className: "avatar__label-wrapper", style: { maxWidth: labelMaxWidth } }, { children: [label && (_jsx(Label, __assign({ className: "avatar__label", size: labelSize[size] }, { children: label }))), description && (_jsx(Label, __assign({ className: "avatar__description", size: descriptionSize[size] }, { children: description })))] })))] })));
}
//# sourceMappingURL=avatar.js.map