import {add, divide, multiply, percentage, subtract} from '../../src/utils/math.js';

describe('Math tests', function () {
    describe('multiplication', function () {
        const testData = [
            // a, b, result
            [40.73, 7.5, 305.475],
            [0.1, 0.2, 0.02],
            [0.333333, 3, 0.999999],
            [0.3333333, 3, 1],
            // eslint-disable-next-line sonarjs/no-identical-expressions
            [1e-1 / 1e-1, 1e-1, 1e-1],
            [1e-1, 1e-1, 1e-2],
            [1.00001234e4, 1.00004352e4, 1.00005586053704e8], // still accurate enough
            [1e10, 1e5, 1e15],
            // eslint-disable-next-line no-loss-of-precision
            [10000000000000000.1, 1, 1e16], // 1e-16 is lost
            [1.0000001234e4, 1.0000004352e6, 1.0000005586000536e10], // loss of precision
            [1e10, 1e10, 1e20], // bits are inaccurate
            [1e-3, 1e-4, 0] // 1e-7 is less than method precision. treats as 0
        ];

        testData.forEach(function (testInput) {
            const a = testInput[0];
            const b = testInput[1];
            const result = testInput[2];

            it(`Should return ${result} when ${a} * ${b}`, function () {
                expect(multiply(a, b)).toBe(result);
            });
        });
    });

    describe('addition', function () {
        const testData = [
            // a, b, result
            [0.1, 0.2, 0.3]
        ];

        testData.forEach(function (testInput) {
            const a = testInput[0];
            const b = testInput[1];
            const result = testInput[2];

            it(`Should return ${result} when ${a} * ${b}`, function () {
                expect(add(a, b)).toBe(result);
            });
        });
    });

    describe('subtraction', function () {
        const testData = [
            // a, b, result
            [0.3, 0.1, 0.2]
        ];

        testData.forEach(function (testInput) {
            const a = testInput[0];
            const b = testInput[1];
            const result = testInput[2];

            it(`Should return ${result} when ${a} * ${b}`, function () {
                expect(subtract(a, b)).toBe(result);
            });
        });
    });

    describe('division', function () {
        const testData = [
            // a, b, result
            [0.3, 0.2, 1.5],
            [10, 0, Infinity],
            [1, 3, 0.333333]
        ];

        testData.forEach(function (testInput) {
            const a = testInput[0];
            const b = testInput[1];
            const result = testInput[2];

            it(`Should return ${result} when ${a} / ${b}`, function () {
                expect(divide(a, b)).toBe(result);
            });
        });
    });

    describe('percentage', function () {
        const testData = [
            // a, b, result
            [0.3, 0.2, 150],
            [10, 0, 0],
            [1, 3, 33],
            [1, 2, 50],
            [1, 1, 100],
            [10, 1, 1000],
            [1, 10, 10],
            [1, 100, 1],
            [1, 1000, 0]
        ];

        testData.forEach(function (testInput) {
            const a = testInput[0];
            const b = testInput[1];
            const result = testInput[2];

            it(`Should return ${result} when ${a} / ${b} * 100`, function () {
                expect(percentage(a, b)).toBe(result);
            });
        });
    });
});
