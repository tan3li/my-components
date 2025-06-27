import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { HTMLElementType } from '../../../constants/index.js';
export var LABEL_SIZE_XS_CSS_CLASS = 'label--xs';
export var LABEL_SIZE_SM_CSS_CLASS = 'label--sm';
export var LABEL_SIZE_MD_CSS_CLASS = 'label--md';
export var LABEL_SIZE_LG_CSS_CLASS = 'label--lg';
export function Label(_a) {
    var className = _a.className, elementType = _a.elementType, htmlFor = _a.htmlFor, size = _a.size, props = __rest(_a, ["className", "elementType", "htmlFor", "size"]);
    var Element = elementType !== null && elementType !== void 0 ? elementType : (htmlFor ? HTMLElementType.Label : HTMLElementType.Span);
    return (_jsx(Element, __assign({}, props, { className: classNames("label label--".concat(size), className) }, (Element === HTMLElementType.Label && { htmlFor: htmlFor }))));
}
//# sourceMappingURL=label.js.map