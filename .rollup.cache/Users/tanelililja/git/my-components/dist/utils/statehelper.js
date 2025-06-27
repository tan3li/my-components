import { isNullOrUndefined } from './objecthelper.js';
export function hasState(stateMap, state) {
    return !isNullOrUndefined(stateMap) && !isNullOrUndefined(state) && stateMap.has(state);
}
//# sourceMappingURL=statehelper.js.map