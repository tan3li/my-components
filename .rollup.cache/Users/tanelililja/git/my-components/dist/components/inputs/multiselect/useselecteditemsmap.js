import { useMemo } from 'react';
export function useSelectedItemsMap(selectedItems) {
    return useMemo(function () {
        var map = new Map();
        for (var i = 0, len = selectedItems.length; i < len; i++) {
            var item = selectedItems[i];
            map.set(item.value, item);
        }
        return map;
    }, [selectedItems]);
}
//# sourceMappingURL=useselecteditemsmap.js.map