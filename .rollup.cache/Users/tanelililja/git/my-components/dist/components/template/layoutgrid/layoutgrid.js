import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { coreTokens } from '@tan3li/d-tokens';
import { isString } from '../../../utils/stringhelper.js';
export var LayoutGridColumnSpacing;
(function (LayoutGridColumnSpacing) {
    LayoutGridColumnSpacing["Default"] = "var(--space-md)";
    LayoutGridColumnSpacing["Compact"] = "var(--space-xs)";
    LayoutGridColumnSpacing["Comfy"] = "var(--space-xl)";
    LayoutGridColumnSpacing["None"] = "var(--space-none)";
})(LayoutGridColumnSpacing || (LayoutGridColumnSpacing = {}));
function getGapProperties(dimension, spacing) {
    var cssVariables = {};
    var cssClassNames = [];
    if (isString(spacing)) {
        cssVariables["--layout-grid-".concat(dimension, "-gap")] = spacing;
    }
    else {
        for (var breakpoint in spacing) {
            cssVariables["--layout-grid-".concat(dimension, "-gap-").concat(breakpoint)] = spacing[breakpoint];
            cssClassNames.push("layout-grid--".concat(dimension, "-gap-").concat(breakpoint));
        }
    }
    return {
        cssVariables: cssVariables,
        cssClassNames: cssClassNames
    };
}
export function LayoutGrid(_a) {
    var children = _a.children, className = _a.className, _b = _a.columnSpacing, columnSpacing = _b === void 0 ? LayoutGridColumnSpacing.Default : _b, ref = _a.ref, _c = _a.rowSpacing, rowSpacing = _c === void 0 ? coreTokens.dimension.spaceMd.value : _c;
    var rowGapProperties = getGapProperties('row', rowSpacing);
    var columnGapProperties = getGapProperties('column', columnSpacing);
    return (_jsx("div", __assign({ className: classNames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(['layout-grid'], rowGapProperties.cssClassNames, false), columnGapProperties.cssClassNames, false), [className], false)), ref: ref, style: __assign(__assign({}, rowGapProperties.cssVariables), columnGapProperties.cssVariables) }, { children: children })));
}
//# sourceMappingURL=layoutgrid.js.map