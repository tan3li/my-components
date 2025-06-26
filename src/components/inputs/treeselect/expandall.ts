import {SelectItemBase} from '../select/selectitem.js';

export function expandAll<TItem extends SelectItemBase<TItem>>(items: TItem[], expandedKeys: Set<TItem['value']>) {
    for (let i = 0, len = items.length; i < len; i++) {
        const {value, children} = items[i];

        if (children) {
            expandedKeys.add(value);
            expandAll(children, expandedKeys);
        }
    }

    return expandedKeys;
}
