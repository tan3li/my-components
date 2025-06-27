import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, Modal, ModalOverlay } from 'react-aria-components';
import { OverlayHeader } from '../overlayheader/overlayheader.js';
import { OverlayFooter } from '../overlayfooter/overlayfooter.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { classNames } from '../../../utils/classnames.js';
import { useBodyScrollPosition } from '../../../hooks/usebodyscrollposition.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
export function AlertModal(_a) {
    var _b;
    var autoFocusClose = _a.autoFocusClose, children = _a.children, className = _a.className, destructiveAction = _a.destructiveAction, headerIcon = _a.headerIcon, isDismissibleOnOutClick = _a.isDismissibleOnOutClick, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, shouldScrollInViewport = _a.shouldScrollInViewport, size = _a.size, title = _a.title, variant = _a.variant, props = __rest(_a, ["autoFocusClose", "children", "className", "destructiveAction", "headerIcon", "isDismissibleOnOutClick", "primaryAction", "secondaryAction", "shouldScrollInViewport", "size", "title", "variant"]);
    var _c = useBodyScrollPosition(), bodyScrollPosition = _c.bodyScrollPosition, onScroll = _c.onScroll, onBodyRef = _c.onBodyRef;
    var hasFooter = !(isNullOrUndefined(primaryAction) && isNullOrUndefined(secondaryAction));
    var renderContent = function (_a) {
        var close = _a.close;
        return (_jsxs(_Fragment, { children: [_jsx(OverlayHeader, __assign({ autoFocusClose: autoFocusClose, className: "alert-modal-dialog__header", iconName: headerIcon, onClose: close, variant: variant }, { children: title })), _jsx("div", __assign({ className: classNames('alert-modal-dialog__body', {
                        'alert-modal-dialog__body--no-footer': !hasFooter
                    }), onScroll: onScroll, ref: shouldScrollInViewport ? null : onBodyRef, 
                    // Scrollable body should be keyboard-focusable.
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex: 0 }, { children: isFunction(children) ? children(close) : children })), hasFooter && (_jsx(OverlayFooter, { className: "alert-modal-dialog__footer", closeCallback: close, destructiveAction: destructiveAction, primaryAction: primaryAction, secondaryAction: secondaryAction }))] }));
    };
    return (_jsx(ModalOverlay, __assign({}, props, { className: classNames('alert-modal-overlay', className, {
            'alert-modal-overlay--scrollable': shouldScrollInViewport
        }), isDismissable: isDismissibleOnOutClick }, { children: _jsx("div", __assign({ className: "alert-modal-wrapper" }, { children: _jsx(Modal, __assign({ className: "alert-modal alert-modal--".concat(size) }, { children: _jsx(Dialog, __assign({ className: classNames('alert-modal-dialog', (_b = {},
                        _b["alert-modal-dialog--scroll-".concat(bodyScrollPosition)] = !shouldScrollInViewport && bodyScrollPosition,
                        _b)) }, { children: renderContent })) })) })) })));
}
//# sourceMappingURL=alertmodal.js.map