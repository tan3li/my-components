import {SelectItemBase} from '../select/selectitem.js';

export function expandToSelected<TItem extends SelectItemBase<TItem>>(
    items: TItem[],
    expandedKeys: Set<TItem['value']>,
    selectedKey?: TItem['value'] | null,
    parentKeys?: Set<TItem['value']>
) {
    if (!selectedKey || expandedKeys.has(selectedKey)) {
        return expandedKeys;
    }

    for (let i = 0, len = items.length; i < len; i++) {
        const {value, children} = items[i];

        if (value === selectedKey) {
            if (parentKeys) {
                parentKeys.forEach((k) => expandedKeys.add(k));
            }
            break;
        }

        if (children) {
            const parentKeySet = parentKeys ?? new Set();

            parentKeySet.add(value);
            expandToSelected(children, expandedKeys, selectedKey, parentKeySet);

            if (expandedKeys.has(value)) {
                break;
            }
        }
    }

    return expandedKeys;
}
