import { ReactNode } from 'react';
import { Size } from '../../../constants/index.js';
import { SelectItemBase } from './selectitem.js';
import { InteractionSource } from '../../../constants/interactionsource.js';
import { SelectOptionContentProps } from './selectoptioncontentprops.js';
import { UseComboboxReturnValue, UseSelectReturnValue } from 'downshift';
export interface SelectOptionProps<TItem extends SelectItemBase<TItem>> {
    disabledKeys?: Array<TItem['value']>;
    getItemProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    highlightSource?: InteractionSource;
    isFocused?: boolean;
    isSelected?: boolean;
    item: TItem;
    itemClassName?: string | ((item: TItem) => string);
    itemIndex: number;
    level: number;
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    size: Size.md | Size.sm | Size.xs;
    useDataValue?: boolean;
}
declare function SelectOption<TItem extends SelectItemBase<TItem>>({ disabledKeys, getItemProps, highlightSource, isFocused, isSelected, item, itemClassName, itemIndex, level, renderItemContent, size, useDataValue }: SelectOptionProps<TItem>): import("react/jsx-runtime").JSX.Element;
declare const MemoizedSelectOption: typeof SelectOption;
export { MemoizedSelectOption as SelectOption };
//# sourceMappingURL=selectoption.d.ts.map