import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Label } from '../label/label.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Text } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
export var HelpTextVariant;
(function (HelpTextVariant) {
    HelpTextVariant["Neutral"] = "neutral";
    HelpTextVariant["Danger"] = "danger";
    HelpTextVariant["Success"] = "success";
    HelpTextVariant["Disabled"] = "disabled";
})(HelpTextVariant || (HelpTextVariant = {}));
function getIconProps(variant, translateFn) {
    var name, label;
    switch (variant) {
        case HelpTextVariant.Danger:
            name = iconNames.EmergencyHomeFilled;
            label = translateFn('warning');
            break;
        case HelpTextVariant.Success:
            name = iconNames.CheckCircleFilled;
            label = translateFn('success');
            break;
        default:
            name = iconNames.InfoFilled;
            label = translateFn('info');
            break;
    }
    return { name: name, label: label };
}
export function HelpText(_a) {
    var children = _a.children, className = _a.className, id = _a.id, showIcon = _a.showIcon, _b = _a.variant, variant = _b === void 0 ? HelpTextVariant.Neutral : _b;
    var translateCommon = useTranslateCommon();
    var content = [
        _jsx(Label, __assign({ size: Size.sm }, { children: children }), "text")
    ];
    if (showIcon || variant === HelpTextVariant.Danger) {
        var _c = getIconProps(variant, translateCommon), name_1 = _c.name, label = _c.label;
        content.unshift(_jsx(Icon, { ariaLabel: label, name: name_1, size: IconSize.SM }, "icon"));
    }
    return (_jsx(Text, __assign({ className: classNames("help-text help-text--".concat(variant), className), id: id, slot: "description" }, { children: content })));
}
//# sourceMappingURL=helptext.js.map