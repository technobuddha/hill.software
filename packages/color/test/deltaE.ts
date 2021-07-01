import expect from '../util/expect';
import color from '../src/color';

describe(
    'color',
    () => {
        test(
            'deltaE1976',
            () => {
                const color1 = { l: 36, a: 60, b: 41 };
                const color2 = { l: 55, a: 66, b: 77 };
                expect(color.deltaE1976(color1, color2)).toBeCloseTo(41.1460812228819);
            }
        );

        test(
            'deltaE1994',
            () => {
                const color1 = { l: 36, a: 60, b: 41 };
                const color2 = { l: 55, a: 66, b: 77 };
                expect(color.deltaE1994(color1, color2)).toBeCloseTo(22.849281934529994);
            }
        );

        test(
            'deltaE1994 Floating point error',
            () => {
                const color1 = { l: 53.23288178584245, a: 80.10930952982204, b: 67.22006831026425 };
                const color2 = { l: 50.95880998358150, a: 77.47798295202801, b: 65.01211079141827 };
                expect(color.deltaE1994(color1, color2)).toBeCloseTo(2.3490128510897668);
            }

        );

        test(
            'deltaE2000',
            () => {
                const color1 = { l: 36, a: 60, b: 41 };
                const color2 = { l: 55, a: 66, b: 77 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(22.3945069524179);
            }
        );

        test(
            'deltaE2000 0.0',
            () => {
                const color1 = { l: 0, a: 0, b: 0 };
                const color2 = { l: 0, a: 0, b: 0 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(0.0);
            }
        );

        test(
            'deltaE2000 0.0',
            () => {
                const color1 = { l: 99.5, a: 0.005, b: -0.010 };
                const color2 = { l: 99.5, a: 0.005, b: -0.010 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(0.0);
            }
        );

        test(
            'deltaE2000 100.0',
            () => {
                const color1 = { l: 100, a: 0.005, b: -0.010 };
                const color2 = { l: 0,   a: 0,     b: 0 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(100.0);
            }
        );

        test(
            'deltaE2000 True chroma difference #1',
            () => {
                const color1 = { l: 50.0000, a: 2.6772, b: -79.7751 };
                const color2 = { l: 50.0000, a: 0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(2.0425);
            }
        );

        test(
            'deltaE2000 True chroma difference #2',
            () => {
                const color1 = { l: 50.0000, a: 3.1571, b: -77.2803 };
                const color2 = { l: 50.0000, a: 0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(2.8615);
            }
        );

        test(
            'deltaE2000 True chroma difference #3',
            () => {
                const color1 = { l: 50.0000, a: 2.8361, b: -74.0200 };
                const color2 = { l: 50.0000, a: 0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(3.4412);
            }
        );

        test(
            'deltaE2000 True chroma difference #4',
            () => {
                const color1 = { l: 50.0000, a: -1.3802, b: -84.2814 };
                const color2 = { l: 50.0000, a:  0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 True chroma difference #5',
            () => {
                const color1 = { l: 50.0000, a: -1.1848, b: -84.8006 };
                const color2 = { l: 50.0000, a:  0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 True chroma difference #6',
            () => {
                const color1 = { l: 50.0000, a: -0.9009, b: -85.5211 };
                const color2 = { l: 50.0000, a:  0.0000, b: -82.7485 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 Arctangent computation #7',
            () => {
                const color1 = { l: 50.0000, a:  0.0000, b:  0.0000 };
                const color2 = { l: 50.0000, a: -1.0000, b:  2.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(2.3669);
            }
        );

        test(
            'deltaE2000 Arctangent computation #8',
            () => {
                const color1 = { l: 50.0000, a: -1.0000, b:  2.0000 };
                const color2 = { l: 50.0000, a:  0.0000, b:  0.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(2.3669);
            }
        );

        test(
            'deltaE2000 Arctangent computation #9',
            () => {
                const color1 = { l: 50.0000, a:  2.4900, b: -0.0010 };
                const color2 = { l: 50.0000, a: -2.4900, b:  0.0009 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(7.1792);
            }
        );

        test(
            'deltaE2000 Arctangent computation #10',
            () => {
                const color1 = { l: 50.0000, a:  2.4900, b: -0.0010 };
                const color2 = { l: 50.0000, a: -2.4900, b:  0.0010 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(7.1792);
            }
        );

        test(
            'deltaE2000 Arctangent computation #11',
            () => {
                const color1 = { l: 50.0000, a:  2.4900, b: -0.0010 };
                const color2 = { l: 50.0000, a: -2.4900, b:  0.0011 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(7.2195);
            }
        );

        test(
            'deltaE2000 Arctangent computation #12',
            () => {
                const color1 = { l: 50.0000, a:  2.4900, b: -0.0010 };
                const color2 = { l: 50.0000, a: -2.4900, b:  0.0012 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(7.2195);
            }
        );

        test(
            'deltaE2000 Arctangent computation #13',
            () => {
                const color1 = { l: 50.0000, a: -0.0010, b:  2.4900 };
                const color2 = { l: 50.0000, a:  0.0009, b: -2.4900 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(4.8045);
            }
        );

        test(
            'deltaE2000 Arctangent computation #14',
            () => {
                const color1 = { l: 50.0000, a: -0.0010, b:  2.4900 };
                const color2 = { l: 50.0000, a:  0.0010, b: -2.4900 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(4.8045);
            }
        );

        test(
            'deltaE2000 Arctangent computation #15',
            () => {
                const color1 = { l: 50.0000, a: -0.0010, b:  2.4900 };
                const color2 = { l: 50.0000, a:  0.0011, b: -2.4900 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(4.7461);
            }
        );

        test(
            'deltaE2000 Arctangent computation #16',
            () => {
                const color1 = { l: 50.0000, a:  2.5000, b:  0.0000 };
                const color2 = { l: 50.0000, a:  0.0000, b: -2.5000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(4.3065);
            }
        );

        test(
            'deltaE2000 Large color differences #17',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 73.0000, a:  25.0000, b: -18.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(27.1492);
            }
        );

        test(
            'deltaE2000 Large color differences #18',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 61.0000, a:  -5.0000, b:  29.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(22.8977);
            }
        );

        test(
            'deltaE2000 Large color differences #19',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 56.0000, a: -27.0000, b:  -3.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(31.9030);
            }
        );

        test(
            'deltaE2000 Large color differences #20',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 58.0000, a:  24.0000, b:  15.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(19.4535);
            }
        );

        test(
            'deltaE2000 CIE technical report #21',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 50.0000, a:   3.1736, b:   0.5854 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 CIE technical report #22',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 50.0000, a:   3.2962, b:   0.0000 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 CIE technical report #23',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 50.0000, a:   1.8634, b:   0.5757 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 CIE technical report #24',
            () => {
                const color1 = { l: 50.0000, a:   2.5000, b:   0.0000 };
                const color2 = { l: 50.0000, a:   3.2592, b:   0.3350 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.0000);
            }
        );

        test(
            'deltaE2000 CIE technical report #25',
            () => {
                const color1 = { l: 60.2574, a: -34.0099, b:  36.2677 };
                const color2 = { l: 60.4626, a: -34.1751, b:  39.4387 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.2644);
            }
        );

        test(
            'deltaE2000 CIE technical report #26',
            () => {
                const color1 = { l: 63.0109, a: -31.0961, b:  -5.8663 };
                const color2 = { l: 62.8187, a: -29.7946, b:  -4.0864 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.2630);
            }
        );

        test(
            'deltaE2000 CIE technical report #27',
            () => {
                const color1 = { l: 61.2901, a:   3.7196, b:  -5.3901 };
                const color2 = { l: 61.4292, a:   2.2480, b:  -4.9620 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.8731);
            }
        );

        test(
            'deltaE2000 CIE technical report #28',
            () => {
                const color1 = { l: 35.0831, a: -44.1164, b:   3.7933 };
                const color2 = { l: 35.0232, a: -40.0716, b:   1.5901 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.8645);
            }
        );

        test(
            'deltaE2000 CIE technical report #29',
            () => {
                const color1 = { l: 22.7233, a:  20.0904, b: -46.6940 };
                const color2 = { l: 23.0331, a:  14.9730, b: -42.5619 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(2.0373);
            }
        );

        test(
            'deltaE2000 CIE technical report #30',
            () => {
                const color1 = { l: 36.4612, a:  47.8580, b:  18.3852 };
                const color2 = { l: 36.2715, a:  50.5065, b:  21.2231 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.4146);
            }
        );

        test(
            'deltaE2000 CIE technical report #31',
            () => {
                const color1 = { l: 90.8027, a:  -2.0831, b:   1.4410 };
                const color2 = { l: 91.1528, a:  -1.6435, b:   0.0447 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.4441);
            }
        );

        test(
            'deltaE2000 CIE technical report #32',
            () => {
                const color1 = { l: 90.9257, a:  -0.5406, b:  -0.9208 };
                const color2 = { l: 88.6381, a:  -0.8985, b:  -0.7239 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(1.5381);
            }
        );

        test(
            'deltaE2000 CIE technical report #33',
            () => {
                const color1 = { l:  6.7747, a:  -0.2908, b:  -2.4247 };
                const color2 = { l:  5.8714, a:  -0.0985, b:  -2.2286 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(0.6377);
            }
        );

        test(
            'deltaE2000 CIE technical report #34',
            () => {
                const color1 = { l:  2.0776, a:   0.0795, b:  -1.1350 };
                const color2 = { l:  0.9033, a:  -0.0636, b:  -0.5514 };
                expect(color.deltaE2000(color1, color2)).toBeCloseTo(0.9082);
            }
        );
    }
);
