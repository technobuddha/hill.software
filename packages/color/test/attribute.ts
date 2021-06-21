import expect                 from '../util/expect';
import { attributes } from '../src/color';
import fs                     from 'fs';

import type { RGB } from '../src/color';

type Levels = '+25%' | '+50%' | '+75%' | '-25%' | '-50%' | '-75%';
type Test   = ({ name: string; rgb: RGB; toString: () => string } & {[key in Levels]: RGB });

describe(
    'attributes',
    () => {
        describe.each(Object.keys(attributes))(
            '%s',
            attribute => {
                const colorTests: Test[] = JSON.parse(fs.readFileSync(`./test/${attribute}.json`, 'utf-8'))
                .map((test: Test) => { test.toString = () => `${test.name} r:${test.rgb.r} g: ${test.rgb.g} b: ${test.rgb.b}`; return test; });

                describe.each(colorTests)(
                    '%s',
                    colorTest => {
                        const rgb = colorTest.rgb;
                        const fn  = attributes[attribute as keyof typeof attributes];

                        test(
                            '+25%',
                            () => {
                                expect(fn(rgb, +0.25)).toMatchCloseTo(colorTest['+25%']);
                            }
                        );

                        test(
                            '+50%',
                            () => {
                                expect(fn(rgb, +0.50)).toMatchCloseTo(colorTest['+50%']);
                            }
                        );

                        test(
                            '+75%',
                            () => {
                                expect(fn(rgb, +0.75)).toMatchCloseTo(colorTest['+75%']);
                            }
                        );

                        test(
                            '-25%',
                            () => {
                                expect(fn(rgb, -0.25)).toMatchCloseTo(colorTest['-25%']);
                            }
                        );

                        test(
                            '-50%',
                            () => {
                                expect(fn(rgb, -0.50)).toMatchCloseTo(colorTest['-50%']);
                            }
                        );

                        test(
                            '-75%',
                            () => {
                                expect(fn(rgb, -0.75)).toMatchCloseTo(colorTest['-75%']);
                            }
                        );
                    }
                );
            }
        );
    }
);
