import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MenuItem as ReactAriaMenuItem } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { useEffect, useRef, useState } from 'react';
import { iconNames } from '../../media/icon/icons.js';
import { ACTION_ITEM_CSS_CLASS, ActionItemContent } from '../actionitem/actionitem.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { Position } from '../../../constants/index.js';
import { useFocusable } from 'react-aria';
import { mergeRefs } from '@react-aria/utils';
function MenuOptionContent(_a) {
    var hasSubmenu = _a.hasSubmenu, isDestructive = _a.isDestructive, isDisabled = _a.isDisabled, isFocusVisible = _a.isFocusVisible, isHovered = _a.isHovered, isPressed = _a.isPressed, isReadOnly = _a.isReadOnly, leftIconName = _a.leftIconName, outerRef = _a.ref, rightIconName = _a.rightIconName, selectionMode = _a.selectionMode, props = __rest(_a, ["hasSubmenu", "isDestructive", "isDisabled", "isFocusVisible", "isHovered", "isPressed", "isReadOnly", "leftIconName", "ref", "rightIconName", "selectionMode"]);
    var ref = useRef(null);
    var focusableProps = useFocusable({}, ref).focusableProps;
    var showLeftIcon = !!leftIconName || selectionMode !== 'none';
    var showRightIcon = !!rightIconName || hasSubmenu;
    return (_jsx("div", __assign({}, focusableProps, { className: ACTION_ITEM_CSS_CLASS, "data-destructive": !!isDestructive || undefined, "data-disabled": isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-hovered": (isHovered && !isReadOnly) || undefined, "data-pressed": (isPressed && !isReadOnly) || undefined, "data-readonly": !!isReadOnly || undefined, ref: mergeRefs(ref, outerRef) }, { children: _jsx(ActionItemContent, __assign({}, props, { leftIconName: showLeftIcon ? (leftIconName !== null && leftIconName !== void 0 ? leftIconName : iconNames.InputCheck) : undefined, rightIconName: showRightIcon ? (rightIconName !== null && rightIconName !== void 0 ? rightIconName : iconNames.ArrowRightFilled) : undefined })) })));
}
function MenuOptionInner(_a) {
    var tooltipRef = _a.tooltipRef, props = __rest(_a, ["tooltipRef"]);
    var _b = useState(false), isTooltipOpen = _b[0], setIsTooltipOpen = _b[1];
    var ref = useRef(null);
    var isFocusVisible = props.isFocusVisible, tooltip = props.tooltip;
    var tooltipContent = tooltip === null || tooltip === void 0 ? void 0 : tooltip.content;
    useEffect(function () {
        setIsTooltipOpen(tooltipContent ? isFocusVisible : false);
    }, [isFocusVisible]);
    return (_jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent, isOpen: isTooltipOpen, onOpenChange: setIsTooltipOpen }, { children: [_jsx(MenuOptionContent, __assign({}, props, { ref: ref })), _jsx(Tooltip, __assign({ offset: -2, position: Position.Left, ref: tooltipRef, triggerRef: ref, type: TooltipType.Plain }, { children: tooltipContent }))] })));
}
export function MenuOption(_a) {
    var actionLabel = _a.actionLabel, className = _a.className, description = _a.description, isDestructive = _a.isDestructive, isReadOnly = _a.isReadOnly, label = _a.label, leftIconName = _a.leftIconName, prefix = _a.prefix, rightIconName = _a.rightIconName, outerRef = _a.ref, tooltip = _a.tooltip, props = __rest(_a, ["actionLabel", "className", "description", "isDestructive", "isReadOnly", "label", "leftIconName", "prefix", "rightIconName", "ref", "tooltip"]);
    var ref = useRef(null);
    return (_jsx(ReactAriaMenuItem, __assign({}, props, { className: classNames('menu-item', className), ref: mergeRefs(outerRef, ref, function (node) {
            // RAC MenuItem does not support aria-disabled prop so need to do this the hard way...
            if (node && isReadOnly) {
                node.setAttribute('aria-disabled', 'true');
            }
        }) }, { children: function (itemRenderProps) { return (_jsx(MenuOptionInner, __assign({}, itemRenderProps, { actionLabel: actionLabel, description: description, isDestructive: isDestructive, isReadOnly: isReadOnly, label: label, leftIconName: leftIconName, prefix: prefix, rightIconName: rightIconName, tooltip: tooltip, tooltipRef: function (tooltipNode) {
                // RAC MenuItem does not support Tooltip so need to handle the aria-describedby the hard way...
                var itemNode = ref.current;
                if (!itemNode) {
                    return;
                }
                if (tooltipNode) {
                    itemNode.setAttribute('aria-describedby', tooltipNode.getAttribute('id'));
                }
                else {
                    itemNode.removeAttribute('aria-describedby');
                }
            } }))); } })));
}
//# sourceMappingURL=menuoption.js.map