import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import { classNames } from '../../../utils/classnames.js';
export function ToastWrapper(_a) {
    var children = _a.children, id = _a.id, isActive = _a.isActive, onHeightUpdate = _a.onHeightUpdate, style = _a.style;
    var observerRef = useRef(null);
    var ref = useCallback(function (el) {
        if (el) {
            var updateHeight = function () {
                var height = el.getBoundingClientRect().height;
                onHeightUpdate(id, height);
            };
            updateHeight();
            observerRef.current = new MutationObserver(updateHeight);
            observerRef.current.observe(el, {
                subtree: true,
                childList: true,
                characterData: true
            });
        }
        else if (observerRef.current) {
            observerRef.current.disconnect();
        }
    }, [id, onHeightUpdate]);
    return (_jsx("div", __assign({ className: classNames('toast-wrapper', {
            'toast-wrapper--active': isActive
        }), ref: ref, style: style }, { children: children })));
}
//# sourceMappingURL=toastwrapper.js.map