import { TextProps } from 'react-aria-components';
import { ReactNode, RefObject } from 'react';
import { SelectItemBase } from './selectitem.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectProps } from './selectprops.js';
import { UseComboboxReturnValue, UseSelectReturnValue } from 'downshift';
import { InteractionSource } from '../../../constants/interactionsource.js';
interface SelectFieldProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
    children: ReactNode;
    getItemProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    getLabelProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getLabelProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getLabelProps'];
    getMenuProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getMenuProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getMenuProps'];
    hasError: boolean;
    helpTextProps: TextProps;
    highlightedIndex: number;
    highlightSource: InteractionSource;
    isOpen: boolean;
    itemsToRender: TItem[];
    listBoxRef: RefObject<HTMLDivElement | null>;
    popoverRef: RefObject<HTMLDivElement | null>;
    selectedItem: TItem | null;
    triggerContentRef: RefObject<HTMLDivElement | null>;
}
export declare function SelectField<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ children: fieldContent, className, dataState, disabledKeys, expandedKeys, getItemProps, getLabelProps, getMenuProps, hasError, helpText, helpTextProps, highlightedIndex, highlightSource, isDisabled, isOpen, isLoading, isReadOnly, isRequired, isSkeleton, itemClassName, itemsToRender, label, listBoxRef, menuWidth, onBottomLoaderVisible, popoverRef, ref, renderItemContent, renderItemsEmptyState: propsRenderItemsEmptyState, tooltipContent, triggerContentRef, selectedItem, showHelpTextIcon, size }: SelectFieldProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=selectfield.d.ts.map