import {TextField, TextFieldProps} from './textfield.js';
import {useState} from 'react';
import {TextFieldVisibilityToggle} from './textfieldvisibilitytoggle.js';
import {InputType} from '../../../constants/inputtype.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';

export interface PasswordFieldProps<P extends AnyObject> extends TextFieldProps<P> {
    showVisibilityToggle?: boolean;
}

export function PasswordField<P extends AnyObject>({showVisibilityToggle, ...props}: PasswordFieldProps<P>) {
    const [type, setType] = useState(InputType.password);
    const onToggle = () => {
        setType(type === InputType.password ? InputType.text : InputType.password);
    };
    const suffix =
        showVisibilityToggle ?
            () => <TextFieldVisibilityToggle isVisible={type !== InputType.password} onPress={onToggle} />
        :   undefined;

    return <TextField {...props} suffix={suffix} type={type} />;
}
