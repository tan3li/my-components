import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { LoadingIndicatorProgressBar } from '../../feedback/progressbar/loadingindicatorprogressbar.js';
export function TopNav(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, leftItems = _a.leftItems, rightItems = _a.rightItems, ref = _a.ref, showLoadingIndicator = _a.showLoadingIndicator;
    var renderItems = function (items) {
        return items.map(function (_a) {
            var ariaHidden = _a.ariaHidden, itemChildren = _a.children, itemClassName = _a.className, id = _a.id, style = _a.style;
            return (_jsx("li", __assign({ "aria-hidden": ariaHidden, className: classNames('top-nav__item', itemClassName), style: style }, { children: itemChildren }), id));
        });
    };
    return (_jsxs("nav", __assign({ "aria-label": ariaLabel, className: classNames('top-nav', className), ref: ref }, { children: [_jsx("ul", __assign({ className: "top-nav__left-list" }, { children: renderItems(leftItems) })), _jsx("ul", __assign({ className: "top-nav__right-list" }, { children: renderItems(rightItems) })), showLoadingIndicator && _jsx(LoadingIndicatorProgressBar, {})] })));
}
//# sourceMappingURL=topnav.js.map