import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { HTMLElementType } from '../../../constants/index.js';
import { Heading } from 'react-aria-components';
export function Title(_a) {
    var children = _a.children, className = _a.className, _b = _a.elementType, Element = _b === void 0 ? HTMLElementType.Div : _b, size = _a.size, props = __rest(_a, ["children", "className", "elementType", "size"]);
    var cssClassName = classNames("title title--".concat(size), className);
    if (props.level) {
        return (_jsx(Heading, __assign({}, props, { className: cssClassName }, { children: children })));
    }
    return (_jsx(Element, __assign({}, props, { className: cssClassName }, { children: children })));
}
//# sourceMappingURL=title.js.map