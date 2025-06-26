import {hasState} from '../utils/statehelper.js';
import {DataState, TDataState} from '../constants/datastate.js';

export function useDataState(dataState?: Map<TDataState, string> | null, isInvalid?: boolean, isReadOnly?: boolean) {
    return {
        hasError: !!isInvalid || hasState(dataState, DataState.ERROR),
        errorMessage: dataState?.get(DataState.ERROR) ?? '',
        isReadOnly: !!isReadOnly || hasState(dataState, DataState.LOADING)
    };
}
