import {classNames} from '../../src/utils/classnames.js';

describe('classNames', function () {
    it('Should create class name string', function () {
        expect(
            classNames(
                'test-class',
                null,
                123,
                undefined,
                {foo: true, 'foo-bar': true, notThere: false},
                '',
                'another-test-class'
            )
        ).toBe('test-class 123 foo foo-bar another-test-class');
    });
});
