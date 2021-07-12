import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification } from '../src/color';

type Test = {
    name:       string;
    color1:     ColorSpecification;
    color2:     ColorSpecification;
    contrast:   number;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/contrast.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color contrast',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.contrast(colorTest.color1, colorTest.color2)).toBeCloseTo(colorTest.contrast);
            }
        );
    }
);
