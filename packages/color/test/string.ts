import fs from 'fs-extra';
import expect from '../util/expect';
import color from '../src/color';

import type { Color, StringFormat } from '../src/color';

const units: Record<string, { options?: StringFormat; tests: Record<string, [ Color, string ]> }> =
    JSON.parse(fs.readFileSync('./test/data/string.json', 'utf-8'));

describe(
    'color.string',
    () => {
        describe.each(Object.entries(units))(
            '%s',
            (_, t) => {
                test.each(Object.entries(t.tests))(
                    '%s',
                    (_, p) => {
                        expect(color.string(p[0], t.options)).toBe(p[1]);
                    }
                );
            }
        );
    }
);
