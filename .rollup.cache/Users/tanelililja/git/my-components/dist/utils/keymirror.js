export function keymirror(obj) {
    var result = {};
    var key;
    for (key in obj) {
        result[key] = key;
    }
    return result;
}
//# sourceMappingURL=keymirror.js.map