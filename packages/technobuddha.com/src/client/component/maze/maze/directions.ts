export type Direction = 'N' | 'S' | 'E' | 'W';
export type Corner = 'NE' | 'SE' | 'NW' | 'SW';

export const deltaX: Record<Direction, number> = {
    N:   0,
    E:   1,
    W:  -1,
    S:   0,
};

export const deltaY: Record<Direction, number> = {
    N:  -1,
    E:   0,
    W:   0,
    S:   1,
};

export const opposite: Record<Direction, Direction> = {
    N:  'S',
    E:  'W',
    W:  'E',
    S:  'N',
};

export const directions: Direction[] = [ 'N', 'E', 'W', 'S' ];
