import { useCallback, useState } from 'react';
import { Orientation } from '../constants/index.js';
import { useResizeObserver } from '@react-aria/utils';
export function useIsTextTruncated(_a) {
    var onTruncatedChange = _a.onTruncatedChange, _b = _a.overflowDirection, overflowDirection = _b === void 0 ? Orientation.horizontal : _b, ref = _a.ref;
    var _c = useState(false), isTruncated = _c[0], setIsTruncated = _c[1];
    var onResize = useCallback(function () {
        var element = ref.current;
        if (element) {
            var newIsTruncated = overflowDirection === Orientation.vertical ?
                element.offsetHeight < element.scrollHeight
                : element.offsetWidth < element.scrollWidth;
            setIsTruncated(newIsTruncated);
            onTruncatedChange === null || onTruncatedChange === void 0 ? void 0 : onTruncatedChange(newIsTruncated);
        }
    }, [onTruncatedChange, ref, overflowDirection]);
    useResizeObserver({ ref: ref, onResize: onResize });
    return isTruncated;
}
//# sourceMappingURL=useistexttruncated.js.map