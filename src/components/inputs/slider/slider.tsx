import {
    Slider as ReactAriaSlider,
    SliderOutput,
    SliderProps as ReactAriaSliderProps,
    SliderRenderProps,
    SliderThumb,
    SliderTrack
} from 'react-aria-components';
import {Alignment} from '../../../constants/alignment.js';
import {Position} from '../../../constants/position.js';
import {Size} from '../../../constants/size.js';
import {HelpText, HelpTextVariant} from '../../text/helptext/helptext.js';
import {Label} from '../../text/label/label.js';
import {TextField} from '../textfield/textfield.js';
import {CSSProperties, FocusEvent, KeyboardEvent, RefAttributes, useEffect, useRef, useState} from 'react';
import {safeCall} from '../../../utils/functionhelper.js';
import {Tooltip, TooltipType} from '../../feedback/tooltip/tooltip.js';
import {TooltipTrigger} from '../../feedback/tooltip/tooltiptrigger.js';
import {AnyObject, ChangeArgs, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {classNames} from '../../../utils/classnames.js';
import {isArray} from '../../../utils/objecthelper.js';
import {SliderState} from 'react-stately';
import {KeyboardEventKey} from '../../../constants/keyboardeventkey.js';
import {SliderValueDisplayMode} from './slidervaluedisplaymode.js';
import {InputType} from '../../../constants/index.js';
import {chain} from 'react-aria';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

const DEFAULT_MAX_VALUE = 100;
const DEFAULT_MIN_DISTANCE = 10;
const DEFAULT_MIN_VALUE = 0;
const DEFAULT_TEXT_FIELD_WIDTH = 60;

export interface SliderProps<P extends AnyObject>
    extends Omit<ReactAriaSliderProps, 'defaultValue' | 'orientation'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, number | [number, number]>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Additional class names to be applied to the Slider
     */
    className?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether the element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the element.
     */
    label?: string;
    /**
     * Position of the label.
     */
    labelPosition?: Position.Top | Position.Left;
    /**
     * Maximum value of the slider.
     */
    maxValue?: number;
    /**
     * Minimum distance between two thumbs.
     */
    minDistance?: number;
    /**
     * Minimum value of the slider.
     */
    minValue?: number;
    /**
     * Whether to show the progress fill of the slider. Fill is visible on default.
     */
    showFill?: boolean;
    /**
     * Whether to show the help text icon.
     */
    showHelpTextIcon?: boolean;
    /**
     * Aria labels for the text fields.
     */
    textFieldAriaLabels?: string[];
    /**
     * Position of the tooltip.
     */
    tooltipPosition?: Position;
    /**
     * Value of the slider.
     */
    value: number | [number, number];
    /**
     * Value display mode.
     */
    valueDisplayMode?: SliderValueDisplayMode;
    /**
     * Width of the value text field.
     */
    valueTextFieldWidth?: CSSProperties['width'];
}

