import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
import { classNames } from '../../../utils/classnames.js';
export function DataTableTextCell(_a) {
    var _b, _c;
    var children = _a.children, className = _a.className, getValue = _a.getValue, ref = _a.ref, style = _a.style, table = _a.table, row = _a.row;
    return (_jsx(Label, __assign({ className: classNames('data-table__text-cell', className, {
            'data-table__text-cell--disabled': (_c = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.isRowDisabled) === null || _c === void 0 ? void 0 : _c.call(_b, row)
        }), ref: ref, size: Size.md, style: style }, { children: children !== null && children !== void 0 ? children : getValue() })));
}
//# sourceMappingURL=datatabletextcell.js.map