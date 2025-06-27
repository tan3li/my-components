import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OverlayArrow as ReactAriaOverlayArrow, Tooltip as ReactAriaTooltip } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Size } from '../../../constants/size.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { Label } from '../../text/label/label.js';
import { Position } from '../../../constants/position.js';
import { HTMLElementType } from '../../../constants/index.js';
var DEFAULT_MAX_WIDTH = 160;
export var TooltipType;
(function (TooltipType) {
    TooltipType["Rich"] = "rich";
    TooltipType["Plain"] = "plain";
})(TooltipType || (TooltipType = {}));
export function Tooltip(_a) {
    var children = _a.children, className = _a.className, _b = _a.elementType, elementType = _b === void 0 ? HTMLElementType.Div : _b, headerIconName = _a.headerIconName, headerText = _a.headerText, _c = _a.maxWidth, maxWidth = _c === void 0 ? DEFAULT_MAX_WIDTH : _c, _d = _a.position, position = _d === void 0 ? Position.Top : _d, _e = _a.showArrow, showArrow = _e === void 0 ? true : _e, type = _a.type, props = __rest(_a, ["children", "className", "elementType", "headerIconName", "headerText", "maxWidth", "position", "showArrow", "type"]);
    return (_jsxs(ReactAriaTooltip, __assign({}, props, { className: classNames("tooltip tooltip--".concat(type), className), placement: position, style: { maxWidth: maxWidth } }, { children: [type === 'rich' && (_jsxs("div", __assign({ className: "tooltip__header" }, { children: [_jsx(Label, __assign({ className: "tooltip__header-text", size: Size.sm }, { children: _jsx("strong", { children: headerText }) })), headerIconName && (_jsx(Icon, { className: "tooltip__header-icon", name: headerIconName, size: IconSize.SM }))] }))), showArrow && (_jsx(ReactAriaOverlayArrow, { children: _jsx("svg", __assign({ className: "tooltip__arrow", height: "12", viewBox: "0 0 12 12", width: "12" }, { children: _jsx("path", { d: "M6 6.16614L7.15493e-08 0L12 0L6 6.16614Z" }) })) })), _jsx(BodyText, __assign({ elementType: elementType, size: Size.xs }, { children: children }))] })));
}
//# sourceMappingURL=tooltip.js.map