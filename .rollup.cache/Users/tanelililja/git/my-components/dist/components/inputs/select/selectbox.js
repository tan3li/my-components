import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelectCommon } from './useselectcommon.js';
import { useSelect } from 'downshift';
import { scrollBottom } from '../../../utils/scrollbottom.js';
import { classNames } from '../../../utils/classnames.js';
import { chain } from 'react-aria';
import { Icon, iconNames } from '../../media/index.js';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { Size } from '../../../constants/index.js';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { ClearButton } from '../../action/index.js';
import { SelectField } from './selectfield.js';
import { useState } from 'react';
export function SelectBox(props) {
    var disabledKeys = props.disabledKeys, isClearable = props.isClearable, isDisabled = props.isDisabled, isPlain = props.isPlain, renderStartContent = props.renderStartContent, startIconName = props.startIconName, _a = props.size, size = _a === void 0 ? Size.md : _a;
    var _b = useSelectCommon(props), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible, hoverProps = _b.hoverProps, isHovered = _b.isHovered, hasError = _b.hasError, isReadOnly = _b.isReadOnly, setIsOpen = _b.setIsOpen, isOpen = _b.isOpen, selectedItem = _b.selectedItem, triggerContentRef = _b.triggerContentRef, listBoxRef = _b.listBoxRef, updateMenuWidth = _b.updateMenuWidth, onSelectionChange = _b.onSelectionChange, flatItems = _b.flatItems, itemsToRender = _b.itemsToRender, menuWidth = _b.menuWidth, fieldProps = _b.fieldProps, helpTextProps = _b.helpTextProps, popoverRef = _b.popoverRef, onHighlightedIndexChange = _b.onHighlightedIndexChange, highlightedIndex = _b.highlightedIndex, highlightSource = _b.highlightSource;
    var _c = useState(false), isClearFocused = _c[0], setIsClearFocused = _c[1];
    var _d = useSelect({
        highlightedIndex: highlightedIndex,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: selectedItem,
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (isReadOnly || newIsOpen === isOpen || isClearFocused) {
                return;
            }
            if (newIsOpen) {
                updateMenuWidth();
            }
            setIsOpen(newIsOpen !== null && newIsOpen !== void 0 ? newIsOpen : false);
        },
        onStateChange: function (changes) {
            if (changes.type === useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown &&
                changes.highlightedIndex === flatItems.length - 1) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: function (state, actionAndChanges) {
            var _a, _b;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ItemClick:
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
    }), getToggleButtonProps = _d.getToggleButtonProps, getLabelProps = _d.getLabelProps, getMenuProps = _d.getMenuProps, getItemProps = _d.getItemProps, selectItem = _d.selectItem;
    var onKeyDown = function (e) {
        safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
    };
    var showClearButton = isClearable && !isOpen && !isDisabled && !isReadOnly && selectedItem;
    var toggleButtonProps = getToggleButtonProps({ disabled: isDisabled, ref: triggerContentRef }, { suppressRefError: true });
    return (_jsx(SelectField, __assign({}, props, { getItemProps: getItemProps, getLabelProps: getLabelProps, getMenuProps: getMenuProps, hasError: hasError, helpTextProps: helpTextProps, highlightSource: highlightSource, highlightedIndex: highlightedIndex, isOpen: isOpen, itemsToRender: itemsToRender, listBoxRef: listBoxRef, menuWidth: menuWidth, popoverRef: popoverRef, selectedItem: selectedItem, triggerContentRef: triggerContentRef }, { children: _jsxs("div", __assign({}, hoverProps, focusProps, toggleButtonProps, fieldProps, { "aria-label": props['aria-label'], className: classNames("select__content select__content--".concat(size, " select__button"), {
                'select__content--plain': isPlain
            }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": (isFocused && !isDisabled) || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined, onBlur: chain(focusProps.onBlur, toggleButtonProps.onBlur), onKeyDown: chain(onKeyDown, toggleButtonProps.onKeyDown) }, { children: [startIconName && _jsx(Icon, { className: "select__start-icon", name: startIconName }), isFunction(renderStartContent) && renderStartContent(selectedItem), _jsx("span", __assign({ className: classNames('select__value', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), "data-placeholder": !selectedItem || undefined }, { children: selectedItem ? selectedItem.text : props.placeholder })), _jsxs("div", __assign({ className: "select__action-buttons" }, { children: [showClearButton && (_jsx(ClearButton, { className: "select__clear-button", onFocusChange: setIsClearFocused, onPress: function () {
                                var _a;
                                selectItem(null);
                                (_a = triggerContentRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            } })), _jsx("div", __assign({ className: "select__expander" }, { children: _jsx(Icon, { className: "select__expand-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })));
}
//# sourceMappingURL=selectbox.js.map