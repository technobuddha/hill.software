import process from 'process';
import chalk from 'chalk';

export const esc  = '\u001b';

export function out(text: string) {
    process.stdout.write(text);
}

///
export function resetDevice() {
    out(`${esc}c`);
}

export function lineWrap(enabled = true) {
    out(`${esc}7${enabled ? 'h' : 'l'}`);
}


///

export function clearScreen() {
    out(process.platform === 'win32' ? `${esc}[2J${esc}[0f` : `${esc}[2J${esc}[3J${esc}[H`);
}

export function setScrollRegion(begin?: number, end?: number) {
    if(begin && end) 
        out(`${esc}[${begin};${end}r`);
    else
        out(`${esc}[r`);
}

export function moveCursorTo(x: number, y: number) {
    out(`${esc}[${y};${x}H`);
}

export function screenSize() {
    return {
        height: process.stdout.rows,
        width:  process.stdout.columns,
    }
}

chalk.level = 3;    // Tell chalk that we support full RGB colors
//#region Logo
//const HEADER_HEIGHT = 9;
export function header() {
    const logo = [
        chalk.hex('#d0f2fa')('▄██▄'),
        chalk.hex('#a3e1f6')('▄██████▄'),
        chalk.hex('#70c0e4')('▄██████████▄'),
        chalk.hex('#4b98ca')('▄██████████████▄'),
        chalk.hex('#1b5ca8')('▄██████████████████▄'),
        chalk.hex('#135490')('▄██████████████████████▄'),
        chalk.hex('#0d3f78')('▄██████████████████████████▄'),
        chalk.hex('#082c61')('▄██████████████████████████████▄'),
        chalk.hex('#051f50')('▄██████████████████████████████████▄'),
    ]

    const name = [
        '',
        '',
        'H     H  IIIII  L      L           SSSSS    OOOO   FFFFFF  TTTTT  W     W    AA    RRRRR   EEEEEE',
        'H     H    I    L      L          S        O    O  F         T    W     W   A  A   R    R  E     ',
        'H     H    I    L      L          S        O    O  F         T    W  W  w  A    A  R    R  E     ',
        'HHHHHHH    I    L      L           SSSSS   O    O  FFF       T    W  W  W  AAAAAA  RRRRR   EEE   ',
        'H     H    I    L      L                S  O    O  F         T    W W W W  A    A  R R     E     ',
        'H     H    I    L      L      ..        S  O    O  F         T    W W W W  A    A  R   R   E     ',
        'H     H  IIIII  LLLLL  LLLLL  ..   SSSSS    OOOO   F         T     W   W   A    A  R    R  EEEEEE',
    ]


    let output = "";
    for(let i = 0; i < logo.length; ++i) {
        for(let j = 8; j > i; --j) {
            output += '  '
        }
        output += logo[i];
        for(let j = 8; j > i; --j) {
            output += '  '
        }
        output += '   ' + name[i] + '\n';
    }
    return output;
}
//#endregion


export default { esc, out, clearScreen, setScrollRegion, moveCursorTo, screenSize, header };

