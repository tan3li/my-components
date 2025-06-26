import {SelectItemBase} from '../select/index.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {VALUE} from '../../../constants/common.js';

export function isItemsChanged<TItem extends SelectItemBase<TItem>>(items: TItem[], oldItems?: TItem[]) {
    if (items === oldItems) {
        return false;
    }

    if (oldItems === undefined) {
        return true;
    }

    const len = items.length;
    const oldLen = oldItems.length;

    if (len !== oldLen) {
        return true;
    }

    for (let i = 0; i < len; i++) {
        const key = items[i].value;

        if (getIndexWithPropertyValue(VALUE, key, oldItems) === -1) {
            return true;
        }
    }

    return false;
}
