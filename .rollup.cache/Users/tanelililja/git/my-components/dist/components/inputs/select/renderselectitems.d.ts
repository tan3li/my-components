import { ReactNode } from 'react';
import { Size } from '../../../constants/index.js';
import { SelectItemBase } from './selectitem.js';
import { UseComboboxReturnValue, UseSelectReturnValue } from 'downshift';
import { SelectOptionContentProps } from './selectoptioncontentprops.js';
import { InteractionSource } from '../../../constants/interactionsource.js';
export declare function renderSelectItems<TItem extends SelectItemBase<TItem>>({ createText, disabledKeys, expandedKeys, getItemProps, highlightedIndex, highlightSource, itemClassName, items, renderItemContent, selectedItem, size }: {
    createText: string | ((text: string) => ReactNode);
    disabledKeys?: Array<TItem['value']>;
    expandedKeys?: Set<TItem['value']>;
    getItemProps: UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps'] | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    highlightedIndex: number;
    highlightSource?: InteractionSource;
    itemClassName?: string | ((item: TItem) => string);
    items: TItem[];
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    selectedItem?: TItem | null;
    size: Size.md | Size.sm | Size.xs;
}): ReactNode[];
//# sourceMappingURL=renderselectitems.d.ts.map