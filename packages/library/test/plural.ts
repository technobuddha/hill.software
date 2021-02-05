import expect from '../util/expect';
import plural     from '../src/plural';

//TODO we need more comprehensive testing

describe(
    'plural',
    () => {
        test(
            'should handle simple plurals',
            () => {
                expect(plural('book')).toBe('books');
            }
        );
    }
);
