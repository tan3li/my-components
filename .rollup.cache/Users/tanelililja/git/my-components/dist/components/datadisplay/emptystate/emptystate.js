import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../../text/label/label.js';
import { Button } from '../../action/button/button.js';
import { Size } from '../../../constants/index.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { classNames } from '../../../utils/classnames.js';
export var EmptyStateLayoutVariant;
(function (EmptyStateLayoutVariant) {
    EmptyStateLayoutVariant["Centered"] = "centered";
    EmptyStateLayoutVariant["LeftAligned"] = "left-aligned";
    EmptyStateLayoutVariant["SideBySide"] = "side-by-side";
})(EmptyStateLayoutVariant || (EmptyStateLayoutVariant = {}));
export function EmptyState(_a) {
    var bodyText = _a.bodyText, buttonProps = _a.buttonProps, className = _a.className, iconName = _a.iconName, _b = _a.iconSize, iconSize = _b === void 0 ? IconSize.XXL : _b, _c = _a.layout, layout = _c === void 0 ? EmptyStateLayoutVariant.SideBySide : _c, ref = _a.ref, title = _a.title;
    var isLayoutCentered = layout === EmptyStateLayoutVariant.Centered;
    var isLayoutSideBySide = layout === EmptyStateLayoutVariant.SideBySide;
    return (_jsxs("div", __assign({ className: classNames('empty-state', className), ref: ref }, { children: [iconName && isLayoutSideBySide && (_jsx(Icon, { className: "empty-state__icon empty-state__icon--side-by-side", name: iconName, size: iconSize })), _jsxs("div", __assign({ className: classNames('empty-state__main-content', {
                    'empty-state__main-content--centered': isLayoutCentered
                }) }, { children: [iconName && !isLayoutSideBySide && (_jsx(Icon, { className: "empty-state__icon", name: iconName, size: iconSize })), _jsxs("div", __assign({ className: classNames('empty-state__text-content', {
                            'empty-state__text-content--centered': isLayoutCentered
                        }) }, { children: [_jsx(Label, __assign({ className: "empty-state__title-text", size: Size.lg }, { children: _jsx("strong", { children: title }) })), _jsx(BodyText, __assign({ className: classNames('empty-state__body-text', {
                                    'empty-state__body-text--centered': isLayoutCentered
                                }), size: Size.sm }, { children: bodyText }))] })), (buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.onPress) && (buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.children) && (_jsx(Button, __assign({}, buttonProps, { size: Size.md }, { children: buttonProps.children })))] }))] })));
}
//# sourceMappingURL=emptystate.js.map