export function isString(val: unknown): val is string {
    return typeof val === 'string';
}

export function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function mergeStrings(separator: string, ...strings: Array<string | null | undefined>): string {
    return strings.filter(Boolean).join(separator);
}
