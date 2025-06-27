import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, Modal, ModalOverlay } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { OverlayHeader, OverlayHeaderVariant } from '../overlayheader/overlayheader.js';
import { OverlayFooter } from '../overlayfooter/overlayfooter.js';
import { useBodyScrollPosition } from '../../../hooks/usebodyscrollposition.js';
import { mergeRefs } from '@react-aria/utils';
import { isFunction } from '../../../utils/functionhelper.js';
export var DrawerVariant;
(function (DrawerVariant) {
    DrawerVariant["FullOverlay"] = "full-overlay";
    DrawerVariant["Standard"] = "standard";
})(DrawerVariant || (DrawerVariant = {}));
export var DrawerWidth;
(function (DrawerWidth) {
    DrawerWidth["Medium"] = "medium";
    DrawerWidth["Wide"] = "wide";
})(DrawerWidth || (DrawerWidth = {}));
export var DrawerHeaderStyle;
(function (DrawerHeaderStyle) {
    DrawerHeaderStyle["Emphasized"] = "emphasized";
    DrawerHeaderStyle["Standard"] = "standard";
})(DrawerHeaderStyle || (DrawerHeaderStyle = {}));
export function Drawer(_a) {
    var ariaLabel = _a["aria-label"], autoFocusClose = _a.autoFocusClose, children = _a.children, className = _a.className, destructiveAction = _a.destructiveAction, footer = _a.footer, header = _a.header, headerDetails = _a.headerDetails, _b = _a.headerStyle, headerStyle = _b === void 0 ? DrawerHeaderStyle.Standard : _b, isDismissable = _a.isDismissable, primaryAction = _a.primaryAction, scrollRef = _a.scrollRef, secondaryAction = _a.secondaryAction, showHeaderLoadingIndicator = _a.showHeaderLoadingIndicator, _c = _a.shouldAnimate, shouldAnimate = _c === void 0 ? true : _c, title = _a.title, _d = _a.variant, variant = _d === void 0 ? DrawerVariant.Standard : _d, _e = _a.width, width = _e === void 0 ? DrawerWidth.Medium : _e, props = __rest(_a, ['aria-label', "autoFocusClose", "children", "className", "destructiveAction", "footer", "header", "headerDetails", "headerStyle", "isDismissable", "primaryAction", "scrollRef", "secondaryAction", "showHeaderLoadingIndicator", "shouldAnimate", "title", "variant", "width"]);
    var _f = useBodyScrollPosition(), bodyScrollPosition = _f.bodyScrollPosition, onScroll = _f.onScroll, onBodyRef = _f.onBodyRef;
    var renderContent = function (_a) {
        var close = _a.close;
        var headerCssClass = "drawer__header drawer__header--".concat(headerStyle);
        var footerCssClass = 'drawer__footer';
        var headerElement, footerElement;
        if (header) {
            headerElement = _jsx("div", __assign({ className: headerCssClass }, { children: isFunction(header) ? header({ close: close }) : header }));
        }
        else if (title) {
            headerElement = (_jsx(OverlayHeader, __assign({ autoFocusClose: autoFocusClose, className: headerCssClass, details: headerDetails, onClose: close, showLoadingIndicator: showHeaderLoadingIndicator, variant: OverlayHeaderVariant.Neutral }, { children: title })));
        }
        if (footer) {
            footerElement = _jsx("div", __assign({ className: footerCssClass }, { children: isFunction(footer) ? footer({ close: close }) : footer }));
        }
        else if (primaryAction) {
            footerElement = (_jsx(OverlayFooter, { className: footerCssClass, closeCallback: close, destructiveAction: destructiveAction, primaryAction: primaryAction, secondaryAction: secondaryAction }));
        }
        return (_jsxs(_Fragment, { children: [headerElement, _jsx("div", __assign({ className: "drawer__body", onScroll: onScroll, ref: mergeRefs(scrollRef, onBodyRef) }, { children: children })), footerElement] }));
    };
    return (_jsx(ModalOverlay, __assign({}, props, { className: classNames("drawer-overlay drawer-overlay--".concat(variant), {
            'drawer-overlay--animated': shouldAnimate
        }), isDismissable: isDismissable !== null && isDismissable !== void 0 ? isDismissable : true }, { children: _jsx(Modal, __assign({ className: classNames("drawer drawer--".concat(width), className) }, { children: _jsx(Dialog, __assign({ "aria-label": ariaLabel, className: "drawer__dialog drawer__dialog--scroll-".concat(bodyScrollPosition) }, { children: renderContent })) })) })));
}
//# sourceMappingURL=drawer.js.map