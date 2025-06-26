import {safeCall} from '../utils/functionhelper.js';

export interface ValueArgs<T> {
    value: T;
}

export interface AnyObject {
    [key: string]: any; // Must be any so type that lacks index signature, e.g. interface, can be assigned to AnyObject.
}

export type ChangeArgs<P, TValue> = P & ValueArgs<TValue>;

export function useChangeParamsCallback<P extends AnyObject, TValue = unknown>(
    changeParams?: P,
    callback?: (args: ChangeArgs<P, TValue>) => void
) {
    // Can be used f.e. with onChange event when arg is value of element and also with onBlur event when arg is event
    return (eventOrValue: any) => {
        const value = eventOrValue?.target ? eventOrValue.target.value : eventOrValue;

        safeCall(callback, {...changeParams, value} as ChangeArgs<P, TValue>);
    };
}
