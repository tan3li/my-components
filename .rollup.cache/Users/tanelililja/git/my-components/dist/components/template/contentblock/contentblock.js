import { __assign } from "tslib";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
export function ContentBlock(_a) {
    var bodyStyle = _a.bodyStyle, children = _a.children, className = _a.className, headerContent = _a.headerContent, headerStyle = _a.headerStyle, isNested = _a.isNested, title = _a.title;
    return (_jsxs("div", __assign({ className: classNames('content-block', className, {
            'content-block--nested': isNested
        }) }, { children: [_jsxs("div", __assign({ className: "content-block__header", style: headerStyle }, { children: [title, headerContent] })), _jsx("div", __assign({ className: "content-block__body", style: bodyStyle }, { children: children }))] })));
}
//# sourceMappingURL=contentblock.js.map