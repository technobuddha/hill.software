import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification, RGB } from '../src/color';

type Test = {
    name:       string;
    color:      ColorSpecification;
    grayscale:  RGB;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/grayscale.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color luminosity',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.grayscale(colorTest.color)).toBeDeepCloseTo(colorTest.grayscale);
            }
        );
    }
);
