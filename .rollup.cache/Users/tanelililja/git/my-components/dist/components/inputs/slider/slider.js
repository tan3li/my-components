import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Slider as ReactAriaSlider, SliderOutput, SliderThumb, SliderTrack } from 'react-aria-components';
import { Alignment } from '../../../constants/alignment.js';
import { Position } from '../../../constants/position.js';
import { Size } from '../../../constants/size.js';
import { HelpText, HelpTextVariant } from '../../text/helptext/helptext.js';
import { Label } from '../../text/label/label.js';
import { TextField } from '../textfield/textfield.js';
import { useEffect, useRef, useState } from 'react';
import { safeCall } from '../../../utils/functionhelper.js';
import { Tooltip, TooltipType } from '../../feedback/tooltip/tooltip.js';
import { TooltipTrigger } from '../../feedback/tooltip/tooltiptrigger.js';
import { useChangeParamsCallback } from '../../../hooks/usechangeparamscallback.js';
import { classNames } from '../../../utils/classnames.js';
import { isArray } from '../../../utils/objecthelper.js';
import { KeyboardEventKey } from '../../../constants/keyboardeventkey.js';
import { SliderValueDisplayMode } from './slidervaluedisplaymode.js';
import { InputType } from '../../../constants/index.js';
import { chain } from 'react-aria';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
var DEFAULT_MAX_VALUE = 100;
var DEFAULT_MIN_DISTANCE = 10;
var DEFAULT_MIN_VALUE = 0;
var DEFAULT_TEXT_FIELD_WIDTH = 60;
export function Slider(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, helpText = _a.helpText, isDisabled = _a.isDisabled, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? Position.Top : _b, _c = _a.maxValue, maxValue = _c === void 0 ? DEFAULT_MAX_VALUE : _c, _d = _a.minDistance, minDistance = _d === void 0 ? DEFAULT_MIN_DISTANCE : _d, _e = _a.minValue, minValue = _e === void 0 ? DEFAULT_MIN_VALUE : _e, onChange = _a.onChange, showFill = _a.showFill, showHelpTextIcon = _a.showHelpTextIcon, textFieldAriaLabels = _a.textFieldAriaLabels, _f = _a.tooltipPosition, tooltipPosition = _f === void 0 ? Position.Top : _f, value = _a.value, _g = _a.valueDisplayMode, valueDisplayMode = _g === void 0 ? SliderValueDisplayMode.Label : _g, _h = _a.valueTextFieldWidth, valueTextFieldWidth = _h === void 0 ? DEFAULT_TEXT_FIELD_WIDTH : _h, props = __rest(_a, ["changeCallback", "changeParams", "className", "helpText", "isDisabled", "isSkeleton", "label", "labelPosition", "maxValue", "minDistance", "minValue", "onChange", "showFill", "showHelpTextIcon", "textFieldAriaLabels", "tooltipPosition", "value", "valueDisplayMode", "valueTextFieldWidth"]);
    var _j = useState({
        focusedIndex: -1,
        focusedValue: ''
    }), focusedTextFieldValueAndIndex = _j[0], setFocusedTextFieldValueAndIndex = _j[1];
    var _k = useState(false), hasSliderTrackHover = _k[0], setHasSliderTrackHover = _k[1];
    var _l = useState(false), hasSliderThumbHoverOrFocus = _l[0], setHasSliderThumbHoverOrFocus = _l[1];
    var _m = useState(value !== null && value !== void 0 ? value : 0), sliderValue = _m[0], setSliderValue = _m[1];
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var onChangeEnd = chain(props.onChangeEnd, changeParamsCb);
    var higherValueThumbRef = useRef(null);
    var lowerValueThumbRef = useRef(null);
    var sliderTrackRef = useRef(null);
    var isRangeSlider = isArray(sliderValue);
    var hasValueRight = valueDisplayMode === SliderValueDisplayMode.TextField ||
        (labelPosition === Position.Left && valueDisplayMode === SliderValueDisplayMode.Label);
    useEffect(function () {
        setSliderValue(value);
    }, [value]);
    var resetFocusedTextFieldValueAndIndex = function () {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: -1,
            focusedValue: ''
        });
    };
    var validateHigherValueInput = function (inputValue) {
        // Higher value must be between maxValue and minValue + minDistance
        return Math.min(maxValue, Math.max(inputValue, minValue + minDistance));
    };
    var validateLowerValueInput = function (inputValue) {
        // Lower value must be between minValue and maxValue - minDistance
        return Math.max(minValue, Math.min(inputValue, maxValue - minDistance));
    };
    var validateNewValueRange = function (values, changedIndex) {
        var distance = values[1] - values[0];
        if (distance >= minDistance) {
            return values;
        }
        if (changedIndex === 0) {
            var lowerValue = validateLowerValueInput(values[0]);
            return [lowerValue, lowerValue + minDistance];
        }
        var higherValue = validateHigherValueInput(values[1]);
        return [higherValue - minDistance, higherValue];
    };
    var setValueAndTriggerChange = function (newValue, isChangeEnd) {
        setSliderValue(newValue);
        safeCall(onChange, newValue);
        if (isChangeEnd) {
            onChangeEnd(newValue);
        }
    };
    var onSliderThumbValueChange = function (newValue) {
        var _a, _b;
        var val = newValue;
        var isLowerValueThumbFocused = (_a = lowerValueThumbRef.current) === null || _a === void 0 ? void 0 : _a.hasAttribute('data-focused');
        var isHigherValueThumbFocused = (_b = higherValueThumbRef.current) === null || _b === void 0 ? void 0 : _b.hasAttribute('data-focused');
        if (isArray(newValue) && (isLowerValueThumbFocused || isHigherValueThumbFocused)) {
            var valueRange = isRangeSlider ? __spreadArray([], sliderValue, true) : [sliderValue, sliderValue];
            var changedValueIndex = isLowerValueThumbFocused ? 0 : 1;
            valueRange[changedValueIndex] = newValue[changedValueIndex];
            val = validateNewValueRange(valueRange, changedValueIndex);
        }
        setValueAndTriggerChange(val);
    };
    var onTextFieldValueChange = function (index, changeArgs, shouldUpdateValue, isChangeEnd) {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: index,
            focusedValue: changeArgs.value
        });
        if (!shouldUpdateValue) {
            return;
        }
        var newValue = +changeArgs.value;
        if (isRangeSlider) {
            var newRange = __spreadArray([], sliderValue, true);
            newRange[index] = index === 0 ? validateLowerValueInput(newValue) : validateHigherValueInput(newValue);
            setValueAndTriggerChange(validateNewValueRange(newRange, index), isChangeEnd);
        }
        else {
            var validatedValue = Math.min(Math.max(newValue, minValue), maxValue);
            setValueAndTriggerChange(validatedValue, isChangeEnd);
        }
    };
    var onTextFieldKeyUp = function (index, event) {
        if (event.key === KeyboardEventKey.Enter) {
            onTextFieldValueChange(index, { value: event.currentTarget.value }, true);
            resetFocusedTextFieldValueAndIndex();
        }
    };
    // To make sure user does not get stuck when thumbs are over each other
    var getThumbZIndexStyle = function (state, index) {
        var isThumbOverHalfway = state.getThumbPercent(index) > 1 / 2;
        return {
            zIndex: isThumbOverHalfway ? state.values.length - index : index
        };
    };
    var getTrackFillWidthAndPositionStyle = function (state) {
        if (showFill === false) {
            return {};
        }
        var values = state.values;
        if (values.length > 1) {
            return {
                left: "".concat(state.getThumbPercent(0) * 100, "%"),
                width: "".concat((state.getThumbPercent(values.length - 1) - state.getThumbPercent(0)) * 100, "%")
            };
        }
        return { width: "".concat(state.getThumbPercent(0) * 100, "%") };
    };
    var getValueLabel = function (state) {
        var valueLabelText = '';
        state.values.forEach(function (val, index) {
            var txt = state.getFormattedValue(val);
            if (index === 0) {
                valueLabelText += txt;
            }
            else {
                valueLabelText += " - ".concat(txt);
            }
        });
        return valueLabelText;
    };
    var onTextFieldFocused = function (focusedIndex, event) {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: focusedIndex,
            focusedValue: event.target.value
        });
    };
    var renderTextFields = function (state) {
        var values = state.values;
        var ariaLabels = textFieldAriaLabels !== null && textFieldAriaLabels !== void 0 ? textFieldAriaLabels : [];
        var focusedIndex = focusedTextFieldValueAndIndex.focusedIndex, focusedValue = focusedTextFieldValueAndIndex.focusedValue;
        return values.map(function (_, index) { return (_jsx(TextField, { "aria-label": ariaLabels.length > index ? ariaLabels[index] : props['aria-label'], changeCallback: function (changeArgs) {
                onTextFieldValueChange(index, changeArgs, true, true);
                resetFocusedTextFieldValueAndIndex();
            }, className: classNames('slider__text-field', { 'slider__second-text-input-label': index !== 0 }), isControlled: true, isDisabled: isDisabled, onChange: function (val) { return onTextFieldValueChange(index, { value: val }, !isRangeSlider); }, onFocus: function (event) { return onTextFieldFocused(index, event); }, onKeyUp: function (event) { return onTextFieldKeyUp(index, event); }, size: Size.xs, style: { width: valueTextFieldWidth }, textAlign: Alignment.center, type: InputType.number, value: focusedIndex === index ? focusedValue : (state.getFormattedValue(state.getThumbValue(index)).replace(',', '')) }, index)); });
    };
    var renderValue = function () {
        if (valueDisplayMode === SliderValueDisplayMode.TextField) {
            return (_jsx(SliderOutput, { children: function (_a) {
                    var state = _a.state;
                    return (_jsx("div", __assign({ className: "slider__value_label_container" }, { children: renderTextFields(state) })));
                } }));
        }
        return (_jsx(SliderOutput, __assign({ className: "slider__value-label" }, { children: function (_a) {
                var state = _a.state;
                return _jsx(Label, __assign({ size: Size.md }, { children: getValueLabel(state) }));
            } })));
    };
    if (isSkeleton) {
        return (_jsx(SkeletonField, { className: "skeleton-slider", hasHelpText: !!helpText, hasLabel: !!label, inputRectHeight: 20, size: Size.md }));
    }
    return (_jsxs(ReactAriaSlider, __assign({}, props, { className: classNames('slider', className), isDisabled: isDisabled, maxValue: maxValue, minValue: minValue, onChange: onSliderThumbValueChange, onChangeEnd: onChangeEnd, orientation: "horizontal", value: sliderValue }, { children: [labelPosition === Position.Top && (_jsxs("div", __assign({ className: "slider__top-content" }, { children: [_jsx(Label, __assign({ className: "slider__label", size: Size.md }, { children: _jsx("strong", { children: label }) })), valueDisplayMode === SliderValueDisplayMode.Label && renderValue()] }))), _jsxs("div", __assign({ className: "slider__content" }, { children: [labelPosition === Position.Left && (_jsx(Label, __assign({ className: "slider__label", size: Size.md }, { children: _jsx("strong", { children: label }) }))), _jsx("div", __assign({ className: "slider__track-wrapper" }, { children: _jsx(SliderTrack, __assign({ className: "slider__track-content", onHoverChange: setHasSliderTrackHover, ref: sliderTrackRef }, { children: function (_a) {
                                var state = _a.state;
                                return (_jsxs("div", __assign({ className: "slider__track-container" }, { children: [_jsx("div", { className: "slider__track" }), _jsx("div", { className: "slider__track-fill", style: getTrackFillWidthAndPositionStyle(state) }), state.values.map(function (_, index) { return (_jsxs(TooltipTrigger, __assign({ isOpen: hasSliderTrackHover ||
                                                hasSliderThumbHoverOrFocus ||
                                                state.values.some(function (__, i) { return state.isThumbDragging(i); }) }, { children: [_jsx(SliderThumb, __assign({ className: "slider__track-thumb", index: index, onFocusChange: setHasSliderThumbHoverOrFocus, onHoverChange: setHasSliderThumbHoverOrFocus, ref: index === 0 ? lowerValueThumbRef : higherValueThumbRef, style: getThumbZIndexStyle(state, index) }, { children: _jsx("div", { className: "slider__track-thumb-inner-circle" }) }), index), valueDisplayMode === SliderValueDisplayMode.Tooltip && (_jsx(Tooltip, __assign({ position: tooltipPosition, triggerRef: index === 0 ? lowerValueThumbRef : higherValueThumbRef, type: TooltipType.Plain }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: state.getThumbValue(index) }) })) })))] }), index)); })] })));
                            } })) })), hasValueRight && renderValue()] })), helpText && (_jsx(HelpText, __assign({ showIcon: showHelpTextIcon, variant: isDisabled ? HelpTextVariant.Disabled : undefined }, { children: helpText })))] })));
}
//# sourceMappingURL=slider.js.map