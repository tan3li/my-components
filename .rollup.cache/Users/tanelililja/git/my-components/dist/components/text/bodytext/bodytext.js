import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Alignment } from '../../../constants/alignment.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
export function BodyText(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className, elementType = _a.elementType, ref = _a.ref, size = _a.size, style = _a.style;
    var Element = elementType !== null && elementType !== void 0 ? elementType : HTMLElementType.P;
    return (_jsx(Element, __assign({ className: classNames("body-text body-text--".concat(size, " body-text--align-").concat(alignment), className), ref: ref, style: style }, { children: children })));
}
//# sourceMappingURL=bodytext.js.map