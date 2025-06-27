import { getIndexWithPropertyValue } from '../../../utils/collectionhelper.js';
import { VALUE } from '../../../constants/common.js';
export function isItemsChanged(items, oldItems) {
    if (items === oldItems) {
        return false;
    }
    if (oldItems === undefined) {
        return true;
    }
    var len = items.length;
    var oldLen = oldItems.length;
    if (len !== oldLen) {
        return true;
    }
    for (var i = 0; i < len; i++) {
        var key = items[i].value;
        if (getIndexWithPropertyValue(VALUE, key, oldItems) === -1) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=isitemschanged.js.map