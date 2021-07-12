import expect from '../util/expect';
import color  from '../src/color';
import fs     from 'fs';

import type { ColorSpecification, RGB } from '../src/color';

type Test = {
    name:       string;
    color:      ColorSpecification;
    scheme:     Record<string, RGB[]>;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/data/scheme.json', 'utf-8'))
.map((test: Test) => { test.toString = () => test.name; return test; });

describe(
    'color luminosity',
    () => {
        test.each(colorTests)(
            '%s',
            colorTest => {
                expect(color.scheme(colorTest.color)).toBeDeepCloseTo(colorTest.scheme);
            }
        );
    }
);
