import { TextFieldProps as ReactAriaTextFieldProps } from 'react-aria-components';
import { CSSProperties, RefAttributes } from 'react';
import { TDataState } from '../../../constants/datastate.js';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { TooltipContent } from '../../text/fieldlabel/fieldlabel.js';
export interface TextAreaProps<P extends AnyObject> extends ReactAriaTextFieldProps, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
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
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label: string;
    /**
     * Minimum height for the textarea. Defaults to value which will show 5 visible lines.
     */
    minHeight?: CSSProperties['minHeight'];
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * The number of visible lines. Defaults to 2.
     * Can be used as minHeight alternative or together with minHeight to fine-tune the initial height behavior.
     */
    rows?: number;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
export declare function TextArea<P extends AnyObject>({ className, changeParams, changeCallback, dataState, dataTestId, helpText, helpTextSuccess, isControlled, isInvalid, isSkeleton, label, minHeight, onChange, onBlur, placeholder, rows, showHelpTextIcon, tooltipContent, value, ...props }: TextAreaProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=textarea.d.ts.map