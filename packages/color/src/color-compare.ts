import { toDegrees, toRadians, hypot } from './util';
import lab from './lab';

import type { RGB, LAB } from './color';

export function colorDistance(color: RGB, other: RGB): number {
    const rMean  = (color.r + other.r) / 2;
    const r      = color.r - other.r;
    const g      = color.g - other.g;
    const b      = color.b - other.b;
    return Math.sqrt(((2 + (rMean / 256)) * r * r) + (4 * g * g) + ((2 + ((255 - rMean) / 256)) * b * b));
}

function getH(x: number, y: number): number {
    if(x === 0 && y === 0)
        return 0;

    const hue = toDegrees(Math.atan2(x, y));
    if(hue >= 0)
        return hue;
    return hue + 360;
}

export function deltaC(color1: LAB, color2: LAB): number {
    const { redGreen: redGreen1, blueYellow: blueYellow1 } = lab.internal(color1);
    const { redGreen: redGreen2, blueYellow: blueYellow2 } = lab.internal(color2);

    return (hypot(redGreen2, blueYellow2) - hypot(redGreen1, blueYellow1)) *
           Math.sqrt(100);
}

export function deltaH(color1: LAB, color2: LAB): number {
    const { redGreen: redGreen1, blueYellow: blueYellow1 } = lab.internal(color1);
    const { redGreen: redGreen2, blueYellow: blueYellow2 } = lab.internal(color2);

    return Math.sqrt((redGreen2 - redGreen1) ** 2 + (blueYellow2 - blueYellow1) ** 2 - deltaC(color1, color2)) *
           Math.sqrt(100);
}

export function deltaE1976(color1: LAB, color2: LAB): number {
    const { lightness: lightness1, redGreen: redGreen1, blueYellow: blueYellow1 } = lab.internal(color1);
    const { lightness: lightness2, redGreen: redGreen2, blueYellow: blueYellow2 } = lab.internal(color2);
    return hypot(lightness1 * 100 - lightness2 * 100, redGreen1 * 100 - redGreen2 * 100, blueYellow1 * 100 - blueYellow2 * 100);
}

export function deltaE1994(color1: LAB, color2: LAB): number {
    let { lightness: l1, redGreen: a1, blueYellow: b1 } = lab.internal(color1);
    let { lightness: l2, redGreen: a2, blueYellow: b2 } = lab.internal(color2);

    // We use the internal values because they are more precise, but the formula is based on external
    l1 *= 100;
    a1 *= 100;
    b1 *= 100;
    l2 *= 100;
    a2 *= 100;
    b2 *= 100;

    const Kl = 1.0;         // Weighing factors
    const Kc = 1.0;
    const Kh = 1.0;

    const K1 = 0.045; //0.048
    const K2 = 0.015; //0.014

    let ΔL = l1 - l2;
    let C1 = hypot(a1, b1);
    let C2 = hypot(a2, b2);
    let ΔC = C1 - C2;
    let ΔE = deltaE1976(color1, color2);
    let ΔH = ΔE ** 2 - ΔL ** 2 - ΔC ** 2;
    if(ΔH > 0)
        ΔH = Math.sqrt(ΔH);
    else
        ΔH = 0;
    let Sl = 1.0;
    let Sc = 1 + (K1 * C1);
    let Sh = 1 + (K2 * C1);

    return Math.sqrt((ΔL / (Kl * Sl)) ** 2 + (ΔC / (Kc * Sc)) ** 2 + (ΔH / (Kh * Sh)) ** 2);
}

export function deltaE2000(color1: LAB, color2: LAB): number {
    let { lightness: l1, redGreen: a1, blueYellow: b1 } = lab.internal(color1);
    let { lightness: l2, redGreen: a2, blueYellow: b2 } = lab.internal(color2);

    // We use the internal values because they are more precise, but the formula is based on external
    l1 *= 100;
    a1 *= 100;
    b1 *= 100;
    l2 *= 100;
    a2 *= 100;
    b2 *= 100;

    const Kl    = 1.0;
    const Kc    = 1.0;
    const Kh    = 1.0;

    const ΔĹ = l2 - l1;

    const Ĺ̅  = (l1 + l2) / 2;
    const C1 = hypot(a1, b1);
    const C2 = hypot(a2, b2);
    const C̅  = (C1 + C2) / 2;

    const á1 = a1 + (a1 / 2) * (1 - Math.sqrt((C̅ ** 7) / ((C̅ ** 7) + (25 ** 7))));
    const á2 = a2 + (a2 / 2) * (1 - Math.sqrt((C̅ ** 7) / ((C̅ ** 7) + (25 ** 7))));
    const Ć1 = hypot(á1, b1);
    const Ć2 = hypot(á2, b2);
    const Ć̅  = (Ć1 + Ć2) / 2;
    const ΔĆ = Ć2 - Ć1;

    const h́1 = getH(b1, á1);
    const h́2 = getH(b2, á2);

    const Δh́ = (C1 === 0 || C2 === 0)
        ?   0
        :   Math.abs(h́1 - h́2) <= 180
            ?   h́2 - h́1
            :   h́2 <= h́1
                ?   h́2 - h́1 + 360
                :   h́2 - h́1 - 360;

    const ΔH́ = 2 * Math.sqrt(Ć1 * Ć2) * Math.sin(toRadians(Δh́ / 2));

    const H́̅  = Math.abs(h́1 - h́2) <= 180
        ?   (h́1 + h́2) / 2
        :   h́1 + h́2 < 360
            ?   (h́1 + h́2 + 360) / 2
            :   (h́1 + h́2 - 360) / 2;

    const T  = 1 -
        0.17 * Math.cos(toRadians(1 * H́̅ - 30)) +
        0.24 * Math.cos(toRadians(2 * H́̅))      +
        0.32 * Math.cos(toRadians(3 * H́̅ + 6))  -
        0.20 * Math.cos(toRadians(4 * H́̅ - 63));

    const Sl = 1 + ((0.015 * (Ĺ̅ - 50) ** 2) / Math.sqrt(20 + (Ĺ̅ - 50) ** 2));
    const Sc = 1 + 0.045 * Ć̅;
    const Sh = 1 + 0.015 * Ć̅ * T;

    const Rt = -2 *
        Math.sqrt((Ć̅ ** 7) / ((Ć̅ ** 7) + (25 ** 7))) *
        Math.sin(toRadians(60 * Math.exp(-(((H́̅ - 275) / 25) ** 2))));

    const lightness = ΔĹ / (Kl * Sl);
    const chroma    = ΔĆ / (Kc * Sc);
    const hue       = ΔH́ / (Kh * Sh);

    return Math.sqrt(lightness ** 2 + chroma ** 2 + hue ** 2 + Rt * chroma * hue);
}

export default { colorDistance, deltaC, deltaH, deltaE1976, deltaE1994, deltaE2000 };
