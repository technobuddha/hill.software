/* eslint-disable @typescript-eslint/quotes */
//import fs from 'fs-extra';
import expect from '../util/expect';
import color from '../src/color';

describe(
    'color.alpha',
    () => {
        test(
            'default',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }).alpha).toBeCloseTo(0.85);
            }
        );

        test(
            '+',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, +0.25).alpha).toBeCloseTo(0.85);
            }
        );

        test(
            '-',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, -0.25).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            '+ratio',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, { ratio: +0.25 }).alpha).toBeCloseTo(0.7);
            }
        );

        test(
            '+ratio',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, { ratio: -0.25 }).alpha).toBeCloseTo(0.45);
            }
        );

        test(
            '+amount',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, { amount: +0.25 }).alpha).toBeCloseTo(0.85);
            }
        );

        test(
            '+amount',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'no alpha',
            () => {
                expect(color.alpha({ r: 0, g: 0, b: 0 }, -0.25).alpha).toBeCloseTo(0.75);
            }
        );

        test(
            'HSL',
            () => {
                expect(color.alpha({ h: 0, s: 0, l: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'HSV',
            () => {
                expect(color.alpha({ h: 0, s: 0, v: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'HSI',
            () => {
                expect(color.alpha({ h: 0, s: 0, i: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'HWB',
            () => {
                expect(color.alpha({ h: 0, w: 0, b: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'HCG',
            () => {
                expect(color.alpha({ h: 0, c: 0, g: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'CMY',
            () => {
                expect(color.alpha({ c: 0, m: 0, y: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'CMYK',
            () => {
                expect(color.alpha({ c: 0, m: 0, y: 0, k: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'XYZ',
            () => {
                expect(color.alpha({ x: 0, y: 0, z: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'LAB',
            () => {
                expect(color.alpha({ l: 0, a: 0, b: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'LCH',
            () => {
                expect(color.alpha({ l: 0, c: 0, h: 0, alpha: 0.6 }, { amount: -0.25 }).alpha).toBeCloseTo(0.35);
            }
        );

        test(
            'name',
            () => {
                expect(color.alpha('blue', { amount: -0.25 }).alpha).toBeCloseTo(0.75);
            }
        );
    }
);
