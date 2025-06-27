export declare function getIndexWithPropertyValue<T>(propertyName: keyof T, value: unknown, arrOfObjects: T[] | null | undefined): number;
export declare function getIndexWithPropertyTextValue<T extends Record<string, {
    toLowerCase: <A extends string>() => Lowercase<A>;
}>>(propertyName: keyof T, value: string, arrOfObjects: T[] | null, matchCase: boolean): number;
//# sourceMappingURL=collectionhelper.d.ts.map