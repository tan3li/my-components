import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { Size } from '../../../constants/index.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { isTouchDevice } from '../../../utils/istouchdevice.js';
import { stopPropagation } from '../../../utils/stoppropagation.js';
export function DataTableActionButtonCell(_a) {
    var _b = _a.buttonComponent, ActionButton = _b === void 0 ? Button : _b, buttonProps = _a.buttonProps, children = _a.children, className = _a.className, ref = _a.ref, stopChildrenClickPropagation = _a.stopChildrenClickPropagation, tooltipProps = _a.tooltipProps;
    return (_jsxs("div", __assign({ className: classNames('data-table__action-button-cell', className), ref: ref }, { children: [_jsx("div", __assign({ className: "data-table__action-button-cell-content", onClick: stopChildrenClickPropagation ? stopPropagation : undefined }, { children: children })), _jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipProps }, { children: [_jsx(ActionButton, __assign({ className: classNames('data-table__action-button', {
                            'data-table__action-button--visible': isTouchDevice
                        }), size: Size.md, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, buttonProps)), tooltipProps && _jsx(Tooltip, __assign({ type: TooltipType.Plain }, tooltipProps))] }))] })));
}
//# sourceMappingURL=datatableactionbuttoncell.js.map