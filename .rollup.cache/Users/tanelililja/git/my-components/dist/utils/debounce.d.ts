export declare function debounce<T extends unknown[], U>(func: (...args: T) => U, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}): {
    (...args: T): U;
    cancel: () => void;
};
export declare function throttle<T extends unknown[], U>(func: (...args: T) => U, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}): {
    (...args: T): U;
    cancel: () => void;
};
//# sourceMappingURL=debounce.d.ts.map