import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputChangeTriggerAction } from './selectprops.js';
import { useSelectCommon } from './useselectcommon.js';
import { useCombobox } from 'downshift';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { filterItems } from './filteritems.js';
import { scrollBottom } from '../../../utils/scrollbottom.js';
import { classNames } from '../../../utils/classnames.js';
import { Icon, iconNames } from '../../media/index.js';
import { Size } from '../../../constants/index.js';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { chain } from 'react-aria';
import { ClearButton } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { useRef } from 'react';
import { SelectField } from './selectfield.js';
import { useSelectOptionCountAnnouncement } from './useselectoptioncountannouncement.js';
export function ComboBox(props) {
    var translateCommon = useTranslateCommon();
    var inputRef = useRef(null);
    var disabledKeys = props.disabledKeys, isClearable = props.isClearable, isDisabled = props.isDisabled, isPlain = props.isPlain, items = props.items, preserveInputValue = props.preserveInputValue, renderStartContent = props.renderStartContent, _a = props.showSearchIcon, showSearchIcon = _a === void 0 ? true : _a, startIconName = props.startIconName, _b = props.size, size = _b === void 0 ? Size.md : _b, text = props.text;
    var _c = useSelectCommon(props), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible, hoverProps = _c.hoverProps, isHovered = _c.isHovered, hasError = _c.hasError, isReadOnly = _c.isReadOnly, setIsOpen = _c.setIsOpen, isOpen = _c.isOpen, selectedItem = _c.selectedItem, inputValue = _c.inputValue, setInputValue = _c.setInputValue, setFilteredItems = _c.setFilteredItems, triggerContentRef = _c.triggerContentRef, listBoxRef = _c.listBoxRef, localFilter = _c.localFilter, updateMenuWidth = _c.updateMenuWidth, onSelectionChange = _c.onSelectionChange, flatItems = _c.flatItems, itemsToRender = _c.itemsToRender, menuWidth = _c.menuWidth, fieldProps = _c.fieldProps, helpTextProps = _c.helpTextProps, popoverRef = _c.popoverRef, onHighlightedIndexChange = _c.onHighlightedIndexChange, highlightedIndex = _c.highlightedIndex, highlightSource = _c.highlightSource;
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var _d = useCombobox({
        highlightedIndex: highlightedIndex,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: selectedItem,
        inputValue: inputValue,
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onInputValueChange: function (_a) {
            var newInputValue = _a.inputValue;
            setInputValue(newInputValue !== null && newInputValue !== void 0 ? newInputValue : '');
        },
        onIsOpenChange: function (_a) {
            var _b, _c;
            var newIsOpen = _a.isOpen, type = _a.type, currSelectedItem = _a.selectedItem;
            if (isReadOnly || newIsOpen === isOpen || (type === useCombobox.stateChangeTypes.InputClick && isOpen)) {
                return;
            }
            if (newIsOpen) {
                // Clear external filtering on open.
                safeCall(props.onInputChange, '', InputChangeTriggerAction.Focus);
                updateMenuWidth();
            }
            else {
                setFilteredItems(null);
                if (!preserveInputValue) {
                    if (currSelectedItem) {
                        setInputValue((_c = (_b = currSelectedItem.text) !== null && _b !== void 0 ? _b : text) !== null && _c !== void 0 ? _c : '');
                    }
                    else {
                        setInputValue('');
                    }
                }
            }
            setIsOpen(newIsOpen !== null && newIsOpen !== void 0 ? newIsOpen : false);
        },
        onStateChange: function (changes) {
            var type = changes.type;
            if ((type === useCombobox.stateChangeTypes.InputKeyDownArrowUp ||
                type === useCombobox.stateChangeTypes.InputKeyDownArrowDown) &&
                changes.highlightedIndex === flatItems.length - 1) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: function (state, actionAndChanges) {
            var _a, _b;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEscape:
                    if (isClearable) {
                        return changes;
                    }
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue });
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if ((_a = changes.selectedItem) === null || _a === void 0 ? void 0 : _a.action) {
                        changes.selectedItem.action.callback();
                        return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue });
                    }
                    if ((_b = changes.selectedItem) === null || _b === void 0 ? void 0 : _b.isReadOnly) {
                        return __assign(__assign({}, changes), { isOpen: true, selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex });
                    }
                    return changes;
                default:
                    return changes;
            }
        }
    }), getToggleButtonProps = _d.getToggleButtonProps, getLabelProps = _d.getLabelProps, getMenuProps = _d.getMenuProps, getInputProps = _d.getInputProps, getItemProps = _d.getItemProps, selectItem = _d.selectItem;
    var onKeyDown = function (e) {
        safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
    };
    var onInputChange = function (e) {
        var newInputValue = e.target.value;
        setInputValue(newInputValue);
        safeCall(props.onInputChange, newInputValue, InputChangeTriggerAction.Input);
        if (!newInputValue && isClearable) {
            onSelectionChange(null);
        }
        if (!props.onInputChange) {
            setFilteredItems(newInputValue ? filterItems(items, newInputValue, localFilter) : null);
        }
    };
    var showClearButton = !!isClearable &&
        !isOpen &&
        !isDisabled &&
        !isReadOnly &&
        (!!selectedItem || (!!preserveInputValue && !!inputValue));
    var inputProps = getInputProps({
        disabled: isDisabled,
        // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
        onChange: onInputChange,
        ref: inputRef
    }, { suppressRefError: true });
    var toggleButtonProps = getToggleButtonProps({ disabled: isDisabled });
    return (_jsx(SelectField, __assign({}, props, { getItemProps: getItemProps, getLabelProps: getLabelProps, getMenuProps: getMenuProps, hasError: hasError, helpTextProps: helpTextProps, highlightSource: highlightSource, highlightedIndex: highlightedIndex, isOpen: isOpen, itemsToRender: itemsToRender, listBoxRef: listBoxRef, menuWidth: menuWidth, popoverRef: popoverRef, selectedItem: selectedItem, triggerContentRef: triggerContentRef }, { children: _jsxs("div", __assign({}, hoverProps, focusProps, { className: classNames("select__content select__content--".concat(size), {
                'select__content--plain': isPlain
            }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined, ref: triggerContentRef }, { children: [isOpen && showSearchIcon && _jsx(Icon, { className: "select__search-icon", name: iconNames.MagnifyingGlass }), !isOpen && startIconName && _jsx(Icon, { className: "select__start-icon", name: startIconName }), !isOpen && isFunction(renderStartContent) && renderStartContent(selectedItem), _jsx("input", __assign({}, inputProps, fieldProps, { "aria-label": props['aria-label'], className: classNames('select__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), onKeyDown: chain(onKeyDown, inputProps.onKeyDown), placeholder: isOpen ? translateCommon('search') : props.placeholder, readOnly: isReadOnly, size: 1 })), _jsxs("div", __assign({ className: "select__action-buttons" }, { children: [showClearButton && (_jsx(ClearButton, { className: "select__clear-button", onPress: function () {
                                var _a;
                                selectItem(null);
                                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            } })), _jsx("button", __assign({}, toggleButtonProps, { "aria-label": translateCommon('toggleMenu'), className: "select__expander" }, { children: _jsx(Icon, { className: "select__expand-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })));
}
//# sourceMappingURL=combobox.js.map