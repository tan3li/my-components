import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label as ReactAriaLabel } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/size.js';
import { RequiredIndicator } from '../../feedback/requiredindicator/requiredindicator.js';
import { iconNames } from '../../media/icon/icons.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { Label } from '../label/label.js';
import { TooltipTrigger } from '../../feedback/tooltip/tooltiptrigger.js';
import { Tooltip, TooltipType } from '../../feedback/tooltip/tooltip.js';
import { TriggerElement } from '../../action/triggerelement/triggerelement.js';
export function FieldLabel(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isRequired = _a.isRequired, _b = _a.size, size = _b === void 0 ? Size.md : _b, suffix = _a.suffix, tooltipContent = _a.tooltipContent, props = __rest(_a, ["children", "className", "isDisabled", "isRequired", "size", "suffix", "tooltipContent"]);
    var _c = tooltipContent !== null && tooltipContent !== void 0 ? tooltipContent : {}, ttContent = _c.content, ttProps = __rest(_c, ["content"]);
    var iconSize = IconSize.XS;
    if (size === Size.md) {
        iconSize = IconSize.SM;
    }
    return (_jsxs(ReactAriaLabel, __assign({}, props, { className: classNames('field-label', className, {
            'field-label--disabled': isDisabled
        }) }, { children: [isRequired && _jsx(RequiredIndicator, {}), _jsx(Label, __assign({ size: size }, { children: _jsx("strong", { children: children }) })), ttContent && (_jsxs(TooltipTrigger, { children: [_jsx(TriggerElement, { children: _jsx(Icon, { className: "field-label__icon", name: iconNames.Help, size: iconSize }) }), _jsx(Tooltip, __assign({}, ttProps, { type: TooltipType.Rich }, { children: ttContent }))] })), suffix] })));
}
//# sourceMappingURL=fieldlabel.js.map