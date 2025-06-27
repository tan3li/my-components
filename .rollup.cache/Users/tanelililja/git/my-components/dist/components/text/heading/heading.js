import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Heading as ReactAriaHeading } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Alignment } from '../../../constants/alignment.js';
export var HEADING_SIZE_XXS_CSS_CLASS = 'heading--xxs';
export var HEADING_SIZE_XS_CSS_CLASS = 'heading--xs';
export var HEADING_SIZE_SM_CSS_CLASS = 'heading--sm';
export var HEADING_SIZE_MD_CSS_CLASS = 'heading--md';
export var HEADING_SIZE_LG_CSS_CLASS = 'heading--lg';
export function Heading(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className, Element = _a.elementType, size = _a.size, props = __rest(_a, ["alignment", "children", "className", "elementType", "size"]);
    var cssClassName = classNames("heading heading--".concat(size, " heading--align-").concat(alignment), className);
    if (Element) {
        return (_jsx(Element, __assign({}, props, { className: cssClassName }, { children: children })));
    }
    return (_jsx(ReactAriaHeading, __assign({}, props, { className: cssClassName }, { children: children })));
}
//# sourceMappingURL=heading.js.map