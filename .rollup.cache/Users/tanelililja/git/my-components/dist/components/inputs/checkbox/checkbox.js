import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox as ReactAriaCheckbox, CheckboxGroupStateContext } from 'react-aria-components';
import { useContext, useId } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { Label } from '../../text/label/label.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { InputIndeterminate } from './inputindeterminate.js';
import { RequiredIndicator } from '../../feedback/requiredindicator/requiredindicator.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { HelpText } from '../../text/index.js';
import { mergeStrings } from '../../../utils/stringhelper.js';
import { getHelpContentAndVariant } from '../common/field/field.js';
import { SkeletonCheckbox } from '../../feedback/skeleton/skeletoncheckbox.js';
import { iconNames } from '../../media/index.js';
export function Checkbox(_a) {
    var className = _a.className, changeCallback = _a.changeCallback, changeParams = _a.changeParams, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, isDisabled = _a.isDisabled, isIndeterminate = _a.isIndeterminate, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSelected = _a.isSelected, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, onChange = _a.onChange, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["className", "changeCallback", "changeParams", "dataState", "dataTestId", "helpText", "isDisabled", "isIndeterminate", "isInvalid", "isRequired", "isSelected", "isSkeleton", "label", "labelPlacement", "onChange", "size"]);
    var checkboxGroupState = useContext(CheckboxGroupStateContext);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly, errorMessage = _d.errorMessage;
    var helpTextId = useId();
    var labelSize = Size.md, iconSize = IconSize.SM;
    if (size === Size.md) {
        labelSize = Size.lg;
        iconSize = IconSize.LG;
    }
    if (isSkeleton) {
        return _jsx(SkeletonCheckbox, { hasHelpText: !!helpText || !!errorMessage, size: size });
    }
    var content = [];
    if (isRequired) {
        content.push(_jsx(RequiredIndicator, {}, "required"));
    }
    var box = (_jsx("div", __assign({ className: classNames("checkbox__box checkbox__box--".concat(size)) }, { children: isIndeterminate ?
            _jsx(InputIndeterminate, { size: iconSize })
            : _jsx(Icon, { "aria-hidden": true, name: iconNames.InputCheck, size: iconSize }) }), "box"));
    if (label) {
        var boxAndLabels = [];
        var labelNode = (_jsx(Label, __assign({ className: "checkbox__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'checkbox__box-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            boxAndLabels.push(labelNode, box);
            wrapperClass = 'checkbox__label-and-box';
        }
        else {
            boxAndLabels.push(box, labelNode);
        }
        if (helpText || errorMessage) {
            var _e = getHelpContentAndVariant({
                errorMessage: errorMessage,
                hasError: hasError || (checkboxGroupState === null || checkboxGroupState === void 0 ? void 0 : checkboxGroupState.isInvalid),
                helpText: helpText,
                isDisabled: !!isDisabled || (checkboxGroupState === null || checkboxGroupState === void 0 ? void 0 : checkboxGroupState.isDisabled)
            }), helpContent = _e.helpContent, helpVariant = _e.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                boxAndLabels.push(_jsx("div", {}, "boxPlaceholder"));
            }
            boxAndLabels.push(_jsx(HelpText, __assign({ id: helpTextId, variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(_jsx("div", __assign({ className: wrapperClass }, { children: boxAndLabels }), "boxAndLabel"));
    }
    else {
        content.push(box);
    }
    return (_jsx(ReactAriaCheckbox, __assign({}, props, { "aria-describedby": mergeStrings(' ', helpTextId, props['aria-describedby']), className: classNames('checkbox', className, {
            'checkbox--labeled': !!label,
            'checkbox--reversed': !!label && labelPlacement === LabelPlacement.Start
        }), "data-testid": dataTestId, isDisabled: isDisabled, isIndeterminate: isIndeterminate, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, isSelected: isSelected, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: content })));
}
//# sourceMappingURL=checkbox.js.map