import { useCallback, useRef } from 'react';
import { isEmptyArray } from '../../../utils/objecthelper.js';
import { safeCall } from '../../../utils/functionhelper.js';
export function useIntersectionObserver(callback) {
    var observer = useRef(null);
    var onVisible = useCallback(function (entries) {
        if (!isEmptyArray(entries) && entries[0].isIntersecting) {
            safeCall(callback, entries[0]);
        }
    }, [callback]);
    return useCallback(function (element) {
        var _a;
        if (element) {
            observer.current = new IntersectionObserver(onVisible);
            observer.current.observe(element);
        }
        else {
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        }
        return function () {
            var _a;
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
    }, [onVisible]);
}
//# sourceMappingURL=useintersectionobserver.js.map