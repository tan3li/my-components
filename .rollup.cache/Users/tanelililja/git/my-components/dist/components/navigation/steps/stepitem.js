import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { StepIndicator } from './stepindicator.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Size } from '../../../constants/size.js';
import { Alignment } from '../../../constants/alignment.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { StepProgressBar } from './stepprogressbar.js';
import { Orientation } from '../../../constants/orientation.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
export function StepItem(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, isActive = _a.isActive, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, _d = _a.orientation, orientation = _d === void 0 ? Orientation.horizontal : _d, progressValue = _a.progressValue, ref = _a.ref, supportText = _a.supportText, title = _a.title;
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classNames("step-item step-item--".concat(alignment, "-aligned"), {
                    'step-item--active': isActive,
                    'step-item--completed': isCompleted
                }), ref: ref }, { children: [_jsx(StepIndicator, { isActive: isActive, isCompleted: isCompleted, isDisabled: isDisabled, text: index + 1 }), _jsxs("div", __assign({ className: "step-item__texts" }, { children: [_jsx(BodyText, __assign({ className: "step-item__title", elementType: HTMLElementType.Div, size: Size.sm }, { children: _jsx("strong", { children: title }) })), _jsx(BodyText, __assign({ className: "step-item__support-text", elementType: HTMLElementType.Div, size: Size.xs }, { children: supportText }))] }))] })), !isNullOrUndefined(progressValue) && _jsx(StepProgressBar, { orientation: orientation, value: progressValue })] }));
}
//# sourceMappingURL=stepitem.js.map