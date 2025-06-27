import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
export function TextFieldUnit(_a) {
    var children = _a.children, id = _a.id, ref = _a.ref, _b = _a.size, size = _b === void 0 ? Size.lg : _b;
    return (_jsx(Label, __assign({ className: "text-field__unit", id: id, ref: ref, size: size }, { children: children })));
}
//# sourceMappingURL=textfieldunit.js.map