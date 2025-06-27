import { TextFieldProps } from './textfield.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
export interface PasswordFieldProps<P extends AnyObject> extends TextFieldProps<P> {
    showVisibilityToggle?: boolean;
}
export declare function PasswordField<P extends AnyObject>({ showVisibilityToggle, ...props }: PasswordFieldProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=passwordfield.d.ts.map