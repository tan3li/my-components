import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { AriaRole } from '../../../constants/ariarole.js';
import { Position } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
export var SpinnerVariant;
(function (SpinnerVariant) {
    SpinnerVariant["Neutral"] = "neutral";
    SpinnerVariant["Accent"] = "accent";
    SpinnerVariant["None"] = "none";
})(SpinnerVariant || (SpinnerVariant = {}));
export function Spinner(_a) {
    var _b;
    var ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], className = _a.className, label = _a.label, _c = _a.labelPosition, labelPosition = _c === void 0 ? Position.Bottom : _c, labelSize = _a.labelSize, ref = _a.ref, size = _a.size, _d = _a.variant, variant = _d === void 0 ? SpinnerVariant.Accent : _d;
    return (_jsxs("div", __assign({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: classNames("spinner spinner--".concat(size), className, (_b = {},
            _b["spinner--".concat(variant)] = variant !== SpinnerVariant.None,
            _b["spinner--label-".concat(labelPosition)] = !!label,
            _b)), ref: ref, role: AriaRole.status }, { children: [_jsx("span", { className: "spinner__loader" }), label && (_jsx(Label, __assign({ className: "spinner__label", size: labelSize !== null && labelSize !== void 0 ? labelSize : (size === Size.xl ? Size.lg : Size.md) }, { children: label })))] })));
}
//# sourceMappingURL=spinner.js.map