﻿import 'mocha';
import { expect }    from 'chai';
import unicodeLength from '../unicodeLength';

describe(
    'unicodeLength',
    () => {
        it(
            'should detect surrogates',
            () => {
                expect('😀😁😂😺😸😹'.length).to.equal(12);
                expect(unicodeLength('😀😁😂😺😸😹')).to.equal(6);
            }
        );
    }
);

