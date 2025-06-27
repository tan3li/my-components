import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from '../select/index.js';
import { ColorSwatch } from 'react-aria-components';
import { SelectOptionContent } from '../select/selectoptioncontent.js';
export function ColorSelect(props) {
    return (_jsx(Select, __assign({}, props, { renderItemContent: function (optionContentProps) {
            var item = optionContentProps.item;
            return (_jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: _jsx(ColorSwatch, { className: "color-select-option__color-swatch", color: item.value }) })));
        }, renderStartContent: function (selectedItem) {
            if (selectedItem) {
                return (_jsx(ColorSwatch, { className: "color-select-option__color-swatch", color: selectedItem.value }));
            }
            return null;
        } })));
}
//# sourceMappingURL=colorselect.js.map