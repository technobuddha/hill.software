import type { Cell, CellDirection } from '../maze/Maze';

type Location  = 'top left' | 'top middle' | 'top right' |
'bottom left' | 'bottom middle' | 'bottom right' |
'middle left' | 'middle' | 'middle right' |
'random';

export type CSpecification  = Cell | Location;
export type CDSpecification = CellDirection | Cell | Location;

export function parsePoint(p: CSpecification, width: number, height: number): Cell {
    let x: number;
    let y: number;

    if(p === 'top left') {
        x = 0;
        y = 0;
    } else if(p === 'top middle') {
        x = Math.floor(width / 2);
        y = 0;
    } else if(p === 'top right') {
        x = width  - 1;
        y = 0;
    } else if(p === 'middle right') {
        x = width  - 1;
        y = Math.floor(height / 2);
    } else if(p === 'bottom right') {
        x = width  - 1;
        y = height - 1;
    } else if(p === 'bottom middle') {
        x = Math.floor(width / 2);
        y = height - 1;
    } else if(p === 'bottom left') {
        x = 0;
        y = height - 1;
    } else if(p === 'middle left') {
        x = 0;
        y = Math.floor(height / 2);
    } else if(p === 'middle') {
        x = Math.floor(width / 2);
        y = Math.floor(height / 2);
    } else if(p === 'random') {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
    } else {
        ({ x, y } = p);
    }

    if(x < 0)       x = 0;
    if(x >= width)  x = width - 1;
    if(y < 0)       y = 0;
    if(y >= height) y = height - 1;

    return { x, y };
}

export function parsePointDirection(pd: CDSpecification, width: number, height: number): Cell | CellDirection {
    const { x, y }  = parsePoint(pd, width, height);

    if(typeof(pd) !== 'string' && 'direction' in pd)
        return { x, y, direction: pd.direction };

    return { x, y };
}
