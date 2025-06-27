import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Alignment } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
export function DataTableCellContent(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className;
    return (_jsx("div", __assign({ className: classNames('data-table__cell-content', "data-table__cell-content--align-".concat(alignment), className) }, { children: children })));
}
//# sourceMappingURL=datatablecellcontent.js.map