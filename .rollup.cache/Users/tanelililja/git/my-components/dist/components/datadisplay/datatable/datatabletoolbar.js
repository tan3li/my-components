import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { ButtonContext, Provider } from 'react-aria-components';
export function DataTableToolbar(_a) {
    var actions = _a.actions, className = _a.className, ref = _a.ref, selectedCount = _a.selectedCount, selectedTextMinWidth = _a.selectedTextMinWidth;
    var translateCommon = useTranslateCommon();
    return (_jsxs("div", __assign({ "aria-label": translateCommon('actionsForSelectedRows'), className: classNames('data-table-toolbar', className), ref: ref, role: "toolbar" }, { children: [_jsx(Label, __assign({ className: "data-table-toolbar__selected-text", size: Size.sm, style: { minWidth: selectedTextMinWidth } }, { children: "".concat(selectedCount, " ").concat(translateCommon('selected').toLowerCase()) })), _jsx(Provider, __assign({ values: [[ButtonContext, { isDisabled: !selectedCount }]] }, { children: actions }))] })));
}
//# sourceMappingURL=datatabletoolbar.js.map