import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Radio as ReactAriaRadio, RadioGroupStateContext } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { useContext } from 'react';
import { Size } from '../../../constants/size.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
import { Label } from '../../text/label/label.js';
import { HelpText } from '../../text/index.js';
import { getHelpContentAndVariant } from '../common/field/field.js';
import { SkeletonCheckbox } from '../../feedback/skeleton/skeletoncheckbox.js';
export function Radio(_a) {
    var className = _a.className, helpText = _a.helpText, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["className", "helpText", "isSkeleton", "label", "labelPlacement", "size"]);
    var radioGroupState = useContext(RadioGroupStateContext);
    var labelSize = size === Size.md ? Size.lg : Size.md;
    if (isSkeleton) {
        return _jsx(SkeletonCheckbox, { className: "skeleton-radio", hasHelpText: !!helpText, size: size });
    }
    var content = [];
    var button = _jsx("div", { className: "radio__button radio__button--".concat(size) }, "button");
    if (label) {
        var buttonAndLabels = [];
        var labelNode = (_jsx(Label, __assign({ className: "radio__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'radio__button-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            buttonAndLabels.push(labelNode, button);
            wrapperClass = 'radio__label-and-button';
        }
        else {
            buttonAndLabels.push(button, labelNode);
        }
        if (helpText) {
            var _d = getHelpContentAndVariant({
                hasError: radioGroupState === null || radioGroupState === void 0 ? void 0 : radioGroupState.isInvalid,
                helpText: helpText,
                isDisabled: !!props.isDisabled || (radioGroupState === null || radioGroupState === void 0 ? void 0 : radioGroupState.isDisabled)
            }), helpContent = _d.helpContent, helpVariant = _d.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                buttonAndLabels.push(_jsx("div", {}, "buttonPlaceholder"));
            }
            buttonAndLabels.push(_jsx(HelpText, __assign({ variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(_jsx("div", __assign({ className: wrapperClass }, { children: buttonAndLabels }), "buttonAndLabel"));
    }
    else {
        content.push(button);
    }
    return (_jsx(ReactAriaRadio, __assign({}, props, { className: classNames('radio', className, {
            'radio--labeled': !!label,
            'radio--reversed': !!label && labelPlacement === LabelPlacement.Start
        }) }, { children: content })));
}
//# sourceMappingURL=radio.js.map