import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement } from 'react';
import { CheckboxGroup as ReactAriaCheckboxGroup } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { Field } from '../common/field/field.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function CheckboxGroup(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, children = _a.children, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, onChange = _a.onChange, showHelpTextIcon = _a.showHelpTextIcon, size = _a.size, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "children", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "label", "onChange", "showHelpTextIcon", "size", "tooltipContent"]);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var mappedChildren = Children.map(children, function (child) { return cloneElement(child, { size: size }); });
    var _b = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _b.hasError, isReadOnly = _b.isReadOnly, errorMessage = _b.errorMessage;
    var fieldSize = Size.md;
    if (size === Size.md) {
        fieldSize = Size.lg;
    }
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-checkbox-group", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: size === Size.md ? '5.5rem' : '4.75rem', size: fieldSize }));
    }
    return (_jsx(ReactAriaCheckboxGroup, __assign({}, props, { className: classNames('checkbox-group', className), isDisabled: isDisabled, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: _jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: fieldSize, tooltipContent: tooltipContent }, { children: mappedChildren })) })));
}
//# sourceMappingURL=checkboxgroup.js.map