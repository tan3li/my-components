export function keymirror<T>(obj: T): {[K in keyof T]: K} {
    const result: Partial<{[K in keyof T]: K}> = {};
    let key: keyof T;

    for (key in obj) {
        result[key] = key;
    }

    return result as {[K in keyof T]: K};
}
