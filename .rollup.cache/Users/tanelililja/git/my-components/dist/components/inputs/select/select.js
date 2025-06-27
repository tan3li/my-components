import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ComboBox } from './combobox.js';
import { SelectBox } from './selectbox.js';
export function Select(_a) {
    var _b = _a.isSearchable, isSearchable = _b === void 0 ? true : _b, props = __rest(_a, ["isSearchable"]);
    // eslint-disable-next-line sonarjs/no-selector-parameter
    return isSearchable ? _jsx(ComboBox, __assign({}, props)) : _jsx(SelectBox, __assign({}, props));
}
//# sourceMappingURL=select.js.map