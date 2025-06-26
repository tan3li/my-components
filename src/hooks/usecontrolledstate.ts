import {useCallback, useState} from 'react';

// Simplified version of the React Stately useControlledState hook.
// See @react-stately/utils package for the original implementation.
export function useControlledState<T>(
    defaultValue: T,
    value?: T,
    onChange?: (v: T, ...args: any[]) => void
): [T, (value: T, ...args: any[]) => void] {
    const [stateValue, setStateValue] = useState(value ?? defaultValue);
    const isControlled = value !== undefined;

    let currentValue = isControlled ? value : stateValue;

    const setValue = useCallback(
        (newValue: T, ...args: any[]) => {
            const onChangeCaller = (val: T, ...onChangeArgs: any[]) => {
                if (onChange && !Object.is(currentValue, val)) {
                    onChange(val, ...onChangeArgs);
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
            onChangeCaller(newValue, ...args);
        },
        [isControlled, currentValue, onChange]
    );

    return [currentValue, setValue];
}
