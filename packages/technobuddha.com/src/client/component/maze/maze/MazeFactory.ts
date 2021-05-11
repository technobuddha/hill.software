import type { Direction } from './directions';
import type { Cell, CellDirection } from './Maze';
import type { MazeGenerator } from '../generator/MazeGenerator';

type Location  = 'top left' | 'top middle' | 'top right' | 'bottom left' | 'bottom middle' | 'bottom right' | 'middle left' | 'middle right' | 'middle';

type CSpecification  = Cell | Location | 'random';
type CDSpecification = CellDirection | Location | 'random';

export type MazeSettings = {
    context?:               CanvasRenderingContext2D;
    width?:                 number;
    height?:                number;
    cellSize?:              number;
    cellColor?:             string;
    wallSize?:              number;
    wallColor?:             string;
    voidSize?:              number;
    voidColor?:             string;
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
    public cellSize:        number;
    public cellColor:       string;
    public wallSize:        number;
    public wallColor:       string;
    public voidSize:        number;
    public voidColor:       string;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public start:           Cell;

    constructor({
        context,
        random          = Math.random,
        selectNeighbor,
        width           = 30,
        height          = 30,
        cellSize        = 7,
        cellColor       = 'white',
        wallSize        = 1,
        wallColor       = 'black',
        voidSize        = 0,
        voidColor       = 'white',
        entrance        = 'top left',
        exit            = 'bottom right',
        start           = 'random',
    }: MazeSettings = {}) {
        this.context            = context;
        this.random             = random;
        this.selectNeighbor     = selectNeighbor
            ? (neighbors: CellDirection[]) => selectNeighbor(neighbors, this.random)
            : (neighbors: CellDirection[]) => neighbors[Math.floor(neighbors.length * this.random())];
        this.width              = width;
        this.height             = height;
        this.cellSize           = cellSize;
        this.cellColor          = cellColor;
        this.wallSize           = wallSize;
        this.wallColor          = wallColor;
        this.voidSize           = voidSize;
        this.voidColor          = voidColor;
        this.entrance           = this.parsePointDirection(entrance);
        this.exit               = this.parsePointDirection(exit);
        this.start              = this.parsePoint(start);
    }

    public async create(Generator: typeof MazeGenerator, speed = 0) {
        const mg = new Generator({
            context: this.context,
            random: this.random,
            selectNeighbor: this.selectNeighbor,
            width: this.width,
            height: this.height,
            cellSize: this.cellSize,
            cellColor: this.cellColor,
            wallSize: this.wallSize,
            wallColor: this.wallColor,
            voidSize: this.voidSize,
            voidColor: this.voidColor,
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
        if(x === this.width  - 1)    dir.push('E');
        if(y === this.height - 1)    dir.push('S');
        if(x === 0)                  dir.push('W');
        if(y === 0)                  dir.push('N');

        return { x, y, direction: direction && dir.includes(direction) ? direction : dir[Math.floor(this.random() * dir.length)] };
    }
}

export default MazeFactory;
