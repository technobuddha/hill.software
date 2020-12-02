"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = exports.screenSize = exports.moveCursorTo = exports.setScrollRegion = exports.clearScreen = exports.out = exports.esc = void 0;
const process_1 = __importDefault(require("process"));
const chalk_1 = __importDefault(require("chalk"));
exports.esc = '\u001b';
function out(text) {
    process_1.default.stdout.write(text);
}
exports.out = out;
function clearScreen() {
    out(process_1.default.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
}
exports.clearScreen = clearScreen;
function setScrollRegion(begin, end) {
    if (begin && end)
        out(`${exports.esc}[${begin};${end}r`);
    else
        out(`${exports.esc}[r`);
}
exports.setScrollRegion = setScrollRegion;
function moveCursorTo(x, y) {
    out(`${exports.esc}[${y};${x}H`);
}
exports.moveCursorTo = moveCursorTo;
function screenSize() {
    return {
        height: process_1.default.stdout.rows,
        width: process_1.default.stdout.columns,
    };
}
exports.screenSize = screenSize;
chalk_1.default.level = 3; // Tell chalk that we support full RGB colors
//#region Logo
//const HEADER_HEIGHT = 9;
function header() {
    const logo = [
        chalk_1.default.hex('#d0f2fa')('▄██▄'),
        chalk_1.default.hex('#a3e1f6')('▄██████▄'),
        chalk_1.default.hex('#70c0e4')('▄██████████▄'),
        chalk_1.default.hex('#4b98ca')('▄██████████████▄'),
        chalk_1.default.hex('#1b5ca8')('▄██████████████████▄'),
        chalk_1.default.hex('#135490')('▄██████████████████████▄'),
        chalk_1.default.hex('#0d3f78')('▄██████████████████████████▄'),
        chalk_1.default.hex('#082c61')('▄██████████████████████████████▄'),
        chalk_1.default.hex('#051f50')('▄██████████████████████████████████▄'),
    ];
    const name = [
        '',
        '',
        'H     H  IIIIIII  L        L             SSSSS    OOOOO   FFFFFFF  TTTTTTT  W     W    AAA    RRRRRR   EEEEEEE',
        'H     H     I     L        L            S        O     O  F           T     W     W   A   A   R     R  E      ',
        'H     H     I     L        L            S        O     O  F           T     W  W  w  A     A  R     R  E      ',
        'HHHHHHH     I     L        L             SSSSS   O     O  FFFF        T     W  W  W  AAAAAAA  RRRRRR   EEEE   ',
        'H     H     I     L        L                  S  O     O  F           T     W W W W  A     A  R  R     E      ',
        'H     H     I     L        L        ..        S  O     O  F           T     W W W W  A     A  R    R   E      ',
        'H     H  IIIIIII  LLLLLLL  LLLLLLL  ..   SSSSS,   OOOOO   F           T      W   W   A     A  R    R   EEEEEEE',
    ];
    let output = "";
    for (let i = 0; i < logo.length; ++i) {
        for (let j = 8; j > i; --j) {
            output += '  ';
        }
        output += logo[i];
        for (let j = 8; j > i; --j) {
            output += '  ';
        }
        output += '   ' + name[i] + '\n';
    }
    return output;
}
exports.header = header;
//#endregion
exports.default = { esc: exports.esc, out, clearScreen, setScrollRegion, moveCursorTo, screenSize, header };
