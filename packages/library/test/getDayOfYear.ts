import expect from '#util/expect';
import getDayOfYear from '../src/getDayOfYear';
import { month }    from '../src/constants';

describe(
    'getDayOfYear',
    () => {
        test(
            'should convert to day of year',
            () => {
                expect(getDayOfYear(new Date('1 Mar 2004'))).toBe(61);
                expect(getDayOfYear(new Date('1 Mar 2005'))).toBe(60);
            }
        );

        test(
            'should convert to UTC day of year',
            () => {
                expect(getDayOfYear(new Date(Date.UTC(2004, month.march, 1)), { UTC: true })).toBe(61);
                expect(getDayOfYear(new Date(Date.UTC(2005, month.march, 1)), { UTC: true })).toBe(60);
            }
        );
    }
);
