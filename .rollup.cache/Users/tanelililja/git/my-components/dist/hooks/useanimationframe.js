import { useEffect, useRef } from 'react';
export function useAnimationFrame(nextAnimationFrameHandler, shouldAnimate) {
    if (shouldAnimate === void 0) { shouldAnimate = true; }
    var frame = useRef(0);
    var animate = function (time) {
        nextAnimationFrameHandler(time);
        frame.current = requestAnimationFrame(animate);
    };
    useEffect(function () {
        if (shouldAnimate) {
            frame.current = requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(frame.current);
        }
        return function () { return cancelAnimationFrame(frame.current); };
    }, [shouldAnimate]);
}
//# sourceMappingURL=useanimationframe.js.map