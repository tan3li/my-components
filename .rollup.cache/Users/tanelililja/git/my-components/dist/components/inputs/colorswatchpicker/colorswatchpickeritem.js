import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ColorSwatchPickerItem as ReactAriaColorSwatchPickerItem } from 'react-aria-components';
import { ColorSwatch } from './colorswatch.js';
import { classNames } from '../../../utils/classnames.js';
import { Icon, iconNames } from '../../media/index.js';
function ColorSwatchPickerItemLine() {
    return (_jsx("svg", __assign({ "aria-hidden": true, className: "color-swatch-picker-item__line", fill: "currentColor", viewBox: "0 0 41 41" }, { children: _jsx("path", { d: "M15.2744 24.6838C23.3149 16.6406 32.9621 6.99345 39.3878 0.578125L40.8009 1.99348C34.3759 8.40804 24.7294 18.0546 16.6889 26.0977C12.6686 30.1193 9.04999 33.7399 6.4364 36.3551L3.34525 39.4483L2.50646 40.2877L2.28852 40.5058L2.233 40.5614L2.21899 40.5754L2.21548 40.5789L2.2146 40.5798C2.2144 40.58 2.2143 40.5801 1.50691 39.8733C0.799516 39.1665 0.799615 39.1664 0.799811 39.1662L0.800693 39.1653L0.804212 39.1618L0.818223 39.1478L0.873745 39.0922L1.0917 38.8741L1.93052 38.0346L5.02175 34.9413C7.63539 32.326 11.2541 28.7054 15.2744 24.6838Z" }) })));
}
export function ColorSwatchPickerItem(_a) {
    var className = _a.className, isInvalid = _a.isInvalid, size = _a.size, props = __rest(_a, ["className", "isInvalid", "size"]);
    return (_jsxs(ReactAriaColorSwatchPickerItem, __assign({}, props, { className: classNames('color-swatch-picker-item', className), "data-invalid": !!isInvalid || undefined }, { children: [_jsx(ColorSwatch, { size: size }), _jsx(ColorSwatchPickerItemLine, {}), _jsx(Icon, { className: "color-swatch-picker-item__check", name: iconNames.InputCheck })] })));
}
//# sourceMappingURL=colorswatchpickeritem.js.map