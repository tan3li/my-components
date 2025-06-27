import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '../../text/heading/heading.js';
import { Size } from '../../../constants/size.js';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { iconNames } from '../../media/icon/icons.js';
import { ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { classNames } from '../../../utils/classnames.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { LoadingIndicatorProgressBar } from '../progressbar/loadingindicatorprogressbar.js';
export var OverlayHeaderVariant;
(function (OverlayHeaderVariant) {
    OverlayHeaderVariant["Neutral"] = "neutral";
    OverlayHeaderVariant["Success"] = "success";
    OverlayHeaderVariant["Danger"] = "danger";
})(OverlayHeaderVariant || (OverlayHeaderVariant = {}));
export function OverlayHeader(_a) {
    var _b = _a.autoFocusClose, autoFocusClose = _b === void 0 ? true : _b, children = _a.children, className = _a.className, details = _a.details, iconName = _a.iconName, onClose = _a.onClose, onExpand = _a.onExpand, ref = _a.ref, showLoadingIndicator = _a.showLoadingIndicator, _c = _a.variant, variant = _c === void 0 ? OverlayHeaderVariant.Neutral : _c;
    var translateCommon = useTranslateCommon();
    return (_jsxs("div", __assign({ className: classNames("overlay-header overlay-header--".concat(variant), className), ref: ref }, { children: [iconName && (_jsx("div", __assign({ className: "overlay-header__icon-area" }, { children: _jsx(Icon, { name: iconName, size: IconSize.MD }) }))), _jsxs("div", __assign({ className: "overlay-header__title" }, { children: [_jsx(Heading, __assign({ size: Size.xs, slot: "title" }, { children: children })), details] })), onExpand && (_jsx(IconButton, { "aria-label": translateCommon('expand'), iconName: iconNames.PanZoom, onPress: onExpand, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), _jsx(IconButton, { "aria-label": translateCommon('close'), autoFocus: autoFocusClose, iconName: iconNames.CloseFilled, onPress: onClose, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), showLoadingIndicator && _jsx(LoadingIndicatorProgressBar, {})] })));
}
//# sourceMappingURL=overlayheader.js.map