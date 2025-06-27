import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Dialog, Popover as ReactAriaPopover } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { isObject } from '../../../utils/objecthelper.js';
import { isString } from '../../../utils/stringhelper.js';
export function Popover(_a) {
    var ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], children = _a.children, className = _a.className, maxWidth = _a.maxWidth, padding = _a.padding, style = _a.style, props = __rest(_a, ['aria-label', 'aria-labelledby', "children", "className", "maxWidth", "padding", "style"]);
    return (_jsx(ReactAriaPopover, __assign({}, props, { className: classNames('popover', className), style: __assign(__assign({}, style), { maxWidth: maxWidth }) }, { children: _jsx(Dialog, __assign({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: "popover__dialog", style: isObject(padding) && !isString(padding) ?
                {
                    paddingTop: padding === null || padding === void 0 ? void 0 : padding.top,
                    paddingBottom: padding === null || padding === void 0 ? void 0 : padding.bottom,
                    paddingLeft: padding === null || padding === void 0 ? void 0 : padding.left,
                    paddingRight: padding === null || padding === void 0 ? void 0 : padding.right
                }
                : { padding: padding } }, { children: children })) })));
}
//# sourceMappingURL=popover.js.map