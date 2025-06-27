import { isNullOrUndefined } from './objecthelper.js';
var comparisonOptions = { sensitivity: 'accent' };
// eslint-disable-next-line complexity
function sortComparator(a, b, sorting) {
    var sortingLen = sorting.length;
    for (var s = 0; s < sortingLen; s++) {
        var sortInfo = sorting[s];
        var props = sortInfo.props;
        var useAscNullsLast = Boolean(sortInfo.ascNullsLast); // Force to boolean
        var useDesc = Boolean(sortInfo.desc); // Force to boolean
        var valueA = a, valueB = b, isANull = isNullOrUndefined(valueA), isBNull = isNullOrUndefined(valueB);
        // If there are nested properties get those
        for (var p = 0; p < props.length; p++) {
            var propName = props[p];
            if (!isANull) {
                valueA = valueA[propName];
            }
            if (!isBNull) {
                valueB = valueB[propName];
            }
            isANull = isNullOrUndefined(valueA);
            isBNull = isNullOrUndefined(valueB);
            if (isANull && !isBNull) {
                return useDesc || useAscNullsLast ? 1 : -1;
            }
            else if (!isANull && isBNull) {
                return useDesc || useAscNullsLast ? -1 : 1;
            }
            else if (isANull && isBNull) {
                break;
            }
        }
        if (valueA !== valueB && !isANull && !isBNull) {
            var typeA = typeof valueA;
            var typeB = typeof valueB;
            if (typeA === 'number' || typeB === 'number' || typeA === 'boolean' || typeB === 'boolean') {
                if (valueA < valueB) {
                    return useDesc ? 1 : -1;
                }
                if (valueA > valueB) {
                    return useDesc ? -1 : 1;
                }
            }
            else {
                // All others go through String localeCompare, get rid off nulls / undefineds
                var val = valueA.localeCompare(valueB, 'fi', comparisonOptions);
                if (val < 0) {
                    return useDesc ? 1 : -1;
                }
                else if (val > 0) {
                    return useDesc ? -1 : 1;
                }
            }
        }
    }
    return 0;
}
/*
 * Bubble sort algorithm
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort
 *
 * best      O(n)
 * average   O(n^2)
 * worst     O(n^2)
 * memory    1
 * stable:   yes
 */
export function bubbleSort(items, comparator, sorting) {
    // Flag that holds info about whether the swap has occur or not.
    var swapped = false;
    var clonedItems = items.slice();
    var itemsLen = clonedItems.length;
    for (var i = 1; i < itemsLen; i += 1) {
        swapped = false;
        for (var j = 0; j < itemsLen - i; j += 1) {
            // Swap elements if they are in wrong order.
            if (comparator(clonedItems[j + 1], clonedItems[j], sorting) < 0) {
                var tmp = clonedItems[j + 1];
                clonedItems[j + 1] = clonedItems[j];
                clonedItems[j] = tmp;
                swapped = true;
            }
        }
        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
            return clonedItems;
        }
    }
    return clonedItems;
}
/*
 * items = Array of objects to sort
 * sortings array of sort details, default sort is Ascending
 *
 * example:
 * [{desc: true, props: ['data', 'customer', 'name']}, {props: ['data', 'invoice', 'number']}, ...]
 */
export function sortByProperties(items, sorting) {
    return bubbleSort(items, sortComparator, sorting);
}
//# sourceMappingURL=sortinghelper.js.map