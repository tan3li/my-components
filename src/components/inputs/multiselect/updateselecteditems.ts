import {SelectItemBase} from '../select/index.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {VALUE} from '../../../constants/common.js';

function findUnselectedItems<TItem extends SelectItemBase<TItem>>(items: TItem[], selectedItems: TItem[]) {
    const unselectedItems: TItem[] = [];

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const {children, value} = item;
        const idx = getIndexWithPropertyValue(VALUE, value, selectedItems);

        if (idx === -1) {
            unselectedItems.push(item);
        }

        if (children) {
            unselectedItems.push(...findUnselectedItems(children, selectedItems));
        }
    }

    return unselectedItems;
}

function findSelectedItemIndices<TItem extends SelectItemBase<TItem>>(items: TItem[], selectedItems: TItem[]) {
    const indices: number[] = [];

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const {children, value} = item;
        const idx = getIndexWithPropertyValue(VALUE, value, selectedItems);

        if (idx !== -1) {
            indices.push(idx);
        }

        if (children) {
            indices.push(...findSelectedItemIndices(children, selectedItems));
        }
    }

    return indices;
}

export function updateSelectedItems<TItem extends SelectItemBase<TItem>>(selectedItems: TItem[], selectedItem: TItem) {
    const subItems = selectedItem.items;

    if (subItems) {
        const subItemsToSelect: TItem[] = [];
        const selectedItemIndices: number[] = [];

        for (let i = 0, len = subItems.length; i < len; i++) {
            const subItem = subItems[i];
            const {children, value} = subItem;
            const idx = getIndexWithPropertyValue(VALUE, value, selectedItems);

            if (idx === -1) {
                subItemsToSelect.push(subItem);

                if (children) {
                    subItemsToSelect.push(...findUnselectedItems(children, selectedItems));
                }
            } else {
                if (children) {
                    const unselectedChildren = findUnselectedItems(children, selectedItems);

                    if (unselectedChildren.length > 0) {
                        subItemsToSelect.push(...unselectedChildren);
                        continue;
                    }
                }

                selectedItemIndices.push(idx);

                if (children) {
                    selectedItemIndices.push(...findSelectedItemIndices(children, selectedItems));
                }
            }
        }

        if (subItemsToSelect.length === 0) {
            // All sub-items selected --> remove from selected.
            selectedItemIndices.sort((a, b) => b - a); // sort desc

            for (let i = 0, len = selectedItemIndices.length; i < len; i++) {
                selectedItems.splice(selectedItemIndices[i], 1);
            }
        } else {
            selectedItems.push(...subItemsToSelect);
        }

        return selectedItems;
    }

    const idx = getIndexWithPropertyValue(VALUE, selectedItem.value, selectedItems);

    if (idx === -1) {
        selectedItems.push(selectedItem);

        const children = selectedItem.children;

        if (children) {
            selectedItems.push(...findUnselectedItems(children, selectedItems));
        }
    } else {
        selectedItems.splice(idx, 1);
    }

    return selectedItems;
}
