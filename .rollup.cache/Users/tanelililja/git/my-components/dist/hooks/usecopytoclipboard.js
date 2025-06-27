import { __awaiter, __generator } from "tslib";
import { useRef, useState } from 'react';
export function useCopyToClipboard(_a) {
    var _this = this;
    var text = _a.text, tooltipDuration = _a.tooltipDuration;
    var timeoutId = useRef(null);
    var _b = useState(false), showTooltip = _b[0], setShowTooltip = _b[1];
    var onPress = function () { return __awaiter(_this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (timeoutId.current) {
                        window.clearTimeout(timeoutId.current);
                        timeoutId.current = null;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 2:
                    _a.sent();
                    setShowTooltip(true);
                    timeoutId.current = window.setTimeout(function () {
                        setShowTooltip(false);
                    }, tooltipDuration);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    // eslint-disable-next-line no-console
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        onPress: onPress,
        showTooltip: showTooltip
    };
}
//# sourceMappingURL=usecopytoclipboard.js.map