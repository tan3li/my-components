export type OmitIndexSignature<T> = {
    [K in keyof T as string extends K ? never
    : number extends K ? never
    : K]: T[K];
};

export type PartialWithRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;
