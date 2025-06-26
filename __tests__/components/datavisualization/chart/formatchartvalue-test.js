import {formatChartValue} from '../../../../src/components/datavisualization/chart/formatchartvalue.js';

describe('formatChartValue', function () {
    it('Should format value', function () {
        expect(formatChartValue({}, 123)).toBe('123');
    });

    it('Should format value with given decimals', function () {
        expect(formatChartValue({valueDecimals: 2}, 123)).toBe('123,00');
    });

    it('Should format value with prefix', function () {
        expect(formatChartValue({valuePrefix: '€'}, 123)).toBe('€123');
    });

    it('Should format value with suffix', function () {
        expect(formatChartValue({valueSuffix: 'h'}, 123)).toBe('123h');
    });

    it('Should format value with prefix and suffix', function () {
        expect(formatChartValue({valuePrefix: '€', valueSuffix: '/h'}, 123)).toBe('€123/h');
    });

    it('Should format value with prefix, suffix and given decimals', function () {
        expect(formatChartValue({valuePrefix: '€', valueSuffix: '/h', valueDecimals: 2}, 123)).toBe('€123,00/h');
    });

    it('Should return empty string if no value given', function () {
        expect(formatChartValue({})).toBe('');
    });
});
