import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './icongallery.scss';
import { Icon, IconSize, Label, Tooltip, TooltipTrigger, TooltipType } from '../../../components/index.js';
import { Position, Size } from '../../../constants/index.js';
import { Button } from 'react-aria-components';
import { useCopyToClipboard } from '../../../hooks/usecopytoclipboard.js';
export function IconGalleryButton(_a) {
    var iconName = _a.iconName;
    var _b = useCopyToClipboard({ text: iconName, tooltipDuration: 3000 }), onPress = _b.onPress, showTooltip = _b.showTooltip;
    return (_jsxs(TooltipTrigger, __assign({ isOpen: showTooltip }, { children: [_jsxs(Button, __assign({ className: "icon-gallery__button", onPress: onPress }, { children: [_jsx(Icon, { name: iconName, size: IconSize.LG }), _jsx(Label, __assign({ size: Size.sm }, { children: iconName }))] })), _jsx(Tooltip, __assign({ offset: -40, position: Position.Bottom, showArrow: false, type: TooltipType.Plain }, { children: "Copied" }))] })));
}
export function IconGallery(_a) {
    var iconNames = _a.iconNames;
    return (_jsx("div", __assign({ className: "icon-gallery sb-unstyled" }, { children: iconNames.map(function (iconName) { return (_jsx(IconGalleryButton, { iconName: iconName }, iconName)); }) })));
}
//# sourceMappingURL=icongallery.js.map