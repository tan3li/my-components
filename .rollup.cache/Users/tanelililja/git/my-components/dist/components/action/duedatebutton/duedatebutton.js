import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonStyle } from '../button/index.js';
import { ButtonVariant } from '../constants/index.js';
import { useCultureDay } from '../../../hooks/usecultureday.js';
import { Size } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
import { iconNames } from '../../media/index.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
export var DueDateButtonVariant;
(function (DueDateButtonVariant) {
    DueDateButtonVariant["Neutral"] = "neutral";
    DueDateButtonVariant["Danger"] = "danger";
    DueDateButtonVariant["Warning"] = "warning";
})(DueDateButtonVariant || (DueDateButtonVariant = {}));
export function DueDateButton(_a) {
    var date = _a.date, tooltipContent = _a.tooltipContent, _b = _a.variant, variant = _b === void 0 ? DueDateButtonVariant.Neutral : _b, props = __rest(_a, ["date", "tooltipContent", "variant"]);
    var cultureDay = useCultureDay();
    var startIconName = variant === DueDateButtonVariant.Danger ? iconNames.EmergencyHomeFilled : iconNames.CalendarToday;
    return (_jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent }, { children: [_jsx(Button, __assign({}, props, { "aria-label": date, className: classNames("due-date-button due-date-button--".concat(variant), props.className), size: Size.sm, startIconName: startIconName, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }, { children: "".concat(cultureDay(date).format('l')) })), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipContent }))] })));
}
//# sourceMappingURL=duedatebutton.js.map