import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button as ReactAriaButton, Link as ReactAriaLink } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
export var LinkRole;
(function (LinkRole) {
    LinkRole["Button"] = "button";
    // eslint-disable-next-line @typescript-eslint/no-shadow
    LinkRole["Link"] = "link";
})(LinkRole || (LinkRole = {}));
export function Link(_a) {
    var _b;
    var className = _a.className, isVisited = _a.isVisited, ref = _a.ref, _c = _a.role, role = _c === void 0 ? LinkRole.Link : _c, size = _a.size, props = __rest(_a, ["className", "isVisited", "ref", "role", "size"]);
    var cssClassName = classNames('link', className, (_b = {}, _b["link--".concat(size)] = size, _b));
    if (role === LinkRole.Button) {
        return (_jsx(ReactAriaButton, __assign({}, props, { className: cssClassName, "data-visited": isVisited, ref: ref })));
    }
    return (_jsx(ReactAriaLink, __assign({}, props, { className: cssClassName, "data-visited": isVisited, ref: ref })));
}
//# sourceMappingURL=link.js.map