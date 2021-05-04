import type { Direction } from './directions';
import type { Cell, CellDirection } from './Maze';
import type { MazeGenerator } from './MazeGenerator';

type Location  = 'top left' | 'top middle' | 'top right' | 'bottom left' | 'bottom middle' | 'bottom right' | 'middle left' | 'middle right' | 'middle';

type CSpecification  = Cell | Location | 'random';
type CDSpecification = CellDirection | Location | 'random';

export type MazeSettings = {
    context?:               CanvasRenderingContext2D;
    width?:                 number;
    height?:                number;
    entrance?:              CDSpecification;
    exit?:                  CDSpecification;
    start?:                 CSpecification;
    seed?:                  number;
    random?:                () => number;
    selectNeighbor?:        (neighbors: CellDirection[], random: () => number) => CellDirection;
};

export class MazeFactory {
    public context:         CanvasRenderingContext2D | undefined;
    public random:          () => number;
    public selectNeighbor:  (neighbors: CellDirection[]) => CellDirection;
    public width:           number;
    public height:          number;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public start:           Cell;

    constructor({ context, random, selectNeighbor, width, height, entrance, exit, start }: MazeSettings) {
        this.context            = context;
        this.random             = random ?? Math.random;
        this.selectNeighbor     = selectNeighbor
            ? (neighbors: CellDirection[]) => selectNeighbor(neighbors, this.random)
            : (neighbors: CellDirection[]) => neighbors[Math.floor(neighbors.length * this.random())];
        this.width              = width  ?? 30;
        this.height             = height ?? 30;
        this.entrance           = this.parsePointDirection(entrance ?? 'top left');
        this.exit               = this.parsePointDirection(exit     ?? 'bottom right');
        this.start              = this.parsePoint(start ?? 'random');
    }

    public async create(Generator: typeof MazeGenerator, speed = 0) {
        const mg = new Generator({
            context: this.context,
            random: this.random,
            selectNeighbor: this.selectNeighbor,
            width: this.width,
            height: this.height,
            entrance: this.entrance,
            exit: this.exit,
            start: this.start,
        });

        return mg.generate(speed);
    }

    private parsePoint(p: CSpecification): Cell {
        let x: number;
        let y: number;

        if(p === 'top left') {
            x = 0;
            y = 0;
        } else if(p === 'top middle') {
            x = Math.floor(this.width / 2);
            y = 0;
        } else if(p === 'top right') {
            x = this.width  - 1;
            y = 0;
        } else if(p === 'middle right') {
            x = this.width  - 1;
            y = Math.floor(this.height / 2);
        } else if(p === 'bottom right') {
            x = this.width  - 1;
            y = this.height - 1;
        } else if(p === 'bottom middle') {
            x = Math.floor(this.width / 2);
            y = this.height - 1;
        } else if(p === 'bottom left') {
            x = 0;
            y = this.height - 1;
        } else if(p === 'middle left') {
            x = 0;
            y = Math.floor(this.height / 2);
        } else if(p === 'middle') {
            x = Math.floor(this.width / 2);
            y = Math.floor(this.height / 2);
        } else if(p === 'random') {
            x = Math.floor(this.random() * this.width);
            y = Math.floor(this.random() * this.height);
        } else {
            ({ x, y } = p);
        }

        if(x < 0)            x = 0;
        if(x >= this.width)  x = this.width - 1;
        if(y < 0)            y = 0;
        if(y >= this.height) y = this.height - 1;

        return { x, y };
    }

    private parsePointDirection(pd: CDSpecification): CellDirection {
        const { x, y }  = this.parsePoint(pd);
        const direction = typeof(pd) === 'string' ? undefined : pd.direction;

        const dir: Direction[] = [];
        if(x < this.width  - 1)      dir.push('W');
        if(y < this.height - 1)      dir.push('N');
        if(x > 0)                    dir.push('E');
        if(y > 0)                    dir.push('S');

        return { x, y, direction: direction && dir.includes(direction) ? direction : dir[Math.floor(this.random() * dir.length)] };
    }
}

export default MazeFactory;
