import { getIndexWithPropertyValue } from '../../../utils/collectionhelper.js';
import { VALUE } from '../../../constants/common.js';
function findUnselectedItems(items, selectedItems) {
    var unselectedItems = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children, value = item.value;
        var idx = getIndexWithPropertyValue(VALUE, value, selectedItems);
        if (idx === -1) {
            unselectedItems.push(item);
        }
        if (children) {
            unselectedItems.push.apply(unselectedItems, findUnselectedItems(children, selectedItems));
        }
    }
    return unselectedItems;
}
function findSelectedItemIndices(items, selectedItems) {
    var indices = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children, value = item.value;
        var idx = getIndexWithPropertyValue(VALUE, value, selectedItems);
        if (idx !== -1) {
            indices.push(idx);
        }
        if (children) {
            indices.push.apply(indices, findSelectedItemIndices(children, selectedItems));
        }
    }
    return indices;
}
export function updateSelectedItems(selectedItems, selectedItem) {
    var subItems = selectedItem.items;
    if (subItems) {
        var subItemsToSelect = [];
        var selectedItemIndices = [];
        for (var i = 0, len = subItems.length; i < len; i++) {
            var subItem = subItems[i];
            var children = subItem.children, value = subItem.value;
            var idx_1 = getIndexWithPropertyValue(VALUE, value, selectedItems);
            if (idx_1 === -1) {
                subItemsToSelect.push(subItem);
                if (children) {
                    subItemsToSelect.push.apply(subItemsToSelect, findUnselectedItems(children, selectedItems));
                }
            }
            else {
                if (children) {
                    var unselectedChildren = findUnselectedItems(children, selectedItems);
                    if (unselectedChildren.length > 0) {
                        subItemsToSelect.push.apply(subItemsToSelect, unselectedChildren);
                        continue;
                    }
                }
                selectedItemIndices.push(idx_1);
                if (children) {
                    selectedItemIndices.push.apply(selectedItemIndices, findSelectedItemIndices(children, selectedItems));
                }
            }
        }
        if (subItemsToSelect.length === 0) {
            // All sub-items selected --> remove from selected.
            selectedItemIndices.sort(function (a, b) { return b - a; }); // sort desc
            for (var i = 0, len = selectedItemIndices.length; i < len; i++) {
                selectedItems.splice(selectedItemIndices[i], 1);
            }
        }
        else {
            selectedItems.push.apply(selectedItems, subItemsToSelect);
        }
        return selectedItems;
    }
    var idx = getIndexWithPropertyValue(VALUE, selectedItem.value, selectedItems);
    if (idx === -1) {
        selectedItems.push(selectedItem);
        var children = selectedItem.children;
        if (children) {
            selectedItems.push.apply(selectedItems, findUnselectedItems(children, selectedItems));
        }
    }
    else {
        selectedItems.splice(idx, 1);
    }
    return selectedItems;
}
//# sourceMappingURL=updateselecteditems.js.map