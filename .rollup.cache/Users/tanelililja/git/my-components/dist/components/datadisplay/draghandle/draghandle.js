import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { classNames } from '../../../utils/classnames.js';
export function DragHandle(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, props = __rest(_a, ['aria-label', "className"]);
    var translateCommon = useTranslateCommon();
    return (_jsx("button", __assign({}, props, { "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : translateCommon('move'), className: classNames('drag-handle', className) }, { children: _jsx(Icon, { name: iconNames.DragIndicator, size: IconSize.LG }) })));
}
//# sourceMappingURL=draghandle.js.map