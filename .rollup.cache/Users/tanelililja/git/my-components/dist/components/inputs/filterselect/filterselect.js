import { __assign, __rest } from "tslib";
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FilterButton } from './filterbutton.js';
import { useEffect, useRef, useState } from 'react';
import { Size } from '../../../constants/index.js';
import { InputChangeTriggerAction } from '../select/index.js';
import { useCombobox } from 'downshift';
import { Dialog, Popover } from 'react-aria-components';
import { SearchField } from '../searchfield/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { renderSelectItems } from '../select/renderselectitems.js';
import { createFlatSelectItemList } from '../select/createflatselectitemlist.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { filterItems } from '../select/filteritems.js';
import { useFilter } from 'react-aria';
import { SelectOptionsEmptyState } from '../select/selectoptionsemptystate.js';
import { LoadingItem } from '../select/loadingitem.js';
import { BottomLoader } from '../select/bottomloader.js';
import { useScrollToSelectedOption } from '../select/usescrolltoselectedoption.js';
import { classNames } from '../../../utils/classnames.js';
import { useSelectItemHighlight } from '../select/useselectitemhighlight.js';
import { useSelectOptionCountAnnouncement } from '../select/useselectoptioncountannouncement.js';
export function FilterSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, _b = _a.isClearable, isClearable = _b === void 0 ? true : _b, isDisabled = _a.isDisabled, isLoading = _a.isLoading, _c = _a.isSelectable, isSelectable = _c === void 0 ? true : _c, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, propsOnInputChange = _a.onInputChange, ref = _a.ref, renderItemContent = _a.renderItemContent, searchPlaceholder = _a.searchPlaceholder, showHelpTextIcon = _a.showHelpTextIcon, _d = _a.size, size = _d === void 0 ? Size.md : _d, startIconName = _a.startIconName, text = _a.text, value = _a.value;
    var translateCommon = useTranslateCommon();
    var localFilter = useFilter({ sensitivity: 'base' });
    var triggerRef = useRef(null);
    var menuRef = useRef(null);
    var _e = useState(value && text ? { value: value, text: text } : null), selectedItem = _e[0], setSelectedItem = _e[1];
    var _f = useState(''), inputValue = _f[0], setInputValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useSelectItemHighlight(), highlightedIndex = _h.highlightedIndex, onHighlightedIndexChange = _h.onHighlightedIndexChange, highlightSource = _h.highlightSource;
    var _j = useState(null), filteredItems = _j[0], setFilteredItems = _j[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    var flatItems = createFlatSelectItemList(itemsToRender, false, expandedKeys);
    var onInputChange = function (val) {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);
        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var onSelectionChange = function (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        if (newSelectedItem) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), newSelectedItem));
        }
        else {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: null }));
        }
    };
    useScrollToSelectedOption({ isLoading: isLoading, isOpen: isOpen, menuRef: menuRef });
    useEffect(function () {
        if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) !== (value !== null && value !== void 0 ? value : undefined) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) !== text) {
            setSelectedItem(value && text ? { value: value, text: text } : null);
        }
    }, [value, text]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var _k = useCombobox({
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (!isSelectable) {
                return;
            }
            if (newIsOpen) {
                // Clear filtering on open
                safeCall(propsOnInputChange, '', InputChangeTriggerAction.Focus);
                setInputValue('');
                setFilteredItems(null);
            }
            setIsOpen(newIsOpen);
        },
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            // eslint-disable-next-line sonarjs/no-small-switch
            switch (type) {
                case useCombobox.stateChangeTypes.InputBlur:
                    // Keep the current state on input blur (out-click, Tab etc.)
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex, isOpen: true });
                default:
                    return changes;
            }
        }
    }), getToggleButtonProps = _k.getToggleButtonProps, getLabelProps = _k.getLabelProps, getMenuProps = _k.getMenuProps, getInputProps = _k.getInputProps, getItemProps = _k.getItemProps, openMenu = _k.openMenu, closeMenu = _k.closeMenu, selectItem = _k.selectItem;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _l = getToggleButtonProps(), onClick = _l.onClick, onPress = _l.onPress, toggleButtonProps = __rest(_l, ["onClick", "onPress"]);
    var inputProps = getInputProps({}, { suppressRefError: true });
    var menuProps = getMenuProps({ ref: menuRef }, { suppressRefError: true });
    var labelProps = getLabelProps();
    return (_jsxs(_Fragment, { children: [_jsx(FilterButton, __assign({ className: classNames('filter-select', className), clearButtonProps: { onPress: function () { return selectItem(null); } }, helpText: helpText, isActive: !!selectedItem, isDisabled: isDisabled, isFocusable: isSelectable, isOpen: isOpen, isSkeleton: isSkeleton, label: label, labelProps: __assign(__assign({}, labelProps), { htmlFor: [labelProps.htmlFor, toggleButtonProps.id].join(' ') }), onOpenChange: function (newIsOpen) { return (newIsOpen ? openMenu() : closeMenu()); }, ref: ref, showClearButton: isClearable, showHelpTextIcon: showHelpTextIcon, size: size, startIconName: startIconName, toggleButtonProps: __assign(__assign({}, toggleButtonProps), { ref: triggerRef }) }, { children: _jsxs(_Fragment, { children: [label, selectedItem && ": ".concat(selectedItem.text)] }) })), _jsx(Popover, __assign({ className: "filter-select__popover", isOpen: isOpen, maxHeight: 375, onOpenChange: closeMenu, placement: "bottom start", shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : '250px' }, triggerRef: triggerRef }, { children: _jsx(Dialog, __assign({ "aria-label": label, className: "filter-select__dialog" }, { children: _jsxs("div", __assign({ className: "filter-select__menu" }, { children: [_jsx("div", __assign({ className: "filter-select__menu-header" }, { children: _jsx(SearchField, __assign({}, inputProps, { "aria-label": translateCommon('search'), autoFocus: true, onChange: onInputChange, placeholder: searchPlaceholder !== null && searchPlaceholder !== void 0 ? searchPlaceholder : translateCommon('search'), size: size })) })), _jsxs("div", __assign({}, menuProps, { className: "filter-select__menu-body" }, { children: [itemsToRender.length === 0 && !isLoading && (_jsx(SelectOptionsEmptyState, { size: size }, "empty")), renderSelectItems({
                                        createText: '',
                                        disabledKeys: disabledKeys,
                                        expandedKeys: expandedKeys,
                                        getItemProps: getItemProps,
                                        highlightedIndex: highlightedIndex,
                                        highlightSource: highlightSource,
                                        itemClassName: itemClassName,
                                        items: itemsToRender,
                                        renderItemContent: renderItemContent,
                                        selectedItem: selectedItem,
                                        size: size
                                    }), isLoading && _jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && _jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] }))] })) })) }))] }));
}
//# sourceMappingURL=filterselect.js.map