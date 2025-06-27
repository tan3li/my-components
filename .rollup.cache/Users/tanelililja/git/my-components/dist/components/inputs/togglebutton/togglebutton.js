import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Radio, RadioGroup } from 'react-aria-components';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Field } from '../common/field/field.js';
import { chain } from 'react-aria';
import { useDataState } from '../../../hooks/usedatastate.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function ToggleButton(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, items = _a.items, label = _a.label, onChange = _a.onChange, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.sm : _b, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "items", "label", "onChange", "showHelpTextIcon", "size", "tooltipContent"]);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var _c = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _c.hasError, isReadOnly = _c.isReadOnly, errorMessage = _c.errorMessage;
    var labelSize = size === Size.xs ? Size.sm : Size.md;
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-toggle-button", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsx(RadioGroup, __assign({}, props, { className: classNames("toggle-button toggle-button--".concat(size), className), isDisabled: isDisabled, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, onChange: chain(onChange, changeParamsCb) }, { children: _jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: labelSize, tooltipContent: tooltipContent }, { children: _jsx("div", __assign({ className: "toggle-button__options" }, { children: items.map(function (_a) {
                    var isItemDisabled = _a.isDisabled, value = _a.value, text = _a.text;
                    return (_jsx(Radio, __assign({ className: "toggle-button__option", isDisabled: isItemDisabled, value: value }, { children: _jsx(Label, __assign({ size: labelSize }, { children: text })) }), value));
                }) })) })) })));
}
//# sourceMappingURL=togglebutton.js.map