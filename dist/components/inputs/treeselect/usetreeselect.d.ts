import { KeyboardEvent } from 'react';
import { InputChangeTriggerAction } from '../select/selectprops.js';
import { SelectItemBase } from '../select/index.js';
interface UseTreeSelectOptions<TItem extends SelectItemBase<TItem>> {
    defaultExpandedKeys?: Set<TItem['value']>;
    expandedKeys?: Set<TItem['value']>;
    items: TItem[];
    onExpandedChange?: (expandedKeys: Set<TItem['value']>) => void;
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    onLoadChildren?: (item: TItem) => Promise<void>;
}
export declare function useTreeSelect<TItem extends SelectItemBase<TItem>>({ defaultExpandedKeys, expandedKeys: propsExpandedKeys, items, onExpandedChange: propsOnExpandedChange, onLoadChildren, ...options }: UseTreeSelectOptions<TItem>): {
    items: TItem[];
    onInputChange: (inputValue: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    onToggleItem: (item: TItem) => void;
    onKeyDown: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    expandedKeys: Set<TItem["value"]>;
    loadingKeys: Set<TItem["value"]>;
};
export {};
//# sourceMappingURL=usetreeselect.d.ts.map