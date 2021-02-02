import expect from '../util/expect';
import escapeJS   from '../src/escapeJS';
import { space }  from '../src/constants';

describe(
    'escapeJS',
    () => {
        it(
            'should escape standard sequences',
            () => {
                expect(escapeJS('\b\f\n\r\t\v\\\'"')).toBe('\\b\\f\\n\\r\\t\\v\\\\\\\'\\"');
            }
        );

        it(
            'should escape nul as \\0, unless followed by an octal digit',
            () => {
                expect(escapeJS('\0')).toBe('\\0');
                expect(escapeJS('\0X')).toBe('\\0X');
                expect(escapeJS('\x000')).toBe('\\x000');
            }
        );

        it(
            'should not escape most ascii',
            () => {
                expect(escapeJS(space)).toBe(space);
                expect(escapeJS('ABCdef[~]')).toBe('ABCdef[~]');
            }
        );

        it(
            'should escape non printables as \\xnn unless followed by a hex digit',
            () => {
                expect(escapeJS('\x01')).toBe('\\x01');
                expect(escapeJS('\x01X')).toBe('\\x01X');
                expect(escapeJS('\x010')).toBe('\\u00010');
                expect(escapeJS('\x1f')).toBe('\\x1f');
                expect(escapeJS('\x1fX')).toBe('\\x1fX');
                expect(escapeJS('\x1f0')).toBe('\\u001f0');
                expect(escapeJS('\x7f')).toBe('\\x7f');
                expect(escapeJS('\x7fX')).toBe('\\x7fX');
                expect(escapeJS('\x7f0')).toBe('\\u007f0');
                expect(escapeJS('\xa0')).toBe('\\xa0');
                expect(escapeJS('\xa0X')).toBe('\\xa0X');
                expect(escapeJS('\xa00')).toBe('\\u00a00');
            }
        );

        it(
            'should mot escape latin-1 characters',
            () => {
                expect(escapeJS('¡¢£ýþÿ')).toBe('¡¢£ýþÿ');
            }
        );

        it(
            'should unicode escape BMP characters',
            () => {
                expect(escapeJS('ΑΒΓΔΕΖ')).toBe('\\u0391\\u0392\\u0393\\u0394\\u0395\\u0396');
            }
        );

        it(
            'should encode astral characters',
            () => {
                expect(escapeJS('😀😁😂😺😸😹')).toBe('\\u{1f600}\\u{1f601}\\u{1f602}\\u{1f63a}\\u{1f638}\\u{1f639}');
            }
        );
    }
);
