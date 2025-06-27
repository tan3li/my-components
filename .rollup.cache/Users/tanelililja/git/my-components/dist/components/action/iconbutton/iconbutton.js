import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as ReactAriaButton, Link as ReactAriaLink } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { Icon } from '../../media/icon/icon.js';
import { Spinner, SpinnerVariant } from '../../feedback/spinner/spinner.js';
import { ButtonRole } from '../button/button.js';
export function IconButton(_a) {
    var className = _a.className, iconName = _a.iconName, inverted = _a.inverted, isLoading = _a.isLoading, ref = _a.ref, _b = _a.role, role = _b === void 0 ? ButtonRole.Button : _b, _c = _a.size, size = _c === void 0 ? Size.md : _c, style = _a.style, variant = _a.variant, props = __rest(_a, ["className", "iconName", "inverted", "isLoading", "ref", "role", "size", "style", "variant"]);
    var commonProps = {
        className: classNames("button icon-button ".concat(style, "-button ").concat(style, "-button--").concat(variant, " button--").concat(size, " icon-button--").concat(size), className, {
            'button--loading': isLoading,
            'button--inverted': inverted
        })
    };
    var content = (_jsxs(_Fragment, { children: [isLoading && (_jsx(Spinner, { className: "button__spinner", size: size === Size.lg ? Size.md : Size.sm, variant: SpinnerVariant.None })), _jsx(Icon, { className: classNames("button__icon icon-button__icon icon-button__icon--".concat(size), {
                    'button__icon--loading': isLoading
                }), name: iconName })] }));
    if (role === ButtonRole.Link) {
        return (_jsx(ReactAriaLink, __assign({}, props, commonProps, { ref: ref }, { children: content })));
    }
    return (_jsx(ReactAriaButton, __assign({}, props, commonProps, { ref: ref }, { children: content })));
}
//# sourceMappingURL=iconbutton.js.map