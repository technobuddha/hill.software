import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification } from '../src/color';

type Test = {
    name:       string;
    color:      ColorSpecification;
    isDark:     boolean;
    isLight:    boolean;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/dark-light.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color isDark',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.isDark(colorTest.color)).toBe(colorTest.isDark);
            }
        );
    }
);

describe(
    'color isLight',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.isLight(colorTest.color)).toBe(colorTest.isLight);
            }
        );
    }
);
