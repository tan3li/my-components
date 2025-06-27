import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ProgressBar } from 'react-aria-components';
import { useTranslateProject } from '../../../hooks/translations/usetranslateproject.js';
import { useAnimationFrame } from '../../../hooks/useanimationframe.js';
import { useEffect, useRef, useState } from 'react';
export function ToastProgressBar(_a) {
    var isPaused = _a.isPaused, timeout = _a.timeout;
    var translateProject = useTranslateProject();
    var _b = useState(timeout), remainingTimeout = _b[0], setRemainingTimeout = _b[1];
    var fillRef = useRef(null);
    var prevTimeRef = useRef(null);
    useAnimationFrame(function (time) {
        if (prevTimeRef.current !== null) {
            var deltaTime_1 = time - prevTimeRef.current;
            setRemainingTimeout(function (prevRemainingTimeout) { return prevRemainingTimeout - deltaTime_1; });
        }
        prevTimeRef.current = time;
    }, remainingTimeout > 0 && !isPaused);
    useEffect(function () {
        var fill = fillRef.current;
        if (fill) {
            // Need to set width directly to DOM node because React style prop makes the animation lag when moving mouse.
            fill.style.width = "".concat((remainingTimeout / timeout) * 100, "%");
        }
    }, [remainingTimeout, timeout]);
    useEffect(function () {
        if (isPaused) {
            prevTimeRef.current = null;
        }
    }, [isPaused]);
    return (_jsx(ProgressBar, __assign({ "aria-label": translateProject('progress'), className: "toast-progress-bar", value: (remainingTimeout / timeout) * 100 }, { children: _jsx("div", __assign({ className: "toast-progress-bar__bar" }, { children: _jsx("div", { className: "toast-progress-bar__fill", ref: fillRef }) })) })));
}
//# sourceMappingURL=toastprogressbar.js.map