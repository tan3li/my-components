export function getColumnPinningStyles(column) {
    var _a;
    var _b, _c, _d, _e;
    var pinSide = column.getIsPinned();
    var options = (_b = column.columnDef.meta) === null || _b === void 0 ? void 0 : _b.columnPinningOptions;
    if (pinSide && ((_c = options === null || options === void 0 ? void 0 : options[pinSide]) === null || _c === void 0 ? void 0 : _c.isSticky)) {
        return _a = {},
            _a[pinSide] = "".concat((_e = (_d = options === null || options === void 0 ? void 0 : options[pinSide]) === null || _d === void 0 ? void 0 : _d.offset) !== null && _e !== void 0 ? _e : 0, "px"),
            _a.position = 'sticky',
            _a.zIndex = 1,
            _a;
    }
    return undefined;
}
//# sourceMappingURL=getcolumnpinningstyles.js.map