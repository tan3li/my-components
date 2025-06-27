import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDisclosureState } from 'react-stately';
import { useRef } from 'react';
import { Heading, Label } from '../../text/index.js';
import { Alignment, KeyboardEventKey, Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { Divider } from '../divider/index.js';
import { classNames } from '../../../utils/classnames.js';
import { chain, FocusRing, mergeProps, useDisclosure } from 'react-aria';
import { Button } from 'react-aria-components';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { TriggerElement } from '../../action/index.js';
import { useAutoHeightAnimation } from '../../../hooks/useautoheightanimation.js';
export var CollapsibleItemStyle;
(function (CollapsibleItemStyle) {
    CollapsibleItemStyle["Card"] = "card";
    CollapsibleItemStyle["Plain"] = "plain";
})(CollapsibleItemStyle || (CollapsibleItemStyle = {}));
export function CollapsibleItem(_a) {
    var _b = _a.arrowPlacement, arrowPlacement = _b === void 0 ? Alignment.start : _b, groupState = _a.groupState, isDisabled = _a.isDisabled, item = _a.item, ref = _a.ref, _c = _a.style, style = _c === void 0 ? CollapsibleItemStyle.Plain : _c, props = __rest(_a, ["arrowPlacement", "groupState", "isDisabled", "item", "ref", "style"]);
    var id = item.id, title = item.title, tooltipContent = item.tooltipContent, children = item.children;
    var panelRef = useRef(null);
    var propsIsExpanded = groupState ? groupState.expandedKeys.has(id) : props.isExpanded;
    var state = useDisclosureState(__assign(__assign({}, props), { isExpanded: propsIsExpanded, onExpandedChange: function (newIsExpanded) {
            var _a;
            if (groupState) {
                groupState.toggleKey(id);
            }
            (_a = props.onExpandedChange) === null || _a === void 0 ? void 0 : _a.call(props, newIsExpanded);
        } }));
    var _d = useDisclosure(__assign(__assign({}, props), { isExpanded: propsIsExpanded, isDisabled: isDisabled }), state, panelRef), buttonProps = _d.buttonProps, panelProps = _d.panelProps;
    var isExpanded = state.isExpanded;
    var _e = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _e.isLoaded, panelProps2 = _e.props;
    var onKeyDown = function (e) {
        if (isExpanded && e.key === KeyboardEventKey.Escape) {
            state.collapse();
        }
    };
    var tooltipElement = tooltipContent ?
        _jsxs(TooltipTrigger, { children: [_jsx(TriggerElement, { children: _jsx(Icon, { className: "collapsible-item__tooltip-icon", name: iconNames.InfoFilled, size: style === CollapsibleItemStyle.Card ? IconSize.SM : IconSize.XS }) }), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipContent }))] })
        : null;
    return (_jsxs("div", __assign({ className: classNames("collapsible-item collapsible-item--".concat(style, " collapsible-item--arrow-").concat(arrowPlacement), {
            'collapsible-item--disabled': isDisabled,
            'collapsible-item--open': isExpanded
        }), ref: ref }, { children: [_jsx(FocusRing, __assign({ focusRingClass: "collapsible-item__header--focused" }, { children: _jsxs(Button, __assign({}, buttonProps, { className: "collapsible-item__header", onKeyDown: chain(buttonProps.onKeyDown, onKeyDown) }, { children: [style === CollapsibleItemStyle.Card ?
                            _jsxs(Heading, __assign({ className: "collapsible-item__header-text", level: 1, size: Size.xs }, { children: [title, tooltipElement] }))
                            : _jsxs(Label, __assign({ className: "collapsible-item__header-text", size: Size.lg }, { children: [_jsx("strong", { children: title }), tooltipElement] })), _jsx(Icon, { className: "collapsible-item__header-icon", name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.LG })] })) })), _jsx("div", __assign({}, mergeProps(panelProps, panelProps2), { className: "collapsible-item__content-wrapper", ref: panelRef }, { children: (isExpanded || isLoaded) && _jsx("div", __assign({ className: "collapsible-item__content" }, { children: children })) })), style === CollapsibleItemStyle.Plain && _jsx(Divider, { className: "collapsible-item__divider", size: Size.sm })] })));
}
//# sourceMappingURL=collapsibleitem.js.map