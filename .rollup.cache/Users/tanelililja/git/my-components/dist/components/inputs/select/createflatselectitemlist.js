export function createFlatSelectItemList(selectItems, includeHeaders, expandedKeys) {
    var len = selectItems.length;
    if (len === 0) {
        return selectItems;
    }
    var flatItems = [];
    for (var i = 0; i < len; i++) {
        var selectItem = selectItems[i];
        var children = selectItem.children, items = selectItem.items, value = selectItem.value;
        if (!items || includeHeaders) {
            flatItems.push(selectItem);
        }
        if (items) {
            flatItems.push.apply(flatItems, createFlatSelectItemList(items, includeHeaders, expandedKeys));
        }
        else if (children && (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(value)) !== false) {
            flatItems.push.apply(flatItems, createFlatSelectItemList(children, includeHeaders, expandedKeys));
        }
    }
    return flatItems;
}
//# sourceMappingURL=createflatselectitemlist.js.map