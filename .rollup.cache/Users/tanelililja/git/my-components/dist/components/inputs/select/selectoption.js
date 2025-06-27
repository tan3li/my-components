import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Orientation, Position, Size } from '../../../constants/index.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { useFocusable } from 'react-aria';
import { InteractionSource } from '../../../constants/interactionsource.js';
import { SelectOptionContent } from './selectoptioncontent.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { useIsTextTruncated } from '../../../hooks/useistexttruncated.js';
function SelectOptionInner(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isKeyboardFocused = _a.isKeyboardFocused, isReadOnly = _a.isReadOnly, isSelected = _a.isSelected, outerRef = _a.ref, _b = _a.size, size = _b === void 0 ? Size.md : _b, props = __rest(_a, ["children", "className", "isDisabled", "isFocused", "isKeyboardFocused", "isReadOnly", "isSelected", "ref", "size"]);
    var ref = useRef(null);
    var focusableProps = useFocusable(props, ref).focusableProps;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (_jsx("div", __assign({}, focusableProps, props, { "aria-disabled": isReadOnly ? true : props['aria-disabled'], className: classNames("select-option select-option--".concat(size), className), "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-keyboard-focused": !!isKeyboardFocused || undefined, "data-readonly": !!isReadOnly || undefined, "data-selected": !!isSelected || undefined, ref: ref, tabIndex: undefined }, { children: children })));
}
function SelectOption(_a) {
    var _b, _c;
    var disabledKeys = _a.disabledKeys, getItemProps = _a.getItemProps, highlightSource = _a.highlightSource, isFocused = _a.isFocused, isSelected = _a.isSelected, item = _a.item, itemClassName = _a.itemClassName, itemIndex = _a.itemIndex, level = _a.level, renderItemContent = _a.renderItemContent, size = _a.size, useDataValue = _a.useDataValue;
    var ref = useRef(null);
    var labelRef = useRef(null);
    var descriptionRef = useRef(null);
    var isLabelTruncated = useIsTextTruncated({ overflowDirection: Orientation.vertical, ref: labelRef });
    var isDescriptionTruncated = useIsTextTruncated({ overflowDirection: Orientation.vertical, ref: descriptionRef });
    var _d = useState(false), isTooltipOpen = _d[0], setIsTooltipOpen = _d[1];
    var tooltipContent = [];
    var itemValue = item.value;
    var isItemReadOnly = item.isReadOnly;
    var isItemDisabled = !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(itemValue));
    var isItemKeyboardFocused = isFocused && highlightSource === InteractionSource.Keyboard;
    var optionContentProps = {
        isDisabled: isItemDisabled,
        isReadOnly: isItemReadOnly,
        item: item,
        labelRef: labelRef,
        descriptionRef: descriptionRef,
        level: level,
        size: size
    };
    if (item.tooltip) {
        tooltipContent.push(_jsx("div", { children: item.tooltip.content }, "item-tt"));
    }
    if (isLabelTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(_jsx("br", {}, "br1"));
        }
        tooltipContent.push(_jsx("div", { children: (_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.textContent }, "text"));
    }
    if (isDescriptionTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(_jsx("br", {}, "br2"));
        }
        tooltipContent.push(_jsx("div", { children: (_c = descriptionRef.current) === null || _c === void 0 ? void 0 : _c.textContent }, "desc"));
    }
    var content;
    if (renderItemContent) {
        content = renderItemContent(optionContentProps);
    }
    else {
        content = _jsx(SelectOptionContent, __assign({}, optionContentProps));
    }
    var hasTooltipContent = tooltipContent.length > 0;
    useEffect(function () {
        setIsTooltipOpen(hasTooltipContent ? !!isItemKeyboardFocused : false);
    }, [isItemKeyboardFocused]);
    return (_jsxs(TooltipTrigger, __assign({ isDisabled: !hasTooltipContent, isOpen: isTooltipOpen, onOpenChange: setIsTooltipOpen }, { children: [_jsx(SelectOptionInner, __assign({}, getItemProps({ item: item, index: itemIndex, ref: ref }), { className: classNames(isFunction(itemClassName) ? itemClassName(item) : itemClassName, {
                    'select-option--action': !!item.action
                }), "data-value": useDataValue ? itemValue : undefined, isDisabled: isItemDisabled, isFocused: isFocused, isKeyboardFocused: isItemKeyboardFocused, isReadOnly: isItemReadOnly, isSelected: isSelected, size: size }, { children: content })), _jsx(Tooltip, __assign({ position: Position.Right, triggerRef: ref, type: TooltipType.Plain }, { children: tooltipContent }))] })));
}
var MemoizedSelectOption = memo(SelectOption);
export { MemoizedSelectOption as SelectOption };
//# sourceMappingURL=selectoption.js.map