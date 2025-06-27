import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { TextFieldProps } from './textfield.js';
export interface InlineTextFieldProps<P extends AnyObject> extends Omit<TextFieldProps<P>, 'helpText' | 'helpTextSuccess' | 'showHelpTextIcon'> {
    /**
     * Function that is called when input value changes. Should return error message if given value is invalid.
     * Message will be shown in tooltip when field has focus.
     */
    validate?: (value: string) => string | null | undefined;
}
export declare function InlineTextField<P extends AnyObject>({ dataState, ref: outerRef, size, validate, value, ...props }: InlineTextFieldProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=inlinetextfield.d.ts.map