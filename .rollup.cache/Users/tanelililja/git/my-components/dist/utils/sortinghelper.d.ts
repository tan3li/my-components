type Sorting = Array<Record<'props', string[]> & Partial<Record<'ascNullsLast', boolean>> & Partial<Record<'desc', boolean>>>;
export declare function bubbleSort<T>(items: T[], comparator: (a: T, b: T, sorting: Sorting) => 0 | 1 | -1, sorting: Sorting): T[];
export declare function sortByProperties<T>(items: T[], sorting: Sorting): T[];
export {};
//# sourceMappingURL=sortinghelper.d.ts.map