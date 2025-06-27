import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { useLanguageDay } from '../../../hooks/uselanguageday.js';
import { ButtonStyle, ButtonVariant, IconButton, Menu, TriggerElement } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { useLocales } from '../../../contexts/index.js';
import { isToday as isTodayFn, parseDate } from '@internationalized/date';
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Divider } from '../divider/index.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { capitalizeFirstLetter } from '../../../utils/stringhelper.js';
import { DayOfMonth } from './dayofmonth.js';
export function DateTile(_a) {
    var _b;
    var propsAriaLabel = _a.ariaLabel, className = _a.className, _c = _a.completedIconName, completedIconName = _c === void 0 ? iconNames.CheckFilled : _c, date = _a.date, isCompleted = _a.isCompleted, isLocked = _a.isLocked, isSelected = _a.isSelected, isToday = _a.isToday, menuProps = _a.menuProps, onPress = _a.onPress, propsRenderDayOfMonth = _a.renderDayOfMonth, secondaryText = _a.secondaryText, tooltipProps = _a.tooltipProps;
    var timeZone = useLocales().timeZone;
    var languageDay = useLanguageDay();
    var translateCommon = useTranslateCommon();
    var dayObj = languageDay(date);
    var isDateToday = isToday !== null && isToday !== void 0 ? isToday : isTodayFn(parseDate(dayObj.format('YYYY-MM-DD')), timeZone);
    var isFocusable = !!tooltipProps || !!onPress || !!isLocked || !!isCompleted;
    var ariaLabel = '', tooltipContent = '';
    var getDefaultAriaLabel = function () {
        var text = dayObj.format('dddd, LL');
        if (isDateToday) {
            text += ", ".concat(translateCommon('today'));
        }
        if (isSelected) {
            text += ", ".concat(translateCommon('selected'));
        }
        return text;
    };
    // eslint-disable-next-line sonarjs/function-return-type
    var renderDayOfMonth = function (_a) {
        var isFocusVisible = _a.isFocusVisible;
        var dayOfMonthProps = {
            children: dayObj.date(),
            isCompleted: isCompleted,
            isFocused: isFocusVisible,
            isInteractive: !!onPress,
            isSelected: isSelected,
            isToday: isDateToday
        };
        if (propsRenderDayOfMonth) {
            return propsRenderDayOfMonth(dayOfMonthProps);
        }
        return _jsx(DayOfMonth, __assign({}, dayOfMonthProps));
    };
    if (isFunction(propsAriaLabel)) {
        ariaLabel = propsAriaLabel(getDefaultAriaLabel());
    }
    else if (propsAriaLabel) {
        ariaLabel = propsAriaLabel;
    }
    else {
        ariaLabel = getDefaultAriaLabel();
    }
    if (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.content) {
        tooltipContent = tooltipProps.content;
    }
    else {
        var parts = [];
        if (isCompleted) {
            parts.push(translateCommon('completed'));
        }
        if (isLocked) {
            parts.push(translateCommon('locked'));
        }
        tooltipContent = capitalizeFirstLetter(parts.join(', ').toLowerCase());
    }
    return (_jsxs("div", __assign({ className: classNames('date-tile', className), "data-completed": !!isCompleted || undefined, "data-interactive": !!onPress || undefined, "data-locked": !!isLocked || undefined, "data-selected": !!isSelected || undefined, "data-today": isDateToday || undefined }, { children: [_jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent }, { children: [_jsx(TriggerElement, __assign({ "aria-label": ariaLabel, className: "date-tile__start", excludeFromTabOrder: !isFocusable, onPress: function () {
                            safeCall(onPress, date);
                        } }, { children: function (renderProps) { return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "date-tile__date-area" }, { children: renderDayOfMonth(renderProps) })), _jsxs("div", __assign({ className: "date-tile__texts" }, { children: [_jsxs("div", __assign({ className: "date-tile__primary-text-row" }, { children: [_jsx(Label, __assign({ className: "date-tile__weekday", size: Size.sm }, { children: capitalizeFirstLetter(dayObj.format('ddd')) })), isCompleted && (_jsx(Icon, { className: "date-tile__primary-icon", name: completedIconName, size: IconSize.SM }))] })), (!!secondaryText || !!isLocked) && (_jsxs("div", __assign({ className: "date-tile__secondary-text-row" }, { children: [secondaryText && (_jsx(Label, __assign({ className: "date-tile__secondary-text", size: Size.sm }, { children: secondaryText }))), isLocked && (_jsx(Icon, { className: "date-tile__secondary-icon", name: iconNames.Lock, size: IconSize.XS }))] })))] }))] })); } })), _jsx(Tooltip, __assign({ headerText: tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.headerText, type: (_b = tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.type) !== null && _b !== void 0 ? _b : TooltipType.Plain }, { children: tooltipContent }))] })), menuProps && (_jsx(Menu, __assign({}, menuProps, { children: _jsx(IconButton, { "aria-label": translateCommon('actions'), iconName: iconNames.MoreVert, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }) }))), isSelected && _jsx(Divider, { className: "date-tile__divider", size: Size.md })] })));
}
//# sourceMappingURL=datetile.js.map