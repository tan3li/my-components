var _a, _b;
import { __assign, __rest, __spreadArray } from "tslib";
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { InputChangeTriggerAction } from '../select/index.js';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { useFilter } from 'react-aria';
import { createFlatSelectItemList } from '../select/createflatselectitemlist.js';
import { useCombobox } from 'downshift';
import { safeCall } from '../../../utils/functionhelper.js';
import { FilterButton } from '../filterselect/filterbutton.js';
import { Dialog, Popover } from 'react-aria-components';
import { SearchField } from '../searchfield/index.js';
import { SelectOptionsEmptyState } from '../select/selectoptionsemptystate.js';
import { LoadingItem } from '../select/loadingitem.js';
import { BottomLoader } from '../select/bottomloader.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { useSelectedItemsMap } from '../multiselect/useselecteditemsmap.js';
import { renderMultiSelectItems } from '../multiselect/rendermultiselectitems.js';
import { filterItems } from '../select/filteritems.js';
import { updateSelectedItems } from '../multiselect/updateselecteditems.js';
import { isItemsChanged } from '../multiselect/isitemschanged.js';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { scrollBottom } from '../../../utils/scrollbottom.js';
import { InteractionSource } from '../../../constants/interactionsource.js';
import { useSelectItemHighlight } from '../select/useselectitemhighlight.js';
import { useSelectOptionCountAnnouncement } from '../select/useselectoptioncountannouncement.js';
var footerButtonSize = (_a = {},
    _a[Size.xs] = Size.sm,
    _a[Size.sm] = Size.md,
    _a[Size.md] = Size.lg,
    _a);
var defaultMenuWidth = (_b = {},
    _b[Size.xs] = 250,
    _b[Size.sm] = 250,
    _b[Size.md] = 300,
    _b);
