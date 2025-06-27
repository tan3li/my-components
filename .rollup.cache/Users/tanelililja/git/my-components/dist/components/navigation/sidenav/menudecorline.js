import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
var headingIcon = (_jsx("svg", __assign({ fill: "none", viewBox: "0 0 18 16" }, { children: _jsx("path", { d: "M6.5 7C6.5 6.17157 7.17157 5.5 8 5.5H10C10.8284 5.5 11.5 6.17157 11.5 7V9C11.5 9.82843 10.8284 10.5 10 10.5H8C7.17157 10.5 6.5 9.82843 6.5 9V7Z", stroke: "currentColor" }) })));
export function MenuDecorLine(_a) {
    var inverted = _a.inverted, isActive = _a.isActive, isHeading = _a.isHeading, showLine = _a.showLine;
    return (_jsx("div", __assign({ className: classNames('menu-decor-line', {
            'menu-decor-line--active': isActive,
            'menu-decor-line--heading': isHeading,
            'menu-decor-line--inverted': inverted,
            'menu-decor-line--visible': showLine
        }) }, { children: isHeading && headingIcon })));
}
//# sourceMappingURL=menudecorline.js.map