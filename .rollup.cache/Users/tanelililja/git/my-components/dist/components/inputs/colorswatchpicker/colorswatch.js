import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ColorSwatch as ReactAriaColorSwatch } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
export function ColorSwatch(_a) {
    var className = _a.className, size = _a.size, props = __rest(_a, ["className", "size"]);
    return _jsx(ReactAriaColorSwatch, __assign({}, props, { className: classNames("color-swatch color-swatch--".concat(size), className) }));
}
//# sourceMappingURL=colorswatch.js.map