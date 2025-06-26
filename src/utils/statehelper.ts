import {isNullOrUndefined} from './objecthelper.js';
import {TDataState} from '../constants/datastate.js';

export function hasState(stateMap?: Map<TDataState, string> | null, state?: TDataState) {
    return !isNullOrUndefined(stateMap) && !isNullOrUndefined(state) && stateMap.has(state);
}
