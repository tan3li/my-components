import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { classNames } from '../../../utils/classnames.js';
export function SelectOptionsEmptyState(_a) {
    var className = _a.className, _b = _a.iconName, iconName = _b === void 0 ? iconNames.VisibilityOff : _b, ref = _a.ref, size = _a.size, text = _a.text;
    var translateCommon = useTranslateCommon();
    return (_jsxs("div", __assign({ className: classNames('select-options-empty-state', className), ref: ref, role: "presentation" }, { children: [_jsx(Icon, { className: "select-options-empty-state__icon", name: iconName }), _jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: text !== null && text !== void 0 ? text : translateCommon('noResultsFound') }))] })));
}
//# sourceMappingURL=selectoptionsemptystate.js.map