export function Slider<P extends AnyObject>({
    changeCallback,
    changeParams,
    className,
    helpText,
    isDisabled,
    isSkeleton,
    label,
    labelPosition = Position.Top,
    maxValue = DEFAULT_MAX_VALUE,
    minDistance = DEFAULT_MIN_DISTANCE,
    minValue = DEFAULT_MIN_VALUE,
    onChange,
    showFill,
    showHelpTextIcon,
    textFieldAriaLabels,
    tooltipPosition = Position.Top,
    value,
    valueDisplayMode = SliderValueDisplayMode.Label,
    valueTextFieldWidth = DEFAULT_TEXT_FIELD_WIDTH,
    ...props
}: SliderProps<P>) {
    const [focusedTextFieldValueAndIndex, setFocusedTextFieldValueAndIndex] = useState({
        focusedIndex: -1,
        focusedValue: ''
    });

    const [hasSliderTrackHover, setHasSliderTrackHover] = useState(false);
    const [hasSliderThumbHoverOrFocus, setHasSliderThumbHoverOrFocus] = useState(false);
    const [sliderValue, setSliderValue] = useState(value ?? 0);

    const changeParamsCb = useChangeParamsCallback<P, number | [number, number]>(changeParams, changeCallback);
    const onChangeEnd = chain(props.onChangeEnd, changeParamsCb);

    const higherValueThumbRef = useRef<HTMLDivElement>(null);
    const lowerValueThumbRef = useRef<HTMLDivElement>(null);
    const sliderTrackRef = useRef<HTMLDivElement>(null);

    const isRangeSlider = isArray(sliderValue);
    const hasValueRight =
        valueDisplayMode === SliderValueDisplayMode.TextField ||
        (labelPosition === Position.Left && valueDisplayMode === SliderValueDisplayMode.Label);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    const resetFocusedTextFieldValueAndIndex = () => {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: -1,
            focusedValue: ''
        });
    };

    const validateHigherValueInput = (inputValue: number) =>
        // Higher value must be between maxValue and minValue + minDistance
        Math.min(maxValue!, Math.max(inputValue, minValue + minDistance));

    const validateLowerValueInput = (inputValue: number) =>
        // Lower value must be between minValue and maxValue - minDistance
        Math.max(minValue!, Math.min(inputValue, maxValue - minDistance));

    const validateNewValueRange = (values: [number, number], changedIndex: number): [number, number] => {
        const distance = values[1] - values[0];

        if (distance >= minDistance) {
            return values;
        }

        if (changedIndex === 0) {
            const lowerValue = validateLowerValueInput(values[0]);

            return [lowerValue, lowerValue + minDistance];
        }

        const higherValue = validateHigherValueInput(values[1]);

        return [higherValue - minDistance, higherValue];
    };

    const setValueAndTriggerChange = (newValue: number | [number, number], isChangeEnd?: boolean) => {
        setSliderValue(newValue);
        safeCall(onChange, newValue);

        if (isChangeEnd) {
            onChangeEnd(newValue);
        }
    };

    const onSliderThumbValueChange = (newValue: number | [number, number]) => {
        let val = newValue;

        const isLowerValueThumbFocused = lowerValueThumbRef.current?.hasAttribute('data-focused');
        const isHigherValueThumbFocused = higherValueThumbRef.current?.hasAttribute('data-focused');

        if (isArray(newValue) && (isLowerValueThumbFocused || isHigherValueThumbFocused)) {
            const valueRange: [number, number] = isRangeSlider ? [...sliderValue] : [sliderValue, sliderValue];
            const changedValueIndex = isLowerValueThumbFocused ? 0 : 1;

            valueRange[changedValueIndex] = newValue[changedValueIndex];

            val = validateNewValueRange(valueRange, changedValueIndex);
        }

        setValueAndTriggerChange(val);
    };

    const onTextFieldValueChange = (
        index: number,
        changeArgs: ChangeArgs<AnyObject, string>,
        shouldUpdateValue: boolean,
        isChangeEnd?: boolean
    ) => {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: index,
            focusedValue: changeArgs.value
        });

        if (!shouldUpdateValue) {
            return;
        }

        const newValue = +changeArgs.value;

        if (isRangeSlider) {
            const newRange: [number, number] = [...sliderValue];

            newRange[index] = index === 0 ? validateLowerValueInput(newValue) : validateHigherValueInput(newValue);

            setValueAndTriggerChange(validateNewValueRange(newRange, index), isChangeEnd);
        } else {
            const validatedValue = Math.min(Math.max(newValue, minValue), maxValue);

            setValueAndTriggerChange(validatedValue, isChangeEnd);
        }
    };

    const onTextFieldKeyUp = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === KeyboardEventKey.Enter) {
            onTextFieldValueChange(index, {value: event.currentTarget.value}, true);

            resetFocusedTextFieldValueAndIndex();
        }
    };

    // To make sure user does not get stuck when thumbs are over each other
    const getThumbZIndexStyle = (state: SliderState, index: number) => {
        const isThumbOverHalfway = state.getThumbPercent(index) > 1 / 2;

        return {
            zIndex: isThumbOverHalfway ? state.values.length - index : index
        };
    };

    const getTrackFillWidthAndPositionStyle = (state: SliderState) => {
        if (showFill === false) {
            return {};
        }

        const {values} = state;

        if (values.length > 1) {
            return {
                left: `${state.getThumbPercent(0) * 100}%`,
                width: `${(state.getThumbPercent(values.length - 1) - state.getThumbPercent(0)) * 100}%`
            };
        }

        return {width: `${state.getThumbPercent(0) * 100}%`};
    };

    const getValueLabel = (state: SliderState) => {
        let valueLabelText: string = '';

        state.values.forEach((val, index) => {
            const txt = state.getFormattedValue(val);

            if (index === 0) {
                valueLabelText += txt;
            } else {
                valueLabelText += ` - ${txt}`;
            }
        });

        return valueLabelText;
    };

    const onTextFieldFocused = (focusedIndex: number, event: FocusEvent<HTMLInputElement>) => {
        setFocusedTextFieldValueAndIndex({
            focusedIndex,
            focusedValue: event.target.value
        });
    };

    const renderTextFields = (state: SliderState) => {
        const {values} = state;
        const ariaLabels = textFieldAriaLabels ?? [];
        const {focusedIndex, focusedValue} = focusedTextFieldValueAndIndex;

        return values.map((_, index: number) => (
            <TextField
                aria-label={ariaLabels.length > index ? ariaLabels[index] : props['aria-label']}
                changeCallback={(changeArgs: ChangeArgs<AnyObject, string>) => {
                    onTextFieldValueChange(index, changeArgs, true, true);
                    resetFocusedTextFieldValueAndIndex();
                }}
                className={classNames('slider__text-field', {'slider__second-text-input-label': index !== 0})}
                isControlled={true}
                isDisabled={isDisabled}
                key={index}
                onChange={(val: string) => onTextFieldValueChange(index, {value: val}, !isRangeSlider)}
                onFocus={(event: FocusEvent) => onTextFieldFocused(index, event as FocusEvent<HTMLInputElement>)}
                onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => onTextFieldKeyUp(index, event)}
                size={Size.xs}
                style={{width: valueTextFieldWidth}}
                textAlign={Alignment.center}
                type={InputType.number}
                value={
                    focusedIndex === index ? focusedValue : (
                        state.getFormattedValue(state.getThumbValue(index)).replace(',', '')
                    )
                }
            />
        ));
    };

    const renderValue = () => {
        if (valueDisplayMode === SliderValueDisplayMode.TextField) {
            return (
                <SliderOutput>
                    {({state}: SliderRenderProps) => (
                        <div className="slider__value_label_container">{renderTextFields(state)}</div>
                    )}
                </SliderOutput>
            );
        }

        return (
            <SliderOutput className="slider__value-label">
                {({state}) => <Label size={Size.md}>{getValueLabel(state)}</Label>}
            </SliderOutput>
        );
    };

    if (isSkeleton) {
        return (
            <SkeletonField
                className="skeleton-slider"
                hasHelpText={!!helpText}
                hasLabel={!!label}
                inputRectHeight={20}
                size={Size.md}
            />
        );
    }

    return (
        <ReactAriaSlider
            {...props}
            className={classNames('slider', className)}
            isDisabled={isDisabled}
            maxValue={maxValue}
            minValue={minValue}
            onChange={onSliderThumbValueChange}
            onChangeEnd={onChangeEnd}
            orientation="horizontal"
            value={sliderValue}>
            {labelPosition === Position.Top && (
                <div className="slider__top-content">
                    <Label className="slider__label" size={Size.md}>
                        <strong>{label}</strong>
                    </Label>
                    {valueDisplayMode === SliderValueDisplayMode.Label && renderValue()}
                </div>
            )}
            <div className="slider__content">
                {labelPosition === Position.Left && (
                    <Label className="slider__label" size={Size.md}>
                        <strong>{label}</strong>
                    </Label>
                )}
                <div className="slider__track-wrapper">
                    <SliderTrack
                        className="slider__track-content"
                        onHoverChange={setHasSliderTrackHover}
                        ref={sliderTrackRef}>
                        {({state}) => (
                            <div className="slider__track-container">
                                <div className="slider__track" />
                                <div className="slider__track-fill" style={getTrackFillWidthAndPositionStyle(state)} />
                                {state.values.map((_, index) => (
                                    <TooltipTrigger
                                        isOpen={
                                            hasSliderTrackHover ||
                                            hasSliderThumbHoverOrFocus ||
                                            state.values.some((__, i) => state.isThumbDragging(i))
                                        }
                                        key={index}>
                                        <SliderThumb
                                            className="slider__track-thumb"
                                            index={index}
                                            key={index}
                                            onFocusChange={setHasSliderThumbHoverOrFocus}
                                            onHoverChange={setHasSliderThumbHoverOrFocus}
                                            ref={index === 0 ? lowerValueThumbRef : higherValueThumbRef}
                                            style={getThumbZIndexStyle(state, index)}>
                                            <div className="slider__track-thumb-inner-circle" />
                                        </SliderThumb>
                                        {valueDisplayMode === SliderValueDisplayMode.Tooltip && (
                                            <Tooltip
                                                position={tooltipPosition}
                                                triggerRef={index === 0 ? lowerValueThumbRef : higherValueThumbRef}
                                                type={TooltipType.Plain}>
                                                <Label size={Size.sm}>
                                                    <strong>{state.getThumbValue(index)}</strong>
                                                </Label>
                                            </Tooltip>
                                        )}
                                    </TooltipTrigger>
                                ))}
                            </div>
                        )}
                    </SliderTrack>
                </div>
                {hasValueRight && renderValue()}
            </div>
            {helpText && (
                <HelpText showIcon={showHelpTextIcon} variant={isDisabled ? HelpTextVariant.Disabled : undefined}>
                    {helpText}
                </HelpText>
            )}
        </ReactAriaSlider>
    );
}