export function FilterMultiSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, _b = _a.isClearable, isClearable = _b === void 0 ? true : _b, isDisabled = _a.isDisabled, isLoading = _a.isLoading, _c = _a.isSelectable, isSelectable = _c === void 0 ? true : _c, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, propsOnInputChange = _a.onInputChange, propsOnOpenChange = _a.onOpenChange, ref = _a.ref, renderItemContent = _a.renderItemContent, searchPlaceholder = _a.searchPlaceholder, propsSelectedItems = _a.selectedItems, showHelpTextIcon = _a.showHelpTextIcon, _d = _a.size, size = _d === void 0 ? Size.md : _d, startIconName = _a.startIconName;
    var translateCommon = useTranslateCommon();
    var localFilter = useFilter({ sensitivity: 'base' });
    var triggerRef = useRef(null);
    var menuRef = useRef(null);
    var _e = useState(false), isSearchFocused = _e[0], setIsSearchFocused = _e[1];
    var _f = useState(''), inputValue = _f[0], setInputValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useSelectItemHighlight(), highlightedIndex = _h.highlightedIndex, onHighlightedIndexChange = _h.onHighlightedIndexChange, highlightSource = _h.highlightSource, setHighlightSource = _h.setHighlightSource;
    var _j = useState(null), tempSelectedItems = _j[0], setTempSelectedItems = _j[1];
    var _k = useState(propsSelectedItems ? __spreadArray([], propsSelectedItems, true) : []), selectedItems = _k[0], setSelectedItems = _k[1];
    var _l = useState(null), filteredItems = _l[0], setFilteredItems = _l[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    var flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);
    var onSearchFocusChange = function (isFocused) {
        setIsSearchFocused(isFocused);
        setHighlightSource(InteractionSource.Mouse);
    };
    var onInputChange = function (val) {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);
        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var triggerChange = function (newSelectedItems) {
        if (isItemsChanged(newSelectedItems, propsSelectedItems)) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newSelectedItems.slice() }));
        }
    };
    var clearSelectedItems = function () {
        var newSelectedItems = [];
        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
    };
    var _m = useCombobox({
        highlightedIndex: highlightedIndex,
        selectedItem: null,
        inputValue: inputValue,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            if (newSelectedItem && tempSelectedItems) {
                updateSelectedItems(tempSelectedItems, newSelectedItem);
                setTempSelectedItems(__spreadArray([], tempSelectedItems, true));
            }
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
                setTempSelectedItems(__spreadArray([], selectedItems, true));
            }
            else {
                setTempSelectedItems(null);
            }
            setIsOpen(newIsOpen);
            propsOnOpenChange === null || propsOnOpenChange === void 0 ? void 0 : propsOnOpenChange(newIsOpen);
        },
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    return __assign(__assign({}, changes), { isOpen: true, highlightedIndex: state.highlightedIndex // ...with same option highlighted
                     });
                case useCombobox.stateChangeTypes.InputBlur:
                    // Keep the current state on input blur (out-click, Tab etc.)
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex, isOpen: true });
                default:
                    return changes;
            }
        },
        onStateChange: function (changes) {
            var type = changes.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                    if (changes.highlightedIndex === flatItems.length - 1) {
                        // scroll at the bottom when last item is highlighted to make sure loader is visible
                        scrollBottom(menuRef.current);
                    }
                    break;
                default:
                    break;
            }
        }
    }), getToggleButtonProps = _m.getToggleButtonProps, getLabelProps = _m.getLabelProps, getMenuProps = _m.getMenuProps, getInputProps = _m.getInputProps, getItemProps = _m.getItemProps, openMenu = _m.openMenu, closeMenu = _m.closeMenu;
    var clearTempSelectedItems = function () {
        setTempSelectedItems([]);
    };
    var confirmTempSelectedItems = function () {
        if (tempSelectedItems) {
            setSelectedItems(__spreadArray([], tempSelectedItems, true));
            triggerChange(tempSelectedItems);
            closeMenu();
        }
    };
    useEffect(function () {
        setSelectedItems(propsSelectedItems ? __spreadArray([], propsSelectedItems, true) : []);
    }, [propsSelectedItems]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _o = getToggleButtonProps(), onClick = _o.onClick, onPress = _o.onPress, toggleButtonProps = __rest(_o, ["onClick", "onPress"]);
    var inputProps = getInputProps({}, { suppressRefError: true });
    var menuProps = getMenuProps({ ref: menuRef }, { suppressRefError: true });
    var labelProps = getLabelProps();
    var selectedCount = selectedItems.length;
    var tempSelectedCount = tempSelectedItems === null || tempSelectedItems === void 0 ? void 0 : tempSelectedItems.length;
    var selectedItemsMap = useSelectedItemsMap(tempSelectedItems !== null && tempSelectedItems !== void 0 ? tempSelectedItems : []);
    var selectedCountForButton = isNullOrUndefined(tempSelectedCount) ? selectedCount : tempSelectedCount;
    var selectedItemsText = selectedCountForButton > 0 ? " (".concat(selectedCountForButton, ")") : '';
    if (selectedCountForButton === 1) {
        selectedItemsText = ": ".concat((tempSelectedItems !== null && tempSelectedItems !== void 0 ? tempSelectedItems : selectedItems)[0].text);
    }
    return (_jsxs(_Fragment, { children: [_jsx(FilterButton, __assign({ className: classNames('filter-multiselect', className), clearButtonProps: { onPress: clearSelectedItems }, helpText: helpText, isActive: selectedCount > 0, isDisabled: isDisabled, isFocusable: isSelectable, isOpen: isOpen, isSkeleton: isSkeleton, label: label, labelProps: __assign(__assign({}, labelProps), { htmlFor: [labelProps.htmlFor, toggleButtonProps.id].join(' ') }), onOpenChange: function (newIsOpen) { return (newIsOpen ? openMenu() : closeMenu()); }, ref: ref, showClearButton: isClearable, showHelpTextIcon: showHelpTextIcon, size: size, startIconName: startIconName, toggleButtonProps: __assign(__assign({}, toggleButtonProps), { ref: triggerRef }) }, { children: _jsxs(_Fragment, { children: [label, selectedItemsText] }) })), _jsx(Popover, __assign({ className: "filter-select__popover", isOpen: isOpen, maxHeight: 375, onOpenChange: closeMenu, placement: "bottom start", shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : defaultMenuWidth[size] }, triggerRef: triggerRef }, { children: _jsx(Dialog, __assign({ "aria-label": label, className: "filter-select__dialog" }, { children: _jsxs("div", __assign({ className: "filter-select__menu" }, { children: [_jsx("div", __assign({ className: "filter-select__menu-header" }, { children: _jsx(SearchField, __assign({}, inputProps, { "aria-label": translateCommon('search'), autoFocus: true, onChange: onInputChange, onFocusChange: onSearchFocusChange, placeholder: searchPlaceholder !== null && searchPlaceholder !== void 0 ? searchPlaceholder : translateCommon('search'), size: size })) })), _jsxs("div", __assign({}, menuProps, { className: "filter-select__menu-body", tabIndex: -1 }, { children: [itemsToRender.length === 0 && !isLoading && (_jsx(SelectOptionsEmptyState, { size: size }, "empty")), renderMultiSelectItems({
                                        createText: '',
                                        disabledKeys: disabledKeys,
                                        expandedKeys: expandedKeys,
                                        getItemProps: getItemProps,
                                        highlightedIndex: highlightedIndex,
                                        highlightSource: isSearchFocused ? highlightSource : undefined,
                                        itemClassName: itemClassName,
                                        items: itemsToRender,
                                        renderItemContent: renderItemContent,
                                        selectedItemsMap: selectedItemsMap,
                                        size: size
                                    }), isLoading && _jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && _jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })), _jsxs("div", __assign({ className: "filter-select__menu-footer" }, { children: [isClearable && (_jsx(Button, __assign({ onPress: clearTempSelectedItems, size: footerButtonSize[size], style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('reset') }))), _jsx("div", __assign({ className: "filter-select__menu-footer-btn-group" }, { children: _jsxs(Button, __assign({ isDisabled: !isClearable && tempSelectedCount === 0, onPress: confirmTempSelectedItems, size: footerButtonSize[size], style: ButtonStyle.Fill, variant: ButtonVariant.Accent }, { children: [translateCommon('apply'), tempSelectedCount ? " (".concat(tempSelectedCount, ")") : ''] })) }))] }))] })) })) }))] }));
}
//# sourceMappingURL=filtermultiselect.js.map