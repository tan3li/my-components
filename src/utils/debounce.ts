export function debounce<T extends unknown[], U>(
    func: (...args: T) => U,
    wait: number,
    options?: {leading?: boolean; trailing?: boolean; maxWait?: number}
) {
    let lastArgs: undefined | T,
        lastThis: undefined | ThisType<typeof func>,
        maxWait: number,
        result: U,
        timerId: undefined | number,
        lastCallTime: undefined | number,
        lastInvokeTime: number = 0,
        leading: boolean = false,
        maxing: boolean = false,
        trailing: boolean = true;

    if (options) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? Math.max(options.maxWait ?? 0, wait) : 0;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time: number) {
        const args = lastArgs;
        const thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args!);

        return result;
    }

    function shouldInvoke(time: number) {
        const timeSinceLastCall = time - lastCallTime!;
        const timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (
            lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait)
        );
    }

    function trailingEdge(time: number) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;

        return result;
    }

    function remainingWait(time: number) {
        const timeSinceLastCall = time - lastCallTime!;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;

        return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }

    function timerExpired() {
        const time = Date.now();

        if (shouldInvoke(time)) {
            trailingEdge(time);

            return;
        }
        // Restart the timer.
        timerId = window.setTimeout(timerExpired, remainingWait(time));
    }

    function leadingEdge(time: number) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = window.setTimeout(timerExpired, wait);
        // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
    }

    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function debounced(...args: T) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = args;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = window.setTimeout(timerExpired, wait);

                return invokeFunc(lastCallTime);
            }
        }
        timerId ??= window.setTimeout(timerExpired, wait);

        return result;
    }

    debounced.cancel = cancel;

    return debounced;
}

export function throttle<T extends unknown[], U>(
    func: (...args: T) => U,
    wait: number,
    options?: {leading?: boolean; trailing?: boolean; maxWait?: number}
) {
    let leading = true,
        trailing = true;

    if (options) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    return debounce(func, wait, {
        leading,
        maxWait: wait,
        trailing
    });
}
