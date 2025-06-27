import { InputProps, TextFieldProps as ReactAriaTextFieldProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { IconName } from '../../media/icon/icons.js';
import { ReactNode, RefAttributes, RefObject } from 'react';
import { TDataState } from '../../../constants/datastate.js';
import { ChangeArgs, AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { TooltipContent } from '../../text/fieldlabel/fieldlabel.js';
import { Alignment } from '../../../constants/alignment.js';
type TextFieldSizes = Size.xs | Size.sm | Size.md;
interface PartContentProps {
    inputRef: RefObject<HTMLInputElement | null>;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    size: TextFieldSizes;
}
type PartContent = string | ((props: PartContentProps) => ReactNode);
export interface TextFieldProps<P extends AnyObject> extends Omit<ReactAriaTextFieldProps, 'validate'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Icon that will be rendered at the end of the Input block of TextField
     */
    endIconName?: IconName;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Input size attribute.
     */
    inputSize?: number;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether element has borderless style.
     */
    isPlain?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label?: string;
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * Prefix text or element to be rendered at the start of the input element.
     */
    prefix?: PartContent;
    /**
     * Maximum value for input.
     */
    maxValue?: InputProps['max'];
    /**
     * Minimum value for input.
     */
    minValue?: InputProps['min'];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the TextField, two different sizes are available.
     */
    size?: TextFieldSizes;
    /**
     * Icon that will be rendered at the start of the Input block of TextField
     */
    startIconName?: IconName;
    /**
     * Suffix text or element to be rendered at the end of the input element.
     */
    suffix?: PartContent;
    /**
     * Alignment of the input text.
     */
    textAlign?: Alignment.start | Alignment.end | Alignment.center;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
export declare function TextField<P extends AnyObject>({ className, changeParams, changeCallback, dataState, dataTestId, endIconName, helpText, helpTextSuccess, inputSize, isControlled, isInvalid, isPlain, isSkeleton, label, maxValue, minValue, onBlur, onChange, placeholder, prefix, showHelpTextIcon, size, startIconName, suffix, textAlign, tooltipContent, value, ...props }: TextFieldProps<P>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=textfield.d.ts.map