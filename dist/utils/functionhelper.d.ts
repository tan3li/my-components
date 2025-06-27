export declare function isFunction(obj: unknown): obj is Function;
export declare function emptyFn(..._args: any[]): void;
export declare function safeCall<Fn extends (...args: Args) => any, Args extends unknown[]>(fn: Fn | null | undefined, ...args: Args): ReturnType<Fn> | undefined;
//# sourceMappingURL=functionhelper.d.ts.map