import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { LabelContext, Popover, Provider, TextContext } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Field } from '../common/field/field.js';
import { Size } from '../../../constants/index.js';
import { SelectOptionsEmptyState } from './selectoptionsemptystate.js';
import { LoadingItem } from './loadingitem.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { BottomLoader } from './bottomloader.js';
import { renderSelectItems } from './renderselectitems.js';
import { SpecialSelectItemKey } from './specialselectitemkey.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { isFunction } from '../../../utils/functionhelper.js';
export function SelectField(_a) {
    var fieldContent = _a.children, className = _a.className, dataState = _a.dataState, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, hasError = _a.hasError, helpText = _a.helpText, helpTextProps = _a.helpTextProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, isDisabled = _a.isDisabled, isOpen = _a.isOpen, isLoading = _a.isLoading, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, itemsToRender = _a.itemsToRender, label = _a.label, listBoxRef = _a.listBoxRef, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, popoverRef = _a.popoverRef, ref = _a.ref, renderItemContent = _a.renderItemContent, propsRenderItemsEmptyState = _a.renderItemsEmptyState, tooltipContent = _a.tooltipContent, triggerContentRef = _a.triggerContentRef, selectedItem = _a.selectedItem, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b;
    var translateCommon = useTranslateCommon();
    var renderCreateText = function (itemText) { return (_jsxs(_Fragment, { children: ["".concat(translateCommon('create'), " "), "\"", _jsx("strong", { children: itemText }), "\""] })); };
    var errorMessage = useDataState(dataState, hasError, isReadOnly).errorMessage;
    var menuProps = getMenuProps({ ref: listBoxRef }, { suppressRefError: true });
    // eslint-disable-next-line sonarjs/function-return-type
    var renderItemsEmptyState = function () {
        var emptyStateProps = {
            size: size
        };
        if (isFunction(propsRenderItemsEmptyState)) {
            return propsRenderItemsEmptyState(emptyStateProps);
        }
        return _jsx(SelectOptionsEmptyState, __assign({}, emptyStateProps), "empty");
    };
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-select", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (_jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, getLabelProps())],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: _jsxs("div", __assign({ className: classNames('select', className), ref: ref }, { children: [_jsx(Field, __assign({ dataState: dataState, helpText: helpText, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: fieldContent })), _jsx(Popover, __assign({ className: "select__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom left", ref: popoverRef, shouldFlip: true, style: menuWidth ? { width: menuWidth } : undefined, triggerRef: triggerContentRef }, { children: _jsxs("div", __assign({}, menuProps, { className: "select__listbox" }, { children: [(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                                !isLoading &&
                                renderItemsEmptyState(), isOpen &&
                                renderSelectItems({
                                    createText: renderCreateText,
                                    disabledKeys: disabledKeys,
                                    expandedKeys: expandedKeys,
                                    getItemProps: getItemProps,
                                    highlightSource: highlightSource,
                                    highlightedIndex: highlightedIndex,
                                    itemClassName: itemClassName,
                                    items: itemsToRender,
                                    renderItemContent: renderItemContent,
                                    selectedItem: selectedItem,
                                    size: size
                                }), isLoading && _jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && _jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })) }))] })) })));
}
//# sourceMappingURL=selectfield.js.map