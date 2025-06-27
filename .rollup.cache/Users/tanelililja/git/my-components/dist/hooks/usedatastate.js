import { hasState } from '../utils/statehelper.js';
import { DataState } from '../constants/datastate.js';
export function useDataState(dataState, isInvalid, isReadOnly) {
    var _a;
    return {
        hasError: !!isInvalid || hasState(dataState, DataState.ERROR),
        errorMessage: (_a = dataState === null || dataState === void 0 ? void 0 : dataState.get(DataState.ERROR)) !== null && _a !== void 0 ? _a : '',
        isReadOnly: !!isReadOnly || hasState(dataState, DataState.LOADING)
    };
}
//# sourceMappingURL=usedatastate.js.map