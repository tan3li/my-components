import {SortingState} from '@tanstack/react-table';

export function getIndexOfChangedColumnSort(newSorting: SortingState, oldSorting: SortingState): number {
    const newLen = newSorting.length;
    const oldLen = oldSorting.length;

    if (newLen === oldLen) {
        for (let i = 0, len = newLen; i < len; i++) {
            if (newSorting[i].desc !== oldSorting[i].desc) {
                return i;
            }
        }
    } else if (newLen > oldLen) {
        return newLen - 1;
    }

    return -1;
}
