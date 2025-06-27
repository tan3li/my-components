export function isAllItemsSelected(items, selectedItemsMap) {
    var isAllSelected = true;
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], children = _a.children, value = _a.value;
        if (!selectedItemsMap.has(value) || (children && !isAllItemsSelected(children, selectedItemsMap))) {
            isAllSelected = false;
            break;
        }
    }
    return isAllSelected;
}
//# sourceMappingURL=isallitemsselected.js.map