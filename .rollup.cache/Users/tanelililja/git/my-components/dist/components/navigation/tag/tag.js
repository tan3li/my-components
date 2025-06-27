import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
import { ButtonStyle, ButtonVariant, IconButton, TriggerElement } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { useIsTextTruncated } from '../../../hooks/useistexttruncated.js';
import { isString } from '../../../utils/stringhelper.js';
export var TagStyle;
(function (TagStyle) {
    TagStyle["Fill"] = "fill";
    TagStyle["Outline"] = "outline";
})(TagStyle || (TagStyle = {}));
export function Tag(_a) {
    var children = _a.children, className = _a.className, iconName = _a.iconName, isDisabled = _a.isDisabled, onPress = _a.onPress, onRemove = _a.onRemove, ref = _a.ref, removeButtonProps = _a.removeButtonProps, role = _a.role, _b = _a.size, size = _b === void 0 ? Size.md : _b, _c = _a.style, style = _c === void 0 ? TagStyle.Outline : _c, triggerRole = _a.triggerRole;
    var labelRef = useRef(null);
    var isTruncated = useIsTextTruncated({ ref: labelRef });
    var translateCommon = useTranslateCommon();
    var isPressable = !!onPress && !isDisabled;
    var isInteractive = isTruncated || isPressable;
    return (_jsxs("span", __assign({ className: classNames("tag tag--".concat(size, " ").concat(style, "-tag"), className, {
            'tag--interactive': isInteractive,
            'tag--pressable': isPressable,
            'tag--disabled': isDisabled
        }), ref: ref, role: role }, { children: [_jsxs(TooltipTrigger, __assign({ isDisabled: !isTruncated }, { children: [_jsxs(TriggerElement, __assign({ className: "tag__content", excludeFromTabOrder: !isInteractive, onPress: onPress, role: triggerRole }, { children: [iconName && _jsx(Icon, { className: "tag__icon", name: iconName, size: IconSize.SM }), _jsx(Label, __assign({ className: "tag__label", ref: labelRef, size: size === Size.xs ? Size.sm : size }, { children: children }))] })), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: children }))] })), onRemove && (_jsx(IconButton, __assign({ "aria-label": "".concat(isString(children) ? children : '', " ").concat(translateCommon('remove')), className: "tag__remove-button", iconName: iconNames.Close, isDisabled: isDisabled, onPress: onRemove, size: size === Size.xs ? Size.sm : size, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, removeButtonProps)))] })));
}
//# sourceMappingURL=tag.js.map