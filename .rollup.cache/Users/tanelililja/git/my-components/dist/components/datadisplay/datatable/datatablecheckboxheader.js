import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from '../../inputs/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
export function DataTableCheckboxHeader(_a) {
    var _b;
    var table = _a.table, props = __rest(_a, ["table"]);
    var translateCommon = useTranslateCommon();
    return (_jsx(Checkbox, __assign({}, props, { "aria-label": (_b = props['aria-label']) !== null && _b !== void 0 ? _b : translateCommon('selectAllRows'), isIndeterminate: table.getIsSomeRowsSelected(), isSelected: table.getIsAllRowsSelected(), onChange: function (val) { return table.toggleAllRowsSelected(val); } })));
}
//# sourceMappingURL=datatablecheckboxheader.js.map