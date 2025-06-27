import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ProgressBar } from 'react-aria-components';
import { Orientation } from '../../../constants/orientation.js';
import { useTranslateProject } from '../../../hooks/translations/usetranslateproject.js';
export function StepProgressBar(_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? Orientation.horizontal : _b, value = _a.value;
    var isVertical = orientation === Orientation.vertical;
    var translateProject = useTranslateProject();
    return (_jsx(ProgressBar, __assign({ "aria-label": translateProject('progress'), className: "step-progress-bar step-progress-bar--".concat(orientation), value: value }, { children: function (_a) {
            var percentage = _a.percentage;
            return (_jsx("div", __assign({ className: "step-progress-bar__bar" }, { children: _jsx("div", { className: "step-progress-bar__fill", style: {
                        height: isVertical ? "".concat(percentage, "%") : undefined,
                        width: isVertical ? undefined : "".concat(percentage, "%")
                    } }) })));
        } })));
}
//# sourceMappingURL=stepprogressbar.js.map