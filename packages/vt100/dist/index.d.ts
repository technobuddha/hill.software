export declare const esc = "\u001B";
export declare function out(text: string): void;
export declare function clearScreen(): void;
export declare function setScrollRegion(begin?: number, end?: number): void;
export declare function moveCursorTo(x: number, y: number): void;
export declare function screenSize(): {
    height: number;
    width: number;
};
export declare function header(): string;
declare const _default: {
    esc: string;
    out: typeof out;
    clearScreen: typeof clearScreen;
    setScrollRegion: typeof setScrollRegion;
    moveCursorTo: typeof moveCursorTo;
    screenSize: typeof screenSize;
    header: typeof header;
};
export default _default;
