import expect from '#util/expect';
import toASCII    from '../src/toASCII';

// cspell:ignore ＡＢＣＤ
describe(
    'toASCII',
    () => {
        test(
            'should bad characters to be replaces',
            () => {
                expect(toASCII('crème brûlée')).toBe('creme brulee');
                expect(toASCII('ＡＢＣＤ')).toBe('ABCD');
                expect(toASCII('⒜⒝⒞⒟')).toBe('(a)(b)(c)(d)');
            }
        );
    }
);
