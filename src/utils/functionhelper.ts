// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(obj: unknown): obj is Function {
    return typeof obj === 'function';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function emptyFn(..._args) {
    /* Nothing to do here... */
}

export function safeCall<Fn extends (...args: Args) => any, Args extends unknown[]>(
    fn: Fn | null | undefined,
    ...args: Args
): ReturnType<Fn> | undefined {
    if (isFunction(fn)) {
        return fn(...args);
    }

    return undefined;
}
