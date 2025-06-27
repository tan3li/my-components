import { TDataState } from '../constants/datastate.js';
export declare function useDataState(dataState?: Map<TDataState, string> | null, isInvalid?: boolean, isReadOnly?: boolean): {
    hasError: boolean;
    errorMessage: string;
    isReadOnly: boolean;
};
//# sourceMappingURL=usedatastate.d.ts.map