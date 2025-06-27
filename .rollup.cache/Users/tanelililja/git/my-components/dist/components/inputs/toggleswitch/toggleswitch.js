import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as ReactAriaSwitch } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { useId } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Label } from '../../text/label/label.js';
import { SwitchNob } from './switchnob.js';
import { RequiredIndicator } from '../../feedback/requiredindicator/requiredindicator.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { HelpText } from '../../text/index.js';
import { mergeStrings } from '../../../utils/stringhelper.js';
import { getHelpContentAndVariant } from '../common/field/field.js';
import { SkeletonCheckbox } from '../../feedback/skeleton/skeletoncheckbox.js';
import { Icon, iconNames } from '../../media/index.js';
export function ToggleSwitch(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSelected = _a.isSelected, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, onChange = _a.onChange, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "dataTestId", "helpText", "isDisabled", "isInvalid", "isRequired", "isSelected", "isSkeleton", "label", "labelPlacement", "onChange", "size"]);
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly, errorMessage = _d.errorMessage;
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var helpTextId = useId();
    var labelSize = Size.md;
    if (size === Size.md) {
        labelSize = Size.lg;
    }
    if (isSkeleton) {
        return (_jsx(SkeletonCheckbox, { className: "skeleton-toggle-switch", hasHelpText: !!helpText || !!errorMessage, size: size }));
    }
    var content = [];
    if (isRequired) {
        content.push(_jsx(RequiredIndicator, {}, "required"));
    }
    var toggleItem = (_jsxs("div", __assign({ className: classNames("toggle-switch__toggle-item toggle-switch__toggle-item--".concat(size)) }, { children: [_jsx(Icon, { "aria-hidden": true, className: "toggle-switch__check-icon", name: iconNames.InputCheck }), _jsx(SwitchNob, { className: "toggle-switch__switch-nob-icon", size: size })] }), "toggleItem"));
    if (label) {
        var toggleItemAndLabels = [];
        var labelNode = (_jsx(Label, __assign({ className: "toggle-switch__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'toggle-switch__toggle-item-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            toggleItemAndLabels.push(labelNode, toggleItem);
            wrapperClass = 'toggle-switch__label-and-toggle-item';
        }
        else {
            toggleItemAndLabels.push(toggleItem, labelNode);
        }
        if (helpText || errorMessage) {
            var _e = getHelpContentAndVariant({
                errorMessage: errorMessage,
                hasError: hasError,
                helpText: helpText,
                isDisabled: isDisabled
            }), helpContent = _e.helpContent, helpVariant = _e.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                toggleItemAndLabels.push(_jsx("div", {}, "toggleItemPlaceholder"));
            }
            toggleItemAndLabels.push(_jsx(HelpText, __assign({ id: helpTextId, variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(_jsx("div", __assign({ className: wrapperClass }, { children: toggleItemAndLabels }), "toggleItemAndLabel"));
    }
    else {
        content.push(toggleItem);
    }
    return (_jsx(ReactAriaSwitch, __assign({}, props, { "aria-describedby": mergeStrings(' ', helpTextId, props['aria-describedby']), className: classNames('toggle-switch', className, {
            'toggle-switch--invalid': hasError,
            'toggle-switch--labeled': !!label,
            'toggle-switch--reversed': !!label && labelPlacement === LabelPlacement.Start
        }), "data-testid": dataTestId, isDisabled: isDisabled, isReadOnly: isReadOnly, isSelected: isSelected, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: content })));
}
//# sourceMappingURL=toggleswitch.js.map