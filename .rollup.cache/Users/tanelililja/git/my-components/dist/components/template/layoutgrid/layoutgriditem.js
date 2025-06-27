import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { useMemo } from 'react';
import { isNumber } from '../../../utils/objecthelper.js';
var layoutGridColumnCounts = {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12
};
export var LayoutGridItemPresetSize = {
    Full: { xs: layoutGridColumnCounts.xs, sm: layoutGridColumnCounts.sm, lg: layoutGridColumnCounts.lg },
    Half: { xs: layoutGridColumnCounts.xs / 2, sm: layoutGridColumnCounts.sm / 2, lg: layoutGridColumnCounts.lg / 2 }
};
function getPlacementProperties(suffix, placement) {
    var cssVariables = {};
    var cssClassNames = [];
    if (placement) {
        if (isNumber(placement)) {
            cssVariables["--layout-grid-item-".concat(suffix)] = placement;
        }
        else {
            for (var breakpoint in placement) {
                cssVariables["--layout-grid-item-".concat(suffix, "-").concat(breakpoint)] = placement[breakpoint];
                cssClassNames.push("layout-grid-item--".concat(suffix, "-").concat(breakpoint));
            }
        }
    }
    return {
        cssVariables: cssVariables,
        cssClassNames: cssClassNames
    };
}
// eslint-disable-next-line sonarjs/function-return-type
function sanitizeSize(size) {
    var _a;
    var newSize = size;
    if (isNumber(newSize)) {
        if (newSize > layoutGridColumnCounts.xs) {
            newSize = {
                xs: layoutGridColumnCounts.xs,
                sm: Math.min(newSize, layoutGridColumnCounts.sm),
                lg: Math.min(newSize, layoutGridColumnCounts.lg)
            };
        }
    }
    else {
        for (var breakpoint in newSize) {
            newSize[breakpoint] = Math.min((_a = layoutGridColumnCounts[breakpoint]) !== null && _a !== void 0 ? _a : layoutGridColumnCounts.lg, newSize[breakpoint]);
        }
    }
    return newSize;
}
export function LayoutGridItem(_a) {
    var children = _a.children, className = _a.className, ref = _a.ref, size = _a.size, start = _a.start;
    var sanitizedSize = useMemo(function () { return sanitizeSize(size); }, [size]);
    var spanProperties = getPlacementProperties('span', sanitizedSize);
    var startProperties = getPlacementProperties('start', start);
    return (_jsx("div", __assign({ className: classNames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(['layout-grid-item'], spanProperties.cssClassNames, false), startProperties.cssClassNames, false), [className], false)), ref: ref, style: __assign(__assign({}, spanProperties.cssVariables), startProperties.cssVariables) }, { children: children })));
}
//# sourceMappingURL=layoutgriditem.js.map