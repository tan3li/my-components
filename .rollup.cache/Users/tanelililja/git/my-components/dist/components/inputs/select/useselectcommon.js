import { __assign, __rest } from "tslib";
import { mergeProps, useFilter, useFocusRing, useHover } from 'react-aria';
import { useDataState } from '../../../hooks/usedatastate.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { hasItemWithText } from './hasitemwithtext.js';
import { SpecialSelectItemKey } from './specialselectitemkey.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { createFlatSelectItemList } from './createflatselectitemlist.js';
import { useResizeObserver } from '@react-aria/utils';
import { useFieldHelpText } from '../../../hooks/usefieldhelptext.js';
import { useScrollToSelectedOption } from './usescrolltoselectedoption.js';
import { isEmptyString } from '../../../utils/objecthelper.js';
import { useNonModalPopoverInModalFix } from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import { useSelectItemHighlight } from './useselectitemhighlight.js';
import { useControlledState } from '../../../hooks/usecontrolledstate.js';
export function useSelectCommon(_a) {
    var allowCreate = _a.allowCreate, changeCallback = _a.changeCallback, changeParams = _a.changeParams, dataState = _a.dataState, expandedKeys = _a.expandedKeys, helpText = _a.helpText, items = _a.items, isInvalid = _a.isInvalid, isLoading = _a.isLoading, onFocusChange = _a.onFocusChange, text = _a.text, value = _a.value, props = __rest(_a, ["allowCreate", "changeCallback", "changeParams", "dataState", "expandedKeys", "helpText", "items", "isInvalid", "isLoading", "onFocusChange", "text", "value"]);
    var triggerContentRef = useRef(null);
    var popoverRef = useRef(null);
    var listBoxRef = useRef(null);
    var _b = useFocusRing({ within: true, isTextInput: false }), baseFocusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var focusProps = mergeProps(baseFocusProps, {
        onBlur: function () { return onFocusChange === null || onFocusChange === void 0 ? void 0 : onFocusChange(false); },
        onFocus: function () { return onFocusChange === null || onFocusChange === void 0 ? void 0 : onFocusChange(true); }
    });
    var _c = useHover(props), hoverProps = _c.hoverProps, isHovered = _c.isHovered;
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly;
    var _e = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        isInvalid: isInvalid
    }), fieldProps = _e.fieldProps, helpTextProps = _e.helpTextProps;
    var _f = useControlledState(false, props.isOpen, props.onOpenChange), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useSelectItemHighlight(), onHighlightedIndexChange = _g.onHighlightedIndexChange, highlightedIndex = _g.highlightedIndex, highlightSource = _g.highlightSource;
    var _h = useState(0), dynamicMenuWidth = _h[0], setDynamicMenuWidth = _h[1];
    var _j = useState(value && text ? { value: value, text: text } : null), selectedItem = _j[0], setSelectedItem = _j[1];
    var _k = useState(text !== null && text !== void 0 ? text : ''), inputValue = _k[0], setInputValue = _k[1];
    var _l = useState(null), filteredItems = _l[0], setFilteredItems = _l[1];
    var localFilter = useFilter({ sensitivity: 'base' });
    var itemsToRender = useMemo(function () {
        var baseItems = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
        if (allowCreate && inputValue && isOpen && !hasItemWithText(items, inputValue)) {
            baseItems.push({ value: SpecialSelectItemKey.CREATABLE, text: inputValue });
        }
        return baseItems;
    }, [filteredItems, items, allowCreate, inputValue, isOpen]);
    var updateMenuWidth = function () {
        var content = triggerContentRef.current;
        if (content) {
            var width = content.getBoundingClientRect().width;
            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };
    var onSelectionChange = function (newSelectedItem) {
        safeCall(props.onSelectionChange, newSelectedItem ? newSelectedItem.value : null);
        setSelectedItem(newSelectedItem);
        if (newSelectedItem) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), newSelectedItem));
        }
        else {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: null }));
        }
    };
    var flatItems = useMemo(function () { return createFlatSelectItemList(itemsToRender, false, expandedKeys); }, [itemsToRender, expandedKeys]);
    var onResize = useCallback(function () {
        updateMenuWidth();
    }, [triggerContentRef]);
    useResizeObserver({ ref: triggerContentRef, onResize: onResize });
    useScrollToSelectedOption({ isLoading: isLoading, isOpen: isOpen, menuRef: listBoxRef });
    useNonModalPopoverInModalFix(isOpen, triggerContentRef, popoverRef);
    useEffect(function () {
        if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) !== (value !== null && value !== void 0 ? value : undefined) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) !== text) {
            setSelectedItem(value && text ? { value: value, text: text } : null);
        }
        setInputValue(text !== null && text !== void 0 ? text : '');
    }, [value, text]);
    var menuWidth = props.menuWidth;
    if (isEmptyString(menuWidth)) {
        menuWidth = "".concat(dynamicMenuWidth, "px");
    }
    return {
        focusProps: focusProps,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        hoverProps: hoverProps,
        isHovered: isHovered,
        hasError: hasError,
        isReadOnly: isReadOnly,
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        selectedItem: selectedItem,
        inputValue: inputValue,
        setInputValue: setInputValue,
        setFilteredItems: setFilteredItems,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        triggerContentRef: triggerContentRef,
        localFilter: localFilter,
        updateMenuWidth: updateMenuWidth,
        onSelectionChange: onSelectionChange,
        flatItems: flatItems,
        menuWidth: menuWidth,
        itemsToRender: itemsToRender,
        fieldProps: fieldProps,
        helpTextProps: helpTextProps,
        onHighlightedIndexChange: onHighlightedIndexChange,
        highlightedIndex: highlightedIndex,
        highlightSource: highlightSource
    };
}
//# sourceMappingURL=useselectcommon.js.map