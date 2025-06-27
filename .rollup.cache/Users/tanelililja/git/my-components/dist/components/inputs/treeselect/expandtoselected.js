export function expandToSelected(items, expandedKeys, selectedKey, parentKeys) {
    if (!selectedKey || expandedKeys.has(selectedKey)) {
        return expandedKeys;
    }
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], value = _a.value, children = _a.children;
        if (value === selectedKey) {
            if (parentKeys) {
                parentKeys.forEach(function (k) { return expandedKeys.add(k); });
            }
            break;
        }
        if (children) {
            var parentKeySet = parentKeys !== null && parentKeys !== void 0 ? parentKeys : new Set();
            parentKeySet.add(value);
            expandToSelected(children, expandedKeys, selectedKey, parentKeySet);
            if (expandedKeys.has(value)) {
                break;
            }
        }
    }
    return expandedKeys;
}
//# sourceMappingURL=expandtoselected.js.map