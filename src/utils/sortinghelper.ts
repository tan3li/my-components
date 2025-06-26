import {isNullOrUndefined} from './objecthelper.js';

const comparisonOptions = {sensitivity: 'accent'} as const;

type Sorting = Array<
    Record<'props', string[]> & Partial<Record<'ascNullsLast', boolean>> & Partial<Record<'desc', boolean>>
>;

// eslint-disable-next-line complexity
function sortComparator<T>(a: T, b: T, sorting: Sorting) {
    const sortingLen = sorting.length;

    for (let s = 0; s < sortingLen; s++) {
        const sortInfo = sorting[s];
        const props = sortInfo.props;
        const useAscNullsLast = Boolean(sortInfo.ascNullsLast); // Force to boolean
        const useDesc = Boolean(sortInfo.desc); // Force to boolean
        let valueA = a,
            valueB = b,
            isANull = isNullOrUndefined(valueA),
            isBNull = isNullOrUndefined(valueB);

        // If there are nested properties get those
        for (let p = 0; p < props.length; p++) {
            const propName = props[p];

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
            } else if (!isANull && isBNull) {
                return useDesc || useAscNullsLast ? -1 : 1;
            } else if (isANull && isBNull) {
                break;
            }
        }

        if (valueA !== valueB && !isANull && !isBNull) {
            const typeA = typeof valueA;
            const typeB = typeof valueB;

            if (typeA === 'number' || typeB === 'number' || typeA === 'boolean' || typeB === 'boolean') {
                if (valueA < valueB) {
                    return useDesc ? 1 : -1;
                }
                if (valueA > valueB) {
                    return useDesc ? -1 : 1;
                }
            } else {
                // All others go through String localeCompare, get rid off nulls / undefineds
                const val = (valueA as string).localeCompare(valueB as string, 'fi', comparisonOptions);

                if (val < 0) {
                    return useDesc ? 1 : -1;
                } else if (val > 0) {
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
export function bubbleSort<T>(items: T[], comparator: (a: T, b: T, sorting: Sorting) => 0 | 1 | -1, sorting: Sorting) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    const clonedItems = items.slice();
    const itemsLen = clonedItems.length;

    for (let i = 1; i < itemsLen; i += 1) {
        swapped = false;

        for (let j = 0; j < itemsLen - i; j += 1) {
            // Swap elements if they are in wrong order.
            if (comparator(clonedItems[j + 1], clonedItems[j], sorting) < 0) {
                const tmp = clonedItems[j + 1];

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
export function sortByProperties<T>(items: T[], sorting: Sorting) {
    return bubbleSort(items, sortComparator, sorting);
}
