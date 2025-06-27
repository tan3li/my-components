import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { iconNames } from '../../media/icon/icons.js';
import { Icon } from '../../media/icon/icon.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
export function ClearButton(_a) {
    var _b;
    var className = _a.className, props = __rest(_a, ["className"]);
    var translateCommon = useTranslateCommon();
    return (_jsx(Button, __assign({}, props, { "aria-label": (_b = props['aria-label']) !== null && _b !== void 0 ? _b : translateCommon('clear'), className: classNames('clear-button', className) }, { children: _jsx(Icon, { className: "clear-button__icon", name: iconNames.CancelFilled }) })));
}
//# sourceMappingURL=clearbutton.js.map