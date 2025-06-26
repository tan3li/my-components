import {Filter} from 'react-aria';
import {SelectItemBase} from './selectitem.js';

export function filterItems<TItem extends SelectItemBase<TItem>>(items: TItem[], text: string, filter: Filter) {
    const {contains} = filter;
    const matchingItems: TItem[] = [];

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const itemChildren = item.children;
        const subItems = item.items;

        if (itemChildren) {
            const filteredChildren = filterItems(itemChildren, text, filter);

            if (filteredChildren.length > 0) {
                matchingItems.push({...item, children: filteredChildren});
            } else if (contains(item.text, text)) {
                matchingItems.push({...item, children: undefined});
            }
        } else if (subItems) {
            const filteredSubItems = filterItems(subItems, text, filter);

            if (filteredSubItems.length > 0) {
                matchingItems.push({...item, items: filteredSubItems});
            }
        } else if (contains(item.text, text)) {
            matchingItems.push(item);
        }
    }

    return matchingItems;
}
