import { __assign } from "tslib";
export var EnabledCheckExtension = {
    addOptions: function () {
        var _a;
        return __assign(__assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { isEnabled: true });
    },
    addKeyboardShortcuts: function () {
        var _a;
        var out;
        if (this.options.isEnabled) {
            out = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        return out !== null && out !== void 0 ? out : {};
    },
    addInputRules: function () {
        var _a;
        var out;
        if (this.options.isEnabled) {
            out = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        return out !== null && out !== void 0 ? out : [];
    }
};
//# sourceMappingURL=enabledcheckextension.js.map