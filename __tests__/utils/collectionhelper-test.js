import {getIndexWithPropertyTextValue, getIndexWithPropertyValue} from '../../src/utils/collectionhelper.js';

describe('Collection helper tests', function () {
    describe('getIndexWithPropertyValue', () => {
        let arr;

        beforeEach(function () {
            arr = [
                {contextGuid: 'aa1', name: '1'},
                {contextGuid: 'bb2', name: '2'},
                {contextGuid: 'cc3', name: '3'},
                {contextGuid: 'dd4', name: '4'},
                {contextGuid: 'ee5', name: '5'},
                {contextGuid: 'ff6', name: '6'},
                {contextGuid: 'gg7', name: '7'},
                {contextGuid: 'hh8', name: '8'},
                {contextGuid: 'jj9', name: '9'},
                {contextGuid: 'ii10', name: '10'}
            ];
        });

        it('Should return -1 when not found from array', () => {
            const result = getIndexWithPropertyValue('contextGuid', 'foo', arr);

            expect(result).toEqual(-1);
        });

        it('Should return index when found from array', () => {
            let result = getIndexWithPropertyValue('contextGuid', 'jj9', arr);

            expect(result).toEqual(8);

            result = getIndexWithPropertyValue('name', '2', arr);
            expect(result).toEqual(1);
        });

        it('Should return first index when found from array', () => {
            arr.push({contextGuid: 'jj9', name: '11'});
            const result = getIndexWithPropertyValue('contextGuid', 'jj9', arr);

            expect(result).toEqual(8);
        });
    });

    describe('getIndexWithPropertyTextValue', () => {
        let arr;

        beforeEach(function () {
            arr = [
                {contextGuid: 'aa1', name: 'Keijo'},
                {contextGuid: 'bb2', name: 'Teijo'},
                {contextGuid: 'cc3', name: 'Kyösti'}
            ];
        });

        it('Should return -1 when not found from array', () => {
            const result = getIndexWithPropertyTextValue('name', 'foo', arr);

            expect(result).toEqual(-1);
        });

        it('Should return index when found from array (no case)', () => {
            const result = getIndexWithPropertyTextValue('name', 'teijo', arr);

            expect(result).toEqual(1);
        });

        it('Should return -1 when case sensitive match is not match', () => {
            const result = getIndexWithPropertyTextValue('name', 'teijo', arr, true);

            expect(result).toEqual(-1);
        });

        it('Should return index when case sensitive match', () => {
            const result = getIndexWithPropertyTextValue('name', 'Teijo', arr, true);

            expect(result).toEqual(1);
        });
    });
});
