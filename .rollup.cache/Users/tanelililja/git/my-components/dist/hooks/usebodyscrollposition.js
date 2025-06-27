import { useCallback, useRef, useState } from 'react';
import { throttle } from '../utils/debounce.js';
export var BodyScrollPosition;
(function (BodyScrollPosition) {
    BodyScrollPosition["Top"] = "top";
    BodyScrollPosition["Middle"] = "middle";
    BodyScrollPosition["Bottom"] = "bottom";
})(BodyScrollPosition || (BodyScrollPosition = {}));
export function useBodyScrollPosition() {
    var _a = useState(null), bodyScrollPosition = _a[0], setBodyScrollPosition = _a[1];
    var detectAndSetBodyScrollPosition = useCallback(function (bodyElement) {
        var scrollTop = bodyElement.scrollTop, scrollHeight = bodyElement.scrollHeight, clientHeight = bodyElement.clientHeight;
        var position = null;
        if (scrollHeight > clientHeight) {
            if (scrollTop === 0) {
                position = BodyScrollPosition.Top;
            }
            else if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
                position = BodyScrollPosition.Bottom;
            }
            else {
                position = BodyScrollPosition.Middle;
            }
        }
        setBodyScrollPosition(position);
    }, []);
    var onScroll = useCallback(throttle(function (e) {
        detectAndSetBodyScrollPosition(e.target);
    }, 100), []);
    var resizeObserver = useRef(null);
    var onBodyRef = useCallback(function (bodyElement) {
        if (bodyElement) {
            resizeObserver.current = new ResizeObserver(function () {
                detectAndSetBodyScrollPosition(bodyElement);
            });
            resizeObserver.current.observe(bodyElement);
        }
        return function () {
            var _a;
            (_a = resizeObserver.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
    }, []);
    return {
        bodyScrollPosition: bodyScrollPosition,
        onBodyRef: onBodyRef,
        onScroll: onScroll
    };
}
//# sourceMappingURL=usebodyscrollposition.js.map