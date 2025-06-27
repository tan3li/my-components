import { ReactNode } from 'react';
import { Size } from '../../../constants/index.js';
import { SelectItemBase } from '../select/index.js';
import { UseComboboxReturnValue, UseSelectReturnValue } from 'downshift';
import { SelectOptionContentProps } from '../select/selectoptioncontentprops.js';
import { InteractionSource } from '../../../constants/interactionsource.js';
export declare function renderMultiSelectItems<TItem extends SelectItemBase<TItem>>({ createText, disabledKeys, expandedKeys, getItemProps, highlightedIndex, highlightSource, itemClassName, items, renderItemContent, selectedItemsMap, size }: {
    createText: string | ((text: string) => ReactNode);
    disabledKeys?: Array<TItem['value']>;
    expandedKeys?: Set<TItem['value']>;
    getItemProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    highlightedIndex: number;
    highlightSource?: InteractionSource;
    itemClassName?: string | ((item: TItem) => string);
    items: TItem[];
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    selectedItemsMap: Map<TItem['value'], TItem>;
    size: Size.md | Size.sm | Size.xs;
}): ReactNode[];
//# sourceMappingURL=rendermultiselectitems.d.ts.map