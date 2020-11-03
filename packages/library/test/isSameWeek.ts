﻿import 'mocha';
import { expect } from 'chai';
import isSameWeek from '../isSameWeek';
import { month }  from '../constants';

describe(
    'isSameWeek',
    () => {
        it(
            'should check for date similarity',
            () => {
                expect(isSameWeek(new Date('7 Dec 1941 07:55'), new Date('7  Dec 1941'))).to.equal(true);
                expect(isSameWeek(new Date('7 Dec 1941 07:55'), new Date('6  Dec 1941'))).to.equal(true);
                expect(isSameWeek(new Date('7 Dec 1941 07:55'), new Date('7  Dec 1942'))).to.equal(false);
            }
        );

        it(
            'should check for date similarity',
            () => {
                expect(isSameWeek(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1941, month.december, 7)), {UTC:true})).to.equal(true);
                expect(isSameWeek(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1941, month.december, 6)), {UTC:true})).to.equal(true);
                expect(isSameWeek(new Date(Date.UTC(1941, month.december, 7, 7, 55)), new Date(Date.UTC(1942, month.december, 7)), {UTC:true})).to.equal(false);
            }      
        );
    }
);
