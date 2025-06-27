export function getIndexOfChangedColumnSort(newSorting, oldSorting) {
    var newLen = newSorting.length;
    var oldLen = oldSorting.length;
    if (newLen === oldLen) {
        for (var i = 0, len = newLen; i < len; i++) {
            if (newSorting[i].desc !== oldSorting[i].desc) {
                return i;
            }
        }
    }
    else if (newLen > oldLen) {
        return newLen - 1;
    }
    return -1;
}
//# sourceMappingURL=getindexofchangedcolumnsort.js.map