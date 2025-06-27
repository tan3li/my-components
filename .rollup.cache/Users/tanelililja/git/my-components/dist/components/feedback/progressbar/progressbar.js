import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ProgressBar as ReactAriaProgressBar } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { TriggerElement } from '../../action/triggerelement/triggerelement.js';
import { Tooltip, TooltipType } from '../tooltip/tooltip.js';
import { TooltipTrigger } from '../tooltip/tooltiptrigger.js';
import { Position } from '../../../constants/position.js';
import { Size } from '../../../constants/size.js';
import { HelpText } from '../../text/helptext/helptext.js';
import { Label } from '../../text/label/label.js';
import { useCallback, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../inputs/select/useintersectionobserver.js';
import { useResizeObserver } from '@react-aria/utils';
import { HTMLElementType } from '../../../constants/index.js';
// Tooltip arrow width is hardcoded to 12px
var TOOLTIP_ARROW_WIDTH = 12;
export function ProgressBar(props) {
    var className = props.className, helpText = props.helpText, isIndeterminate = props.isIndeterminate, labelPosition = props.labelPosition, showHelpTextIcon = props.showHelpTextIcon, tooltipPosition = props.tooltipPosition, valueLabelPosition = props.valueLabelPosition;
    var _a = useState(0), progressBarWidth = _a[0], setProgressBarWidth = _a[1];
    var _b = useState(0), tooltipArrowOffset = _b[0], setTooltipArrowOffset = _b[1];
    var isValueLabelPositionRight = valueLabelPosition === Position.Right;
    var label = props['aria-label'];
    var progressBarRef = useRef(null);
    var calculateTooltipOffset = function (percentage) {
        if (percentage === void 0) { percentage = 0; }
        var progressBarFillWidth = (percentage / 100) * progressBarWidth;
        return Math.round(progressBarFillWidth - progressBarWidth / 2);
    };
    var onProgressBarResize = useCallback(function () {
        var _a, _b;
        var width = (_b = (_a = progressBarRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        setProgressBarWidth(width);
    }, [progressBarRef]);
    var onTooltipVisible = function (tooltipElement) {
        var _a, _b;
        var tooltipContentWidth = (_b = (_a = tooltipElement.intersectionRect) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0;
        if (tooltipContentWidth === 0) {
            return;
        }
        var arrowOffset = Math.round(tooltipContentWidth / 2 - TOOLTIP_ARROW_WIDTH / 2);
        setTooltipArrowOffset(arrowOffset);
    };
    useResizeObserver({
        ref: progressBarRef,
        onResize: onProgressBarResize
    });
    var tooltipRef = useIntersectionObserver(onTooltipVisible);
    return (_jsx(ReactAriaProgressBar, __assign({}, props, { className: classNames('progress-bar', className) }, { children: function (_a) {
            var percentage = _a.percentage, valueText = _a.valueText;
            return (_jsxs(_Fragment, { children: [label && labelPosition === Position.Top && (_jsx(Label, __assign({ className: classNames('progress-bar__label', {
                            'progress-bar__label--top': !valueText || !isValueLabelPositionRight
                        }), elementType: HTMLElementType.Div, size: Size.md }, { children: label }))), _jsxs("div", __assign({ className: "progress-bar__top_container" }, { children: [_jsxs(TooltipTrigger, { children: [_jsx("div", __assign({ className: "progress-bar__bar-wrapper", ref: progressBarRef }, { children: _jsx(TriggerElement, __assign({ "aria-label": label !== null && label !== void 0 ? label : props['aria-label'], className: "progress-bar__bar" }, { children: _jsx("div", { className: classNames('progress-bar__fill', {
                                                    'progress-bar__fill--indeterminate': isIndeterminate
                                                }), style: isIndeterminate ? {} : { width: "".concat(percentage, "%") } }) })) })), valueText && (_jsx(Tooltip, __assign({ arrowBoundaryOffset: tooltipArrowOffset, crossOffset: calculateTooltipOffset(percentage), position: tooltipPosition, ref: tooltipRef, type: TooltipType.Plain }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: valueText }) })) })))] }), valueText && isValueLabelPositionRight && (_jsx(Label, __assign({ className: "progress-bar__value-label progress-bar__value-label--right", size: Size.md }, { children: valueText })))] })), _jsxs("div", __assign({ className: "progress-bar__bottom_container" }, { children: [_jsxs("div", __assign({ className: "progress-bar__bottom_left-container" }, { children: [label && labelPosition === Position.Bottom && (_jsx(Label, __assign({ className: classNames('progress-bar__label', {
                                            'progress-bar__label--bottom': !valueText || !isValueLabelPositionRight
                                        }), size: Size.md }, { children: label }))), helpText && (_jsx(HelpText, __assign({ className: "progress-bar__help-text", showIcon: showHelpTextIcon }, { children: helpText })))] })), valueText && valueLabelPosition === Position.Bottom && (_jsx(Label, __assign({ className: "progress-bar__value-label progress-bar__value-label--bottom", size: Size.md }, { children: valueText })))] }))] }));
        } })));
}
//# sourceMappingURL=progressbar.js.map