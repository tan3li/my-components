import { __assign, __rest, __spreadArray } from "tslib";
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { filterItems } from '../select/filteritems.js';
import { classNames } from '../../../utils/classnames.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { LabelContext, Popover, Provider, TextContext } from 'react-aria-components';
import { Field } from '../common/field/field.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { Label, LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/label/label.js';
import { iconNames } from '../../media/icon/icons.js';
import { Icon } from '../../media/icon/icon.js';
import { Size } from '../../../constants/size.js';
import { chain, useFilter, useFocusRing, useHover } from 'react-aria';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { useResizeObserver } from '@react-aria/utils';
import { emptyFn, isFunction, safeCall } from '../../../utils/functionhelper.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { MultiSelectChip, SelectedItemStyle } from './multiselectchip.js';
import { ClearButton } from '../../action/clearbutton/clearbutton.js';
import { scrollBottom } from '../../../utils/scrollbottom.js';
import { LoadingItem } from '../select/loadingitem.js';
import { SelectOptionsEmptyState } from '../select/selectoptionsemptystate.js';
import { scrollRight } from '../../../utils/scrollright.js';
import { createFlatSelectItemList } from '../select/createflatselectitemlist.js';
import { InputChangeTriggerAction } from '../select/selectprops.js';
import { hasItemWithText } from '../select/hasitemwithtext.js';
import { SpecialSelectItemKey } from '../select/index.js';
import { BottomLoader } from '../select/bottomloader.js';
import { useFieldHelpText } from '../../../hooks/usefieldhelptext.js';
import { Tag, TagStyle } from '../../navigation/index.js';
import { renderMultiSelectItems } from './rendermultiselectitems.js';
import { useSelectedItemsMap } from './useselecteditemsmap.js';
import { isItemsChanged } from './isitemschanged.js';
import { updateSelectedItems } from './updateselecteditems.js';
import { useNonModalPopoverInModalFix } from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import { useSelectItemHighlight } from '../select/useselectitemhighlight.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
import { useSelectOptionCountAnnouncement } from '../select/useselectoptioncountannouncement.js';
var HIDDEN_CHIP_CSS_CLASS = 'multiselect__chip--hidden';
// eslint-disable-next-line complexity,max-statements
export function MultiSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, createOptions = _a.createOptions, dataState = _a.dataState, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, isLoading = _a.isLoading, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, onOpenChange = _a.onOpenChange, ref = _a.ref, renderItemContent = _a.renderItemContent, _b = _a.selectedItemStyle, selectedItemStyle = _b === void 0 ? SelectedItemStyle.text : _b, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "className", "createOptions", "dataState", "disabledKeys", "expandedKeys", "helpText", "isLoading", "isRequired", "isSkeleton", "itemClassName", "items", "label", "menuWidth", "onBottomLoaderVisible", "onOpenChange", "ref", "renderItemContent", "selectedItemStyle", "showHelpTextIcon", "size", "tooltipContent"]);
    var _d = useFocusRing({ within: true, isTextInput: false }), focusProps = _d.focusProps, isFocused = _d.isFocused, isFocusVisible = _d.isFocusVisible;
    var _e = useHover(props), hoverProps = _e.hoverProps, isHovered = _e.isHovered;
    var isDisabled = props.isDisabled;
    var selectedItemsFromProps = props.selectedItems;
    var _f = useSelectItemHighlight(), highlightedIndex = _f.highlightedIndex, onHighlightedIndexChange = _f.onHighlightedIndexChange, highlightSource = _f.highlightSource;
    var _g = useState(0), dynamicMenuWidth = _g[0], setDynamicMenuWidth = _g[1];
    var _h = useState(''), inputValue = _h[0], setInputValue = _h[1];
    var _j = useState(selectedItemsFromProps ? __spreadArray([], selectedItemsFromProps, true) : []), selectedItems = _j[0], setSelectedItems = _j[1];
    var _k = useState(0), hiddenSelectedItemsCount = _k[0], setHiddenSelectedItemsCount = _k[1];
    var _l = useDataState(dataState, false, props.isReadOnly), hasError = _l.hasError, isReadOnly = _l.isReadOnly, errorMessage = _l.errorMessage;
    var _m = useFieldHelpText({ dataState: dataState, helpText: helpText }), fieldProps = _m.fieldProps, helpTextProps = _m.helpTextProps;
    var prevSelectedCountRef = useRef(selectedItems.length);
    var listBoxRef = useRef(null);
    var boxRef = useRef(null);
    var chipsRef = useRef(null);
    var otherSelectCountRef = useRef(null);
    var inputRef = useRef(null);
    var popoverRef = useRef(null);
    var localFilter = useFilter({ sensitivity: 'base' });
    var translateCommon = useTranslateCommon();
    var _o = useState(null), filteredItems = _o[0], setFilteredItems = _o[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    if (inputValue &&
        createOptions &&
        (isFunction(createOptions.isAllowed) ? createOptions.isAllowed(inputValue) : createOptions.isAllowed) &&
        !hasItemWithText(selectedItems, inputValue) &&
        !hasItemWithText(items, inputValue)) {
        itemsToRender.push({ value: SpecialSelectItemKey.CREATABLE, text: inputValue });
    }
    var flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);
    // Create map of selected items for quick lookup
    var selectedItemsMap = useSelectedItemsMap(selectedItems);
    var triggerChange = function (newSelectedItems) {
        if (isItemsChanged(newSelectedItems, selectedItemsFromProps)) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newSelectedItems.slice() }));
        }
    };
    var clearSelectedItems = function () {
        var _a;
        var newSelectedItems = [];
        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var onInputChange = function (val, inputChangeTrigger) {
        setInputValue(val);
        if (props.onInputChange) {
            props.onInputChange(val, inputChangeTrigger);
        }
        else {
            // use local filtering
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var adjustHiddenSelectedItems = function () {
        var chipsElement = chipsRef.current;
        var otherSelectCountElement = otherSelectCountRef.current;
        if (!chipsElement) {
            return;
        }
        var chipElements = Array.from(chipsElement.children);
        chipElements.forEach(function (chip) {
            chip.classList.remove(HIDDEN_CHIP_CSS_CLASS);
        });
        if (otherSelectCountElement) {
            otherSelectCountElement.textContent = '';
        }
        var hideCount = 0;
        if (!isFocused || isReadOnly) {
            for (var i = chipElements.length - 1; i >= 0; i--) {
                var scrollWidth = chipsElement.scrollWidth, offsetWidth = chipsElement.offsetWidth;
                var chip = chipElements[i];
                if (scrollWidth > offsetWidth) {
                    chip.classList.add(HIDDEN_CHIP_CSS_CLASS);
                    hideCount++;
                    if (otherSelectCountElement) {
                        otherSelectCountElement.textContent = "+".concat(hideCount);
                    }
                }
                else {
                    break;
                }
            }
        }
        setHiddenSelectedItemsCount(hideCount);
    };
    var updateMenuWidth = function () {
        var box = boxRef.current;
        if (box) {
            var width = box.getBoundingClientRect().width;
            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };
    var _p = useMultipleSelection({
        selectedItems: selectedItems,
        onStateChange: function (changes) {
            var _a, _b, _c;
            var newSelectedItems = (_a = changes.selectedItems) !== null && _a !== void 0 ? _a : [];
            var activeIndex = changes.activeIndex, type = changes.type;
            switch (type) {
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                    setSelectedItems(newSelectedItems);
                    if (type === useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem) {
                        triggerChange(newSelectedItems);
                    }
                    break;
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationPrevious:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationNext:
                    if (!isNullOrUndefined(activeIndex) && activeIndex >= 0) {
                        (_c = (_b = chipsRef.current) === null || _b === void 0 ? void 0 : _b.children[activeIndex]) === null || _c === void 0 ? void 0 : _c.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    }
                    break;
                default:
                    break;
            }
        }
    }), getSelectedItemProps = _p.getSelectedItemProps, getDropdownProps = _p.getDropdownProps, removeSelectedItem = _p.removeSelectedItem;
    var _q = useCombobox({
        highlightedIndex: highlightedIndex,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: null,
        inputValue: inputValue,
        onHighlightedIndexChange: onHighlightedIndexChange,
        stateReducer: function (state, actionAndChanges) {
            var _a;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if ((_a = changes.selectedItem) === null || _a === void 0 ? void 0 : _a.isReadOnly) {
                        return __assign(__assign({}, changes), { isOpen: true, selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex });
                    }
                    return __assign(__assign({}, changes), { isOpen: true, highlightedIndex: state.highlightedIndex // ...with same option highlighted
                     });
                default:
                    return changes;
            }
        },
        onStateChange: function (changes) {
            var _a;
            var newSelectedItem = changes.selectedItem;
            var newInputValue = (_a = changes.inputValue) !== null && _a !== void 0 ? _a : '';
            var changeType = changes.type;
            switch (changeType) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if (newSelectedItem) {
                        updateSelectedItems(selectedItems, newSelectedItem);
                        setSelectedItems(__spreadArray([], selectedItems, true));
                        if (newSelectedItem.value === SpecialSelectItemKey.CREATABLE) {
                            onInputChange('', InputChangeTriggerAction.Input);
                            safeCall(createOptions === null || createOptions === void 0 ? void 0 : createOptions.onCreate, newSelectedItem);
                        }
                    }
                    break;
                case useCombobox.stateChangeTypes.InputChange:
                    onInputChange(newInputValue, InputChangeTriggerAction.Input);
                    break;
                case useCombobox.stateChangeTypes.InputKeyDownEscape:
                case useCombobox.stateChangeTypes.InputBlur:
                    scrollRight(chipsRef.current);
                    break;
                case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                    if (changes.highlightedIndex === flatItems.length - 1) {
                        // scroll at the bottom when last item is highlighted to make sure loader is visible
                        scrollBottom(listBoxRef.current);
                    }
                    break;
                default:
                    break;
            }
        },
        onIsOpenChange: function (changes) {
            var isMenuOpen = changes.isOpen;
            safeCall(onOpenChange, isMenuOpen);
            if (isMenuOpen) {
                onInputChange('', InputChangeTriggerAction.Focus);
                updateMenuWidth();
            }
            else {
                setFilteredItems(null);
            }
        }
    }), isOpen = _q.isOpen, getToggleButtonProps = _q.getToggleButtonProps, getLabelProps = _q.getLabelProps, getMenuProps = _q.getMenuProps, getInputProps = _q.getInputProps, getItemProps = _q.getItemProps;
    var selectedItemNodes = [];
    var selectedItemsLen = selectedItems.length;
    var _loop_1 = function (i) {
        var item = selectedItems[i];
        var content = void 0;
        if (selectedItemStyle === SelectedItemStyle.tag) {
            content = (_jsx(Tag, __assign({ isDisabled: isReadOnly || isDisabled, onRemove: function () {
                    removeSelectedItem(item);
                }, removeButtonProps: {
                    excludeFromTabOrder: true,
                    onPressStart: function (e) {
                        e.continuePropagation();
                    }
                }, size: size === Size.md ? Size.sm : size, style: TagStyle.Fill }, { children: item.text })));
        }
        else {
            content = _jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: item.text }));
        }
        var chipProps = getSelectedItemProps({ selectedItem: item, index: i });
        if (isDisabled || isReadOnly) {
            chipProps.onClick = emptyFn;
            chipProps.onKeyDown = emptyFn;
        }
        selectedItemNodes.push(_createElement(MultiSelectChip, __assign({}, chipProps, { displayStyle: selectedItemStyle, key: item.value }), content));
    };
    for (var i = 0; i < selectedItemsLen; i++) {
        _loop_1(i);
    }
    var onResize = useCallback(function () {
        adjustHiddenSelectedItems();
    }, [isFocused, isReadOnly, isOpen, isSkeleton]);
    useResizeObserver({ ref: boxRef, onResize: onResize });
    useNonModalPopoverInModalFix(isOpen, boxRef, popoverRef);
    useEffect(function () {
        if (!isFocused) {
            adjustHiddenSelectedItems();
        }
        var selectedCount = selectedItems.length;
        if (selectedCount > prevSelectedCountRef.current) {
            scrollRight(chipsRef.current);
        }
        prevSelectedCountRef.current = selectedCount;
    }, [selectedItems]);
    useEffect(function () {
        adjustHiddenSelectedItems();
        if (isFocused) {
            scrollRight(chipsRef.current);
        }
        else {
            setInputValue('');
            triggerChange(selectedItems);
        }
    }, [isFocused]);
    useEffect(function () {
        setSelectedItems(selectedItemsFromProps ? __spreadArray([], selectedItemsFromProps, true) : []);
    }, [selectedItemsFromProps]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var labelProps = getLabelProps();
    var inputProps = getInputProps(__assign(__assign({}, getDropdownProps({ preventKeyAction: false, ref: inputRef }, { suppressRefError: true })), { disabled: isReadOnly || isDisabled, 
        // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
        onChange: function (e) {
            onInputChange(e.target.value, InputChangeTriggerAction.Input);
        } }), { suppressRefError: true });
    var toggleButtonProps = getToggleButtonProps({ disabled: isReadOnly || isDisabled });
    var listBoxProps = getMenuProps({ ref: listBoxRef }, { suppressRefError: true });
    var placeholder;
    if (selectedItemsLen === 0) {
        if (isFocused && !isReadOnly) {
            placeholder = translateCommon('search');
        }
        else {
            placeholder = props.placeholder;
        }
    }
    var onKeyDown = function (e) {
        var continueFlow = safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
        if (continueFlow !== false && inputProps.onKeyDown) {
            inputProps.onKeyDown(e);
        }
    };
    // eslint-disable-next-line sonarjs/function-return-type
    var renderCreateText = function (itemText) {
        var getTextNode = createOptions === null || createOptions === void 0 ? void 0 : createOptions.getTextNode;
        return getTextNode ?
            getTextNode(itemText)
            : _jsxs(_Fragment, { children: ["".concat(translateCommon('create'), " "), "\"", _jsx("strong", { children: itemText }), "\""] });
    };
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-multiselect", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, labelProps)],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: _jsxs("div", __assign({ className: classNames('multiselect', className), ref: ref }, { children: [_jsx(Field, __assign({ dataState: dataState, helpText: helpText, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: _jsxs("div", __assign({}, hoverProps, { className: "multiselect__box multiselect__box--".concat(size), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": hasError || undefined, "data-readonly": isReadOnly || undefined, ref: boxRef }, { children: [_jsxs("div", __assign({ className: "multiselect__box-start" }, { children: [isFocused && !isReadOnly && (_jsx(Icon, { className: "multiselect__search-icon", name: iconNames.MagnifyingGlass })), selectedItemsLen > 0 && (_jsx("div", __assign({}, (isFocused && focusProps), { className: "multiselect__chips", ref: chipsRef }, { children: selectedItemNodes }))), (!isFocused || isReadOnly) && (_jsx(Label, __assign({ className: "multiselect__other-selected-count", ref: otherSelectCountRef, size: size === Size.xs ? Size.md : Size.lg }, { children: hiddenSelectedItemsCount > 0 && "+".concat(hiddenSelectedItemsCount) }))), _jsx("input", __assign({}, focusProps, inputProps, fieldProps, { "aria-label": props['aria-label'], className: classNames('multiselect__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), disabled: isDisabled, onBlur: chain(focusProps.onBlur, inputProps.onBlur), onKeyDown: onKeyDown, placeholder: placeholder, readOnly: isReadOnly, size: 2 }))] })), _jsxs("div", __assign({ className: "multiselect__action-buttons" }, { children: [!isOpen && !isDisabled && !isReadOnly && selectedItemsLen > 0 && (_jsx(ClearButton, __assign({}, focusProps, { className: "multiselect__clear-button", onPress: clearSelectedItems }))), _jsx("button", __assign({}, toggleButtonProps, { "aria-label": translateCommon('toggleMenu'), className: "multiselect__button" }, { children: _jsx(Icon, { className: "multiselect__button-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })), _jsx(Popover, __assign({ className: "multiselect__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom left", ref: popoverRef, shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : dynamicMenuWidth }, triggerRef: boxRef }, { children: _jsxs("div", __assign({}, listBoxProps, { className: "multiselect__listbox" }, { children: [(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                                !isLoading && _jsx(SelectOptionsEmptyState, { size: size }, "empty"), renderMultiSelectItems({
                                createText: renderCreateText,
                                disabledKeys: disabledKeys,
                                expandedKeys: expandedKeys,
                                getItemProps: getItemProps,
                                highlightedIndex: highlightedIndex,
                                highlightSource: highlightSource,
                                itemClassName: itemClassName,
                                items: itemsToRender,
                                renderItemContent: renderItemContent,
                                selectedItemsMap: selectedItemsMap,
                                size: size
                            }), isLoading && _jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && _jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })) }))] })) })));
}
//# sourceMappingURL=multiselect.js.map