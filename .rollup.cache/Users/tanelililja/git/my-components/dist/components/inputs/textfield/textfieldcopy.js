import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { TooltipTrigger } from '../../feedback/tooltip/tooltiptrigger.js';
import { Tooltip, TooltipType } from '../../feedback/tooltip/tooltip.js';
import { Position } from '../../../constants/position.js';
import { TriggerElement } from '../../action/triggerelement/triggerelement.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
import { useCopyToClipboard } from '../../../hooks/usecopytoclipboard.js';
var TOOLTIP_TIMEOUT_IN_MS = 3000;
export function TextFieldCopy(_a) {
    var _b, _c;
    var inputRef = _a.inputRef, prefix = _a.prefix, ref = _a.ref, suffix = _a.suffix;
    var translateCommon = useTranslateCommon();
    var _d = useCopyToClipboard({
        text: "".concat(prefix !== null && prefix !== void 0 ? prefix : '').concat((_c = (_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : '').concat(suffix !== null && suffix !== void 0 ? suffix : ''),
        tooltipDuration: TOOLTIP_TIMEOUT_IN_MS
    }), onPress = _d.onPress, showTooltip = _d.showTooltip;
    return (_jsxs(TooltipTrigger, __assign({ isOpen: showTooltip }, { children: [_jsxs(TriggerElement, __assign({ className: "text-field__action", elementType: HTMLElementType.Div, onPress: onPress, ref: ref }, { children: [_jsx(Icon, { name: iconNames.CopyAll }), _jsx(Label, __assign({ size: Size.lg }, { children: translateCommon('copy') }))] })), _jsx(Tooltip, __assign({ position: Position.Bottom, showArrow: false, type: TooltipType.Plain }, { children: translateCommon('copied') }))] })));
}
//# sourceMappingURL=textfieldcopy.js.map