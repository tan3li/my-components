var _a, _b;
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HTMLElementType, Size } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Label, Title } from '../../text/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { Badge } from '../../feedback/index.js';
import { Button as ActionButton, ButtonStyle, ButtonVariant, TriggerElement } from '../../action/index.js';
import { FocusRing } from 'react-aria';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { DataCardActionElement, DataCardAlertLevel, DataCardStyle } from './types.js';
import { SkeletonDataCard } from '../../feedback/skeleton/skeletondatacard.js';
var valueSize = (_a = {},
    _a[Size.sm] = Size.xs,
    _a[Size.md] = Size.sm,
    _a[Size.lg] = Size.md,
    _a);
var headerIconSize = (_b = {},
    _b[Size.sm] = IconSize.XS,
    _b[Size.md] = IconSize.SM,
    _b[Size.lg] = IconSize.MD,
    _b);
export function DataCard(_a) {
    var _b;
    var action = _a.action, alert = _a.alert, badgeProps = _a.badgeProps, className = _a.className, description = _a.description, headerIconName = _a.headerIconName, headerText = _a.headerText, isDisabled = _a.isDisabled, isSkeleton = _a.isSkeleton, minWidth = _a.minWidth, ref = _a.ref, size = _a.size, style = _a.style, value = _a.value, visualization = _a.visualization;
    var translateCommon = useTranslateCommon();
    if (isSkeleton) {
        return (_jsx(SkeletonDataCard, { hasHeaderIcon: !!headerIconName, hasHeaderText: !!headerText, hasVisualization: !!visualization, minWidth: minWidth, size: size, style: style }));
    }
    var showHeader = !!headerText || !!badgeProps;
    var alertLevel = alert === null || alert === void 0 ? void 0 : alert.level;
    var content = (_jsxs(_Fragment, { children: [showHeader && (_jsxs("div", __assign({ className: "data-card__header" }, { children: [headerText && (_jsxs("div", __assign({ className: "data-card__header-left" }, { children: [headerIconName && (_jsx(Icon, { className: "data-card__header-icon", name: headerIconName, size: headerIconSize[size] })), _jsx(Label, __assign({ className: "data-card__header-text", size: Size.md }, { children: headerText }))] }))), badgeProps && (_jsx(Badge, __assign({ className: "data-card__badge", isDisabled: isDisabled && style === DataCardStyle.Card }, badgeProps)))] }))), _jsxs("div", __assign({ className: "data-card__body" }, { children: [_jsxs("div", __assign({ className: "data-card__value-wrapper" }, { children: [_jsx(Title, __assign({ className: "data-card__value", size: valueSize[size] }, { children: _jsx("strong", { children: value }) }), "value"), alert && alertLevel && (_jsx(Icon, { ariaLabel: (_b = alert.ariaLabel) !== null && _b !== void 0 ? _b : translateCommon(alertLevel), className: "data-card__alert-icon--".concat(alertLevel), name: alertLevel === DataCardAlertLevel.Danger ?
                                    iconNames.EmergencyHomeFilled
                                    : iconNames.MinusCircleFilled, size: IconSize.SM }))] })), _jsx(Label, __assign({ className: "data-card__description", size: Size.md }, { children: description }))] })), action && action.element === DataCardActionElement.Button && (_jsx(ActionButton, __assign({ isDisabled: isDisabled, size: Size.sm, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }, { children: action.text }))), visualization && _jsx("div", __assign({ className: "data-card__visualization" }, { children: visualization }))] }));
    var cssClassName = classNames("data-card data-card--".concat(style, " data-card--").concat(size), className, {
        'data-card--disabled': isDisabled
    });
    // Self-action is only allowed for Card variation.
    if (style === DataCardStyle.Card && action && action.element === DataCardActionElement.Self && !isDisabled) {
        return (_jsx(FocusRing, __assign({ focusRingClass: "data-card--focused" }, { children: _jsx(TriggerElement, __assign({ className: cssClassName, elementType: HTMLElementType.Div, onPress: action.onPress, ref: ref }, { children: content })) })));
    }
    return (_jsx("div", __assign({ className: cssClassName, ref: ref, style: { minWidth: minWidth } }, { children: content })));
}
//# sourceMappingURL=datacard.js.map