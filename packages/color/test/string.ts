import expect from '../util/expect';
import color from '../src/color';

import type { Color, StringFormat } from '../src/color';

const units: Record<string, { options?: StringFormat; tests: Record<string, [ Color, string ]> }> = {
    'default': {
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3 },
                'rgb(1 2 3)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3 },
                'hsl(1 2% 3%)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3 },
                'hsv(1 2% 3%)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3 },
                'hwb(1 2% 3%)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3 },
                'hsi(1 2% 3%)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3 },
                'hcg(1 2% 3%)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3 },
                'cmy(1% 2% 3%)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4 },
                'cmyk(1% 2% 3% 4%)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3 },
                'xyz(1 2 3)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3 },
                'lab(1% 2 3)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3 },
                'lch(1% 2 3)',
            ],
        },
    },
    'default with alpha': {
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3, alpha: 0.5 },
                'rgb(1 2 3 / 50%)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3, alpha: 0.5 },
                'hsl(1 2% 3% / 50%)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3, alpha: 0.5 },
                'hsv(1 2% 3% / 50%)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3, alpha: 0.5 },
                'hwb(1 2% 3% / 50%)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3, alpha: 0.5 },
                'hsi(1 2% 3% / 50%)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3, alpha: 0.5 },
                'hcg(1 2% 3% / 50%)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3, alpha: 0.5 },
                'cmy(1% 2% 3% / 50%)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4, alpha: 0.5 },
                'cmyk(1% 2% 3% 4% / 50%)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3, alpha: 0.5 },
                'xyz(1 2 3 / 50%)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3, alpha: 0.5 },
                'lab(1% 2 3 / 50%)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3, alpha: 0.5 },
                'lch(1% 2 3 / 50%)',
            ],
        },
    },
    'name (found)': {
        options: 'name',
        tests: {
            RGB: [
                { r: 0, g: 0, b: 255 },
                'blue',
            ],
            HSL: [
                { h: 240, s: 100, l: 50 },
                'blue',
            ],
            HSV: [
                { h: 240, s: 100, v: 100 },
                'blue',
            ],
            HWB: [
                { h: 240, w: 0, b: 0 },
                'blue',
            ],
            HSI: [
                { h: 240, s: 100, i: 33.33 },
                'blue',
            ],
            HCG: [
                { h: 240, c: 100, g: 0 },
                'blue',
            ],
            CMY: [
                { c: 100, m: 100, y: 0 },
                'blue',
            ],
            CMYK: [
                { c: 100, m: 100, y: 0, k: 0 },
                'blue',
            ],
            XYZ: [
                { x: 18.04, y: 7.22, z: 95.03 },
                'blue',
            ],
            LAB: [
                { l: 32.297, a: 79.188, b: -107.860 },
                'blue',
            ],
            LCH: [
                { l: 32.297, c: 133.808, h: 306.285 },
                'blue',
            ],
        },
    },
    'name (not found)': {
        options: 'name',
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3 },
                'rgb(1 2 3)',
            ],
            HSL: [
                { h: 242, s: 100, l: 50 },
                'rgb(8 0 255)',
            ],
            HSV: [
                { h: 242, s: 100, v: 100 },
                'rgb(8 0 255)',
            ],
            HWB: [
                { h: 242, w: 0, b: 0 },
                'rgb(8 0 255)',
            ],
            HSI: [
                { h: 242, s: 100, i: 33.33 },
                'rgb(8 0 247)',
            ],
            HCG: [
                { h: 242, c: 100, g: 0 },
                'rgb(8 0 255)',
            ],
            CMY: [
                { c: 100, m: 100, y: 1 },
                'rgb(0 0 252)',
            ],
            CMYK: [
                { c: 100, m: 100, y: 1, k: 0 },
                'rgb(0 0 252)',
            ],
            XYZ: [
                { x: 19, y: 7.22, z: 95.03 },
                'rgb(49 0 255)',
            ],
            LAB: [
                { l: 32.297, a: 80, b: -107.860 },
                'rgb(15 0 255)',
            ],
            LCH: [
                { l: 32.297, c: 133.808, h: 308 },
                'rgb(54 0 251)',
            ],
        },
    },
    'name (with alpha)': {
        options: 'name',
        tests: {
            RGB: [
                { r: 0, g: 0, b: 255, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            HSL: [
                { h: 240, s: 100, l: 50, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            HSV: [
                { h: 240, s: 100, v: 100, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            HWB: [
                { h: 240, w: 0, b: 0, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            HSI: [
                { h: 240, s: 100, i: 33.33, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            HCG: [
                { h: 240, c: 100, g: 0, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            CMY: [
                { c: 100, m: 100, y: 0, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            CMYK: [
                { c: 100, m: 100, y: 0, k: 0, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            XYZ: [
                { x: 18.04, y: 7.22, z: 95.03, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            LAB: [
                { l: 32.297, a: 79.188, b: -107.860, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
            LCH: [
                { l: 32.297, c: 133.808, h: 306.285, alpha: 1 },
                'rgb(0 0 255 / 100%)',
            ],
        },
    },
    'hex': {
        options: 'hex',
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3 },
                '#010203',
            ],
            HSL: [
                { h: 1, s: 2, l: 3 },
                '#080807',
            ],
            HSV: [
                { h: 1, s: 2, v: 3 },
                '#080707',
            ],
            HWB: [
                { h: 1, w: 2, b: 3 },
                '#f70905',
            ],
            HSI: [
                { h: 1, s: 2, i: 3 },
                '#080807',
            ],
            HCG: [
                { h: 1, c: 2, g: 3 },
                '#0d0807',
            ],
            CMY: [
                { c: 1, m: 2, y: 3 },
                '#fcfaf7',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4 },
                '#f2f0ed',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3 },
                '#00302f',
            ],
            LAB: [
                { l: 1, a: 2, b: 3 },
                '#0c0200',
            ],
            LCH: [
                { l: 1, c: 2, h: 3 },
                '#090203',
            ],
        },
    },
    'hex with alpha': {
        options: 'hex',
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3, alpha: 0.5 },
                '#01020380',
            ],
            HSL: [
                { h: 1, s: 2, l: 3, alpha: 0.5 },
                '#08080780',
            ],
            HSV: [
                { h: 1, s: 2, v: 3, alpha: 0.5 },
                '#08070780',
            ],
            HWB: [
                { h: 1, w: 2, b: 3, alpha: 0.5 },
                '#f7090580',
            ],
            HSI: [
                { h: 1, s: 2, i: 3, alpha: 0.5 },
                '#08080780',
            ],
            HCG: [
                { h: 1, c: 2, g: 3, alpha: 0.5 },
                '#0d080780',
            ],
            CMY: [
                { c: 1, m: 2, y: 3, alpha: 0.5 },
                '#fcfaf780',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4, alpha: 0.5 },
                '#f2f0ed80',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3, alpha: 0.5 },
                '#00302f80',
            ],
            LAB: [
                { l: 1, a: 2, b: 3, alpha: 0.5 },
                '#0c020080',
            ],
            LCH: [
                { l: 1, c: 2, h: 3, alpha: 0.5 },
                '#09020380',
            ],
        },
    },
    'hex shorthand': {
        options: 'hex',
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51 },
                '#123',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3 },
                '#123',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0 },
                '#123',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80 },
                '#123',
            ],
            HSI: [
                { h: 210, s: 50, i: 13.33 },
                '#123',
            ],
            HCG: [
                { h: 210, c: 13.33, g: 7.69 },
                '#123',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80 },
                '#123',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80 },
                '#123',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347 },
                '#123',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306 },
                '#123',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609 },
                '#123',
            ],
        },
    },
    'hex shorthand with alpha': {
        options: 'hex',
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51, alpha: 68 / 255 },
                '#1234',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3, alpha: 68 / 255 },
                '#1234',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0, alpha: 68 / 255 },
                '#1234',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80, alpha: 68 / 255 },
                '#1234',
            ],
            HSI: [
                { h: 210, s: 50, i: 13.33, alpha: 68 / 255 },
                '#1234',
            ],
            HCG: [
                { h: 210, c: 13.33, g: 7.69, alpha: 68 / 255 },
                '#1234',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80, alpha: 68 / 255 },
                '#1234',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80, alpha: 68 / 255 },
                '#1234',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347, alpha: 68 / 255 },
                '#1234',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306, alpha: 68 / 255 },
                '#1234',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609, alpha: 68 / 255 },
                '#1234',
            ],
        },
    },
    'hex shorthand (off)': {
        options: { format: 'hex', hexShorthand: false },
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51 },
                '#112233',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3 },
                '#112233',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0 },
                '#112233',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80 },
                '#112233',
            ],
            HSI: [
                { h: 210, s: 50, i: 13.33 },
                '#112233',
            ],
            HCG: [
                { h: 210, c: 13.33, g: 7.69 },
                '#112233',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80 },
                '#112233',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80 },
                '#112233',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347 },
                '#112233',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306 },
                '#112233',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609 },
                '#112233',
            ],
        },
    },
    'hex shorthand (off) with alpha': {
        options: { format: 'hex', hexShorthand: false },
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51, alpha: 68 / 255 },
                '#11223344',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3, alpha: 68 / 255 },
                '#11223344',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0, alpha: 68 / 255 },
                '#11223344',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80, alpha: 68 / 255 },
                '#11223344',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80, alpha: 68 / 255 },
                '#11223344',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80, alpha: 68 / 255 },
                '#11223344',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347, alpha: 68 / 255 },
                '#11223344',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306, alpha: 68 / 255 },
                '#11223344',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609, alpha: 68 / 255 },
                '#11223344',
            ],
        },
    },
    'hex shorthand (css3)': {
        options: { format: 'hex', cssVersion: 3 },
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51 },
                '#123',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3 },
                '#123',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0 },
                '#123',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80 },
                '#123',
            ],
            HSI: [
                { h: 210, s: 50, i: 13.33 },
                '#123',
            ],
            HCG: [
                { h: 210, c: 13.33, g: 7.69 },
                '#123',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80 },
                '#123',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80 },
                '#123',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347 },
                '#123',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306 },
                '#123',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609 },
                '#123',
            ],
        },
    },
    'hex shorthand (css3) with alpha': {
        options: { format: 'hex', cssVersion: 3 },
        tests: {
            RGB: [
                { r: 17, g: 34, b: 51, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            HSL: [
                { h: 210, s: 50, l: 13.3, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            HSV: [
                { h: 210, s: 66.7, v: 20.0, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            HWB: [
                { h: 210, w: 6.67, b: 80, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            HSI: [
                { h: 210, s: 50, i: 13.33, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            HCG: [
                { h: 210, c: 13.33, g: 7.69, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            CMY: [
                { c: 93.33, m: 86.67, y: 80, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            CMYK: [
                { c: 66.67, m: 33.33, y: 0, k: 80, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            XYZ: [
                { x: 1.401, y: 1.502, z: 3.347, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            LAB: [
                { l: 12.622, a: -0.789, b: -13.306, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
            LCH: [
                { l: 12.622, c: 13.330, h: 266.609, alpha: 0.5 },
                'rgba(17, 34, 51, 0.5)',
            ],
        },
    },
    'css': {
        options: 'css',
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3 },
                'rgb(1 2 3)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3 },
                'hsl(1 2% 3%)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3 },
                'rgb(8 7 7)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3 },
                'hwb(1 2% 3%)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3 },
                'rgb(8 8 7)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3 },
                'rgb(13 8 7)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3 },
                'rgb(252 250 247)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4 },
                'device-cmyk(1% 2% 3% 4%)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3 },
                'color(xyz 0.01 0.02 0.03)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3 },
                'lab(1% 2 3)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3 },
                'lch(1% 2 3)',
            ],
        },
    },
    'css with alpha': {
        options: 'css',
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3, alpha: 0.5 },
                'rgb(1 2 3 / 50%)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3, alpha: 0.5 },
                'hsl(1 2% 3% / 50%)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3, alpha: 0.5 },
                'rgb(8 7 7 / 50%)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3, alpha: 0.5 },
                'hwb(1 2% 3% / 50%)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3, alpha: 0.5 },
                'rgb(8 8 7 / 50%)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3, alpha: 0.5 },
                'rgb(13 8 7 / 50%)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3, alpha: 0.5 },
                'rgb(252 250 247 / 50%)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4, alpha: 0.5 },
                'device-cmyk(1% 2% 3% 4% / 50%)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3, alpha: 0.5 },
                'color(xyz 0.01 0.02 0.03 / 0.5)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3, alpha: 0.5 },
                'lab(1% 2 3 / 50%)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3, alpha: 0.5 },
                'lch(1% 2 3 / 50%)',
            ],
        },
    },
    'css (css3)': {
        options: { format: 'css', cssVersion: 3 },
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3 },
                'rgb(1, 2, 3)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3 },
                'hsl(1, 2%, 3%)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3 },
                'rgb(8, 7, 7)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3 },
                'rgb(247, 9, 5)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3 },
                'rgb(8, 8, 7)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3 },
                'rgb(13, 8, 7)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3 },
                'rgb(252, 250, 247)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4 },
                'rgb(242, 240, 237)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3 },
                'rgb(0, 48, 47)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3 },
                'rgb(12, 2, 0)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3 },
                'rgb(9, 2, 3)',
            ],
        },
    },
    'css (css3) with alpha': {
        options: { format: 'css', cssVersion: 3 },
        tests: {
            RGB: [
                { r: 1, g: 2, b: 3, alpha: 0.5 },
                'rgba(1, 2, 3, 0.5)',
            ],
            HSL: [
                { h: 1, s: 2, l: 3, alpha: 0.5 },
                'hsla(1, 2%, 3%, 0.5)',
            ],
            HSV: [
                { h: 1, s: 2, v: 3, alpha: 0.5 },
                'rgba(8, 7, 7, 0.5)',
            ],
            HWB: [
                { h: 1, w: 2, b: 3, alpha: 0.5 },
                'rgba(247, 9, 5, 0.5)',
            ],
            HSI: [
                { h: 1, s: 2, i: 3, alpha: 0.5 },
                'rgba(8, 8, 7, 0.5)',
            ],
            HCG: [
                { h: 1, c: 2, g: 3, alpha: 0.5 },
                'rgba(13, 8, 7, 0.5)',
            ],
            CMY: [
                { c: 1, m: 2, y: 3, alpha: 0.5 },
                'rgba(252, 250, 247, 0.5)',
            ],
            CMYK: [
                { c: 1, m: 2, y: 3, k: 4, alpha: 0.5 },
                'rgba(242, 240, 237, 0.5)',
            ],
            XYZ: [
                { x: 1, y: 2, z: 3, alpha: 0.5 },
                'rgba(0, 48, 47, 0.5)',
            ],
            LAB: [
                { l: 1, a: 2, b: 3, alpha: 0.5 },
                'rgba(12, 2, 0, 0.5)',
            ],
            LCH: [
                { l: 1, c: 2, h: 3, alpha: 0.5 },
                'rgba(9, 2, 3, 0.5)',
            ],
        },
    },
};

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