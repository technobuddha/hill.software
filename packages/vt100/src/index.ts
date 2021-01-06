import process from 'process';
import chalk from 'chalk';

export const esc  = '\u001b';

const index     = `${esc}D`;    const IND = '\x84';
const next_line = `${esc}E`;    const NEL = '\x85';
const tab_set   = `${esc}H`;    const HTS = '\x88';


const BEL   = '\x07';
const BS    = '\x08';
const HT    = '\x09';
const LF    = '\x0A';
const VT    = '\x0B';
const FF    = '\x0C';
const CR    = '\x0D';
const SO    = '\x0E';
const SI    = '\x0F';
const CAN   = '\x18';
const SUB   = '\x1A';
const ESC   = '\x1B';
const DEL   = '\x7F';
const CSI   = `${ESC}[`;

export function reset() {
    return `${ESC}c';`;
}

export function line_feed() {
    return `${ESC}D`;
}

export function new_line() {
    return `${ESC}E`;
}

export function set_tabstop() {
    return `${ESC}H`;
}

export function reverse_line_feed() {
    return `${ESC}M`;
}

//ESCZ DECID returns the ID

export function save_state() {
    return `${ESC}7`;
}

export function restore_state() {
    return `${ESC}8`;
}

export function default_mapping() {
    return `${ESC}(B`;
}

export function graphics_mapping() {
    return `${ESC}(0`;
}

//ESC(U null mapping
//ESC(K user mapping

//ESC) G1 mapping

export function insert_blanks(n: number) {
    return `${CSI}${n}@`;
}

export function cursor_up(n: number = 1) {
    return `${CSI}${n}A`;
}

export function cursor_down(n: number = 1) {
    return `${CSI}${n}B`;
}

export function cursor_right(n: number = 1) {
    return `${CSI}${n}C`;
}

export function cursor_left(n: number = 1) {
    return `${CSI}${n}D`;
}

export function cursor_down_col1(n: number = 1) {
    return `${CSI}${n}E`;
}

export function cursor_up_col1(n: number = 1) {
    return `${CSI}${n}F`;
}

export function row(n: number) {
    return `${CSI}${n}G`;
}

export function rc(r: number, c: number) {
    return `${CSI}${r};${c}H`;
}

export function erase_to_end() {
    return `${CSI}J`;
}

export function erase_from_start() {
    return `${CSI}1J`;
}

export function erase_screen() {
    return `${CSI}2J`;
}

export function erase_scrollback() {
    return `${CSI}3J`;
}

export function erase_to_end_of_line() {
    return `${CSI}K`;
}

export function erase_to_start_of_line() {
    return `${CSI}1K`;
}

export function erase_line() {
    return `${CSI}2K`;
}

export function insert_lines(n: number = 1) {
    return `${CSI}${n}L`;
}

export function delete_lines(n: number = 1) {
    return `${CSI}${n}M`;
}

export function delete_characters(n: number = 1) {
    return `${CSI}${n}P`;
}

export function erase_characters(n: number = 1) {
    return `${CSI}${n}X`;
}

export function 

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

