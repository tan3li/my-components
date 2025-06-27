import { __assign } from "tslib";
export function filterItems(items, text, filter) {
    var contains = filter.contains;
    var matchingItems = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var itemChildren = item.children;
        var subItems = item.items;
        if (itemChildren) {
            var filteredChildren = filterItems(itemChildren, text, filter);
            if (filteredChildren.length > 0) {
                matchingItems.push(__assign(__assign({}, item), { children: filteredChildren }));
            }
            else if (contains(item.text, text)) {
                matchingItems.push(__assign(__assign({}, item), { children: undefined }));
            }
        }
        else if (subItems) {
            var filteredSubItems = filterItems(subItems, text, filter);
            if (filteredSubItems.length > 0) {
                matchingItems.push(__assign(__assign({}, item), { items: filteredSubItems }));
            }
        }
        else if (contains(item.text, text)) {
            matchingItems.push(item);
        }
    }
    return matchingItems;
}
//# sourceMappingURL=filteritems.js.map