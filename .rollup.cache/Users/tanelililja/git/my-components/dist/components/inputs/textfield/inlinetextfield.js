import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextField } from './textfield.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { Position, Size } from '../../../constants/index.js';
import { iconNames } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { chain } from 'react-aria';
export function InlineTextField(_a) {
    var dataState = _a.dataState, outerRef = _a.ref, _b = _a.size, size = _b === void 0 ? Size.xs : _b, validate = _a.validate, value = _a.value, props = __rest(_a, ["dataState", "ref", "size", "validate", "value"]);
    var _c = useDataState(dataState, props.isInvalid, props.isReadOnly), hasError = _c.hasError, errorMessage = _c.errorMessage, isReadOnly = _c.isReadOnly;
    var _d = useState(value), stateValue = _d[0], setStateValue = _d[1];
    var _e = useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var _f = useState({ isInvalid: hasError, errorText: errorMessage }), validationState = _f[0], setValidationState = _f[1];
    var isInvalid = validationState.isInvalid, errorText = validationState.errorText;
    var ref = useRef(null);
    var translateCommon = useTranslateCommon();
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    var onChange = function (newValue) {
        var _a, _b;
        var validationErrorMsg = (_a = validate === null || validate === void 0 ? void 0 : validate(newValue)) !== null && _a !== void 0 ? _a : '';
        setStateValue(newValue);
        setValidationState({ isInvalid: !!validationErrorMsg, errorText: validationErrorMsg });
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, newValue);
    };
    useEffect(function () {
        setStateValue(value);
    }, [value]);
    useEffect(function () {
        setValidationState({ isInvalid: hasError, errorText: errorMessage });
    }, [hasError, errorMessage]);
    return (_jsxs(TooltipTrigger, __assign({ isOpen: isInvalid && isFocused }, { children: [_jsx(TextField, __assign({}, props, { className: classNames(props.className, 'inline-text-field'), helpText: errorText, isInvalid: isInvalid, isPlain: true, isReadOnly: isReadOnly, onChange: onChange, onFocusChange: chain(setIsFocused, props.onFocusChange), ref: ref, size: size, value: stateValue })), _jsx(Tooltip, __assign({ className: "inline-text-field__error-tooltip", headerIconName: iconNames.EmergencyHomeFilled, headerText: translateCommon('error'), offset: 2, position: Position.Left, triggerRef: ref, type: TooltipType.Rich }, { children: errorText }))] })));
}
//# sourceMappingURL=inlinetextfield.js.map