import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Spinner, SpinnerVariant } from '../../feedback/index.js';
import { Label } from '../../text/index.js';
var INDENT_SIZE_PX = 28;
export function SelectOptionContent(_a) {
    var bodyPrefix = _a.bodyPrefix, bodySuffix = _a.bodySuffix, className = _a.className, description = _a.description, descriptionRef = _a.descriptionRef, isExpanded = _a.isExpanded, isLoading = _a.isLoading, item = _a.item, label = _a.label, labelRef = _a.labelRef, labelSuffix = _a.labelSuffix, level = _a.level, onToggleItem = _a.onToggleItem, ref = _a.ref, size = _a.size, suffix = _a.suffix;
    var action = item.action, children = item.children, text = item.text;
    var translateCommon = useTranslateCommon();
    return (_jsxs("div", __assign({ className: classNames('select-option-content', className, {
            'select-option-content--expandable': !!children
        }), ref: ref, style: level > 0 ? { paddingLeft: "".concat(INDENT_SIZE_PX * level, "px") } : undefined }, { children: [(action === null || action === void 0 ? void 0 : action.iconName) && (_jsx(Icon, { className: "select-option-content__action-icon", name: action.iconName, size: IconSize.MD })), isLoading && (_jsx(Spinner, { className: "select-option-content__spinner", size: Size.sm, variant: SpinnerVariant.Neutral })), !action && onToggleItem && !isLoading && (
            // Expanding is controlled with left and right arrow keys on higher level.
            // Select option content should not be keyboard-focusable.
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
            _jsx("div", __assign({ "aria-expanded": isExpanded, "aria-label": translateCommon(isExpanded ? 'collapse' : 'expand'), className: "select-option-content__expander", onClick: function (e) {
                    e.stopPropagation();
                    onToggleItem(item);
                }, role: "button" }, { children: _jsx(Icon, { name: isExpanded ? iconNames.ExpandMoreFilled : iconNames.ChevronRightFilled, size: IconSize.MD }) }))), _jsxs("div", __assign({ className: "select-option-content__body" }, { children: [bodyPrefix && _jsx("div", __assign({ className: "select-option-content__body-prefix" }, { children: bodyPrefix })), _jsxs("div", __assign({ className: "select-option-content__body-content" }, { children: [label !== null && label !== void 0 ? label : (_jsxs("div", __assign({ className: "select-option-content__label-wrapper" }, { children: [_jsx(Label, __assign({ className: "select-option-content__label", ref: labelRef, size: size === Size.xs ? Size.md : Size.lg }, { children: text })), labelSuffix && _jsx("div", __assign({ className: "select-option-content__label-suffix" }, { children: labelSuffix }))] }))), description && (_jsx(Label, __assign({ className: "select-option-content__description", ref: descriptionRef, size: Size.md }, { children: description })))] })), bodySuffix && _jsx("div", __assign({ className: "select-option-content__body-suffix" }, { children: bodySuffix }))] })), _jsx(Icon, { "aria-hidden": true, className: "select-option-content__check", name: iconNames.InputCheck, size: IconSize.MD }), suffix && _jsx("div", __assign({ className: "select-option-content__suffix" }, { children: suffix }))] })));
}
//# sourceMappingURL=selectoptioncontent.js.map