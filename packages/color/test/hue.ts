import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification, RGB } from '../src/color';

type Test = {
    name:       string;
    color:      ColorSpecification;
    default:    RGB;
    '+90':      RGB;
    '+180':     RGB;
    '-90':      RGB;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/hue.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color hue',
    () => {
        test.each(colorTests)(
            '%s (default)',
            colorTest => {
                expect(color.hue(colorTest.color)).toBeDeepCloseTo(colorTest.default);
            }
        );

        test.each(colorTests)(
            '%s (+90)',
            colorTest => {
                expect(color.hue(colorTest.color, +90)).toBeDeepCloseTo(colorTest['+90']);
            }
        );

        test.each(colorTests)(
            '%s (+180)',
            colorTest => {
                expect(color.hue(colorTest.color, +180)).toBeDeepCloseTo(colorTest['+180']);
            }
        );

        test.each(colorTests)(
            '%s (-90)',
            colorTest => {
                expect(color.hue(colorTest.color, -90)).toBeDeepCloseTo(colorTest['-90']);
            }
        );
    }
);
