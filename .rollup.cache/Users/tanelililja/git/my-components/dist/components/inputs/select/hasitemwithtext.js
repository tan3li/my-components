export function hasItemWithText(items, searchText) {
    var searchTxt = searchText.toLowerCase();
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children;
        var subItems = item.items;
        var text = item.text.toLowerCase();
        if (text === searchTxt ||
            (children && hasItemWithText(children, searchText)) ||
            (subItems && hasItemWithText(subItems, searchText))) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=hasitemwithtext.js.map