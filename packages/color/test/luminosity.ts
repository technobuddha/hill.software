import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification } from '../src/color';

type Test = {
    name:       string;
    color:      ColorSpecification;
    luminosity: number;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/luminosity.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color luminosity',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.luminosity(colorTest.color)).toBeCloseTo(colorTest.luminosity);
            }
        );
    }
);
