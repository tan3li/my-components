import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Orientation } from '../../../constants/orientation.js';
import { Children, cloneElement } from 'react';
import { Alignment } from '../../../constants/alignment.js';
export function Steps(_a) {
    var activeStep = _a.activeStep, className = _a.className, children = _a.children, _b = _a.orientation, orientation = _b === void 0 ? Orientation.horizontal : _b, ref = _a.ref, _c = _a.stepAlignment, stepAlignment = _c === void 0 ? Alignment.start : _c;
    var mappedChildren = Children.map(children, function (child, index) {
        return cloneElement(child, {
            alignment: orientation === Orientation.horizontal ? stepAlignment : Alignment.start,
            index: index,
            isActive: activeStep === index,
            orientation: orientation,
            progressValue: index === children.length - 1 ? undefined : child.props.progressValue
        });
    });
    return (_jsx("div", __assign({ className: classNames("steps steps--".concat(orientation), className), ref: ref }, { children: mappedChildren })));
}
//# sourceMappingURL=steps.js.map