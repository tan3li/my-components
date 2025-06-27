import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from '../../inputs/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { toggleSelectedRow } from './toggleselectedrow.js';
export function DataTableCheckboxCell(_a) {
    var _b, _c;
    var row = _a.row, table = _a.table, props = __rest(_a, ["row", "table"]);
    var translateCommon = useTranslateCommon();
    var enableParentRowSelectionSync = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.enableParentRowSelectionSync;
    return (_jsx(Checkbox, __assign({}, props, { "aria-label": (_c = props['aria-label']) !== null && _c !== void 0 ? _c : translateCommon('selectRow'), isDisabled: !row.getCanSelect(), isIndeterminate: enableParentRowSelectionSync ? row.getIsSomeSelected() : undefined, isSelected: row.getIsSelected(), onChange: function (isSelected) { return toggleSelectedRow(isSelected, row, table); } })));
}
//# sourceMappingURL=datatablecheckboxcell.js.map