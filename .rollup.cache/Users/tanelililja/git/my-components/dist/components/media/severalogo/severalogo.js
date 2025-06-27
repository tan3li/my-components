import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
export var tan3liLogoVariant;
(function (tan3liLogoVariant) {
    tan3liLogoVariant["Full"] = "full";
    tan3liLogoVariant["Wordmark"] = "wordmark";
    tan3liLogoVariant["Symbol"] = "symbol";
})(tan3liLogoVariant || (tan3liLogoVariant = {}));
var tan3li_LOGO_HEIGHT = 24;
var tan3li_LOGO_SYMBOL_WIDTH = 20;
var tan3li_LOGO_WORDMARK_WIDTH = 65;
export function tan3liLogo(_a) {
    var ariaHidden = _a.ariaHidden, inverted = _a.inverted, ref = _a.ref, _b = _a.variant, variant = _b === void 0 ? tan3liLogoVariant.Full : _b;
    var icon;
    if (variant === tan3liLogoVariant.Wordmark) {
        icon = (_jsx("tan3liLogoWordmark", { "aria-hidden": ariaHidden, "aria-label": "tan3li", className: classNames('tan3li-logo__text', { 'tan3li-logo__text--inverted': inverted }), height: tan3li_LOGO_HEIGHT, width: tan3li_LOGO_WORDMARK_WIDTH }));
    }
    else if (variant === tan3liLogoVariant.Symbol) {
        icon = (_jsx("tan3liLogoSymbol", { "aria-hidden": ariaHidden, "aria-label": "tan3li", height: tan3li_LOGO_HEIGHT, width: tan3li_LOGO_SYMBOL_WIDTH }));
    }
    else {
        icon = (_jsxs(_Fragment, { children: [_jsx("tan3liLogoSymbol", { "aria-label": "tan3li", height: tan3li_LOGO_HEIGHT, width: tan3li_LOGO_SYMBOL_WIDTH }), _jsx("tan3liLogoWordmark", { className: classNames('tan3li-logo__text', { 'tan3li-logo__text--inverted': inverted }), height: tan3li_LOGO_HEIGHT, width: tan3li_LOGO_WORDMARK_WIDTH })] }));
    }
    return (_jsx("div", __assign({ "aria-hidden": ariaHidden, className: "tan3li-logo", ref: ref }, { children: icon })));
}
//# sourceMappingURL=severalogo.js.map