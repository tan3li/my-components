import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from './textfield.js';
import { useState } from 'react';
import { TextFieldVisibilityToggle } from './textfieldvisibilitytoggle.js';
import { InputType } from '../../../constants/inputtype.js';
export function PasswordField(_a) {
    var showVisibilityToggle = _a.showVisibilityToggle, props = __rest(_a, ["showVisibilityToggle"]);
    var _b = useState(InputType.password), type = _b[0], setType = _b[1];
    var onToggle = function () {
        setType(type === InputType.password ? InputType.text : InputType.password);
    };
    var suffix = showVisibilityToggle ?
        function () { return _jsx(TextFieldVisibilityToggle, { isVisible: type !== InputType.password, onPress: onToggle }); }
        : undefined;
    return _jsx(TextField, __assign({}, props, { suffix: suffix, type: type }));
}
//# sourceMappingURL=passwordfield.js.map