import expect from '#util/expect';
import toPascalCase from '../src/toPascalCase';

describe(
    'toPascalCase',
    () => {
        test(
            'should sentences',
            () => {
                expect(toPascalCase('now is the time for all good men to come to the aid of their country')).toBe('NowIsTheTimeForAllGoodMenToComeToTheAidOfTheirCountry');
            }
        );

        test(
            'should not change remaining case',
            () => {
                expect(toPascalCase('now IS the time for ALL good men to come to the AID of their country')).toBe('NowISTheTimeForALLGoodMenToComeToTheAIDOfTheirCountry');
            }
        );
    }
);
