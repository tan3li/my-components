import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input as ReactAriaInput, TextField as ReactAriaTextField } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { classNames } from '../../../utils/classnames.js';
import { Icon } from '../../media/icon/icon.js';
import { Field } from '../common/field/field.js';
import { chain, useFocusRing, useHover } from 'react-aria';
import { useEffect, useId, useRef, useState } from 'react';
import { isEmptyString } from '../../../utils/objecthelper.js';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { isString } from '../../../utils/stringhelper.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { TextFieldUnit } from './textfieldunit.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { Alignment } from '../../../constants/alignment.js';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
// eslint-disable-next-line sonarjs/function-return-type
function Part(_a) {
    var content = _a.content, id = _a.id, inputRef = _a.inputRef, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, size = _a.size;
    if (isFunction(content)) {
        return content({ inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size });
    }
    else if (isString(content)) {
        return (_jsx(TextFieldUnit, __assign({ id: id, size: size === Size.xs ? Size.md : Size.lg }, { children: content })));
    }
    return null;
}
export function TextField(_a) {
    var className = _a.className, changeParams = _a.changeParams, changeCallback = _a.changeCallback, dataState = _a.dataState, dataTestId = _a.dataTestId, endIconName = _a.endIconName, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, inputSize = _a.inputSize, isControlled = _a.isControlled, isInvalid = _a.isInvalid, isPlain = _a.isPlain, isSkeleton = _a.isSkeleton, label = _a.label, maxValue = _a.maxValue, minValue = _a.minValue, onBlur = _a.onBlur, onChange = _a.onChange, placeholder = _a.placeholder, prefix = _a.prefix, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b, startIconName = _a.startIconName, suffix = _a.suffix, _c = _a.textAlign, textAlign = _c === void 0 ? Alignment.start : _c, tooltipContent = _a.tooltipContent, _d = _a.value, value = _d === void 0 ? '' : _d, props = __rest(_a, ["className", "changeParams", "changeCallback", "dataState", "dataTestId", "endIconName", "helpText", "helpTextSuccess", "inputSize", "isControlled", "isInvalid", "isPlain", "isSkeleton", "label", "maxValue", "minValue", "onBlur", "onChange", "placeholder", "prefix", "showHelpTextIcon", "size", "startIconName", "suffix", "textAlign", "tooltipContent", "value"]);
    var _e = useFocusRing({ within: true, isTextInput: false }), focusProps = _e.focusProps, isFocused = _e.isFocused, isFocusVisible = _e.isFocusVisible;
    var _f = useHover(props), hoverProps = _f.hoverProps, isHovered = _f.isHovered;
    var isDisabled = props.isDisabled, isRequired = props.isRequired;
    var _g = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _g.hasError, isReadOnly = _g.isReadOnly, errorMessage = _g.errorMessage;
    var inputRef = useRef(null);
    var _h = useState(value), stateValue = _h[0], setStateValue = _h[1];
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var currentValue = isControlled ? value : stateValue;
    var prefixId = useId();
    var suffixId = useId();
    var ariaLabelledBy = props['aria-labelledby'];
    if (!ariaLabelledBy) {
        var labelledBy = [];
        // If prefix/suffix is function, aria-labelledby should be used.
        if (isString(prefix)) {
            labelledBy.push(prefixId);
        }
        if (isString(suffix)) {
            labelledBy.push(suffixId);
        }
        ariaLabelledBy = labelledBy.join(' ');
    }
    var onChangeInner = function (val) {
        if (!isControlled) {
            setStateValue(val);
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
        return (_jsx(SkeletonField, { className: "skeleton-text-field", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsx(ReactAriaTextField, __assign({}, props, { "aria-labelledby": ariaLabelledBy, className: classNames('text-field', className), isInvalid: hasError, isReadOnly: isReadOnly, onBlur: chain(onBlur, changeParamsCb), onChange: onChangeInner, value: currentValue }, { children: _jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: _jsxs("div", __assign({}, hoverProps, { className: classNames("text-field__content text-field__content--".concat(size), {
                    'text-field__content--filled': !isEmptyString(currentValue),
                    'text-field__content--plain': isPlain
                }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: [_jsx(Part, { content: prefix, id: prefixId, inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size }), _jsxs("div", __assign({ className: "text-field__input" }, { children: [startIconName && _jsx(Icon, { className: "text-field__icon", name: startIconName }), _jsx(ReactAriaInput, __assign({}, focusProps, { className: classNames('text-field__input-field', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS, {
                                    'text-field__input-field--right-aligned': textAlign === Alignment.end
                                }, {
                                    'text-field__input-field--center-aligned': textAlign === Alignment.center
                                }), "data-testid": dataTestId, max: maxValue, min: minValue, placeholder: placeholder, ref: inputRef, size: inputSize })), endIconName && _jsx(Icon, { className: "text-field__icon", name: endIconName })] })), _jsx(Part, { content: suffix, id: suffixId, inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size })] })) })) })));
}
//# sourceMappingURL=textfield.js.map