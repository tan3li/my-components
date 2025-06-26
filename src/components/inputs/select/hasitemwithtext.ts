import {SelectItemBase} from './selectitem.js';

export function hasItemWithText<TItem extends SelectItemBase<TItem>>(items: TItem[], searchText: string) {
    const searchTxt = searchText.toLowerCase();

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const children = item.children;
        const subItems = item.items;
        const text = item.text.toLowerCase();

        if (
            text === searchTxt ||
            (children && hasItemWithText(children, searchText)) ||
            (subItems && hasItemWithText(subItems, searchText))
        ) {
            return true;
        }
    }

    return false;
}
