import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { Pressable } from '@react-aria/interactions';
import { classNames } from '../../../utils/classnames.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Spinner, SpinnerVariant } from '../../feedback/index.js';
import { Size } from '../../../constants/index.js';
var INDENT_SIZE_REM = 0.75;
export function DataTableExpanderCell(_a) {
    var _b, _c;
    var prefix = _a.prefix, ref = _a.ref, row = _a.row, suffix = _a.suffix, table = _a.table, _d = _a.useIndentation, useIndentation = _d === void 0 ? true : _d;
    var canExpand = row.getCanExpand();
    var style = useIndentation ? { paddingLeft: "".concat(row.depth * INDENT_SIZE_REM, "rem") } : undefined;
    var isExpanded = row.getIsExpanded();
    var isLoading = (_c = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.isRowLoading) === null || _c === void 0 ? void 0 : _c.call(_b, row);
    var translateCommon = useTranslateCommon();
    return (_jsxs("div", __assign({ className: "data-table__indent-wrapper", ref: ref, style: style }, { children: [prefix, _jsx(Pressable, __assign({ onPress: !isLoading && canExpand ? row.getToggleExpandedHandler() : undefined }, { children: _jsx("div", __assign({ "aria-expanded": isExpanded, "aria-label": translateCommon(isExpanded ? 'collapse' : 'expand'), className: classNames('data-table__expander', {
                        'data-table__expander--hidden': !canExpand,
                        'data-table__expander--loading': isLoading
                    }), role: "button", tabIndex: canExpand ? 0 : -1 }, { children: isLoading ?
                        _jsx(Spinner, { size: Size.md, variant: SpinnerVariant.Neutral })
                        : _jsx(Icon, { name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.LG }) })) })), suffix] })));
}
//# sourceMappingURL=datatableexpandercell.js.map