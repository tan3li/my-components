import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { TextArea as ReactAriaTextArea, TextField as ReactAriaTextField } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Field } from '../common/field/field.js';
import { useEffect, useRef, useState } from 'react';
import { LABEL_SIZE_LG_CSS_CLASS } from '../../text/label/label.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { chain, useFocusRing, useHover } from 'react-aria';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { BodyText } from '../../text/bodytext/bodytext.js';
import { Size } from '../../../constants/size.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function TextArea(_a) {
    var className = _a.className, changeParams = _a.changeParams, changeCallback = _a.changeCallback, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isControlled = _a.isControlled, isInvalid = _a.isInvalid, isSkeleton = _a.isSkeleton, label = _a.label, minHeight = _a.minHeight, onChange = _a.onChange, onBlur = _a.onBlur, placeholder = _a.placeholder, rows = _a.rows, showHelpTextIcon = _a.showHelpTextIcon, tooltipContent = _a.tooltipContent, _b = _a.value, value = _b === void 0 ? '' : _b, props = __rest(_a, ["className", "changeParams", "changeCallback", "dataState", "dataTestId", "helpText", "helpTextSuccess", "isControlled", "isInvalid", "isSkeleton", "label", "minHeight", "onChange", "onBlur", "placeholder", "rows", "showHelpTextIcon", "tooltipContent", "value"]);
    var _c = useFocusRing({ within: true, isTextInput: false }), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible;
    var _d = useHover(props), hoverProps = _d.hoverProps, isHovered = _d.isHovered;
    var isDisabled = props.isDisabled, isRequired = props.isRequired, maxLength = props.maxLength;
    var _e = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _e.hasError, isReadOnly = _e.isReadOnly, errorMessage = _e.errorMessage;
    var _f = useState(value), stateValue = _f[0], setStateValue = _f[1];
    var inputRef = useRef(null);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var currentValue = isControlled ? value : stateValue;
    var onChangeInner = function (val) {
        if (!isControlled) {
            setStateValue(val);
        }
        var input = inputRef.current;
        if (input) {
            // Handle autogrow
            var prevOverflow = input.style.overflow;
            var isFirefox = 'MozAppearance' in input.style;
            if (!isFirefox) {
                input.style.overflow = 'hidden';
            }
            input.style.height = 'auto';
            input.style.height = "".concat(input.scrollHeight + (input.offsetHeight - input.clientHeight), "px");
            input.style.overflow = prevOverflow;
        }
        safeCall(onChange, val);
    };
    useEffect(function () {
        if (!isControlled) {
            setStateValue(value);
        }
    }, [value, isControlled]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-textarea-field", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: minHeight !== null && minHeight !== void 0 ? minHeight : '134px', size: Size.md, style: { minWidth: '225px' } }));
    }
    return (_jsx(ReactAriaTextField, __assign({}, props, { className: classNames('textarea-field', className), "data-testid": dataTestId, isInvalid: hasError, isReadOnly: isReadOnly, onBlur: chain(onBlur, changeParamsCb), onChange: onChangeInner, value: currentValue }, { children: _jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, labelSuffix: isNullOrUndefined(maxLength) ? null : (_jsx(BodyText, __assign({ className: "textarea-field__letter-count", size: Size.xs }, { children: "".concat(currentValue.length, "/").concat(maxLength) }))), showHelpTextIcon: showHelpTextIcon, size: Size.md, tooltipContent: tooltipContent }, { children: _jsx("div", __assign({}, hoverProps, { className: "textarea-field__content", "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: _jsx("div", __assign({ className: "textarea-field__textarea-wrap" }, { children: _jsx(ReactAriaTextArea, __assign({}, focusProps, { className: classNames('textarea-field__textarea', LABEL_SIZE_LG_CSS_CLASS), placeholder: placeholder, ref: inputRef, rows: rows, style: { minHeight: minHeight } })) })) })) })) })));
}
//# sourceMappingURL=textarea.js.map