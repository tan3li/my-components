import {DataState} from '../../src/constants/datastate.js';
import {hasState} from '../../src/utils/statehelper.js';

describe('State helper tests', function () {
    describe('hasState', function () {
        let stateMap;

        beforeEach(function () {
            stateMap = new Map();
            stateMap.set(DataState.ERROR, 'busted');
        });

        it('Should return true if has state', function () {
            expect(hasState(stateMap, DataState.ERROR)).toBeTruthy();
        });

        it('Should return false if does not have state', function () {
            expect(hasState(stateMap, DataState.LOADING)).toBeFalsy();
        });

        it('Should return false if state map not defined', function () {
            expect(hasState(null, DataState.ERROR)).toBeFalsy();
            expect(hasState(undefined, DataState.ERROR)).toBeFalsy();
        });
    });
});
