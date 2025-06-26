import {bubbleSort, sortByProperties} from '../../src/utils/sortinghelper.js';

describe('Sorting helper tests', function () {
    describe('Bubble sort algorithm', () => {
        const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
        const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
        const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

        function numberSort(a, b) {
            if (a === b) {
                return 0;
            }

            return a < b ? -1 : 1;
        }

        function compareCallback(a, b) {
            if (a.length === b.length) {
                return 0;
            }

            return a.length < b.length ? -1 : 1;
        }

        it('Should pass sortings to sortComparator', () => {
            const sortings = [];

            expect(
                bubbleSort(
                    [1, 2],
                    function (a, b, sort) {
                        expect(sort).toBe(sortings);

                        return numberSort(a, b);
                    },
                    sortings
                )
            ).toEqual([1, 2]);
        });

        it('Should sort predefined values', () => {
            expect(bubbleSort([], numberSort)).toEqual([]);
            expect(bubbleSort([1], numberSort)).toEqual([1]);
            expect(bubbleSort([1, 2], numberSort)).toEqual([1, 2]);
            expect(bubbleSort([2, 1], numberSort)).toEqual([1, 2]);
            expect(bubbleSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2], numberSort)).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
            expect(bubbleSort(sortedArr, numberSort)).toEqual(sortedArr);
            expect(bubbleSort(reverseArr, numberSort)).toEqual(sortedArr);
            expect(bubbleSort(notSortedArr, numberSort)).toEqual(sortedArr);
            expect(bubbleSort(equalArr, numberSort)).toEqual(equalArr);
        });

        it('Should work with negative numbers', () => {
            expect(bubbleSort(negativeArr, numberSort)).toEqual(negativeArrSorted);
        });

        it('Should work with custom comaprator', () => {
            expect(bubbleSort([''], compareCallback)).toEqual(['']);
            expect(bubbleSort(['a'], compareCallback)).toEqual(['a']);
            expect(bubbleSort(['aa', 'a'], compareCallback)).toEqual(['a', 'aa']);
            expect(bubbleSort(['aa', 'q', 'bbbb', 'ccc'], compareCallback)).toEqual(['q', 'aa', 'ccc', 'bbbb']);
            expect(bubbleSort(['aa', 'aa'], compareCallback)).toEqual(['aa', 'aa']);
        });

        it('Should provide stable result when returning 0s', () => {
            expect(bubbleSort(['bb', 'aa', 'c'], compareCallback)).toEqual(['c', 'bb', 'aa']);
            expect(bubbleSort(['aa', 'q', 'a', 'bbbb', 'ccc'], compareCallback)).toEqual([
                'q',
                'a',
                'aa',
                'ccc',
                'bbbb'
            ]);
        });
    });

    describe('sortByProperties', () => {
        it('Should not modify array in place', () => {
            const items = [{name: 'aa'}, {name: 'ff'}, {name: 'bb'}, {name: 'ee'}, {name: 'cc'}, {name: 'dd'}];

            const sorted = sortByProperties(items, [{props: ['name']}]);

            expect(sorted[0].name).toEqual('aa');
            expect(sorted[1].name).toEqual('bb');
            expect(sorted[2].name).toEqual('cc');
            expect(sorted[3].name).toEqual('dd');
            expect(sorted[4].name).toEqual('ee');
            expect(sorted[5].name).toEqual('ff');

            // Verify parameter is as it was
            expect(items[0].name).toEqual('aa');
            expect(items[1].name).toEqual('ff');
            expect(items[2].name).toEqual('bb');
            expect(items[3].name).toEqual('ee');
            expect(items[4].name).toEqual('cc');
            expect(items[5].name).toEqual('dd');
        });

        it('should sort by property name when its set', () => {
            const items = [{name: 'aa'}, {name: 'ff'}, {name: 'bb'}, {name: 'ee'}, {name: 'cc'}, {name: 'dd'}];

            const sorted = sortByProperties(items, [{props: ['name']}]);

            expect(sorted[0].name).toEqual('aa');
            expect(sorted[1].name).toEqual('bb');
            expect(sorted[2].name).toEqual('cc');
            expect(sorted[3].name).toEqual('dd');
            expect(sorted[4].name).toEqual('ee');
            expect(sorted[5].name).toEqual('ff');
        });

        it('should sort by property name in descending order when its set', () => {
            const items = [{name: 'aa'}, {name: 'ff'}, {name: 'bb'}, {name: 'ee'}, {name: 'cc'}, {name: 'dd'}];

            const sorted = sortByProperties(items, [{desc: true, props: ['name']}]);

            expect(sorted[0].name).toEqual('ff');
            expect(sorted[1].name).toEqual('ee');
            expect(sorted[2].name).toEqual('dd');
            expect(sorted[3].name).toEqual('cc');
            expect(sorted[4].name).toEqual('bb');
            expect(sorted[5].name).toEqual('aa');
        });

        it('should sort by given property name', () => {
            const items = [
                {name: 'aa', lastName: 'gg'},
                {name: 'ff', lastName: 'ac'},
                {name: 'bb', lastName: '11'},
                {name: 'ee', lastName: 'ii'},
                {name: 'cc', lastName: 'aa'},
                {name: 'dd', lastName: 'ab'}
            ];

            const sorted = sortByProperties(items, [{props: ['lastName']}]);

            expect(sorted[0].lastName).toEqual('11');
            expect(sorted[1].lastName).toEqual('aa');
            expect(sorted[2].lastName).toEqual('ab');
            expect(sorted[3].lastName).toEqual('ac');
            expect(sorted[4].lastName).toEqual('gg');
            expect(sorted[5].lastName).toEqual('ii');
        });

        it('should not sort when property name is same', () => {
            const items = [
                {name: 'aa', lastName: 'gg'},
                {name: 'ff', lastName: 'ac'},
                {name: 'bb', lastName: '11'},
                {name: 'ee', lastName: 'ii'},
                {name: 'cc', lastName: 'aa'},
                {name: 'dd', lastName: 'aa'}
            ];

            const sorted = sortByProperties(items, [{props: ['lastName']}]);

            expect(sorted[0].lastName).toEqual('11');
            expect(sorted[1].lastName).toEqual('aa');
            expect(sorted[2].lastName).toEqual('aa');
            expect(sorted[3].lastName).toEqual('ac');
            expect(sorted[4].lastName).toEqual('gg');
            expect(sorted[5].lastName).toEqual('ii');
        });

        it('should sort by given objects property name', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', name: 'öö'}},
                {name: 'ff', lastName: 'ac', object: {id: '22', name: 'ii'}},
                {name: 'bb', lastName: '11', object: {id: 'hu', name: 'pp'}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', name: 'aa'}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', name: 'cc'}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', name: 'vv'}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'id']}]);

            expect(sorted[0].object.id).toEqual('22');
            expect(sorted[1].object.id).toEqual('ac');
            expect(sorted[2].object.id).toEqual('ad');
            expect(sorted[3].object.id).toEqual('hu');
            expect(sorted[4].object.id).toEqual('ii');
            expect(sorted[5].object.id).toEqual('tt');
        });

        it('should sort by given objects property name in descending order', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', name: 'öö'}},
                {name: 'ff', lastName: 'ac', object: {id: '22', name: 'ii'}},
                {name: 'bb', lastName: '11', object: {id: 'hu', name: 'pp'}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', name: 'aa'}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', name: 'cc'}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', name: 'vv'}}
            ];

            const sorted = sortByProperties(items, [{desc: true, props: ['object', 'id']}]);

            expect(sorted[0].object.id).toEqual('tt');
            expect(sorted[1].object.id).toEqual('ii');
            expect(sorted[2].object.id).toEqual('hu');
            expect(sorted[3].object.id).toEqual('ad');
            expect(sorted[4].object.id).toEqual('ac');
            expect(sorted[5].object.id).toEqual('22');
        });

        it('should sort empty property at first', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', name: 'öö'}},
                {name: 'ff', lastName: 'ac', object: {id: '', name: 'ii'}},
                {name: 'bb', lastName: '11', object: {id: 'hu', name: 'pp'}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', name: 'aa'}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', name: 'cc'}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', name: 'vv'}}
            ];

            const sorted = sortByProperties(items, [{desc: false, props: ['object', 'id']}]);

            expect(sorted[0].object.id).toEqual('');
            expect(sorted[1].object.id).toEqual('ac');
            expect(sorted[2].object.id).toEqual('ad');
            expect(sorted[3].object.id).toEqual('hu');
            expect(sorted[4].object.id).toEqual('ii');
            expect(sorted[5].object.id).toEqual('tt');
        });
        it('should sort by property name when its set', () => {
            const items = [{number: 1}, {number: 6}, {number: 2}, {number: 5}, {number: 3}, {number: 4}];

            const sorted = sortByProperties(items, [{props: ['number']}]);

            expect(sorted[0].number).toEqual(1);
            expect(sorted[1].number).toEqual(2);
            expect(sorted[2].number).toEqual(3);
            expect(sorted[3].number).toEqual(4);
            expect(sorted[4].number).toEqual(5);
            expect(sorted[5].number).toEqual(6);
        });

        it('should sort by given property name', () => {
            const items = [
                {name: 'aa', number: 5},
                {name: 'ff', number: 4},
                {name: 'bb', number: 1},
                {name: 'ee', number: 6},
                {name: 'cc', number: 2},
                {name: 'dd', number: 3}
            ];

            const sorted = sortByProperties(items, [{props: ['number']}]);

            expect(sorted[0].number).toEqual(1);
            expect(sorted[1].number).toEqual(2);
            expect(sorted[2].number).toEqual(3);
            expect(sorted[3].number).toEqual(4);
            expect(sorted[4].number).toEqual(5);
            expect(sorted[5].number).toEqual(6);
        });

        it('should sort by given property name in descending order', () => {
            const items = [
                {name: 'aa', number: 5},
                {name: 'ff', number: 4},
                {name: 'bb', number: 1},
                {name: 'ee', number: 6},
                {name: 'cc', number: 2},
                {name: 'dd', number: 3}
            ];

            const sorted = sortByProperties(items, [{desc: true, props: ['number']}]);

            expect(sorted[0].number).toEqual(6);
            expect(sorted[1].number).toEqual(5);
            expect(sorted[2].number).toEqual(4);
            expect(sorted[3].number).toEqual(3);
            expect(sorted[4].number).toEqual(2);
            expect(sorted[5].number).toEqual(1);
        });

        it('should sort by given property name in ascending order', () => {
            const items = [
                {name: 'aa', number: 5},
                {name: 'ff', number: null},
                {name: 'bb', number: 1},
                {name: 'ee', number: 6},
                {name: 'cc', number: null},
                {name: 'dd', number: 3}
            ];

            const sorted = sortByProperties(items, [{asc: true, props: ['number']}]);

            expect(sorted[0].number).toEqual(null);
            expect(sorted[1].number).toEqual(null);
            expect(sorted[2].number).toEqual(1);
            expect(sorted[3].number).toEqual(3);
            expect(sorted[4].number).toEqual(5);
            expect(sorted[5].number).toEqual(6);
        });

        it('should sort by given property name in ascending order and put nulls last', () => {
            const items = [
                {name: 'aa', number: 5},
                {name: 'ff', number: null},
                {name: 'bb', number: 1},
                {name: 'ee', number: 6},
                {name: 'cc', number: null},
                {name: 'dd', number: 3}
            ];

            const sorted = sortByProperties(items, [{ascNullsLast: true, props: ['number']}]);

            expect(sorted[0].number).toEqual(1);
            expect(sorted[1].number).toEqual(3);
            expect(sorted[2].number).toEqual(5);
            expect(sorted[3].number).toEqual(6);
            expect(sorted[4].number).toEqual(null);
            expect(sorted[5].number).toEqual(null);
        });

        it('should sort by given property name in descending order and put nulls last', () => {
            const items = [
                {name: 'aa', number: 5},
                {name: 'ff', number: null},
                {name: 'bb', number: 1},
                {name: 'ee', number: 6},
                {name: 'cc', number: null},
                {name: 'dd', number: 3}
            ];

            const sorted = sortByProperties(items, [{desc: true, props: ['number']}]);

            expect(sorted[0].number).toEqual(6);
            expect(sorted[1].number).toEqual(5);
            expect(sorted[2].number).toEqual(3);
            expect(sorted[3].number).toEqual(1);
            expect(sorted[4].number).toEqual(null);
            expect(sorted[5].number).toEqual(null);
        });

        it('should not sort when property name is same', () => {
            const items = [
                {name: 'aa', number: 4},
                {name: 'ff', number: 3},
                {name: 'bb', number: 1},
                {name: 'ee', number: 5},
                {name: 'cc', number: 2},
                {name: 'dd', number: 2}
            ];

            const sorted = sortByProperties(items, [{props: ['number']}]);

            expect(sorted[0].number).toEqual(1);
            expect(sorted[1].number).toEqual(2);
            expect(sorted[2].number).toEqual(2);
            expect(sorted[3].number).toEqual(3);
            expect(sorted[4].number).toEqual(4);
            expect(sorted[5].number).toEqual(5);
        });

        it('should sort by given objects property name', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', number: 6}},
                {name: 'ff', lastName: 'ac', object: {id: '22', number: 1}},
                {name: 'bb', lastName: '11', object: {id: 'hu', number: 4}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', number: 2}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', number: 3}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', number: 5}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'number']}]);

            expect(sorted[0].object.number).toEqual(1);
            expect(sorted[1].object.number).toEqual(2);
            expect(sorted[2].object.number).toEqual(3);
            expect(sorted[3].object.number).toEqual(4);
            expect(sorted[4].object.number).toEqual(5);
            expect(sorted[5].object.number).toEqual(6);
        });

        it('should sort by given objects property name in descending order', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', number: 6}},
                {name: 'ff', lastName: 'ac', object: {id: '22', number: 1}},
                {name: 'bb', lastName: '11', object: {id: 'hu', number: 4}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', number: 2}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', number: 3}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', number: 5}}
            ];

            const sorted = sortByProperties(items, [{desc: true, props: ['object', 'number']}]);

            expect(sorted[0].object.number).toEqual(6);
            expect(sorted[1].object.number).toEqual(5);
            expect(sorted[2].object.number).toEqual(4);
            expect(sorted[3].object.number).toEqual(3);
            expect(sorted[4].object.number).toEqual(2);
            expect(sorted[5].object.number).toEqual(1);
        });

        it('should sort first by id and then by number in ascending order', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', number: 1}},
                {name: 'ff', lastName: 'ac', object: {id: '22', number: 1}},
                {name: 'bb', lastName: '11', object: {id: 'hu', number: 2}},
                {name: 'ee', lastName: 'ii', object: {id: null, number: 2}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', number: 3}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', number: 4}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'id']}, {props: ['object', 'number']}]);

            expect(sorted[0].object).toEqual({id: null, number: 2});
            expect(sorted[1].object).toEqual({id: '22', number: 1});
            expect(sorted[2].object).toEqual({id: 'ad', number: 3});
            expect(sorted[3].object).toEqual({id: 'hu', number: 2});
            expect(sorted[4].object).toEqual({id: 'ii', number: 4});
            expect(sorted[5].object).toEqual({id: 'tt', number: 1});
        });

        it('should sort first by id and then by number in descending order', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', number: 1}},
                {name: 'ff', lastName: 'ac', object: {id: '22', number: 1}},
                {name: 'bb', lastName: '11', object: {id: 'hu', number: 2}},
                {name: 'ee', lastName: 'ii', object: {id: null, number: 2}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', number: 3}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', number: 4}}
            ];

            const sorted = sortByProperties(items, [
                {desc: true, props: ['object', 'id']},
                {desc: true, props: ['object', 'number']}
            ]);

            expect(sorted[0].object).toEqual({id: 'tt', number: 1});
            expect(sorted[1].object).toEqual({id: 'ii', number: 4});
            expect(sorted[2].object).toEqual({id: 'hu', number: 2});
            expect(sorted[3].object).toEqual({id: 'ad', number: 3});
            expect(sorted[4].object).toEqual({id: '22', number: 1});
            expect(sorted[5].object).toEqual({id: null, number: 2});
        });

        it('should sort first by number and then by id in descending order', () => {
            const items = [
                {name: 'aa', lastName: 'gg', object: {id: 'tt', number: 1}},
                {name: 'ff', lastName: 'ac', object: {id: '22', number: 1}},
                {name: 'bb', lastName: '11', object: {id: 'hu', number: 2}},
                {name: 'ee', lastName: 'ii', object: {id: 'ac', number: 2}},
                {name: 'cc', lastName: 'aa', object: {id: 'ad', number: 3}},
                {name: 'dd', lastName: 'ab', object: {id: 'ii', number: 4}}
            ];

            const sorted = sortByProperties(items, [
                {desc: true, props: ['object', 'number']},
                {desc: true, props: ['object', 'id']}
            ]);

            expect(sorted[0].object).toEqual({id: 'ii', number: 4});
            expect(sorted[1].object).toEqual({id: 'ad', number: 3});
            expect(sorted[2].object).toEqual({id: 'hu', number: 2});
            expect(sorted[3].object).toEqual({id: 'ac', number: 2});
            expect(sorted[4].object).toEqual({id: 'tt', number: 1});
            expect(sorted[5].object).toEqual({id: '22', number: 1});
        });

        // Should be non case sensitive, but handle special characters different, and accent different
        it('Bugfix: Should comparison in current users selected format', () => {
            const items = [
                {object: {name: 'aAa'}},
                {object: {name: 'ÄAb'}},
                {object: {name: 'ÅåA'}},
                {object: {name: 'Aaa'}},
                {object: {name: null}},
                {object: {name: 'aaa'}},
                {object: {name: 'abc'}},
                {object: {name: 'Abé'}},
                {object: {name: null}},
                {object: {name: 'Abe'}},
                {object: {name: 'Ääkköset'}},
                {object: {name: '<<< special'}},
                {object: {name: '<<< abc'}},
                {object: {name: 'öökköbeb'}},
                {object: {name: 'ÖÖaa'}},
                {object: {name: '>>>'}},
                {object: {name: undefined}},
                {object: {name: 'a <'}},
                {object: {name: ''}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'name']}]);

            expect(sorted.length).toBe(items.length);

            let i = -1;

            expect(sorted[++i].object.name).toEqual(null);
            expect(sorted[++i].object.name).toEqual(null);
            expect(sorted[++i].object.name).toEqual(undefined);
            expect(sorted[++i].object.name).toEqual('');
            expect(sorted[++i].object.name).toEqual('<<< abc');
            expect(sorted[++i].object.name).toEqual('<<< special');
            expect(sorted[++i].object.name).toEqual('>>>');
            expect(sorted[++i].object.name).toEqual('a <');
            expect(sorted[++i].object.name).toEqual('aAa');
            expect(sorted[++i].object.name).toEqual('Aaa');
            expect(sorted[++i].object.name).toEqual('aaa');
            expect(sorted[++i].object.name).toEqual('abc');
            expect(sorted[++i].object.name).toEqual('Abe');
            expect(sorted[++i].object.name).toEqual('Abé');
            expect(sorted[++i].object.name).toEqual('ÅåA');
            expect(sorted[++i].object.name).toEqual('ÄAb');
            expect(sorted[++i].object.name).toEqual('Ääkköset');
            expect(sorted[++i].object.name).toEqual('ÖÖaa');
            expect(sorted[++i].object.name).toEqual('öökköbeb');
        });

        it('Should sort nullable integers', () => {
            const items = [
                {object: {number: 1}},
                {object: {number: -1}},
                {object: {number: 0}},
                {object: {number: null}},
                {object: {number: null}},
                {object: {number: 120}},
                {object: {number: 99}},
                {object: {number: 0}},
                {object: {number: undefined}},
                {object: {number: -20}},
                {object: {number: 99}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'number']}]);

            let i = -1;

            expect(sorted[++i].object.number).toEqual(null);
            expect(sorted[++i].object.number).toEqual(null);
            expect(sorted[++i].object.number).toEqual(undefined);
            expect(sorted[++i].object.number).toEqual(-20);
            expect(sorted[++i].object.number).toEqual(-1);
            expect(sorted[++i].object.number).toEqual(0);
            expect(sorted[++i].object.number).toEqual(0);
            expect(sorted[++i].object.number).toEqual(1);
            expect(sorted[++i].object.number).toEqual(99);
            expect(sorted[++i].object.number).toEqual(99);
            expect(sorted[++i].object.number).toEqual(120);
        });

        it('Should sort nullable booleans', () => {
            const items = [
                {object: {bool: true}},
                {object: {bool: false}},
                {object: {bool: true}},
                {object: {bool: null}},
                {object: {bool: null}},
                {object: {bool: true}},
                {object: {bool: true}},
                {object: {bool: false}},
                {object: {bool: undefined}},
                {object: {bool: undefined}},
                {object: {bool: null}}
            ];

            const sorted = sortByProperties(items, [{props: ['object', 'bool']}]);

            let i = -1;

            expect(sorted[++i].object.bool).toEqual(null);
            expect(sorted[++i].object.bool).toEqual(null);
            expect(sorted[++i].object.bool).toEqual(undefined);
            expect(sorted[++i].object.bool).toEqual(undefined);
            expect(sorted[++i].object.bool).toEqual(null);
            expect(sorted[++i].object.bool).toEqual(false);
            expect(sorted[++i].object.bool).toEqual(false);
            expect(sorted[++i].object.bool).toEqual(true);
            expect(sorted[++i].object.bool).toEqual(true);
            expect(sorted[++i].object.bool).toEqual(true);
            expect(sorted[++i].object.bool).toEqual(true);
        });

        it('Should be possible to sort customer.name ascending businessunit.name desc', () => {
            const items = [
                {customer: {name: 'Abc Inc'}, businessUnit: {name: 'AbcUnit'}},
                {customer: {name: 'ÄÄkköset'}, businessUnit: {name: ''}},
                {customer: null, businessUnit: {name: 'ÖÖkköset Unit'}},
                {customer: {name: 'Matin Kone'}}, // no business unit
                {businessUnit: {name: ''}},
                {customer: {name: 'Seppo'}, businessUnit: {name: 'Kaakko'}},
                {customer: {name: 'Matin Kone'}, businessUnit: {name: 'Kaakko'}},
                {customer: {name: 'Matin Kone'}, businessUnit: {name: 'Abc'}},
                {customer: {name: 'Matin Kone'}, businessUnit: {name: 'Öökköset'}},
                {customer: {name: 'Matin Kone'}, businessUnit: {name: 'ÅÅÅÅÅ'}},
                {customer: {name: 'Matin Kone'}, businessUnit: null},
                {customer: {name: 'Matin Kone'}, businessUnit: null}
            ];

            const sorted = sortByProperties(items, [
                {desc: false, props: ['customer', 'name']},
                {desc: true, props: ['businessUnit', 'name']}
            ]);

            let i = -1;

            expect(sorted[++i].customer).toEqual(null);
            expect(sorted[i].businessUnit).toEqual({name: 'ÖÖkköset Unit'});

            expect(sorted[++i].customer).toEqual(undefined);
            expect(sorted[i].businessUnit).toEqual({name: ''});

            expect(sorted[++i].customer).toEqual({name: 'Abc Inc'});
            expect(sorted[i].businessUnit).toEqual({name: 'AbcUnit'});

            // Secondary sorting is descending
            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual({name: 'Öökköset'});

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual({name: 'ÅÅÅÅÅ'});

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual({name: 'Kaakko'});

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual({name: 'Abc'});

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual(undefined);

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual(null);

            expect(sorted[++i].customer).toEqual({name: 'Matin Kone'});
            expect(sorted[i].businessUnit).toEqual(null);
        });
    });
});
