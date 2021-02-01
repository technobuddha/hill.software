﻿import 'mocha';
import { expect } from 'chai';
import isSameYear from '../src/isSameYear';
import { month }  from '../src/constants';

describe(
    'isSameYear',
    () => {
        it(
            'should check for date similarity',
            () => {
                expect(isSameYear(new Date('7 Dec 1941 07:55'), new Date('7  Dec 1941'))).to.equal(true);
                expect(isSameYear(new Date('7 Dec 1941 07:55'), new Date('8  Dec 1941'))).to.equal(true);
                expect(isSameYear(new Date('7 Dec 1941 07:55'), new Date('26 Nov 1941'))).to.equal(true);
                expect(isSameYear(new Date('7 Dec 1941 07:55'), new Date('14 Aug 1945'))).to.equal(false);
            }
        );

        it(
            'should check for date similarity',
            () => {
                expect(isSameYear(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1941, month.december,  7)), { UTC: true })).to.equal(true);
                expect(isSameYear(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1941, month.december,  8)), { UTC: true })).to.equal(true);
                expect(isSameYear(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1941, month.november, 26)), { UTC: true })).to.equal(true);
                expect(isSameYear(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1945, month.august,   14)), { UTC: true })).to.equal(false);
            }
        );
    }
);