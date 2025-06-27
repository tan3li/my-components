import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { TooltipTrigger as ReactAriaTooltipTrigger } from 'react-aria-components';
var DEFAULT_DELAY = 750;
export function TooltipTrigger(_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? DEFAULT_DELAY : _b, props = __rest(_a, ["children", "delay"]);
    return (_jsx(ReactAriaTooltipTrigger, __assign({}, props, { delay: delay }, { children: children })));
}
//# sourceMappingURL=tooltiptrigger.js.map