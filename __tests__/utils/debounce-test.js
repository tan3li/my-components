import {debounce, throttle} from '../../src/utils/debounce.js';

describe('debounce', function () {
    beforeEach(function () {
        jest.useFakeTimers({
            now: new Date('2017-01-28T10:00:00+02:00')
        });
    });

    afterEach(function () {
        jest.useRealTimers();
    });

    it('Should debounce function', function () {
        let callCount = 0;
        const debouncedFn = debounce((val) => {
            callCount++;

            return val;
        }, 30);

        let res = [debouncedFn('a'), debouncedFn('b'), debouncedFn('c')];

        expect(res).toEqual([undefined, undefined, undefined]);
        expect(callCount).toBe(0);

        jest.advanceTimersByTime(40);
        expect(callCount).toBe(1);
        res = [debouncedFn('d'), debouncedFn('e'), debouncedFn('f')];
        expect(res).toEqual(['c', 'c', 'c']);
        expect(callCount).toBe(1);

        jest.advanceTimersByTime(40);
        expect(callCount).toBe(2);
    });

    it('Should support a `leading` option', () => {
        const callCounts = [0, 0];
        const withLeading = debounce(
            () => {
                callCounts[0]++;
            },
            30,
            {leading: true}
        );

        const withLeadingAndTrailing = debounce(
            () => {
                callCounts[1]++;
            },
            30,
            {leading: true}
        );

        withLeading();
        expect(callCounts[0]).toBe(1);
        withLeadingAndTrailing();
        withLeadingAndTrailing();
        expect(callCounts[1]).toBe(1);

        jest.advanceTimersByTime(40);
        expect(callCounts).toEqual([1, 2]);
        withLeading();
        expect(callCounts[0]).toBe(2);
    });

    it('Should support a `trailing` option', () => {
        let withCount = 0,
            withoutCount = 0;

        const withTrailing = debounce(
            () => {
                withCount++;
            },
            30,
            {trailing: true}
        );

        const withoutTrailing = debounce(
            () => {
                withoutCount++;
            },
            30,
            {trailing: false}
        );

        withTrailing();
        expect(withCount).toBe(0);

        withoutTrailing();
        expect(withoutCount).toBe(0);

        jest.advanceTimersByTime(40);
        expect(withCount).toBe(1);
        expect(withoutCount).toBe(0);
    });

    it('Should support a `maxWait` option', () => {
        let callCount = 0;

        const debouncedFn = debounce(
            (value) => {
                callCount++;

                return value;
            },
            32,
            {maxWait: 64}
        );

        debouncedFn();
        debouncedFn();
        expect(callCount).toBe(0);

        jest.advanceTimersByTime(128);
        expect(callCount).toBe(1);
        debouncedFn();
        debouncedFn();
        expect(callCount).toBe(1);

        jest.advanceTimersByTime(256);
        expect(callCount).toBe(2);
    });
});

describe('throttle', function () {
    beforeEach(function () {
        jest.useFakeTimers({
            now: new Date('2017-01-28T10:00:00+02:00')
        });
    });

    afterEach(function () {
        jest.useRealTimers();
    });

    it('Should throttle a function', () => {
        let callCount = 0;
        const throttled = throttle(() => {
            callCount++;
        }, 32);

        throttled();
        throttled();
        throttled();

        const lastCount = callCount;

        expect(callCount).toBe(1);

        jest.advanceTimersByTime(64);
        expect(callCount > lastCount).toBeTruthy();
    });

    it('Should support a `leading` option', () => {
        const withLeading = throttle((val) => val, 32, {leading: true});

        expect(withLeading('a')).toBe('a');

        const withoutLeading = throttle((val) => val, 32, {leading: false});

        expect(withoutLeading('a')).toBe(undefined);
    });

    it('Should support a `trailing` option', () => {
        let withCount = 0,
            withoutCount = 0;

        const withTrailing = throttle(
            (value) => {
                withCount++;

                return value;
            },
            64,
            {trailing: true}
        );

        const withoutTrailing = throttle(
            (value) => {
                withoutCount++;

                return value;
            },
            64,
            {trailing: false}
        );

        expect(withTrailing('a')).toBe('a');
        expect(withTrailing('b')).toBe('a');

        expect(withoutTrailing('a')).toBe('a');
        expect(withoutTrailing('b')).toBe('a');

        jest.advanceTimersByTime(256);
        expect(withCount).toBe(2);
        expect(withoutCount).toBe(1);
    });
});
