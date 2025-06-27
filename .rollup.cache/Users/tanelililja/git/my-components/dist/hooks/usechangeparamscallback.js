import { __assign } from "tslib";
import { safeCall } from '../utils/functionhelper.js';
export function useChangeParamsCallback(changeParams, callback) {
    // Can be used f.e. with onChange event when arg is value of element and also with onBlur event when arg is event
    return function (eventOrValue) {
        var value = (eventOrValue === null || eventOrValue === void 0 ? void 0 : eventOrValue.target) ? eventOrValue.target.value : eventOrValue;
        safeCall(callback, __assign(__assign({}, changeParams), { value: value }));
    };
}
//# sourceMappingURL=usechangeparamscallback.js.map