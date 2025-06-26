import {useControlledState} from '../../src/hooks/usecontrolledstate.js';
import {act, renderHook} from '@testing-library/react';

describe('useControlledState', function () {
    it('Should handle default setValue behavior, not invoke onChange for the same value twice in a row', () => {
        const onChangeSpy = jest.fn();
        const {result} = renderHook(() => useControlledState('defaultValue', undefined, onChangeSpy));
        let [value, setValue] = result.current;

        expect(value).toBe('defaultValue');
        expect(onChangeSpy).not.toHaveBeenCalled();

        act(() => setValue('newValue'));
        [value, setValue] = result.current;
        expect(value).toBe('newValue');
        expect(onChangeSpy).toHaveBeenLastCalledWith('newValue');

        act(() => setValue('newValue2'));
        [value, setValue] = result.current;
        expect(value).toBe('newValue2');
        expect(onChangeSpy).toHaveBeenLastCalledWith('newValue2');

        // clear it so we can check more easily that it's not called in the next expect
        onChangeSpy.mockClear();

        act(() => setValue('newValue2'));
        [value, setValue] = result.current;
        expect(value).toBe('newValue2');
        expect(onChangeSpy).not.toHaveBeenCalled();

        // it should call onChange with a new but not immediately previously run value
        act(() => setValue('newValue'));
        [value, setValue] = result.current;
        expect(value).toBe('newValue');
        expect(onChangeSpy).toHaveBeenLastCalledWith('newValue');
    });

    it('Should handle controlled setValue behavior', () => {
        const onChangeSpy = jest.fn();
        const {result} = renderHook(() => useControlledState('defaultValue', 'controlledValue', onChangeSpy));
        let [value, setValue] = result.current;

        expect(value).toBe('controlledValue');
        expect(onChangeSpy).not.toHaveBeenCalled();

        act(() => setValue('newValue'));
        [value, setValue] = result.current;
        expect(value).toBe('controlledValue');
        expect(onChangeSpy).toHaveBeenLastCalledWith('newValue');

        onChangeSpy.mockClear();

        act(() => setValue('controlledValue'));
        [value, setValue] = result.current;
        expect(value).toBe('controlledValue');
        expect(onChangeSpy).not.toHaveBeenCalled();
    });
});
