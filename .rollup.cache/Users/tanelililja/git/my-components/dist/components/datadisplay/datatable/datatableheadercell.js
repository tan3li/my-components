import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { DataTableCellContent } from './datatablecellcontent.js';
import { flexRender } from '@tanstack/react-table';
import { isString } from '../../../utils/stringhelper.js';
import { Label } from '../../text/index.js';
import { Alignment, KeyboardEventKey, Size, SortDirection } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { getColumnPinningStyles } from './getcolumnpinningstyles.js';
export function DataTableHeaderCell(_a) {
    var _b;
    var _c;
    var className = _a.className, header = _a.header, rowSpan = _a.rowSpan, _d = _a.showContent, showContent = _d === void 0 ? true : _d, props = __rest(_a, ["className", "header", "rowSpan", "showContent"]);
    var column = header.column, colSpan = header.colSpan;
    var isSortable = showContent && column.getCanSort();
    var _e = (_c = column.columnDef.meta) !== null && _c !== void 0 ? _c : {}, _f = _e.alignment, alignment = _f === void 0 ? Alignment.start : _f, isEditable = _e.isEditable, headerStyle = _e.headerStyle;
    var sortHandler = isSortable ? column.getToggleSortingHandler() : undefined;
    var content = showContent ? flexRender(column.columnDef.header, header.getContext()) : null, sortIcon = null;
    if (isString(content)) {
        content = (_jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: content }) })));
    }
    if (isSortable) {
        var sortDirection = column.getIsSorted();
        var iconName = void 0;
        switch (sortDirection) {
            case SortDirection.Ascending:
                iconName = iconNames.ArrowUpward;
                break;
            case SortDirection.Descending:
                iconName = iconNames.ArrowDownward;
                break;
            default:
                iconName = iconNames.UnfoldMore;
                break;
        }
        sortIcon = _jsx(Icon, { className: "data-table__sort-icon", name: iconName, size: IconSize.MD });
    }
    return (_jsx("th", __assign({}, props, { className: classNames('data-table__header-cell', className, (_b = {
                'data-table__header-cell--sortable': isSortable
            },
            _b["data-table__header-cell--editable-".concat(alignment)] = isEditable,
            _b)), colSpan: colSpan, onClick: sortHandler, onKeyDown: sortHandler ?
            function (e) {
                var key = e.key;
                if (key === KeyboardEventKey.Enter || key === KeyboardEventKey.Space) {
                    sortHandler(e);
                }
            }
            : undefined, role: "columnheader", rowSpan: rowSpan, scope: "col", style: __assign(__assign({}, getColumnPinningStyles(header.column)), headerStyle), tabIndex: isSortable ? 0 : undefined }, { children: _jsxs(DataTableCellContent, __assign({ alignment: alignment }, { children: [content, sortIcon] })) })));
}
//# sourceMappingURL=datatableheadercell.js.map