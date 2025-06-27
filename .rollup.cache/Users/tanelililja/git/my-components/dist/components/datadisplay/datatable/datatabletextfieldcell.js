import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { InlineTextField } from '../../inputs/index.js';
export function DataTableTextFieldCell(_a) {
    var _b, _c, _d;
    var column = _a.column, getValue = _a.getValue, row = _a.row, table = _a.table, props = __rest(_a, ["column", "getValue", "row", "table"]);
    return (_jsx(InlineTextField, __assign({}, props, { changeCallback: function (args) { var _a, _b; return (_b = (_a = table.options.meta) === null || _a === void 0 ? void 0 : _a.onDataEdit) === null || _b === void 0 ? void 0 : _b.call(_a, row.index, column.id, args); }, isDisabled: (_b = props.isDisabled) !== null && _b !== void 0 ? _b : (_d = (_c = table.options.meta) === null || _c === void 0 ? void 0 : _c.isRowDisabled) === null || _d === void 0 ? void 0 : _d.call(_c, row), value: getValue().toString() })));
}
//# sourceMappingURL=datatabletextfieldcell.js.map