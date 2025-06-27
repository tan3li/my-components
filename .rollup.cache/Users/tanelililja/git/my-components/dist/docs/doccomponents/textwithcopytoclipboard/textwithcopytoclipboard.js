import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonStyle, ButtonVariant, IconButton, iconNames, Tooltip, TooltipTrigger, TooltipType } from '../../../components/index.js';
import { Position, Size } from '../../../constants/index.js';
import { useCopyToClipboard } from '../../../hooks/usecopytoclipboard.js';
export function TextWithCopyToClipboard(_a) {
    var children = _a.children, text = _a.text;
    var _b = useCopyToClipboard({ text: text, tooltipDuration: 3000 }), onPress = _b.onPress, showTooltip = _b.showTooltip;
    return (_jsxs("span", __assign({ style: { display: 'flex', alignItems: 'center', gap: 'var(--space-xxs)' } }, { children: [children, _jsxs(TooltipTrigger, __assign({ isOpen: showTooltip }, { children: [_jsx(IconButton, { "aria-label": "Copy", iconName: iconNames.CopyAll, onPress: onPress, size: Size.sm, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), _jsx(Tooltip, __assign({ position: Position.Bottom, showArrow: false, type: TooltipType.Plain }, { children: "Copied" }))] }))] })));
}
//# sourceMappingURL=textwithcopytoclipboard.js.map