export interface ValueArgs<T> {
    value: T;
}
export interface AnyObject {
    [key: string]: any;
}
export type ChangeArgs<P, TValue> = P & ValueArgs<TValue>;
export declare function useChangeParamsCallback<P extends AnyObject, TValue = unknown>(changeParams?: P, callback?: (args: ChangeArgs<P, TValue>) => void): (eventOrValue: any) => void;
//# sourceMappingURL=usechangeparamscallback.d.ts.map