import { useEffect, useRef } from 'react';
export function useAutoHeightAnimation(_a) {
    var isExpanded = _a.isExpanded, ref = _a.ref;
    var isFirstRenderRef = useRef(true);
    var isLoadedRef = useRef(isExpanded);
    useEffect(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        var isFirstRender = isFirstRenderRef.current;
        // @ts-expect-error TS2322
        element.hidden = isFirstRender && !isExpanded ? 'until-found' : false;
        element.style.overflow = isFirstRender ? 'visible' : 'hidden';
        element.style.height = isFirstRender && isExpanded ? 'auto' : "".concat(element.scrollHeight, "px");
        isFirstRenderRef.current = false;
        if (isExpanded) {
            isLoadedRef.current = true;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            element.offsetHeight; // force browser re-paint
            element.style.height = '0px';
        }
    }, [isExpanded]);
    var onTransitionEnd = function (event) {
        var target = event.target;
        if (isExpanded) {
            target.style.height = 'auto';
        }
        else {
            // @ts-expect-error TS2322
            target.hidden = 'until-found';
        }
        target.style.overflow = 'visible';
    };
    return {
        isLoaded: isLoadedRef.current,
        props: {
            onTransitionEnd: onTransitionEnd,
            style: {
                transition: 'height 0.2s ease-out'
            }
        }
    };
}
//# sourceMappingURL=useautoheightanimation.js.map