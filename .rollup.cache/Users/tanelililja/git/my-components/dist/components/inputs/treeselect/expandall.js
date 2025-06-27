export function expandAll(items, expandedKeys) {
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], value = _a.value, children = _a.children;
        if (children) {
            expandedKeys.add(value);
            expandAll(children, expandedKeys);
        }
    }
    return expandedKeys;
}
//# sourceMappingURL=expandall.js.map