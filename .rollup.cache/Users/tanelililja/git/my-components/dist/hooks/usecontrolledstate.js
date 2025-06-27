import { __spreadArray } from "tslib";
import { useCallback, useState } from 'react';
// Simplified version of the React Stately useControlledState hook.
// See @react-stately/utils package for the original implementation.
export function useControlledState(defaultValue, value, onChange) {
    var _a = useState(value !== null && value !== void 0 ? value : defaultValue), stateValue = _a[0], setStateValue = _a[1];
    var isControlled = value !== undefined;
    var currentValue = isControlled ? value : stateValue;
    var setValue = useCallback(function (newValue) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var onChangeCaller = function (val) {
            var onChangeArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                onChangeArgs[_i - 1] = arguments[_i];
            }
            if (onChange && !Object.is(currentValue, val)) {
                onChange.apply(void 0, __spreadArray([val], onChangeArgs, false));
            }
            if (!isControlled) {
                // If uncontrolled, mutate the currentValue local variable so that
                // calling setState multiple times with the same value only emits onChange once.
                // We do not use a ref for this because we specifically _do_ want the value to
                // reset every render, and assigning to a ref in render breaks aborted suspended renders.
                currentValue = val;
            }
        };
        if (!isControlled) {
            setStateValue(newValue);
        }
        onChangeCaller.apply(void 0, __spreadArray([newValue], args, false));
    }, [isControlled, currentValue, onChange]);
    return [currentValue, setValue];
}
//# sourceMappingURL=usecontrolledstate.js.map