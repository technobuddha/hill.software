import process from 'process';

export const esc  = '\u001b';

export function out(text: string) {
    process.stdout.write(text);
}

export function clearScreen() {
    out(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
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

export default { esc, out, clearScreen, setScrollRegion, moveCursorTo, screenSize };

