﻿import 'mocha';
import { expect } from 'chai';
import splitWords from '../splitWords';
import { empty }  from '../constants';

describe(
    'splitWords',
    () => {
        it(
            'should split on whitespace',
            () => {
                expect(splitWords(empty)).to.deep.equal([]);
                expect(splitWords('a b c d')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
                expect(splitWords('a\tb\tc\td')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
                expect(splitWords('a\rb\rc\rd')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
                expect(splitWords('a    b    c    d')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
                expect(splitWords('a\r\nb\r\nc\r\nd')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
            }
        );

        it(
            'should ignore leading and trailing whitespace',
            () => {
                expect(splitWords('  a   b   c   d  ')).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
            }
        );

        it(
            'should accept alternate delimiters',
            () => {
                expect(splitWords('*a*b*c*d*', { delimiter: '*' })).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
                expect(splitWords('@a#b@c#', { delimiter: /@|#/ })).to.deep.equal([ 'a', 'b', 'c' ]);
            }
        );

    }
);

