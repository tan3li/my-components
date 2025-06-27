import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as ReactAriaButton, Link as ReactAriaLink } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { Label } from '../../text/label/label.js';
import { Icon } from '../../media/icon/icon.js';
import { Spinner, SpinnerVariant } from '../../feedback/spinner/spinner.js';
import { isString } from '../../../utils/stringhelper.js';
import { isNumber } from '../../../utils/objecthelper.js';
export var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle["Fill"] = "fill";
    ButtonStyle["Outline"] = "outline";
    ButtonStyle["Dash"] = "dash";
    ButtonStyle["Plain"] = "plain";
    ButtonStyle["Link"] = "link";
})(ButtonStyle || (ButtonStyle = {}));
export var ButtonRole;
(function (ButtonRole) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    ButtonRole["Button"] = "button";
    ButtonRole["Link"] = "link";
})(ButtonRole || (ButtonRole = {}));
export function Button(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, children = _a.children, endIconName = _a.endIconName, inverted = _a.inverted, isLoading = _a.isLoading, ref = _a.ref, _b = _a.role, role = _b === void 0 ? ButtonRole.Button : _b, _c = _a.size, size = _c === void 0 ? Size.md : _c, startIconName = _a.startIconName, style = _a.style, variant = _a.variant, props = __rest(_a, ['aria-label', "className", "children", "endIconName", "inverted", "isLoading", "ref", "role", "size", "startIconName", "style", "variant"]);
    var isChildrenStrOrNum = isString(children) || isNumber(children);
    var commonProps = {
        'aria-label': ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : (isChildrenStrOrNum ? children.toString() : undefined),
        className: classNames("button ".concat(style, "-button ").concat(style, "-button--").concat(variant, " button--").concat(size), className, {
            'button--loading': isLoading,
            'button--inverted': inverted
        })
    };
    var content = (_jsxs(_Fragment, { children: [isLoading && (_jsx(Spinner, { className: "button__spinner", size: size === Size.lg ? Size.md : Size.sm, variant: SpinnerVariant.None })), startIconName && (_jsx(Icon, { ariaHidden: true, className: "button__icon button__icon--".concat(size), name: startIconName })), _jsx(Label, __assign({ className: "button__label", size: size }, { children: isChildrenStrOrNum ?
                    _jsx("strong", { children: children })
                    : children })), endIconName && (_jsx(Icon, { ariaHidden: true, className: "button__icon button__icon--".concat(size), name: endIconName }))] }));
    if (role === ButtonRole.Link) {
        return (_jsx(ReactAriaLink, __assign({}, props, commonProps, { ref: ref }, { children: content })));
    }
    return (_jsx(ReactAriaButton, __assign({}, props, commonProps, { ref: ref }, { children: content })));
}
//# sourceMappingURL=button.js.map