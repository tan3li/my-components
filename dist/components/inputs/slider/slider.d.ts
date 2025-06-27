import { SliderProps as ReactAriaSliderProps } from 'react-aria-components';
import { Position } from '../../../constants/position.js';
import { CSSProperties, RefAttributes } from 'react';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { SliderValueDisplayMode } from './slidervaluedisplaymode.js';
export interface SliderProps<P extends AnyObject> extends Omit<ReactAriaSliderProps, 'defaultValue' | 'orientation'>, RefAttributes<HTMLDivElement> {
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
export declare function Slider<P extends AnyObject>({ changeCallback, changeParams, className, helpText, isDisabled, isSkeleton, label, labelPosition, maxValue, minDistance, minValue, onChange, showFill, showHelpTextIcon, textFieldAriaLabels, tooltipPosition, value, valueDisplayMode, valueTextFieldWidth, ...props }: SliderProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=slider.d.ts.map