import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './guidebox.scss';
import { Icon, iconNames, IconSize, Label } from '../../../components/index.js';
import { Size } from '../../../constants/index.js';
export var GuideBoxVariant;
(function (GuideBoxVariant) {
    GuideBoxVariant["Success"] = "success";
    GuideBoxVariant["Danger"] = "danger";
})(GuideBoxVariant || (GuideBoxVariant = {}));
export function GuideBox(_a) {
    var children = _a.children, label = _a.label, variant = _a.variant;
    return (_jsxs("div", __assign({ className: "sb-unstyled guide-box guide-box--".concat(variant) }, { children: [_jsxs("div", __assign({ className: "guide-box__label" }, { children: [_jsx(Icon, { className: "guide-box__icon", name: variant === GuideBoxVariant.Danger ? iconNames.CancelFilled : iconNames.CheckCircleFilled, size: IconSize.LG }), _jsx(Label, __assign({ className: "guide-box__label-text", size: Size.lg }, { children: _jsx("strong", { children: label }) }))] })), children] })));
}
export function Dos(props) {
    return _jsx(GuideBox, __assign({}, props, { label: "Do", variant: GuideBoxVariant.Success }));
}
export function Donts(props) {
    return _jsx(GuideBox, __assign({}, props, { label: "Don't", variant: GuideBoxVariant.Danger }));
}
//# sourceMappingURL=guidebox.js.map